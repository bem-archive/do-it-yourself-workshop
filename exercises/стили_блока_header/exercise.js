var exercise = require('workshopper-exercise')();

var path = require('path'),
    fs = require('fs'),
    bundlePath = path.resolve(__dirname + '../../..' + '/bfs-stub/desktop.bundles/index/index.css'),
    stringHeaderCss = '.header',
    stringFormCss = '.form__search';

exercise.requireSubmission = false;

exercise.addVerifyProcessor(function (callback) {
    if (fs.existsSync(bundlePath)) {
        var indexCss = fs.readFileSync(bundlePath, 'utf8');
        if ((indexCss.indexOf(stringHeaderCss) > 0) && (indexCss.indexOf(stringFormCss) > 0)) {
            exercise.emit('pass', 'CSS added');
            callback(null, true);
        } else {
            exercise.emit('fail', 'You should add all needed CSS styling for blocks');
        }
    } else {
        exercise.emit('fail', 'Compiled CSS file not exist. You should run bem make, to compile project files');
    }
});


module.exports = exercise;
