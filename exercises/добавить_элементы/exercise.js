var exercise = require('workshopper-exercise')();

var path = require('path'),
    fs = require('fs'),
    bundlePath = path.resolve(__dirname + '../../..' + '/bfs-stub/desktop.bundles/index/index.html'),
    stringLogoHtml = 'div class=\"logo',
    stringFormHtml = 'div class=\"form',
    stringFormElemHtml = 'div class=\"form__search';

exercise.requireSubmission = false;

console.log('Проверяем правильность задания. Пожалуйста, подождите.');

exercise.addVerifyProcessor(function (callback) {
    if (fs.existsSync(bundlePath)) {
        indexHtml = fs.readFileSync(bundlePath, 'utf8');
        if ((indexHtml.indexOf(stringFormHtml) > 0)
            && (indexHtml.indexOf(stringFormElemHtml) > 0)
            && (indexHtml.indexOf(stringLogoHtml) > 0)) {
            exercise.emit('pass', 'Блоки и элементы добавлены');
            callback(null, true);
        } else if (indexHtml.indexOf(stringLogoHtml) === -1){
            exercise.emit('fail', 'Вам нужно добавить блок `logo` в BEMJSON');
        } else if (indexHtml.indexOf(stringFormHtml) === -1){
            exercise.emit('fail', 'Вам нужно добавить блок `form` в BEMJSON');
        } else if (indexHtml.indexOf(stringFormElemHtml) === -1){
            exercise.emit('fail', 'Вам нужно добавить элемент `search` для блока `form` в BEMJSON');
        }
    } else {
        exercise.emit('fail', 'index.html не существует. Необходимо запустить bem make для сборки проекта.');
    }
});


module.exports = exercise;
