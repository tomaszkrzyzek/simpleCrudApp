var express = require('express');
var service = require('./../services/projects.service');

function deleteProject(req, res, next) {
    var id = req.params.id;
    service.deleteProject(id).then(function(data) {
        res.send(data[0]);
    });
}

function getProject(req, res, next) {
    var id = req.params.id;
    service.getProject(id).then(function(data) {
        res.send(data[0]);
    });
}

function getProjectNumber(req, res, next) {
    service.getProjectNumber().then(function(data) {
        res.send(data[0]);
    });
}

function createProject(req, res, next) {
    service.createProject(req.body.name, req.body.identifier, req.body.description).then(function(data) {
        res.send(data[0]);
    });
}

function updateProject(req, res, next) {
    var id = req.params.id;
    service.updateProject(id, req.body.name, req.body.identifier, req.body.description).then(function(data) {
        res.send(data[0]);
    });
}

function getProjectPage(req, res, next) {
    var fromItem = req.query.from;
    var toItem = req.query.to;
    var projectQuery = req.query.query;
    if (!projectQuery) {
        projectQuery = '';
    }
    service.getProjectPage(fromItem, toItem, projectQuery).then(function(data) {
        var projects = [];
        data.forEach(function(r) {
            projects.push({
                id: r.n._id,
                name: r.n.properties.name,
                identifier: r.n.properties.identifier,
                description: r.n.properties.description
            });

        });
        res.send(
            projects
        );
    });
}

module.exports = {
    getProjectPage: getProjectPage,
    getProject: getProject,
    updateProject: updateProject,
    createProject: createProject,
    deleteProject: deleteProject,
    getProjectNumber: getProjectNumber
};
