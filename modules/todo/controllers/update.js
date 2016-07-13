var express = require('express');
var nodeService = require('./../services/node.service');

function updateNode(req, res, next) {
  var id = req.params[0];
  nodeService.updateNode(id, req.body.name, req.body.identifier, req.body.description).then(function(data){
  res.send(data[0]);
 });
}

module.exports = updateNode;
