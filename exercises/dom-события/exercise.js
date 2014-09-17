var exercise = require('workshopper-exercise')(),
    phantom = require('phantom'),
    config = require('../../utils/config'),
    url = config.server_url;

exercise.requireSubmission = false;

console.log('Проверяем правильность задания. Пожалуйста, подождите.');

exercise.addVerifyProcessor(function (callback) {
    phantom.create(function (ph) {
        ph.createPage(function (page) {

            var failExercise = function(msg) {
                exercise.emit('fail', msg);
                callback(null, false);
                ph.exit();
            };

            page.onConsoleMessage(function(msg) {
                //console.log(msg);
                if (msg === 'prevented') {
                    exercise.emit('pass', 'DOM-событие стриггерирось');
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
                            $('.form :submit').click();
                            window.setTimeout(function(){
                                console.log('finished');
                            }, 200);
                        }, 3000);
                    });

                });
            });
        });
    });
});
module.exports = exercise;
