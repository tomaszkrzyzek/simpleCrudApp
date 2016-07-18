var express = require('express');
// @TODO
// change uppercase filename to lowercase
var service = require('./../services/members.service');

function deleteMember(req, res, next) {
 var id = req.params[0];
 service.deleteMember(id).then(function(data){
  res.send(data[0]);
  });
}

function getMember (req, res, next) {
 var id = req.params[0];
 service.getMember(id).then(function(data){
  res.send(data[0]);
 });
}

function getAllMember(req, res, next) {
 service.getAllMember().then(function(data){
  res.send(data);
 });
}

function createMember(req, res, next) {
 service.createMember(req.body.name, req.body.identifier, req.body.description).then(function(data){
  res.send(data[0]);
 });
}

function updateMember(req, res, next) {
  var id = req.params[0];
  service.updateMember(id, req.body.name, req.body.identifier, req.body.description).then(function(data){
  res.send(data[0]);
 });
}

module.exports = {
  getMember: getMember,
  updateMember: updateMember,
  createMember: createMember,
  deleteMember: deleteMember,
  getAllMember: getAllMember
};
