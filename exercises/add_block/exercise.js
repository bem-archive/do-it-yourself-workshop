var exercise = require('workshopper-exercise')();

var path = require('path'),
    exec = require('child_process').exec,
    stubPath = path.resolve('../../' + '/bfs-stub/'),
    bemhtmlPath = path.resolve(stubPath + '/desktop.bundles/index/' + '/index.bemhtml.js'),
    bemhtml = require(bemhtmlPath).BEMHTML;

    console.log(bemhtml.apply({ block: 'header'}));
    console.log(bemhtml.apply({ block: 'content'}));


exercise.requireSubmission = false;

module.exports = exercise;
