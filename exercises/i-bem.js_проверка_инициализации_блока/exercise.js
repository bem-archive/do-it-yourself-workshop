var exercise = require('workshopper-exercise')();
exercise.requireSubmission = false;

var path = require('path'),
    childProcess = require('child_process'),
    phantomjs = require('phantomjs'),
    binPath = phantomjs.path,
    results = '';

var childArgs = [
  path.join(__dirname, 'phantom-test.js')
]

childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
    results = stdout;
    exercise.addVerifyProcessor(function (callback) {
        if (results.indexOf('passed') > -1) {
            exercise.emit('pass', 'Blocks and elements added');
            callback(null, true);
        } else {
            exercise.emit('fail', 'You should add all needed `js` code to the block FORM');
        }
    });
});



module.exports = exercise;
