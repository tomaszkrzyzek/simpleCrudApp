var neo4j = require('neo4j');
var Promise = require('bluebird');
var bodyParser = require('body-parser');

var graphDatabase = Promise.promisifyAll(neo4j).GraphDatabase;
var neodb = new graphDatabase('http://neo4j:password@localhost:7474');

module.exports = {
  getProject: getProject,
  updateProject: updateProject,
  createProject: createProject,
  deleteProject: deleteProject,
  getAllProject: getAllProject
};

function getProject(id){
	var query = [
		'MATCH (n: Project)',
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

function deleteProject(id){
	var query = [
		'MATCH (n:Project) WHERE ID(n)={id}',
		'OPTIONAL MATCH (n)-[r]-()',
		'DELETE r, n'
	];

	var params = {
		id: Number(id)
	};

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}

function getAllProject(){
	var query = [
    'MATCH (n: Project)',
    'RETURN n'
	];

	var params = {
	};

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}

function createProject(name, identifier, description){

 var query = [
   'CREATE (n:Project { name : {name} , identifier: {identifier}, description: {description} })',
   'return n'
  ];

  var params = {
  name: name,
  identifier: identifier,
  description: description
  };

 return neodb.cypherAsync({
 query : query.join('\n'),
 params: params
  });
}

function updateProject(id, name, identifier, description)
{
    var query =
    [
	       'MATCH (n:Project)',
         'WHERE id(n) = {id}',
	       'SET n.name = {name}',
         'SET n.identifier = {identifier}',
         'SET n.description = {description}',
	       'RETURN n'
    ];

    var params = {id: Number(id), name: name, identifier: identifier, description: description};

    return neodb.cypherAsync({
    query : query.join('\n'),
    params: params
    });
}
