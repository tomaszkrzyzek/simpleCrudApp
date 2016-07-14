var express = require('express');
var controllers = require('./../controllers/projects.controllers');
projectManagerRouter = express.Router();

projectManagerRouter.get(/^\/project\/([0-9_]+)$/, controllers.getProject);
projectManagerRouter.put(/^\/project\/([0-9_]+)$/, controllers.updateProject);
projectManagerRouter.delete(/^\/project\/([0-9_]+)$/, controllers.deleteProject);
projectManagerRouter.get('/project/', controllers.getAllProjects);
projectManagerRouter.post('/project/', controllers.createProject);

module.exports = projectManagerRouter;
