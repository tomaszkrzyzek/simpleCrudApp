var express = require('express');
// @TODO
// change uppercase filename to lowercase
var service = require('./../services/featurePriorities.service');

function deleteFeaturePriority(req, res, next) {
 var id = req.params[0];
 service.deleteFeaturePriority(id).then(function(data){
  res.send(data[0]);
  });
}

function getFeaturePriority (req, res, next) {
 var id = req.params[0];
 service.getFeaturePriority(id).then(function(data){
  res.send(data[0]);
 });
}

function getAllFeaturePriority(req, res, next) {
 service.getAllFeaturePriority().then(function(data){
   var fs = [];
   data.forEach(function (r){
     fs.push({
       id: r.n._id,
       name: r.n.properties.priority
     });
   });
   res.send(fs);
 });
}

function createFeaturePriority(req, res, next) {
 service.createFeaturePriority(req.body.priority).then(function(data){
  res.send(data[0]);
 });
}

function updateFeaturePriority(req, res, next) {
  var id = req.params[0];
  service.updateFeaturePriority(id, req.body.priority).then(function(data){
  res.send(data[0]);
 });
}

module.exports = {
  getFeaturePriority: getFeaturePriority,
  updateFeaturePriority: updateFeaturePriority,
  createFeaturePriority: createFeaturePriority,
  deleteFeaturePriority: deleteFeaturePriority,
  getAllFeaturePriority: getAllFeaturePriority
};
