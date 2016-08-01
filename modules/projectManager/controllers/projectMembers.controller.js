var express = require('express');
var service = require('./../services/projectMembers.service');

function deleteProjectMember(req, res, next) {
    var projectId = req.query.project;
    var userId = req.query.user;
    service.deleteProjectMember(projectId, userId).then(function(data) {
        res.send(data[0]);
    });
}

function getAllProjectMember(req, res, next) {
    var id = req.params[0];
    service.getAllProjectMember(id).then(function(data) {
        res.send(data[0]);
    });
}

function createProjectMember(req, res, next) {
    service.createProjectMember(req.body.projectId, req.body.userId).then(function(data) {
        res.send(data[0]);
    });
}

function updateProjectMember(req, res, next) {
    var id = req.params[0];
    service.updateProjectMember(id, req.body.projectId, req.body.userId).then(function(data) {
        res.send(data[0]);
    });
}

function getProjectMembersByProject(req, res, next){
  var id = req.params[0];
  service.getProjectMembersByProject(id).then(function(data) {
      res.send(data[0]);
  });
}

function getProjectMembersByUser(req, res, next){
  var id = req.params[0];
  service.getProjectMembersByUser(id).then(function(data) {
      res.send(data[0]);
  });

}

module.exports = {
    deleteProjectMember: deleteProjectMember,
    getAllProjectMember: getAllProjectMember,
    createProjectMember: createProjectMember,
    updateProjectMember: updateProjectMember,
    getProjectMembersByUser: getProjectMembersByUser,
    getProjectMembersByProject: getProjectMembersByProject
};
