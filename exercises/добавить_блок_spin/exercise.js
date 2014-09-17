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
                ph.exit();
                callback(null, false);
            };

            page.onConsoleMessage(function(msg) {
                console.log(msg);
            });


            page.set('onCallback', function(data) {
                if (data.msg === 'spin progress') {
                    exercise.emit('pass', 'Блок spin на месте.');
                    callback(null, true);
                    ph.exit();
                } else if (data.msg === 'finished') {
                    failExercise('У блока `spin` не был выставлен модификатор `progress`.');
                }
            });

            page.open(url, function (status) {

                if (status === 'fail') {
                    failExercise('Сервер не запущен.');
                }

                page.evaluate(function() {
                    window.modules.require(['jquery'], function($){
                        $('.form__search .input__control').val('bemup');
                        window.setTimeout(function() {
                            $('.form .button').click();
                            if ($('.spin').hasClass('spin_progress')) {
                                window.callPhantom({ msg: 'spin progress' });
                            } else {
                                window.callPhantom({ msg: 'finished' });
                            }
                        }, 300);
                    });

                });
            });
        });
    });
});
module.exports = exercise;
