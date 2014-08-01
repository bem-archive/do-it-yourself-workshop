var exercise = require('workshopper-exercise')();

var path = require('path'),
    stubPath = path.resolve(__dirname + '../../..' + '/bfs-stub/'),
    bemhtmlPath = path.resolve(stubPath + '/desktop.bundles/index/' + '/index.bemhtml.js'),
    bemhtml = require(bemhtmlPath).BEMHTML;

    console.log(bemhtml.apply({ block: 'header'}));
    console.log(bemhtml.apply({ block: 'content'}));


exercise.requireSubmission = false;

module.exports = exercise;
