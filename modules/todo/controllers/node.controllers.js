var getNode = require('./get');
var deleteNode = require('./deleteNode');
var getAllNodes = require('./getAll');
var createNode = require('./post');
var updateNode = require('./update');

module.exports = {
  getNode: getNode,
  updateNode: updateNode,
  createNode: createNode,
  deleteNode: deleteNode,
  getAllNodes: getAllNodes
};
