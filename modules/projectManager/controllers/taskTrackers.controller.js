var express = require('express');
// @TODO
// change uppercase filename to lowercase
var service = require('./../services/taskTrackers.service');

function deleteTaskTracker(req, res, next) {
 var id = req.params[0];
 service.deleteTaskTracker(id).then(function(data){
  res.send(data[0]);
  });
}

function getTaskTracker (req, res, next) {
 var id = req.params[0];
 service.getTaskTracker(id).then(function(data){
  res.send(data[0]);
 });
}

function getAllTaskTracker(req, res, next) {
 service.getAllTaskTracker().then(function(data){
  res.send(data);
 });
}

function createTaskTracker(req, res, next) {
 service.createTaskTracker(req.body.tracker).then(function(data){
  res.send(data[0]);
 });
}

function updateTaskTracker(req, res, next) {
  var id = req.params[0];
  service.updateTaskTracker(id, req.body.tracker).then(function(data){
  res.send(data[0]);
 });
}

module.exports = {
  getTaskTracker: getTaskTracker,
  updateTaskTracker: updateTaskTracker,
  createTaskTracker: createTaskTracker,
  deleteTaskTracker: deleteTaskTracker,
  getAllTaskTracker: getAllTaskTracker
};
