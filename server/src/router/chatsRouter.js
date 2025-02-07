const { Router } = require('express');
const chatController = require('../controllers/chatController');
const checkToken = require('../middlewares/checkToken');

const chatsRouter = Router();

chatsRouter.post(
  '/newMessage',
  checkToken.checkToken,
  chatController.addMessage
);

chatsRouter.get('/getChat', checkToken.checkToken, chatController.getChat);

chatsRouter.get(
  '/getPreview',
  checkToken.checkToken,
  chatController.getPreview
);

chatsRouter.post('/blackList', checkToken.checkToken, chatController.blackList);

chatsRouter.post(
  '/favorite',
  checkToken.checkToken,
  chatController.favoriteChat
);

chatsRouter.post(
  '/createCatalog',
  checkToken.checkToken,
  chatController.createCatalog
);

chatsRouter.patch(
  '/updateNameCatalog',
  checkToken.checkToken,
  chatController.updateNameCatalog
);

chatsRouter.post(
  '/addNewChatToCatalog',
  checkToken.checkToken,
  chatController.addNewChatToCatalog
);

chatsRouter.delete(
  '/removeChatFromCatalog',
  checkToken.checkToken,
  chatController.removeChatFromCatalog
);

chatsRouter.delete(
  '/deleteCatalog',
  checkToken.checkToken,
  chatController.deleteCatalog
);

chatsRouter.get(
  '/getCatalogs',
  checkToken.checkToken,
  chatController.getCatalogs
);

module.exports = chatsRouter;
