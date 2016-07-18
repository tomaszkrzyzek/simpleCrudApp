var neo4j = require('neo4j');
var Promise = require('bluebird');
var bodyParser = require('body-parser');

var graphDatabase = Promise.promisifyAll(neo4j).GraphDatabase;
var neodb = new graphDatabase('http://neo4j:password@localhost:7474');

module.exports = {
  getWorkLog: getWorkLog,
  updateWorkLog: updateWorkLog,
  createWorkLog: createWorkLog,
  deleteWorkLog: deleteWorkLog,
  getAllWorkLog: getAllWorkLog
};

function getWorkLog(id){
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

function deleteWorkLog(id){
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

function getAllWorkLog(){
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

function createWorkLog(name, identifier, description){

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

function updateWorkLog(id, name, identifier, description)
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
