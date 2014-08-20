var exercise = require('workshopper-exercise')(),
    phantom = require('phantom'),
    url = 'http://localhost:8080/desktop.bundles/index/';

exercise.requireSubmission = false;

console.log('Проверяем правильность задания. Пожалуйста подождите.');

exercise.addVerifyProcessor(function (callback) {
    phantom.create(function (ph) {
        ph.createPage(function (page) {

            var failExercise = function(msg) {
                exercise.emit('fail', msg);
                ph.exit();
                callback(null, false);
            };

            page.onConsoleMessage(function(msg) { 
                //console.log(msg);
                if (msg === 'query send') {
                    exercise.emit('pass', 'событие стриггерирось.');
                    callback(null, true);
                    ph.exit();
                } else if (msg === 'finished') {
                    failExercise('Событие не поймано');
                }
            });

            page.open(url, function (status) {

                if (status === 'fail') {
                    failExercise('Сервер не запущен.');
                }

                page.evaluate(function() {
                    window.modules.require(['jquery'], function($){
                        window.setTimeout(function() {
                            $('.form__search .button').click();
                        }, 3000);
                    });

                }, console.log('finished'));
            });
        });
    });
});
module.exports = exercise;
