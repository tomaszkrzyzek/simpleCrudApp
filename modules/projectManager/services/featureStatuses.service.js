var neo4j = require('neo4j');
var Promise = require('bluebird');
var bodyParser = require('body-parser');

var graphDatabase = Promise.promisifyAll(neo4j).GraphDatabase;
var neodb = new graphDatabase('http://neo4j:password@localhost:7474');

module.exports = {
  getFeatureStatus: getFeatureStatus,
  updateFeatureStatus: updateFeatureStatus,
  createFeatureStatus: createFeatureStatus,
  deleteFeatureStatus: deleteFeatureStatus,
  getAllFeatureStatus: getAllFeatureStatus
};

function getFeatureStatus(id){
	var query = [
    'MATCH (n: FeatureStatus)',
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

function deleteFeatureStatus(id){
	var query = [
    'MATCH (n: FeatureStatus) WHERE ID(n)={id}',
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

function getAllFeatureStatus(){
	var query = [
    'MATCH (n: FeatureStatus)',
    'RETURN n'
	];

	var params = {
	};

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}

function createFeatureStatus(status){

 var query = [
   'CREATE (n: FeatureStatus {status : {status}})',
   'RETURN n'
  ];

  var params = {
    status: status
  };

 return neodb.cypherAsync({
 query : query.join('\n'),
 params: params
  });
}

function updateFeatureStatus(id, status)
{
    var query =
    [
      'MATCH (n: FeatureStatus)',
      'WHERE id(n) = {id}',
      'SET n.status = {status}',
      'RETURN n'
    ];

    var params = {
      id: Number(id),
      status: status
    };

    return neodb.cypherAsync({
    query : query.join('\n'),
    params: params
    });
}
