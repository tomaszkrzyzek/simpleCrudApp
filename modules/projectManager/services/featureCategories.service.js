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
    'MATCH (n: FeatureCategory)',
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

function deleteFeatureCategory(id){
	var query = [
    'MATCH (n: FeatureCategory) WHERE ID(n)={id}',
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

function getAllFeatureCategory(){
	var query = [
    'MATCH (n: FeatureCategory)',
    'RETURN n'
	];

	var params = {
	};

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}

function createFeatureCategory(category){

 var query = [
   'CREATE (n: FeatureCategory {category : {category}})',
   'RETURN n'
  ];

  var params = {
    category: category
  };

 return neodb.cypherAsync({
 query : query.join('\n'),
 params: params
  });
}

function updateFeatureCategory(id, category){
    var query =
    [
      'MATCH (n: FeatureCategory)',
      'WHERE id(n) = {id}',
      'SET n.category = {category}',
      'RETURN n'
    ];

    var params = {
      id: Number(id),
      category: category
    };

    return neodb.cypherAsync({
    query : query.join('\n'),
    params: params
    });
}
