var exercise = require('workshopper-exercise')(),
    phantom = require('phantom'),
    url = 'http://localhost:3000';

exercise.requireSubmission = false;


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
                if (msg === 'html equal') {
                    exercise.emit('pass', 'HTML updated');
                    callback(null, true);
                    ph.exit();
                } else if (msg === 'finished') {
                    failExercise('Событие не поймано');
                }
            });


            page.set('onCallback', function(data) {
                if (data.msg === 'finished') { 
                    failExercise('Page loaded. Timer done.');
                } else if (data.msg ==='updated'){
                    exercise.emit('pass', 'HTML updated');
                    callback(null, true);
                    ph.exit();
                }
            });

            page.open(url, function (status) {

                if (status === 'fail') {
                    failExercise('Сервер не запущен.');
                }

                page.evaluate(function() {
                    window.modules.require(['jquery'], function($){
                        var contentHtml = $('.content').html();
                        $('.form__search .input__control').val('bemup');
                        $('.form__search .button').click();
                        window.setTimeout(function() {
                            var updatedHtml = $('.content').html();
                            if (updatedHtml !== contentHtml) {
                                window.callPhantom({ msg: 'updated' });
                            } else {
                                window.callPhantom({ msg: 'finished' });
                            }
                        }, 2000);
                    });

                });
            });
        });
    });
});
module.exports = exercise;
