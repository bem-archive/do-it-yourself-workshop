var exercise = require('workshopper-exercise')(),
    phantom = require('phantom'),
    url = 'http://localhost:3000/';

exercise.requireSubmission = false;


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
                    failExercise('Page loaded. Timer done.');
                }
            });

            page.open(url, function (status) {

                if (status === 'fail') {
                    failExercise('Сервер не запущен.');
                }

                page.evaluate(function() {
                    window.modules.require(['jquery'], function($){
                        $('.form__search .input__control').val('bemup');
                        $('.form__search .button').click();
                        window.setTimeout(function() {
                            window.callPhantom({ msg: 'finished' });
                        }, 2000);
                    });

                });
            });
        });
    });
});
module.exports = exercise;
