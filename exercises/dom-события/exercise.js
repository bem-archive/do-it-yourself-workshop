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
                if (msg === 'query send') {
                    exercise.emit('pass', 'событие стриггерирось.');
                    callback(null, true);
                } else {
                    failExercise('Событие не отловлено.');
                }
            });


            page.set('onCallback', function(data) {
                if (data.msg) { 
                    exercise.emit('pass', 'событие стриггерирось.');
                    callback(null, true);
                }
            });

            page.open(url, function (status) {

                if (status === 'fail') {
                    failExercise('Сервер не запущен.');
                }

                page.evaluate(function() {
                    window.modules.require(['jquery'], function($) {
                        console.log('query send');
                    });
                }, console.log('evaliating finished'));
            });
        });
    });
});
module.exports = exercise;
