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
 service.createFeature(req.body.project, req.body.subject, req.body.description, req.body.status, req.body.priority, req.body.author, req.body.category, req.body.estimatedHours).then(function(data){
  res.send(data[0]);
 });
}

function updateFeature(req, res, next) {
  var id = req.params[0];
  service.updateFeature(id, req.body.projectId, req.body.subject, req.body.description, req.body.featureStatusId, req.body.featurePriorityId, req.body.userId, req.body.featureCategoryId, req.body.estimatedHours).then(function(data){
  res.send(data[0]);
 });
}

function getFeaturePage(req, res, next) {
  var fromItem = req.query.from;
  var toItem = req.query.to;
  var featureQuery = req.query.query;
  if(!featureQuery){
    featureQuery = '';
  }
  service.getFeaturePage(fromItem, toItem, featureQuery).then(function(data){
  res.send(data);
 });
}

function getFeatureNumber(req, res, next) {
 service.getFeatureNumber().then(function(data){
  res.send(data[0]);
 });
}

module.exports = {
  getFeature: getFeature,
  updateFeature: updateFeature,
  createFeature: createFeature,
  deleteFeature: deleteFeature,
  getAllFeature: getAllFeature,
  getFeaturePage: getFeaturePage,
  getFeatureNumber: getFeatureNumber
};
