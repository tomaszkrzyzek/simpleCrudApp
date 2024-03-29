var neo4j = require('neo4j');
var Promise = require('bluebird');
var bodyParser = require('body-parser');

var graphDatabase = Promise.promisifyAll(neo4j).GraphDatabase;
var neodb = new graphDatabase('http://neo4j:password@localhost:7474');

module.exports = {
  getFeature: getFeature,
  updateFeature: updateFeature,
  createFeature: createFeature,
  deleteFeature: deleteFeature,
  getAllFeature: getAllFeature,
  getFeaturePage: getFeaturePage,
  getFeatureNumber: getFeatureNumber
};

function getFeature(id){
	var query = [
    'MATCH (n: Feature)',
    'WHERE id(n) = {id}',
    'OPTIONAL MATCH (n)-[r]-()',
    'WITH n, collect(r) as rel',
    'RETURN n, rel'
	];

	var params = {
		id: Number(id)
	};

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}

function deleteFeature(id){
	var query = [
    'MATCH (n: Feature) WHERE ID(n)={id}',
    'OPTIONAL MATCH (n)-[r]-()',
    'WITH n, r',
    'OPTIONAL MATCH (t: Task)-[:HAS_TASK]-(n)',
    'WITH n, r, t',
    'OPTIONAL MATCH (t)-[r1]-()',
    'DELETE r, n, r1, t'
	];

	var params = {
		id: Number(id)
	};

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}

function getAllFeature(){
	var query = [
    'MATCH (n: Feature)',
    'OPTIONAL MATCH (n)-[r]-()',
    'WITH DISTINCT n, collect(r) as rel',
    'RETURN n, rel'
	];

	var params = {
	};

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}

function createFeature(subject, description, estimatedHours){
 var query = [
   'CREATE (n: Feature {subject: {subject}, description: {description}, estimatedHours: {estimatedHours}})',
   'RETURN n'
  ];

  var params = {
    subject : subject,
    description : description, 
    estimatedHours : estimatedHours
  };

 return neodb.cypherAsync({
 query : query.join('\n'),
 params: params
  });
}

function updateFeature(id,subject, description, estimatedHours){
    var query =
    [
      'MATCH (n: Feature)',
      'WHERE id(n) = {id}',
      'SET n.subject = {subject}',
      'SET n.description = {description}',
      'SET n.estimatedHours = {estimatedHours}',
      'RETURN n'
    ];

    var params = {
      id: Number(id),
      subject : subject,
      description : description, 
      estimatedHours : estimatedHours
    };

    return neodb.cypherAsync({
    query : query.join('\n'),
    params: params
    });
}

function getFeaturePage(fromItem, toItem, featureQuery) {
    var start = 0;
    var quantity = Number.MAX_SAFE_INTEGER;

    query = [
        'MATCH (n: Feature)'
    ];
    if (featureQuery) {
        query.push(
            'WHERE n.subject CONTAINS {featureQuery} OR n.description CONTAINS {featureQuery}'
        );
    }

    query.push(
      'OPTIONAL MATCH (n)-[r]-()',
      'WITH DISTINCT n, collect(r) as rel',
      'RETURN n, rel'
    );

    if (fromItem && toItem) {
        start = fromItem;
        quantity = toItem - fromItem + 1;
        query.push(
            'SKIP {start} LIMIT {quantity}'
        );
    }
    var params = {
        start: Number(start),
        quantity: Number(quantity),
        featureQuery: featureQuery
    };

    return neodb.cypherAsync({
        query: query.join('\n'),
        params: params
    });
}

function getFeatureNumber(){
	var query = [
    'MATCH (n: Feature)',
    'RETURN count(n) AS sum'
	];

	var params = {
	};

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}
