var exercise = require('workshopper-exercise')();

var path = require('path'),
    fs = require('fs'),
    bundlePath = path.resolve(__dirname + '../../..' + '/bfs-stub/desktop.bundles/index/index.html'),
    stringHeaderHtml = 'div class=\"header',
    stringContentHtml = 'div class=\"content';

exercise.requireSubmission = false;

exercise.addVerifyProcessor(function (callback) {
    if (fs.existsSync(bundlePath)) {
        indexHtml = fs.readFileSync(bundlePath, 'utf8');
        if ((indexHtml.indexOf(stringHeaderHtml) > 0) && (indexHtml.indexOf(stringContentHtml) > 0)) {
            exercise.emit('pass', 'Blocks added');
            callback(null, true);
        } else {
            exercise.emit('fail', 'You should add all needed blocks to BEMJSON file');
        }
    } else {
        exercise.emit('fail', 'Index.html not exist. You should run bem make, to compile project files');
    }
});


module.exports = exercise;
