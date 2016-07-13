var express = require('express');
var nodeService = require('./../services/node.service');

function getAllNodes(req, res, next) {
 nodeService.getAllNodes().then(function(data){
  res.send(data);
 });
}

module.exports = getAllNodes;
