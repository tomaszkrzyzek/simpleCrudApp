var express = require('express');
var projectController = require('./../controllers/projects.controller');
var taskController = require('./../controllers/tasks.controller');
var userController = require('./../controllers/users.controller');

projectManagerRouter = express.Router();

// projectManagerRouter.get(/^\/xxx\/([0-9_]+)$/, yyy.getzzz);
// projectManagerRouter.put(/^\/xxx\/([0-9_]+)$/, yyy.updatezzz);
// projectManagerRouter.delete(/^\/xxx\/([0-9_]+)$/, delete.zzz);
// projectManagerRouter.get('/xxx/', getAll.zzz);
// projectManagerRouter.post('/xxx/', create.zzz);

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

module.exports = projectManagerRouter;
