var express = require('express');
var projectController = require('./../controllers/projects.controller');
var taskController = require('./../controllers/tasks.controller');

projectManagerRouter = express.Router();

projectManagerRouter.get(/^\/projects\/([0-9_]+)$/, projectController.getProject);
projectManagerRouter.put(/^\/projects\/([0-9_]+)$/, projectController.updateProject);
projectManagerRouter.delete(/^\/projects\/([0-9_]+)$/, projectController.deleteProject);
projectManagerRouter.get('/projects/', projectController.getAllProjects);
projectManagerRouter.post('/projects/', projectController.createProject);

projectManagerRouter.get(/^\/tasks\/([0-9_]+)$/, taskController.getTask);
projectManagerRouter.put(/^\/tasks\/([0-9_]+)$/, taskController.updateTask);
projectManagerRouter.delete(/^\/tasks\/([0-9_]+)$/, taskController.deleteTask);
projectManagerRouter.get('/tasks/', taskController.getAllTasks);
projectManagerRouter.post('/tasks/', taskController.createTask);

module.exports = projectManagerRouter;
