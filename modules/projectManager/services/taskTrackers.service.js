var neo4j = require('neo4j');
var Promise = require('bluebird');
var bodyParser = require('body-parser');

var graphDatabase = Promise.promisifyAll(neo4j).GraphDatabase;
var neodb = new graphDatabase('http://neo4j:password@localhost:7474');

module.exports = {
  getTaskTracker: getTaskTracker,
  updateTaskTracker: updateTaskTracker,
  createTaskTracker: createTaskTracker,
  deleteTaskTracker: deleteTaskTracker,
  getAllTaskTracker: getAllTaskTracker
};

function getTaskTracker(id){
	var query = [
    'MATCH (n: TaskTracker)',
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

function deleteTaskTracker(id){
	var query = [
    'MATCH (n: TaskTracker) WHERE ID(n)={id}',
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

function getAllTaskTracker(){
	var query = [
    'MATCH (n: TaskTracker)',
    'RETURN n'
	];

	var params = {
	};

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}

function createTaskTracker(tracker){

 var query = [
   'CREATE (n: TaskTracker {tracker : {tracker}})',
   'RETURN n'
  ];

  var params = {
    tracker: tracker
  };

 return neodb.cypherAsync({
 query : query.join('\n'),
 params: params
  });
}

function updateTaskTracker(id, tracker)
{
    var query =
    [
      'MATCH (n: TaskTracker)',
      'WHERE id(n) = {id}',
      'SET n.tracker = {tracker}',
      'RETURN n'
    ];

    var params = {
      id: Number(id),
      tracker: tracker
    };

    return neodb.cypherAsync({
    query : query.join('\n'),
    params: params
    });
}
