var neo4j = require('neo4j');
var Promise = require('bluebird');
var bodyParser = require('body-parser');

var graphDatabase = Promise.promisifyAll(neo4j).GraphDatabase;
var neodb = new graphDatabase('http://neo4j:password@localhost:7474');

module.exports = {
  deleteProjectMember: deleteProjectMember,
  getAllProjectMember: getAllProjectMember,
  createProjectMember: createProjectMember,
  updateProjectMember: updateProjectMember,
  getProjectMembersByUser: getProjectMembersByUser,
  getProjectMembersByProject: getProjectMembersByProject
};

function deleteProjectMember(projectId, userId){
	var query = [
    'MATCH (p: Project)-[r: HAS_USER]-(u: User)',
    'WHERE id(p)={projectId} AND id(u)={userId}',
		'DELETE r'
	];

	var params = {
		projectId: Number(projectId),
    userId: Number(userId)
	};

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}

function getAllProjectMember(id){
	var query = [
    //nie dziala
    'MATCH (p: Project)-[r: HAS_USER]->(u: User)',
    'WHERE (ID(p) = {id} OR ID(u) = {id})',
    'RETURN p, u, r'
	];

	var params = {
    id: Number(id)
  };

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}

function getProjectMembersByProject(id){
	var query = [
    'MATCH (p: Project)-[r: HAS_USER]->(u: User)',
    'WHERE ID(p) = {id}',
    'RETURN collect(u) as users'
	];

	var params = {
    id: Number(id)
  };

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}

function getProjectMembersByUser(id){
	var query = [
    'MATCH (p: Project)-[r: HAS_USER]->(u: User)',
    'WHERE id(u) = {id}',
    'RETURN collect(p) as projects'
	];

	var params = {
    id: Number(id)
  };

	return neodb.cypherAsync({
		query : query.join('\n'),
		params: params
	});
}

function createProjectMember(projectId, userId){

 var query = [
   'MATCH (p: Project)',
   'WHERE id(p) = {projectId}',
   'MATCH (u: User)',
   'WHERE id(u) = {userId}',
   'MERGE (p)-[r:HAS_USER]->(u)',
   'RETURN r'
  ];

  var params = {
    projectId: Number(projectId),
    userId: Number(userId),
  };

 return neodb.cypherAsync({
 query : query.join('\n'),
 params: params
  });
}

function updateProjectMember(id, projectId, userId){
    //???
    deleteProjectMember(id);
    createProjectMember(projectId, userId);
    var query =
    [
    ];

    var params = {
      id: Number(id),
      projectId: Number(projectId),
      userId: Number(userId),
    };

    return neodb.cypherAsync({
    query : query.join('\n'),
    params: params
    });
}
