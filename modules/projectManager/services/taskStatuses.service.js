var neo4j = require('neo4j');
var Promise = require('bluebird');
var bodyParser = require('body-parser');

var graphDatabase = Promise.promisifyAll(neo4j).GraphDatabase;
var neodb = new graphDatabase('http://neo4j:password@localhost:7474');

module.exports = {
  getTaskStatus: getTaskStatus,
  updateTaskStatus: updateTaskStatus,
  createTaskStatus: createTaskStatus,
  deleteTaskStatus: deleteTaskStatus,
  getAllTaskStatus: getAllTaskStatus
};

function getTaskStatus(id){
	var query = [
    'MATCH (n: TaskStatus)',
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

function deleteTaskStatus(id){
	var query = [
    'MATCH (n: TaskStatus) WHERE ID(n)={id}',
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

function getAllTaskStatus(){
	var query = [
    'MATCH (n: TaskStatus)',
    'RETURN n'
	];

	var params = {
	};

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}

function createTaskStatus(status){

 var query = [
   'CREATE (n: TaskStatus {status : {status}})',
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

function updateTaskStatus(id, status)
{
    var query =
    [
      'MATCH (n: TaskStatus)',
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
