var express = require('express');
var service = require('./../services/featureStatuses.service');

function deleteFeatureStatus(req, res, next) {
 var id = req.params[0];
 service.deleteFeatureStatus(id).then(function(data){
  res.send(data[0]);
  });
}

function getFeatureStatus (req, res, next) {
 var id = req.params[0];
 service.getFeatureStatus(id).then(function(data){
  res.send(data[0]);
 });
}

function getAllFeatureStatus(req, res, next) {
 service.getAllFeatureStatus().then(function(data){
  res.send(data);
 });
}

function createFeatureStatus(req, res, next) {
 service.createFeatureStatus(req.body.status).then(function(data){
  res.send(data[0]);
 });
}

function updateFeatureStatus(req, res, next) {
  var id = req.params[0];
  service.updateFeatureStatus(id, req.body.status).then(function(data){
  res.send(data[0]);
 });
}

module.exports = {
  getFeatureStatus: getFeatureStatus,
  updateFeatureStatus: updateFeatureStatus,
  createFeatureStatus: createFeatureStatus,
  deleteFeatureStatus: deleteFeatureStatus,
  getAllFeatureStatus: getAllFeatureStatus
};
