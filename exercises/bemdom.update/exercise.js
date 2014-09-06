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
                if (msg === 'updated') {
                    exercise.emit('pass', 'HTML updated');
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
                        var contentHtml = $('.content').html();
                        $('.sssr').removeClass('sssr_autoscroll');
                        $('.form__search .input__control').val('bemup');
                        window.setTimeout(function() {
                            $('.form__search :submit').click();
                            window.setTimeout(function() {
                                var updatedHtml = $('.content').html();
                                if (updatedHtml !== contentHtml) {
                                    console.log('updated');
                                } else {
                                    console.log('finished');
                                }
                            }, 4000);
                        }, 300);
                    });

                });
            });
        });
    });
});
module.exports = exercise;
