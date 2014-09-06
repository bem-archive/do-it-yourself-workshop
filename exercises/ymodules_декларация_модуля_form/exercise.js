var exercise = require('workshopper-exercise')();

var path = require('path'),
    fs = require('fs'),
    modules = require('ym'),
    formBlockJs = path.resolve(__dirname + '../../..' + '/bfs-stub/desktop.blocks/form/form.js'),
    moduleResult = '';

exercise.requireSubmission = false;

console.log('Проверяем правильность задания. Пожалуйста подождите.');

exercise.addVerifyProcessor(function (callback) {
    if (fs.existsSync(formBlockJs)) {
        var form = require(formBlockJs);
        modules.require('form', function(form) {
            moduleResult = form.get();
            if (moduleResult.length > 0) {
                exercise.emit('pass', 'Модуль `form` загружен');
                callback(null, true);
            } else {
                exercise.emit('fail', 'Необходимо задекларировать модуль `form` в `js` реализации блока `form`');
                callback(null, false);
            }
        });
    } else {
        exercise.emit('fail', 'Не найден файл: ./desktop.blocks/form/form.js');
        callback(null, false);
    }

});


module.exports = exercise;
