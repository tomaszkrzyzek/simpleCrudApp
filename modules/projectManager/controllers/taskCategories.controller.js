var express = require('express');
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
   var fs = [];
   data.forEach(function (r){
     fs.push({
       id: r.n._id,
       name: r.n.properties.category
     });
   });
   res.send(fs);
 });
}

function createTaskCategory(req, res, next) {
 service.createTaskCategory(req.body.category).then(function(data){
  res.send(data[0]);
 });
}

function updateTaskCategory(req, res, next) {
  var id = req.params[0];
  service.updateTaskCategory(id, req.body.category).then(function(data){
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
