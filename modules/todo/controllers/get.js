var express = require('express');
var nodeService = require('./../services/node.service');

var router = express.Router();

function getNode (req, res, next) {
 var id = req.params[0];
 nodeService.getNode(id).then(function(data){
  res.send(data[0]);
 });
}

module.exports = getNode;
