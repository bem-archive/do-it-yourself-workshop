var exercise = require('workshopper-exercise')();

var path = require('path'),
    exec = require('child_process').exec,
    gitVer,
    bemVer,
    nodeVer;

exercise.requireSubmission = false;

gitVer = exec('git --version',
    function(err, stdOut, stdErr) {
        console.log(stdOut);
});

module.exports = exercise;
