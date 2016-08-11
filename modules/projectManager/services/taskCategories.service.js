var neo4j = require('neo4j');
var Promise = require('bluebird');
var bodyParser = require('body-parser');

var graphDatabase = Promise.promisifyAll(neo4j).GraphDatabase;
var neodb = new graphDatabase('http://neo4j:password@localhost:7474');

module.exports = {
  getTaskCategory: getTaskCategory,
  updateTaskCategory: updateTaskCategory,
  createTaskCategory: createTaskCategory,
  deleteTaskCategory: deleteTaskCategory,
  getAllTaskCategory: getAllTaskCategory
};

function getTaskCategory(id){
	var query = [
    'MATCH (n: TaskCategory)',
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

function deleteTaskCategory(id){
	var query = [
    'MATCH (n: TaskCategory) WHERE ID(n)={id}',
		'DETACH DELETE n'
	];

	var params = {
		id: Number(id)
	};

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}

function getAllTaskCategory(){
	var query = [
    'MATCH (n: TaskCategory)',
    'RETURN n'
	];

	var params = {
	};

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}

function createTaskCategory(category){

 var query = [
   'CREATE (n: TaskCategory {category : {category}})',
   'RETURN n'
  ];

  var params = {
    category: category
  };

 return neodb.cypherAsync({
 query : query.join('\n'),
 params: params
  });
}

function updateTaskCategory(id, category)
{
    var query =
    [
      'MATCH (n: TaskCategory)',
      'WHERE id(n) = {id}',
      'SET n.category = {category}',
      'RETURN n'
    ];

    var params = {
      id: Number(id),
      category: category
    };

    return neodb.cypherAsync({
    query : query.join('\n'),
    params: params
    });
}
