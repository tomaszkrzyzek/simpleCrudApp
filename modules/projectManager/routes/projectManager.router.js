var express = require('express');

var featureCategoriesController = require('./../controllers/featureCategories.controller');
var featurePrioritiesController = require('./../controllers/featurePriorities.controller');
var featuresController = require('./../controllers/features.controller');
var featureStatusesController = require('./../controllers/featureStatuses.controller');
var membersController = require('./../controllers/members.controller');
var projectsController = require('./../controllers/projects.controller');
var taskCategoriesController = require('./../controllers/taskCategories.controller');
var taskPrioritiesController = require('./../controllers/taskPriorities.controller');
var tasksController = require('./../controllers/tasks.controller');
var taskStatusesController = require('./../controllers/taskStatuses.controller');
var taskTrackersController = require('./../controllers/taskTrackers.controller');
var usersController = require('./../controllers/users.controller');
var workLogsController = require('./../controllers/workLogs.controller');

projectManagerRouter = express.Router();

projectManagerRouter.get(/^\/featurecategories\/([0-9_]+)$/, featureCategoriesController.getFeatureCategory);
projectManagerRouter.put(/^\/featurecategories\/([0-9_]+)$/, featureCategoriesController.updateFeatureCategory);
projectManagerRouter.delete(/^\/featurecategories\/([0-9_]+)$/, featureCategoriesController.deleteFeatureCategory);
projectManagerRouter.get('/featurecategories/', featureCategoriesController.getAllFeatureCategory);
projectManagerRouter.post('/featurecategories/', featureCategoriesController.createFeatureCategory);

projectManagerRouter.get(/^\/featurepriorities\/([0-9_]+)$/, featurePrioritiesController.getFeaturePriority);
projectManagerRouter.put(/^\/featurepriorities\/([0-9_]+)$/, featurePrioritiesController.updateFeaturePriority);
projectManagerRouter.delete(/^\/featurepriorities\/([0-9_]+)$/, featurePrioritiesController.deleteFeaturePriority);
projectManagerRouter.get('/featurepriorities/', featurePrioritiesController.getAllFeaturePriority);
projectManagerRouter.post('/featurepriorities/', featurePrioritiesController.createFeaturePriority);

projectManagerRouter.get(/^\/features\/([0-9_]+)$/, featuresController.getFeature);
projectManagerRouter.put(/^\/features\/([0-9_]+)$/, featuresController.updateFeature);
projectManagerRouter.delete(/^\/features\/([0-9_]+)$/, featuresController.deleteFeature);
projectManagerRouter.get('/features/', featuresController.getAllFeature);
projectManagerRouter.post('/features/', featuresController.createFeature);

projectManagerRouter.get(/^\/featurestatuses\/([0-9_]+)$/, featureStatusesController.getFeatureStatus);
projectManagerRouter.put(/^\/featurestatuses\/([0-9_]+)$/, featureStatusesController.updateFeatureStatus);
projectManagerRouter.delete(/^\/featurestatuses\/([0-9_]+)$/, featureStatusesController.deleteFeatureStatus);
projectManagerRouter.get('/featurestatuses/', featureStatusesController.getAllFeatureStatus);
projectManagerRouter.post('/featurestatuses/', featureStatusesController.createFeatureStatus);

projectManagerRouter.get(/^\/members\/([0-9_]+)$/, membersController.getMember);
projectManagerRouter.put(/^\/members\/([0-9_]+)$/, membersController.updateMember);
projectManagerRouter.delete(/^\/members\/([0-9_]+)$/, membersController.deleteMember);
projectManagerRouter.get('/members/', membersController.getAllMember);
projectManagerRouter.post('/members/', membersController.createMember);

projectManagerRouter.get(/^\/projects\/([0-9_]+)$/, projectsController.getProject);
projectManagerRouter.put(/^\/projects\/([0-9_]+)$/, projectsController.updateProject);
projectManagerRouter.delete(/^\/projects\/([0-9_]+)$/, projectsController.deleteProject);
projectManagerRouter.get('/projects/', projectsController.getAllProject);
projectManagerRouter.post('/projects/', projectsController.createProject);

