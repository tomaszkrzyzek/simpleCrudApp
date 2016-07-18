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

function deleteTaskTracker(id){
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

function getAllTaskTracker(){
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

function createTaskTracker(name, identifier, description){

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

function updateTaskTracker(id, name, identifier, description)
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
