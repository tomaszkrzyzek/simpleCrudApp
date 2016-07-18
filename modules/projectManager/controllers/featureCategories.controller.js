var express = require('express');
// @TODO
// change uppercase filename to lowercase
var service = require('./../services/featureCategories.service');

function deleteFeatureCategory(req, res, next) {
 var id = req.params[0];
 service.deleteFeatureCategory(id).then(function(data){
  res.send(data[0]);
  });
}

function getFeatureCategory (req, res, next) {
 var id = req.params[0];
 service.getFeatureCategory(id).then(function(data){
  res.send(data[0]);
 });
}

function getAllFeatureCategory(req, res, next) {
 service.getAllFeatureCategory().then(function(data){
  res.send(data);
 });
}

function createFeatureCategory(req, res, next) {
 service.createFeatureCategory(req.body.name, req.body.identifier, req.body.description).then(function(data){
  res.send(data[0]);
 });
}

function updateFeatureCategory(req, res, next) {
  var id = req.params[0];
  service.updateFeatureCategory(id, req.body.name, req.body.identifier, req.body.description).then(function(data){
  res.send(data[0]);
 });
}

module.exports = {
  getFeatureCategory: getFeatureCategory,
  updateFeatureCategory: updateFeatureCategory,
  createFeatureCategory: createFeatureCategory,
  deleteFeatureCategory: deleteFeatureCategory,
  getAllFeatureCategory: getAllFeatureCategory
};
