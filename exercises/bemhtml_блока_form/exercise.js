var exercise = require('workshopper-exercise')();

var path = require('path'),
    fs = require('fs'),
    correctHtml = 'form class="form',
    bemhtmlPath = path.resolve(__dirname + '../../..' + '/bfs-stub/desktop.bundles/index/index.bemhtml.js');

exercise.requireSubmission = false;

console.log('Проверяем правильность задания. Пожалуйста подождите.');

exercise.addVerifyProcessor(function (callback) {
    if (fs.existsSync(bemhtmlPath)) {
        var bemhtml = require(bemhtmlPath).BEMHTML;
        var htmlResult = bemhtml.apply({ block: 'form' });
        if (htmlResult.indexOf(correctHtml) > 0) {
            exercise.emit('pass', 'BEMHTML for FORM added');
            callback(null, true);
        } else {
            exercise.emit('fail', 'You should add BEMHTML template for block FORM');
        }
    } else {
        exercise.emit('fail', 'Compiled BEMHTML file not exist. You should run `bem make`, to compile project files');
    }
});


module.exports = exercise;
