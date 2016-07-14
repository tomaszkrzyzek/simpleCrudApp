var express = require('express');
var projectsService = require('./../services/projects.service');

module.exports = {
  getProject: getProject,
  updateProject: updateProject,
  createProject: createProject,
  deleteProject: deleteProject,
  getAllProjects: getAllProjects
};

function deleteProject(req, res, next) {
 var id = req.params[0];
 projectsService.deleteProject(id).then(function(data){
  res.send(data[0]);
  });
}

function getProject (req, res, next) {
 var id = req.params[0];
 projectsService.getProject(id).then(function(data){
  res.send(data[0]);
 });
}

function getAllProjects(req, res, next) {
 projectsService.getAllProjects().then(function(data){
  res.send(data);
 });
}

function createProject(req, res, next) {
 projectsService.createProject(req.body.name, req.body.identifier, req.body.description).then(function(data){
  res.send(data[0]);
 });
}

function updateProject(req, res, next) {
  var id = req.params[0];
  projectsService.updateProject(id, req.body.name, req.body.identifier, req.body.description).then(function(data){
  res.send(data[0]);
 });
}
