var express = require('express');
var service = require('./../services/users.service');

function deleteUser(req, res, next) {
 var id = req.params[0];
 service.deleteUser(id).then(function(data){
  res.send(data[0]);
  });
}

function getUser (req, res, next) {
 var id = req.params[0];
 service.getUser(id).then(function(data){
  res.send(data[0]);
 });
}

function getAllUser(req, res, next) {
 service.getAllUser().then(function(data){
  res.send(data);
 });
}

function createUser(req, res, next) {
 service.createUser(req.body.login, req.body.password, req.body.firstName, req.body.lastName).then(function(data){
  res.send(data[0]);
 });
}

function updateUser(req, res, next) {
  var id = req.params[0];
  service.updateUser(id, req.body.login, req.body.password, req.body.firstName, req.body.lastName).then(function(data){
  res.send(data[0]);
 });
}

function getUserBy(req, res, next) {
  if(req.body.propertyName && req.body.propertyValue){
    service.getUserBy(req.body.propertyName, req.body.propertyValue).then(function(data){
      res.json(data);
    }).catch(function(){
      res.json({
        success: false,
        error: 'Database error'
      });
    });
  } else{
    res.json({
      success: false,
      error: 'Invalid request data'
    });
  }
}

module.exports = {
  getUserBy: getUserBy,
  getUser: getUser,
  updateUser: updateUser,
  createUser: createUser,
  deleteUser: deleteUser,
  getAllUser: getAllUser
};
