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
        exercise.emit('fail', 'Вам нужно установить необходимые инструменты: git, node и Yeoman');
        callback(null, false);
    }

    tools.map(function(tool) {
        var currentCommand = tool + ' --version';
        exec(currentCommand, function(err, stdOut, stdErr) {
            if (err) {
                _this.emit('fail', 'Необходимые инструменты не найдены.');
                return failBrokenTool();
            }

            toolVersions.push(stdOut);
            _this.emit('pass', 'Все инструменты установлены.');

            callback(null, true);
        });
    });
});


module.exports = exercise;
