var express = require('express');
var service = require('./../services/relationship.service');

module.exports = {
  removeRelationship: removeRelationship,
  addRelationship: addRelationship
};

function removeRelationship(req, res, next) {
  var firstId = req.query.first;
  var secondId = req.query.second;
  service.removeRelationship(firstId, secondId).then(function(data){
  res.send(data[0]);
 });
}

function addRelationship(req, res, next) {
  var firstId = req.query.first;
  var secondId = req.query.second;
  var relName = req.query.name;
  service.removeRelationship(firstId, secondId, relName).then(function(data){
  res.send(data[0]);
 });
}
