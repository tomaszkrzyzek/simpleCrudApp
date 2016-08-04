var express = require('express');
var service = require('./../services/featureCategories.service');

function deleteFeatureCategory(req, res, next) {
    var id = req.params[0];
    service.deleteFeatureCategory(id).then(function(data) {
        res.send(data[0]);
    });
}

function getFeatureCategory(req, res, next) {
    var id = req.params[0];
    service.getFeatureCategory(id).then(function(data) {
        res.send(data[0]);
    });
}

function getAllFeatureCategory(req, res, next) {
    service.getAllFeatureCategory().then(function(data) {
        var fs = [];
        data.forEach(function (r){
          fs.push({
            id: r.n._id,
            name: r.n.properties.category
          });
        });
        res.send(fs);
    });
}

function createFeatureCategory(req, res, next) {
    service.createFeatureCategory(req.body.category).then(function(data) {
        res.send(data[0]);
    });
}

function updateFeatureCategory(req, res, next) {
    var id = req.params[0];
    service.updateFeatureCategory(id, req.body.category).then(function(data) {
        res.send(data[0]);
    });
}

module.exports = {
    getFeatureCategory: getFeatureCategory,
    updateFeatureCategory: updateFeatureCategory,
    createFeatureCategory: createFeatureCategory,
    deleteFeatureCategory: deleteFeatureCategory,
    getAllFeatureCategory: getAllFeatureCategory
};
