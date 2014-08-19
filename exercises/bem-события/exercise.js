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

            page.onConsoleMessage(function(msg) { 
                console.log(msg);
                if (msg === 'form submitted with BEM-event') {
                    exercise.emit('pass', 'событие стриггерирось.');
                    callback(null, true);
                    ph.exit();
                } else if (msg === 'finished') {
                    failExercise('Событие не поймано');
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
                        $('.form__search .button').click();
                        window.setTimeout(function() {
                            window.callPhantom({ msg: 'finished' });
                        }, 300);
                    });

                });
            });
        });
    });
});
module.exports = exercise;
