var exercise = require('workshopper-exercise')(),
    phantom = require('phantom'),
    url = 'http://localhost:8080/desktop.bundles/index/';

exercise.requireSubmission = false;

exercise.addVerifyProcessor(function (callback) {
    phantom.create(function (ph) {
        ph.createPage(function (page) {

            var failExercise = function(msg) {
                exercise.emit('fail', msg);
                ph.exit();
                callback(null, false);
            };

            page.onConsoleMessage = function(msg) {
                console.log(msg);
                if (msg === 'query send') {
                    exercise.emit('pass', 'задание выполнено!');
                    ph.exit();
                    callback(null, true);
                } else {
                    failExercise('Запрос не отослан');
                }
            };

            page.set('onCallback', function (data) {
                if (data.testing === 'passed')  {
                    exercise.emit('pass', 'задание выполнено!');
                    ph.exit();
                    callback(null, true);
                } else {
                    failExercise('Решение не верное. Проверьте еще.');
                }
            });

            page.open(url, function (status) {
                if (status === 'fail') {
                    failExercise('Сервер не запущен.');
                }
                console.log('url(', url, '): ', status);
                page.evaluate(function() {
                    window.setTimeout(function() {
                        window.console.log('query send');
                    }, 200);
                });
            });
        });
    });
});
module.exports = exercise;
