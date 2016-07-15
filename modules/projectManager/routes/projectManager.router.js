var express = require('express');
var projectController = require('./../controllers/projects.controller');
var taskController = require('./../controllers/tasks.controller');
var userController = require('./../controllers/users.controller');
var featureController = require('./../controllers/features.controller');

projectManagerRouter = express.Router();

// projectManagerRouter.get(/^\/xxx\/([0-9_]+)$/, yyy.getzzz);
// projectManagerRouter.put(/^\/xxx\/([0-9_]+)$/, yyy.updatezzz);
// projectManagerRouter.delete(/^\/xxx\/([0-9_]+)$/, yyy.deletezzz);
// projectManagerRouter.get('/xxx/', yyy.getAllzzzs);
// projectManagerRouter.post('/xxx/', yyy.createzzz);

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

projectManagerRouter.get(/^\/users\/([0-9_]+)$/, userController.getUser);
projectManagerRouter.put(/^\/users\/([0-9_]+)$/, userController.updateUser);
projectManagerRouter.delete(/^\/users\/([0-9_]+)$/, userController.deleteUser);
projectManagerRouter.get('/users/', userController.getAllUsers);
projectManagerRouter.post('/users/', userController.createUser);

projectManagerRouter.get(/^\/features\/([0-9_]+)$/, featureController.getFeature);
projectManagerRouter.put(/^\/features\/([0-9_]+)$/, featureController.updateFeature);
projectManagerRouter.delete(/^\/features\/([0-9_]+)$/, featureController.deleteFeature);
projectManagerRouter.get('/features/', featureController.getAllFeatures);
projectManagerRouter.post('/features/', featureController.createFeature);

module.exports = projectManagerRouter;
