var express = require('express');
var service = require('./../services/projects.service');

function deleteProject(req, res, next) {
 var id = req.params[0];
 service.deleteProject(id).then(function(data){
  res.send(data[0]);
  });
}

function getProject (req, res, next) {
 var id = req.params[0];
 service.getProject(id).then(function(data){
  res.send(data[0]);
 });
}

function getAllProject(req, res, next) {
 service.getAllProject().then(function(data){
  res.send(data);
 });
}

function createProject(req, res, next) {
 service.createProject(req.body.name, req.body.identifier, req.body.description).then(function(data){
  res.send(data[0]);
 });
}

function updateProject(req, res, next) {
  var id = req.params[0];
  service.updateProject(id, req.body.name, req.body.identifier, req.body.description).then(function(data){
  res.send(data[0]);
 });
}

module.exports = {
  getProject: getProject,
  updateProject: updateProject,
  createProject: createProject,
  deleteProject: deleteProject,
  getAllProject: getAllProject
};
