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
  // getAllProject: getAllProject,
  getProjectPage: getProjectPage
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
    'MATCH (n: Project) WHERE ID(n)={id}',
    'OPTIONAL MATCH (n)-[r]-()',
    'WITH n, r',
    'OPTIONAL MATCH (f: Feature)-[:HAS_FEATURE]-(n)',
    'WITH n, r, f',
    'OPTIONAL MATCH (f)-[r1]-()',
    'WITH r, n, r1, f',
    'OPTIONAL MATCH (t: Task)-[:HAS_TASK]-(f)',
    'WITH n, r, r1, f, t',
    'OPTIONAL MATCH (t)-[r2]-()',
    'DELETE r, n, r1, f, r2, t'
	];

	var params = {
		id: Number(id)
	};

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}

// function getAllProject(){
// 	var query = [
//     'MATCH (n: Project)',
//     'RETURN n'
// 	];
//
// 	var params = {
// 	};
//
// 	return neodb.cypherAsync({
// 		query : query.join('\n'),
// 		params: params
// 	});
// }

function createProject(name, identifier, description){

 var query = [
   'CREATE (n: Project {name : {name} , identifier: {identifier}, description: {description}})',
   'RETURN n'
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

function getProjectPage(fromItem, toItem, projectQuery){
  var start = 0;
  var quantity = Number.MAX_SAFE_INTEGER;

  if(fromItem && toItem){
    start = fromItem-1;
    quantity = toItem-fromItem+1;
    query = [
      'MATCH (n: Project)',
      'WHERE n.name CONTAINS {projectQuery} OR n.identifier CONTAINS {projectQuery} OR n.description CONTAINS {projectQuery}',
      'RETURN (n)',
      'SKIP {start}',
      'LIMIT {quantity}'
    ];
  } else{
    query = [
      'MATCH (n: Project)',
      'RETURN (n)',
    ];
  }

	var params = {
		start: Number(start),
    quantity: Number(quantity),
    projectQuery: projectQuery
	};

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}
