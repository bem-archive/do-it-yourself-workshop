var exercise = require('workshopper-exercise')(),
    phantom = require('phantom'),
    config = require('../../utils/config'),
    url = config.server_url;

exercise.requireSubmission = false;

console.log('Проверяем правильность задания. Пожалуйста подождите.');

exercise.addVerifyProcessor(function (callback) {
    phantom.create(function (ph) {
        ph.createPage(function (page) {

            var failExercise = function(msg) {
                exercise.emit('fail', msg);
                callback(null, false);
                ph.exit();
            };

            page.onConsoleMessage(function(msg) { 
                console.log(msg);
                if (msg === 'ajax loaded') {
                    exercise.emit('pass', 'ajax loaded');
                    callback(null, true);
                    ph.exit();
                } else if (msg === 'finished') {
                    failExercise('finished request, ajax failed');
                }
            });

            page.open(url, function (status) {

                console.log('page loaded? ', status);

                if (status === 'fail') {
                    failExercise('Сервер не запущен.');
                }

                page.evaluate(function() {
                    window.modules.require(['jquery'], function($){
                        console.log('jquery loaded. $: ', $);

                        window.setTimeout(function() {
                            $('.form__search .input__control').val('moscow');

                            $('.form').bem('form').emit('submit');
                        }, 400);


                        $('.form').bem('form').on('submit', function() {
                            console.log('form submitted');
                        });

                        window.setTimeout(function() {
                            console.log('finished');
                        }, 3000);
                    });

                });
            });
        });
    });
});
module.exports = exercise;
