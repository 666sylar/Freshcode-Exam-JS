const { Router } = require('express');
const validators = require('../middlewares/validators');
const hashPass = require('../middlewares/hashPassMiddle');
const userController = require('../controllers/userController');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const upload = require('../utils/fileUpload');
const checkToken = require('../middlewares/checkToken');

const usersRouter = Router();

usersRouter.get('/getUser', checkToken.checkAuth);

usersRouter.post(
  '/registration',
  validators.validateRegistrationData,
  hashPass,
  userController.registration
);

usersRouter.post('/login', validators.validateLogin, userController.login);

usersRouter.patch(
  '/updateUser',
  checkToken.checkToken,
  upload.single('file'),
  userController.updateUser
);

usersRouter.post(
  '/pay',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomer,
  upload.array('files', 3),
  basicMiddlewares.parseBody,
  validators.validateContestCreation,
  userController.payment
);

usersRouter.post(
  '/cashout',
  checkToken.checkToken,
  basicMiddlewares.onlyForCreative,
  userController.cashout
);

usersRouter.post(
  '/changeMark',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomer,
  userController.changeMark
);

module.exports = usersRouter;
