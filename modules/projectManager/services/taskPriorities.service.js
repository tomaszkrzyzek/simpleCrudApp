var neo4j = require('neo4j');
var Promise = require('bluebird');
var bodyParser = require('body-parser');

var graphDatabase = Promise.promisifyAll(neo4j).GraphDatabase;
var neodb = new graphDatabase('http://neo4j:password@localhost:7474');

module.exports = {
  getTaskPriority: getTaskPriority,
  updateTaskPriority: updateTaskPriority,
  createTaskPriority: createTaskPriority,
  deleteTaskPriority: deleteTaskPriority,
  getAllTaskPriority: getAllTaskPriority
};

function getTaskPriority(id){
	var query = [
    'MATCH (n: TaskPriority)',
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

function deleteTaskPriority(id){
	var query = [
    'MATCH (n: TaskPriority) WHERE ID(n)={id}',
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

function getAllTaskPriority(){
	var query = [
    'MATCH (n: TaskPriority)',
    'RETURN n'
	];

	var params = {
	};

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}

function createTaskPriority(priority){

 var query = [
   'CREATE (n: TaskPriority {priority : {priority}})',
   'RETURN n'
  ];

  var params = {
    priority: priority
  };

 return neodb.cypherAsync({
 query : query.join('\n'),
 params: params
  });
}

function updateTaskPriority(id, priority)
{
    var query =
    [
      'MATCH (n: TaskPriority)',
      'WHERE id(n) = {id}',
      'SET n.priority = {priority}',
      'RETURN n'
    ];

    var params = {
      id: Number(id),
      priority: priority
    };

    return neodb.cypherAsync({
    query : query.join('\n'),
    params: params
    });
}
