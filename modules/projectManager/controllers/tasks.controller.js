var express = require('express');
var service = require('./../services/tasks.service');

function deleteTask(req, res, next) {
 var id = req.params[0];
 service.deleteTask(id).then(function(data){
  res.send(data[0]);
  });
}

function getTask (req, res, next) {
 var id = req.params[0];
 service.getTask(id).then(function(data){
  res.send(data[0]);
 });
}

function getAllTask(req, res, next) {
 service.getAllTask().then(function(data){
  res.send(data);
 });
}

function createTask(req, res, next) {
 service.createTask(req.body.name, req.body.identifier, req.body.description).then(function(data){
  res.send(data[0]);
 });
}

function updateTask(req, res, next) {
  var id = req.params[0];
  service.updateTask(id, req.body.name, req.body.identifier, req.body.description).then(function(data){
  res.send(data[0]);
 });
}

module.exports = {
  getTask: getTask,
  updateTask: updateTask,
  createTask: createTask,
  deleteTask: deleteTask,
  getAllTask: getAllTask
};
