var neo4j = require('neo4j');
var Promise = require('bluebird');
var bodyParser = require('body-parser');

var graphDatabase = Promise.promisifyAll(neo4j).GraphDatabase;
var neodb = new graphDatabase('http://neo4j:password@localhost:7474');

module.exports = {
  getFeaturePriority: getFeaturePriority,
  updateFeaturePriority: updateFeaturePriority,
  createFeaturePriority: createFeaturePriority,
  deleteFeaturePriority: deleteFeaturePriority,
  getAllFeaturePriority: getAllFeaturePriority
};

function getFeaturePriority(id){
	var query = [
    'MATCH (n: FeaturePriority)',
		'WHERE id(n) = {id}',
		'RETURN n'
	];

	var params = {
		id: Number(id)
	};

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}

function deleteFeaturePriority(id){
	var query = [
    'MATCH (n: FeaturePriority) WHERE ID(n)={id}',
		'DELETE n'
	];

	var params = {
		id: Number(id)
	};

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}

function getAllFeaturePriority(){
	var query = [
    'MATCH (n: FeaturePriority)',
    'RETURN n'
	];

	var params = {
	};

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}

function createFeaturePriority(priority){

 var query = [
   'CREATE (n: FeaturePriority {priority : {priority}})',
   'RETURN n'
  ];

  var params = {
    priority: Number(priority)
  };

 return neodb.cypherAsync({
 query : query.join('\n'),
 params: params
  });
}

function updateFeaturePriority(id, priority){
    var query =
    [
      'MATCH (n: FeaturePriority)',
      'WHERE id(n) = {id}',
      'SET n.priority = {priority}',
      'RETURN n'
    ];

    var params = {
      id: Number(id),
      priority: Number(priority)
    };

    return neodb.cypherAsync({
    query : query.join('\n'),
    params: params
    });
}
