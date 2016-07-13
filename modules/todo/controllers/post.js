var express = require('express');
var nodeService = require('./../services/node.service');

function createNode(req, res, next) {
 nodeService.createNode(req.body.name, req.body.identifier, req.body.description).then(function(data){
  res.send(data[0]);
 });
}

module.exports = createNode;
