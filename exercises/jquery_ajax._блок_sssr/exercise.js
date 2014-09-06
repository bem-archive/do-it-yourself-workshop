var exercise = require('workshopper-exercise')(),
    phantom = require('phantom'),
    config = require('../../utils/config'),
    url = config.server_url;

exercise.requireSubmission = false;

console.log('Проверяем правильность задания. Пожалуйста, подождите.');

exercise.addVerifyProcessor(function (callback) {
    phantom.create('--ignore-ssl-errors=yes', function (ph) {
        ph.createPage(function (page) {

            var failExercise = function(msg) {
                exercise.emit('fail', msg);
                callback(null, false);
                ph.exit();
            };

            page.onConsoleMessage(function(msg) { 
                //console.log(msg);
                if (msg === 'ajax loaded') {
                    exercise.emit('pass', 'AJAX работает');
                    callback(null, true);
                    ph.exit();
                } else if (msg === 'finished') {
                    failExercise('finished request, ajax failed');
                }
            });

            page.open(url, function (status) {
                if (status === 'fail') {
                    failExercise('Сервер не запущен.');
                }

                page.evaluate(function() {
                    window.modules.require(['jquery'], function($){
                        $('.form .input__control').val('moscow');

                        $('.form :submit').click();

                        window.setTimeout(function() {
                            console.log('finished');
                        }, 6000);
                    });

                });
            });
        })
    }, { });
});
module.exports = exercise;
