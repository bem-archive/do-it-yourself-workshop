var exercise = require('workshopper-exercise')(),
    phantom = require('phantomjs-node'),
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

            page.set.onConsoleMessage = function(msg) { 
                console.log(msg);
            };

            page.set('onCallback', function(data) {
                if (data.msg) { 
                    exercise.emit('pass', 'Событие стриггерирось.');
                    callback(null, true);
                }
            });

            page.open(url, function (status) {

                if (status === 'fail') {
                    failExercise('Сервер не запущен.');
                }

                page.evaluate(function() {
                    //window.callPhantom({ msg: 'DOM-event emited'});
                    window.modules.require(['jquery'], function($) {
                        $('.form__search').bem('form').on('submit', function(e) { console.log('msg send'); });
                    });
                }, console.log('evaliating finished'));
            });
        });
    });
});
module.exports = exercise;
