const { Router } = require('express');
const upload = require('../utils/fileUpload');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const contestController = require('../controllers/contestController');
const checkToken = require('../middlewares/checkToken');

const offersRouter = Router();

offersRouter.post(
  '/setNewOffer',
  checkToken.checkToken,
  upload.single('offerData'),
  basicMiddlewares.canSendOffer,
  contestController.setNewOffer
);

offersRouter.post(
  '/setOfferStatus',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomerWhoCreateContest,
  contestController.setOfferStatus
);

module.exports = offersRouter;
