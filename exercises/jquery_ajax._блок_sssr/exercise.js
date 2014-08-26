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
                ph.exit();
                callback(null, false);
            };

            page.onConsoleMessage(function(msg) { 
                //console.log(msg);
                if (msg === 'ajax loaded') {
                    exercise.emit('pass', 'ajax loaded');
                    callback(null, true);
                    ph.exit();
                } else if (msg === 'finished') {
                    failExercise('finished request, failed');
                } else if (msg === 'ajax failed') {
                    failExercise('ajax not loaded');
                }
            });


            page.set('onCallback', function(data) {
                if (data.msg === 'finished') { 
                    failExercise('Page loaded. Timer done. Nothing happens.');
                }
            });

            page.open(url, function (status) {

                if (status === 'fail') {
                    failExercise('Сервер не запущен.');
                }

                page.evaluate(function() {
                    window.modules.require(['jquery'], function($){
                        $('.form__search .input__control').val('bemup');
                        $('.form').bem('form').emit('submit');
                        window.setTimeout(function() {
                            window.callPhantom({ msg: 'finished' });
                        }, 3000);
                    });

                });
            });
        });
    });
});
module.exports = exercise;
