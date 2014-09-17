var exercise = require('workshopper-exercise')();

var path = require('path'),
    fs = require('fs'),
    bundlePath = path.resolve(__dirname + '../../..' + '/bfs-stub/desktop.bundles/index/index.css'),
    cssStrings = [
        '.page',
        '.content',
        '.header',
        '.island',
        '.island__image',
        '.island__footer'
    ];

exercise.requireSubmission = false;

console.log('Проверяем правильность задания. Пожалуйста, подождите.');

exercise.addVerifyProcessor(function (callback) {
    if (fs.existsSync(bundlePath)) {

        var indexCss = fs.readFileSync(bundlePath, 'utf8');
        cssStrings.forEach(function(cssString) {
            if (indexCss.indexOf(cssString) < 0) {
                var msg = 'Вам нужно добавить CSS: ' + cssString.slice(1);
                exercise.emit('fail', msg);
                callback(null, false);
            }
        });
        exercise.emit('pass', 'CSS стили блоков на месте');
        callback(null, true);
    } else {
        exercise.emit('fail', 'index.css не найден. Необходимо запустить bem make для сборки проекта.');
        callback(null, false);
    }
});


module.exports = exercise;
