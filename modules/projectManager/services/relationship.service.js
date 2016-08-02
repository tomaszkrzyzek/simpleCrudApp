var neo4j = require('neo4j');
var Promise = require('bluebird');
var bodyParser = require('body-parser');

var graphDatabase = Promise.promisifyAll(neo4j).GraphDatabase;
var neodb = new graphDatabase('http://neo4j:password@localhost:7474');

module.exports = {
  removeRelationship: removeRelationship,
  addRelationship: addRelationship
};

function removeRelationship(firstNodeId, secondNodeId, relationshipName){
  var query = [
    'MATCH (a)-[r:'+relationshipName+']-(b)',
    'WHERE id(a)={firstNodeId}',
    'AND id(b)={secondNodeId}',
    'DELETE r'
  ];

  var params = {
    firstNodeId: Number(firstNodeId),
    secondNodeId: Number(secondNodeId),
    relationshipName: relationshipName
  };

  return neodb.cypherAsync({
    query : query.join('\n'),
    params: params
  });
}

function addRelationship(firstNodeId, secondNodeId, relationshipName){
  var query = [
    'MATCH (a)',
    'WHERE id(a)={firstNodeId}',
    'MATCH (b)',
    'WHERE id(b)={secondNodeId}',
    'CREATE (a)-[r:' + relationshipName + ']->(b)',
    'RETURN r'
  ];

  var params = {
    firstNodeId: Number(firstNodeId),
    secondNodeId: Number(secondNodeId),
    relationshipName: relationshipName
  };

  return neodb.cypherAsync({
    query : query.join('\n'),
    params: params
  });
}
