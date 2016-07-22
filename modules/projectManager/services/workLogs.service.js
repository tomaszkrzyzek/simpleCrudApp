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
    'MATCH (n: WorkLog)-[r]-()',
		'WHERE id(n) = {id}',
		'RETURN n, r'
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
    'MATCH (n: WorkLog) WHERE ID(n)={id}',
		'MATCH (n)-[r]-()',
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

function getAllWorkLog(){
	var query = [
    'MATCH (n: WorkLog)-[r]-()',
    'RETURN n, r'
	];

	var params = {
	};

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}

function createWorkLog(taskId, userId, date, hours){

 var query = [
   'MATCH (t: Task)',
   'WHERE id(t) = {taskId}',
   'MATCH (u: User)',
   'WHERE id(u) = {userId}',
   'CREATE (n: WorkLog {date: {date}, hours: {hours}})-[:HAS_TASK]->(t), (n)-[:HAS_USER]->(u)',
   'RETURN n'
  ];


  var params = {
    taskId: Number(taskId),
    userId: Number(userId),
    date: date,
    hours: Number(hours)
  };

 return neodb.cypherAsync({
 query : query.join('\n'),
 params: params
  });
}

function updateWorkLog(id, taskId, userId, date, hours){
    var query =
    [
      'MATCH (n: WorkLog)',
      'WHERE id(n) = {id}',
      'MATCH (n)-[r]-()',
      'DELETE r',
      'WITH n',
      'MATCH (t: Task)',
      'WHERE id(t) = {taskId}',
      'MATCH (u: User)',
      'WHERE id(u) = {userId}',
      'SET n.date = {date}',
      'MERGE (n)-[:HAS_TASK]->(t)',
      'MERGE (n)-[:HAS_USER]->(u)',
      'RETURN n'
    ];

    var params = {
      id: Number(id),
      taskId: Number(taskId),
      userId: Number(userId),
      date: date,
      hours: Number(hours)
    };

    return neodb.cypherAsync({
    query : query.join('\n'),
    params: params
    });
}
