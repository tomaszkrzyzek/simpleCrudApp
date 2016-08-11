var neo4j = require('neo4j');
var Promise = require('bluebird');
var bodyParser = require('body-parser');
var _ = require('lodash');

var graphDatabase = Promise.promisifyAll(neo4j).GraphDatabase;
var neodb = new graphDatabase('http://neo4j:password@localhost:7474');

module.exports = {
  getUserBy: getUserBy,
  getUser: getUser,
  updateUser: updateUser,
  createUser: createUser,
  deleteUser: deleteUser,
  getAllUser: getAllUser
};

function getUserBy(propertyName, propertyValue){
  var query = [
    'MATCH (n: User)',
		'WHERE n.' + propertyName + ' = {propertyValue}',
		'RETURN n'
	];

	var params = {
    propertyValue: propertyValue
	};

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	}).then(function(result){
    if(result && result[0]){
      var user = _.clone(result[0].n.properties);
      user.id = result[0].n._id;
      return user;
    } else{
      return null;
    }
  });
}

function getUser(id){
	var query = [
    'MATCH (n: User)',
		'WHERE id(n) = {id}',
		'RETURN n'
	];

	var params = {
		id: Number(id)
	};

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	}).then(function(result){
    if(result && result[0]){
      var user = _.clone(result[0].n.properties);
      user.id = result[0].n._id;
      return user;
    } else{
      return null;
    }
  });
}

function deleteUser(id){
	var query = [
    'MATCH (n: User) WHERE ID(n)={id}',
		'OPTIONAL MATCH (n)-[r]-()',
    'WITH n, r',
    'OPTIONAL MATCH (wl: WorkLog)-[:HAS_USER]->(n)',
    'WITH n, r, wl',
    'OPTIONAL MATCH (wl)-[r1]-()',
    'DELETE r, n, r1, wl'
	];

	var params = {
		id: Number(id)
	};

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}

function getAllUser(){
	var query = [
    'MATCH (n: User)',
    'RETURN n'
	];

	var params = {
	};

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}

function createUser(login, password, firstName, lastName){

 var query = [
   'CREATE (n: User {login : {login}, password : {password}, firstName : {firstName}, lastName : {lastName}})',
   'RETURN n'
  ];

  var params = {
    login: login,
    password: password,
    firstName: firstName,
    lastName: lastName
  };

 return neodb.cypherAsync({
 query : query.join('\n'),
 params: params
  });
}

function updateUser(id, login, password, firstName, lastName)
{
    var query =
    [
      'MATCH (n: User)',
      'WHERE id(n) = {id}',
      'SET n.login = {login}',
      'SET n.password = {password}',
      'SET n.firstName = {firstName}',
      'SET n.lastName = {lastName}',
      'RETURN n'
    ];

    var params = {
      id: Number(id),
      login: login,
      password: password,
      firstName: firstName,
      lastName: lastName
    };

    return neodb.cypherAsync({
    query : query.join('\n'),
    params: params
    });
}
