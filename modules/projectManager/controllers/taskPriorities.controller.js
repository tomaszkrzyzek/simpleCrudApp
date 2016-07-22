var express = require('express');
// @TODO
// change uppercase filename to lowercase
var service = require('./../services/taskPriorities.service');

function deleteTaskPriority(req, res, next) {
 var id = req.params[0];
 service.deleteTaskPriority(id).then(function(data){
  res.send(data[0]);
  });
}

function getTaskPriority (req, res, next) {
 var id = req.params[0];
 service.getTaskPriority(id).then(function(data){
  res.send(data[0]);
 });
}

function getAllTaskPriority(req, res, next) {
 service.getAllTaskPriority().then(function(data){
  res.send(data);
 });
}

function createTaskPriority(req, res, next) {
 service.createTaskPriority(req.body.priority).then(function(data){
  res.send(data[0]);
 });
}

function updateTaskPriority(req, res, next) {
  var id = req.params[0];
  service.updateTaskPriority(id, req.body.priority).then(function(data){
  res.send(data[0]);
 });
}

module.exports = {
  getTaskPriority: getTaskPriority,
  updateTaskPriority: updateTaskPriority,
  createTaskPriority: createTaskPriority,
  deleteTaskPriority: deleteTaskPriority,
  getAllTaskPriority: getAllTaskPriority
};
