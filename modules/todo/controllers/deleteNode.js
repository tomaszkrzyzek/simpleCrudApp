var express = require('express');
var nodeService = require('./../services/node.service');

function deleteNode(req, res, next) {
 var id = req.params[0];

 nodeService.deleteNode(id).then(function(data){
  res.send(data[0]);
 });
}

module.exports = deleteNode;
