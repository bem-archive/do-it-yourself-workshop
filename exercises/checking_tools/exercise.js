var exercise = require('workshopper-exercise')();

var path = require('path'),
    exec = require('child_process').exec,
    tools = ['node', 'git', 'yo'],
    toolVersions = [];

exercise.requireSubmission = false;

tools.map(function(tool) {
    var currentCommand = tool + ' --version';
    var currentToolVersion = exec(currentCommand, function(err, stdOut, stdErr) {
        toolVersions.push(stdOut);
        console.log(toolVersions);
    });
});

module.exports = exercise;
