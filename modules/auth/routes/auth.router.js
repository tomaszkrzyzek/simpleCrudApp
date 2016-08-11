var express = require('express');
var AuthController = require('../controllers/auth.controller');

var authRouter = new express.Router();

authRouter.post('/login', AuthController.login);
authRouter.get('/user', AuthController.getUser);
authRouter.get('/logout', AuthController.logout);


module.exports = authRouter;
