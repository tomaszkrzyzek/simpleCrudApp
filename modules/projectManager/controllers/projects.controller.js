var express = require('express');
var service = require('./../services/projects.service');

function deleteProject(req, res, next) {
 var id = req.params.id;
 service.deleteProject(id).then(function(data){
  res.send(data[0]);
  });
}

function getProject (req, res, next) {
 var id = req.params.id;
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
  var id = req.params.id;
  service.updateProject(id, req.body.name, req.body.identifier, req.body.description).then(function(data){
  res.send(data[0]);
 });
}

function getProjectPage(req, res, next) {
  var fromItem = req.query.from;
  var toItem = req.query.to;
  service.getProjectPage(fromItem, toItem).then(function(data){
  res.send(data);
 });
}

module.exports = {
  getProjectPage: getProjectPage,
  getProject: getProject,
  updateProject: updateProject,
  createProject: createProject,
  deleteProject: deleteProject,
  getAllProject: getAllProject
};
