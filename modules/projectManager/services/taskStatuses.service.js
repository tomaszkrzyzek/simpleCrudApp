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

function deleteTaskStatus(id){
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

function getAllTaskStatus(){
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

function createTaskStatus(name, identifier, description){

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

function updateTaskStatus(id, name, identifier, description)
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
