var express = require('express');
var service = require('./../services/features.service');

function deleteFeature(req, res, next) {
 var id = req.params[0];
 service.deleteFeature(id).then(function(data){
  res.send(data[0]);
  });
}

function getFeature (req, res, next) {
 var id = req.params[0];
 service.getFeature(id).then(function(data){
  res.send(data[0]);
 });
}

function getAllFeature(req, res, next) {
 service.getAllFeature().then(function(data){
  res.send(data);
 });
}

function createFeature(req, res, next) {
 service.createFeature(req.body.projectId, req.body.subject, req.body.description, req.body.featureStatusId, req.body.featurePriorityId, req.body.userId, req.body.featureCategoryId, req.body.estimatedHours).then(function(data){
  res.send(data[0]);
 });
}

function updateFeature(req, res, next) {
  var id = req.params[0];
  service.updateFeature(id, req.body.projectId, req.body.subject, req.body.description, req.body.featureStatusId, req.body.featurePriorityId, req.body.userId, req.body.featureCategoryId, req.body.estimatedHours).then(function(data){
  res.send(data[0]);
 });
}

module.exports = {
  getFeature: getFeature,
  updateFeature: updateFeature,
  createFeature: createFeature,
  deleteFeature: deleteFeature,
  getAllFeature: getAllFeature
};
