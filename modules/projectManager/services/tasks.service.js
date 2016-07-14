var neo4j = require('neo4j');
var Promise = require('bluebird');
var bodyParser = require('body-parser');

var graphDatabase = Promise.promisifyAll(neo4j).GraphDatabase;
var neodb = new graphDatabase('http://neo4j:password@localhost:7474');

module.exports = {
  getTask: getTask,
  updateTask: updateTask,
  createTask: createTask,
  deleteTask: deleteTask,
  getAllTasks: getAllTasks
};

function getTask(id){
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

function deleteTask(id){
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

function getAllTasks(){
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

function createTask(name, identifier, description){

 var query = [
   // @TODO
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

function updateTask(id, name, identifier, description)
{
    var query =
    [
	       // @TODO
    ];

    var params = {id: Number(id), name: name, identifier: identifier, description: description};

    return neodb.cypherAsync({
    query : query.join('\n'),
    params: params
    });
}
