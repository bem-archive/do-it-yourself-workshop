var exercise = require('workshopper-exercise')();

var path = require('path'),
    fs = require('fs'),
    bundlePath = path.resolve(__dirname + '../../..' + '/bfs-stub/desktop.bundles/index/index.html'),
    stringIslandHtml = 'div class=\"island',
    stringIslandFooterHtml = 'div class=\"island__footer',
    stringIslandHeaderHtml = 'div class=\"island__header';

exercise.requireSubmission = false;

console.log('Проверяем правильность задания. Пожалуйста подождите.');

exercise.addVerifyProcessor(function (callback) {
    if (fs.existsSync(bundlePath)) {
        indexHtml = fs.readFileSync(bundlePath, 'utf8');
        if ((indexHtml.indexOf(stringIslandHtml) > 0) && (indexHtml.indexOf(stringIslandHeaderHtml) > 0) && (indexHtml.indexOf(stringIslandFooterHtml) > 0)) {
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
