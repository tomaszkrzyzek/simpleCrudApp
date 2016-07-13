var express = require('express');
var controllers = require('./../controllers/node.controllers');
todoRouter = express.Router();

todoRouter.get(/^\/project\/([0-9_]+)$/, controllers.getNode);
todoRouter.put(/^\/project\/([0-9_]+)$/, controllers.updateNode);
todoRouter.delete(/^\/project\/([0-9_]+)$/, controllers.deleteNode);
todoRouter.get('/project/', controllers.getAllNodes);
todoRouter.post('/project/', controllers.createNode);

module.exports = todoRouter;
