var exercise = require('workshopper-exercise')();

var path = require('path'),
    fs = require('fs'),
    bundlePath = path.resolve(__dirname + '../../..' + '/bfs-stub/desktop.bundles/index/index.html'),
    stringHeaderHtml = 'div class=\"header',
    stringContentHtml = 'div class=\"content';

exercise.requireSubmission = false;

console.log('Проверяем правильность задания. Пожалуйста, подождите.');

exercise.addVerifyProcessor(function (callback) {
    if (fs.existsSync(bundlePath)) {
        indexHtml = fs.readFileSync(bundlePath, 'utf8');
        if ((indexHtml.indexOf(stringHeaderHtml) > 0) && (indexHtml.indexOf(stringContentHtml) > 0)) {
            exercise.emit('pass', 'Блоки добавлены');
            callback(null, true);
        } else {
            exercise.emit('fail', 'Вы должны добавить все необходимые блоки в BEMJSON');
        }
    } else {
        exercise.emit('fail', 'Файл index.html не существует. Вы должны запустить `bem make` для того, чтобы собрать проект.');
    }
});

module.exports = exercise;
