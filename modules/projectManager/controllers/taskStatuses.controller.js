var express = require('express');
// @TODO
// change uppercase filename to lowercase
var service = require('./../services/taskStatuses.service');

function deleteTaskStatus(req, res, next) {
 var id = req.params[0];
 service.deleteTaskStatus(id).then(function(data){
  res.send(data[0]);
  });
}

function getTaskStatus (req, res, next) {
 var id = req.params[0];
 service.getTaskStatus(id).then(function(data){
  res.send(data[0]);
 });
}

function getAllTaskStatus(req, res, next) {
 service.getAllTaskStatus().then(function(data){
  res.send(data);
 });
}

function createTaskStatus(req, res, next) {
 service.createTaskStatus(req.body.status).then(function(data){
  res.send(data[0]);
 });
}

function updateTaskStatus(req, res, next) {
  var id = req.params[0];
  service.updateTaskStatus(id, req.body.status).then(function(data){
  res.send(data[0]);
 });
}

module.exports = {
  getTaskStatus: getTaskStatus,
  updateTaskStatus: updateTaskStatus,
  createTaskStatus: createTaskStatus,
  deleteTaskStatus: deleteTaskStatus,
  getAllTaskStatus: getAllTaskStatus
};
