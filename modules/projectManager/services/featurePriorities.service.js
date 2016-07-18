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
		// @TODO
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
		// @TODO
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
    // @TODO
	];

	var params = {
	};

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}

function createFeaturePriority(name, identifier, description){

 var query = [
   // @TODO
  ];

  var params = {
  };

 return neodb.cypherAsync({
 query : query.join('\n'),
 params: params
  });
}

function updateFeaturePriority(id, name, identifier, description)
{
    var query =
    [
	       // @TODO
    ];

    var params = {
    };

    return neodb.cypherAsync({
    query : query.join('\n'),
    params: params
    });
}
