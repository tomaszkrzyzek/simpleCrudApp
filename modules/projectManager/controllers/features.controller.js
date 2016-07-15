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

function getAllFeatures(req, res, next) {
 service.getAllFeatures().then(function(data){
  res.send(data);
 });
}

function createFeature(req, res, next) {
 service.createFeature(req.body.name, req.body.identifier, req.body.description).then(function(data){
  res.send(data[0]);
 });
}

function updateFeature(req, res, next) {
  var id = req.params[0];
  service.updateFeature(id, req.body.name, req.body.identifier, req.body.description).then(function(data){
  res.send(data[0]);
 });
}

module.exports = {
  getFeature: getFeature,
  updateFeature: updateFeature,
  createFeature: createFeature,
  deleteFeature: deleteFeature,
  getAllFeatures: getAllFeatures
};
