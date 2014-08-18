var exercise = require('workshopper-exercise')(),
    phantom = require('phantom'),
    url = 'http://localhost:8080/desktop.bundles/index/';

exercise.requireSubmission = false;

exercise.addVerifyProcessor(function (callback) {
    phantom.create(function (ph) {
        ph.createPage(function (page) {

            page.onConsoleMessage = function(msg) {
                console.log(msg);
            };

            page.set('onCallback', function (data) {
                if (data.testing === 'passed')  {
                    exercise.emit('pass', 'задание выполнено!');
                    ph.exit();
                    callback(null, true);
                } else {
                    exercise.emit('fail', 'Решение не верное. Проверьте еще.');
                    ph.exit();
                }
            });

            page.open(url, function (status) {
            console.log('opened url(', url, '): ', status);
                page.evaluate(function() {
                    modules.require(['jquery'], function($) {
                        window.setTimeout(function() {
                            if ($('.header__form .button').click()) {
                                window.callPhantom({ testing: 'passed' });
                            } else {
                                window.callPhantom({ testing: 'fail' });
                            }
                        }, 200);
                    });
                });
            });
        });
    });
});
module.exports = exercise;
