var exercise = require('workshopper-exercise')();

var path = require('path'),
    fs = require('fs'),
    stringHeaderHtml = 'div class="header grid',
    stringContentHtml = 'div class="content grid',
    htmlPath = path.resolve(__dirname + '../../..' + '/bfs-stub/desktop.bundles/index/index.html');

exercise.requireSubmission = false;

console.log('Проверяем правильность задания. Пожалуйста подождите.');

exercise.addVerifyProcessor(function (callback) {
    if (fs.existsSync(htmlPath)) {
        var bundleHtml = fs.readFileSync(htmlPath, 'utf8');
        if ((bundleHtml.indexOf(stringHeaderHtml) > 0) && (bundleHtml.indexOf(stringContentHtml) > 0)) {
            exercise.emit('pass', 'BEMHTML for CONTENT and HEADER added');
            callback(null, true);
        } else {
            exercise.emit('fail', 'You should add BEMHTML template for blocks CONTENT and HEADER');
        }
    } else {
        exercise.emit('fail', 'Bundle files not exist. You should run `bem make`, to compile project files');
    }
});


module.exports = exercise;
