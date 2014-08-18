var exercise = require('workshopper-exercise')();

var path = require('path'),
    exec = require('child_process').exec,
    tools = ['yo'],
    toolVersions = [];

exercise.requireSubmission = false;

exercise.addVerifyProcessor(function (callback) {

    tools.map(function(tool) {
        var currentCommand = tool + ' --version';
        exec(currentCommand, function(err, stdOut, stdErr) {
            if (err) {
                exercise.emit('fail', 'Необходимые инструменты не найдены');
                return;
            }

            toolVersions.push(stdOut);
            if (toolVersions.length === tools.length) {
                exercise.emit('pass', 'All needed tools installed');
                callback(null, true);
            }
        });
    });
});


module.exports = exercise;
