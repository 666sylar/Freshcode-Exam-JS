const { Router } = require('express');
const contestController = require('../controllers/contestController');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const upload = require('../utils/fileUpload');
const checkToken = require('../middlewares/checkToken');

const contestsRouter = Router();

contestsRouter.post(
  '/updateContest',
  checkToken.checkToken,
  upload.single('file'),
  contestController.updateContest
);

contestsRouter.get(
  '/dataForContest',
  checkToken.checkToken,
  contestController.dataForContest
);

contestsRouter.get(
  '/getAllContests',
  checkToken.checkToken,
  basicMiddlewares.onlyForCreative,
  contestController.getContests
);

contestsRouter.get(
  '/getContestById/:contestId',
  checkToken.checkToken,
  basicMiddlewares.canGetContest,
  contestController.getContestById
);

contestsRouter.get(
  '/getCustomersContests',
  checkToken.checkToken,
  contestController.getCustomersContests
);

contestsRouter.get(
  '/downloadFile/:fileName',
  checkToken.checkToken,
  contestController.downloadFile
);

module.exports = contestsRouter;
