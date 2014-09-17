var exercise = require('workshopper-exercise')();

var path = require('path'),
    fs = require('fs'),
    correctHtml = 'form class="form',
    bemhtmlPath = path.resolve(__dirname + '../../..' + '/bfs-stub/desktop.bundles/index/index.bemhtml.js');

exercise.requireSubmission = false;

console.log('Проверяем правильность задания. Пожалуйста, подождите.');

exercise.addVerifyProcessor(function (callback) {
    if (fs.existsSync(bemhtmlPath)) {
        var bemhtml = require(bemhtmlPath).BEMHTML;
        var htmlResult = bemhtml.apply({ block: 'form' });
        if (htmlResult.indexOf(correctHtml) > 0) {
            exercise.emit('pass', 'BEMHTML блока form на месте');
            callback(null, true);
        } else {
            exercise.emit('fail', 'Нужно добавить BEMHTML шаблон блока `form` и пересобрать проект.');
        }
    } else {
        exercise.emit('fail', 'index.bemhtml.js не существует. Необходимо запустить bem make для сборки проекта.');
    }
});


module.exports = exercise;
