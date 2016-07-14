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
  getAllProjects: getAllProjects
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

function getAllProjects(){
	var query = [
    'MATCH (n)',
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
   'CREATE (new:Project { name : {name} , identifier: {identifier}, description: {description} })',
   'return new'
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
	       'MATCH (m:Project)',
         'WHERE id(m) = {id}',
	       'SET m.name = {name}',
         'SET m.identifier = {identifier}',
         'SET m.description = {description}',
	       'RETURN m'
    ];

    var params = {id: Number(id), name: name, identifier: identifier, description: description};

    return neodb.cypherAsync({
    query : query.join('\n'),
    params: params
    });
}  
