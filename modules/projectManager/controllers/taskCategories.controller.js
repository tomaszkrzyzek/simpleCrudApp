var express = require('express');
// @TODO
// change uppercase filename to lowercase
var service = require('./../services/taskCategories.service');

function deleteTaskCategory(req, res, next) {
 var id = req.params[0];
 service.deleteTaskCategory(id).then(function(data){
  res.send(data[0]);
  });
}

function getTaskCategory (req, res, next) {
 var id = req.params[0];
 service.getTaskCategory(id).then(function(data){
  res.send(data[0]);
 });
}

function getAllTaskCategory(req, res, next) {
 service.getAllTaskCategory().then(function(data){
  res.send(data);
 });
}

function createTaskCategory(req, res, next) {
 service.createTaskCategory(req.body.name, req.body.identifier, req.body.description).then(function(data){
  res.send(data[0]);
 });
}

function updateTaskCategory(req, res, next) {
  var id = req.params[0];
  service.updateTaskCategory(id, req.body.name, req.body.identifier, req.body.description).then(function(data){
  res.send(data[0]);
 });
}

module.exports = {
  getTaskCategory: getTaskCategory,
  updateTaskCategory: updateTaskCategory,
  createTaskCategory: createTaskCategory,
  deleteTaskCategory: deleteTaskCategory,
  getAllTaskCategory: getAllTaskCategory
};
