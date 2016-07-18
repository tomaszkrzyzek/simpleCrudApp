var neo4j = require('neo4j');
var Promise = require('bluebird');
var bodyParser = require('body-parser');

var graphDatabase = Promise.promisifyAll(neo4j).GraphDatabase;
var neodb = new graphDatabase('http://neo4j:password@localhost:7474');

module.exports = {
  getFeatureCategory: getFeatureCategory,
  updateFeatureCategory: updateFeatureCategory,
  createFeatureCategory: createFeatureCategory,
  deleteFeatureCategory: deleteFeatureCategory,
  getAllFeatureCategory: getAllFeatureCategory
};

function getFeatureCategory(id){
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

function deleteFeatureCategory(id){
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

function getAllFeatureCategory(){
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

function createFeatureCategory(name, identifier, description){

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

function updateFeatureCategory(id, name, identifier, description)
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
