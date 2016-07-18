var express = require('express');
// @TODO
// change uppercase filename to lowercase
var service = require('./../services/workLogs.service');

function deleteWorkLog(req, res, next) {
 var id = req.params[0];
 service.deleteWorkLog(id).then(function(data){
  res.send(data[0]);
  });
}

function getWorkLog (req, res, next) {
 var id = req.params[0];
 service.getWorkLog(id).then(function(data){
  res.send(data[0]);
 });
}

function getAllWorkLog(req, res, next) {
 service.getAllWorkLog().then(function(data){
  res.send(data);
 });
}

function createWorkLog(req, res, next) {
 service.createWorkLog(req.body.name, req.body.identifier, req.body.description).then(function(data){
  res.send(data[0]);
 });
}

function updateWorkLog(req, res, next) {
  var id = req.params[0];
  service.updateWorkLog(id, req.body.name, req.body.identifier, req.body.description).then(function(data){
  res.send(data[0]);
 });
}

module.exports = {
  getWorkLog: getWorkLog,
  updateWorkLog: updateWorkLog,
  createWorkLog: createWorkLog,
  deleteWorkLog: deleteWorkLog,
  getAllWorkLog: getAllWorkLog
};
