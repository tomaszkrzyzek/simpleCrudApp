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
  res.send(data);
 });
}

function createFeaturePriority(req, res, next) {
 service.createFeaturePriority(req.body.name, req.body.identifier, req.body.description).then(function(data){
  res.send(data[0]);
 });
}

function updateFeaturePriority(req, res, next) {
  var id = req.params[0];
  service.updateFeaturePriority(id, req.body.name, req.body.identifier, req.body.description).then(function(data){
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
