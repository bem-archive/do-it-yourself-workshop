var exercise = require('workshopper-exercise')();

var path = require('path'),
    exec = require('child_process').exec,
    tools = ['node', 'git', 'yo'],
    toolVersions = [],
    _this;

exercise.requireSubmission = false;

exercise.addVerifyProcessor(function (callback) {
    _this = this;
    function failBrokenTool() {
        exercise.emit('fail', 'You should install needed tools: git, node and Yeoman');
        callback(null, false);
    }

    tools.map(function(tool) {
        var currentCommand = tool + ' --version';
        exec(currentCommand, function(err, stdOut, stdErr) {
            if (err) {
                _this.emit('fail', 'Needed tools not found');
                return failBrokenTool();
            }

            toolVersions.push(stdOut);
            _this.emit('pass', 'All needed tools installed');

            callback(null, true);
        });
    });
});


module.exports = exercise;
