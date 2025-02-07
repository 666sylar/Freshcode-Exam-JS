const { Router } = require('express');
const usersRouter = require('./usersRouter');
const contestsRouter = require('./contestsRouter');
const offersRouter = require('./offersRouter');
const chatsRouter = require('./chatsRouter');

const router = Router();

router.use('/users', usersRouter);
router.use('/contests', contestsRouter);
router.use('/offers', offersRouter);
router.use('/chats', chatsRouter);

module.exports = router;
