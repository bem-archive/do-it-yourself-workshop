var exercise = require('workshopper-exercise')(),
    path = require('path'),
    fs = require('fs');

var checkPaths = [
    'libs/bem-components/',
    'libs/bem-core/',
    'node_modules/bem/'
];

exercise.requireSubmission = false;

console.log('Проверяем правильность задания. Пожалуйста, подождите.');

exercise.addVerifyProcessor(function(callback) {

    var failExercise = function(msg) {
        exercise.emit('fail', msg);
        callback(null, false);
    };

    function passExercise(msg) {
        exercise.emit('pass', msg);
        callback(null, true);
    }

    var currentItem = 0;
    checkPaths.map(function(pathItem) {
        currentItem += 1;
        var currentPath = path.join(__dirname + '../../..' + '/bfs-stub/' + pathItem);
        fs.stat(currentPath, function(err, stat) {
            if (err || !stat.isDirectory()) {
                return failExercise('Вы должны установить generator-bem-stub с необходимыми параметрами.');
            } else if (currentItem === checkPaths.length) {
                currentItem = 0;
                return passExercise('Все библиотеки на месте!');
            }
        });
    });
});

module.exports = exercise;
