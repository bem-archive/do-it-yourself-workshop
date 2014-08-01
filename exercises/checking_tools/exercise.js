var exercise = require('workshopper-exercise')();

var path = require('path'),
    exec = require('child_process').exec,
    tools = ['node', 'git', 'yo'],
    toolVersions = [];

exercise.requireSubmission = false;
exercise.addProcessor(checkToolsDirs);

var failBrokenTool = function() {
    exercise.emit('fail', 'You should install needed tools: git, node and Yeoman');
    callback(null, false);
};

var checkToolsDirs = function(callback) {
    tools.map(function(tool) {
        var currentCommand = tool + ' --version';
        var currentToolVersion = exec(currentCommand, function(err, stdOut, stdErr) {
            if (err) {
                return failBrokenTool();
            }

            toolVersions.push(stdOut);
            console.log(toolVersions);
            callback(null, true);
        });
    });
};

module.exports.checkToolsDirs = checkToolsDirs;
module.exports = exercise;
