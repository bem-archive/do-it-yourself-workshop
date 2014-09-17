var exercise = require('workshopper-exercise')();

var path = require('path'),
    fs = require('fs'),
    stringInputCss = '.input_theme_normal',
    stringButtonCss = '.button_theme_normal',
    cssPath = path.resolve(__dirname + '../../..' + '/bfs-stub/desktop.bundles/index/index.css');

exercise.requireSubmission = false;

console.log('Проверяем правильность задания. Пожалуйста, подождите.');

exercise.addVerifyProcessor(function (callback) {
    if (fs.existsSync(cssPath)) {
        var bundleCss = fs.readFileSync(cssPath, 'utf8');
        if ((bundleCss.indexOf(stringInputCss) > 0) && (bundleCss.indexOf(stringButtonCss) > 0)) {
            exercise.emit('pass', 'Блоки из bem-components найдены');
            callback(null, true);
        } else if (bundleCss.indexOf(stringInputCss) === -1) {
            exercise.emit('fail', 'Нужно добавить блок `input`.');
        } else if (bundleCss.indexOf(stringButtonCss) === -1) {
            exercise.emit('fail', 'Нужно добавить блок `button`.');
        }
    } else {
        exercise.emit('fail', 'Необходимо запустить bem make для сборки проекта.');
    }
});


module.exports = exercise;
