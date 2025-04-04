const db = require('../models');
const RightsError = require('../errors/RightsError');
const ServerError = require('../errors/ServerError');
const CONSTANTS = require('../constants');

module.exports.parseBody = (req, res, next) => {
  try {
    if (!req.body.contests) {
      return next(new ServerError('Contests data is missing'));
    }

    const contests = JSON.parse(req.body.contests);

    if (!Array.isArray(contests)) {
      return next(new ServerError('Invalid contests format'));
    }

    const files = req.files || [];

    contests.forEach(contest => {
      if (contest.haveFile && files.length > 0) {
        const file = files.shift();
        contest.fileName = file.filename;
        contest.originalFileName = file.originalname;
      }
    });

    req.body.contests = contests;
    next();
  } catch (err) {
    next(new ServerError(err));
  }
};

module.exports.canGetContest = async (req, res, next) => {
  const {
    params: { contestId },
  } = req;
  let result = null;
  try {
    if (req.tokenData.role === CONSTANTS.ROLES.CUSTOMER) {
      result = await db.Contest.findOne({
        where: { id: contestId, userId: req.tokenData.userId },
      });
    } else if (req.tokenData.role === CONSTANTS.ROLES.CREATOR) {
      result = await db.Contest.findOne({
        where: {
          id: contestId,
          status: {
            [db.Sequelize.Op.or]: [
              CONSTANTS.CONTEST_STATUS_ACTIVE,
              CONSTANTS.CONTEST_STATUS_FINISHED,
            ],
          },
        },
      });
    }
    result ? next() : next(new RightsError());
  } catch (e) {
    next(new ServerError(e));
  }
};

module.exports.onlyForCreative = (req, res, next) => {
  if (req.tokenData.role === CONSTANTS.ROLES.CUSTOMER) {
    next(new RightsError());
  } else {
    next();
  }
};

module.exports.onlyForCustomer = (req, res, next) => {
  if (req.tokenData.role === CONSTANTS.ROLES.CREATOR) {
    return next(new RightsError('this page only for customers'));
  } else {
    next();
  }
};

module.exports.canSendOffer = async (req, res, next) => {
  if (req.tokenData.role === CONSTANTS.ROLES.CUSTOMER) {
    return next(new RightsError());
  }
  try {
    const result = await db.Contest.findOne({
      where: {
        id: req.body.contestId,
      },
      attributes: ['status'],
    });
    if (
      result.get({ plain: true }).status === CONSTANTS.CONTEST_STATUS_ACTIVE
    ) {
      next();
    } else {
      return next(new RightsError());
    }
  } catch (e) {
    next(new ServerError());
  }
};

module.exports.onlyForCustomerWhoCreateContest = async (req, res, next) => {
  try {
    const result = await db.Contest.findOne({
      where: {
        userId: req.tokenData.userId,
        id: req.body.contestId,
        status: CONSTANTS.CONTEST_STATUS_ACTIVE,
      },
    });
    if (!result) {
      return next(new RightsError());
    }
    next();
  } catch (e) {
    next(new ServerError());
  }
};

module.exports.canUpdateContest = async (req, res, next) => {
  try {
    const result = db.Contest.findOne({
      where: {
        userId: req.tokenData.userId,
        id: req.body.contestId,
        status: { [db.Sequelize.Op.not]: CONSTANTS.CONTEST_STATUS_FINISHED },
      },
    });
    if (!result) {
      return next(new RightsError());
    }
    next();
  } catch (e) {
    next(new ServerError());
  }
};