projectManagerRouter.get(/^\/taskcategories\/([0-9_]+)$/, taskCategoriesController.getTaskCategory);
projectManagerRouter.put(/^\/taskcategories\/([0-9_]+)$/, taskCategoriesController.updateTaskCategory);
projectManagerRouter.delete(/^\/taskcategories\/([0-9_]+)$/, taskCategoriesController.deleteTaskCategory);
projectManagerRouter.get('/taskcategories/', taskCategoriesController.getAllTaskCategory);
projectManagerRouter.post('/taskcategories/', taskCategoriesController.createTaskCategory);

projectManagerRouter.get(/^\/taskpriorities\/([0-9_]+)$/, taskPrioritiesController.getTaskPriority);
projectManagerRouter.put(/^\/taskpriorities\/([0-9_]+)$/, taskPrioritiesController.updateTaskPriority);
projectManagerRouter.delete(/^\/taskpriorities\/([0-9_]+)$/, taskPrioritiesController.deleteTaskPriority);
projectManagerRouter.get('/taskpriorities/', taskPrioritiesController.getAllTaskPriority);
projectManagerRouter.post('/taskpriorities/', taskPrioritiesController.createTaskPriority);

projectManagerRouter.get(/^\/tasks\/([0-9_]+)$/, tasksController.getTask);
projectManagerRouter.put(/^\/tasks\/([0-9_]+)$/, tasksController.updateTask);
projectManagerRouter.delete(/^\/tasks\/([0-9_]+)$/, tasksController.deleteTask);
projectManagerRouter.get('/tasks/', tasksController.getAllTask);
projectManagerRouter.post('/tasks/', tasksController.createTask);

projectManagerRouter.get(/^\/taskstatuses\/([0-9_]+)$/, taskStatusesController.getTaskStatus);
projectManagerRouter.put(/^\/taskstatuses\/([0-9_]+)$/, taskStatusesController.updateTaskStatus);
projectManagerRouter.delete(/^\/taskstatuses\/([0-9_]+)$/, taskStatusesController.deleteTaskStatus);
projectManagerRouter.get('/taskstatuses/', taskStatusesController.getAllTaskStatus);
projectManagerRouter.post('/taskstatuses/', taskStatusesController.createTaskStatus);

projectManagerRouter.get(/^\/tasktrackers\/([0-9_]+)$/, taskTrackersController.getTaskTracker);
projectManagerRouter.put(/^\/tasktrackers\/([0-9_]+)$/, taskTrackersController.updateTaskTracker);
projectManagerRouter.delete(/^\/tasktrackers\/([0-9_]+)$/, taskTrackersController.deleteTaskTracker);
projectManagerRouter.get('/tasktrackers/', taskTrackersController.getAllTaskTracker);
projectManagerRouter.post('/tasktrackers/', taskTrackersController.createTaskTracker);

projectManagerRouter.get(/^\/users\/([0-9_]+)$/, usersController.getUser);
projectManagerRouter.put(/^\/users\/([0-9_]+)$/, usersController.updateUser);
projectManagerRouter.delete(/^\/users\/([0-9_]+)$/, usersController.deleteUser);
projectManagerRouter.get('/users/', usersController.getAllUser);
projectManagerRouter.post('/users/', usersController.createUser);

projectManagerRouter.get(/^\/worklogs\/([0-9_]+)$/, workLogsController.getWorkLog);
projectManagerRouter.put(/^\/worklogs\/([0-9_]+)$/, workLogsController.updateWorkLog);
projectManagerRouter.delete(/^\/worklogs\/([0-9_]+)$/, workLogsController.deleteWorkLog);
projectManagerRouter.get('/worklogs/', workLogsController.getAllWorkLog);
projectManagerRouter.post('/worklogs/', workLogsController.createWorkLog);

module.exports = projectManagerRouter;
