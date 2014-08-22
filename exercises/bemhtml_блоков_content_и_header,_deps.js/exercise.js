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
            exercise.emit('pass', 'BEMHTML блоков content и header на месте');
            callback(null, true);
        } else {
            exercise.emit('fail', 'Нужно добавить BEMHTML шаблоны блоков content и header');
        }
    } else {
        exercise.emit('fail', 'index.bemhtml.js не существует. Необходимо запустить bem make для сборки проекта.');
    }
});


module.exports = exercise;
