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
  getAllFeature: getAllFeature
};

function getFeature(id){
	var query = [
    'OPTIONAL MATCH (n: Feature)-[r]-()',
		'WHERE id(n) = {id}',
		'RETURN n, r'
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
    'WITH DISTINCT n',
    'OPTIONAL MATCH (n)-[r]-()',
    'RETURN n, r'
	];

	var params = {
	};

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}

function createFeature(projectId, subject, description, featureStatusId, featurePriorityId, userId, featureCategoryId, estimatedHours){

 var query = [
   'MATCH (p: Project)',
   'WHERE id(p) = {projectId}',
   'MATCH (fs: FeatureStatus)',
   'WHERE id(fs) = {featureStatusId}',
   'MATCH (fp: FeaturePriority)',
   'WHERE id(fp) = {featurePriorityId}',
   'MATCH (u: User)',
   'WHERE id(u) = {userId}',
   'MATCH (fc: FeatureCategory)',
   'WHERE id(fc) = {featureCategoryId}',
   'CREATE (n: Feature {subject: {subject}, description: {description}, estimatedHours: {estimatedHours}})-[:HAS_PROJECT]->(p), (n)-[:HAS_FEATURE_STATUS]->(fs), (n)-[:HAS_FEATURE_PRIORITY]->(fp), (n)-[:HAS_USER]->(u), (n)-[:HAS_FEATURE_CATEGORY]->(fc)',
   'RETURN n'
  ];

  var params = {
    projectId : Number(projectId),
    subject : subject,
    description : description, 
    featureStatusId : Number(featureStatusId),
    featurePriorityId : Number(featurePriorityId),
    userId : Number(userId),
    featureCategoryId : Number(featureCategoryId),
    estimatedHours : estimatedHours
  };

 return neodb.cypherAsync({
 query : query.join('\n'),
 params: params
  });
}

function updateFeature(id, projectId, subject, description, featureStatusId, featurePriorityId, userId, featureCategoryId, estimatedHours){
    var query =
    [
      'MATCH (n: Feature)',
      'WHERE id(n) = {id}',
      'OPTIONAL MATCH (n)-[r]-()',
      'DELETE r',
      'WITH n',
      'MATCH (p: Project)',
      'WHERE id(p) = {projectId}',
      'MATCH (fs: FeatureStatus)',
      'WHERE id(fs) = {featureStatusId}',
      'MATCH (fp: FeaturePriority)',
      'WHERE id(fp) = {featurePriorityId}',
      'MATCH (u: User)',
      'WHERE id(u) = {userId}',
      'MATCH (fc: FeatureCategory)',
      'WHERE id(fc) = {featureCategoryId}',
      'SET n.subject = {subject}',
      'SET n.description = {description}',
      'SET n.estimatedHours = {estimatedHours}',
      'MERGE (n)-[:HAS_PROJECT]->(p)',
      'MERGE(n)-[:HAS_FEATURE_STATUS]->(fs)',
      'MERGE (n)-[:HAS_FEATURE_PRIORITY]->(fp)',
      'MERGE (n)-[:HAS_USER]->(u)',
      'MERGE (n)-[:HAS_FEATURE_CATEGORY]->(fc)',
      'RETURN n'
    ];

    var params = {
      id: Number(id),
      projectId : Number(projectId),
      subject : subject,
      description : description, 
      featureStatusId : Number(featureStatusId),
      featurePriorityId : Number(featurePriorityId),
      userId : Number(userId),
      featureCategoryId : Number(featureCategoryId),
      estimatedHours : estimatedHours
    };

    return neodb.cypherAsync({
    query : query.join('\n'),
    params: params
    });
}
