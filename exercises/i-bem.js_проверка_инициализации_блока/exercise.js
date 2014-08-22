var exercise = require('workshopper-exercise')();
var phantom = require('phantom');

var path = require('path'),
    url = 'http://localhost:8080/desktop.bundles/index/';

exercise.requireSubmission = false;

console.log('Проверяем правильность задания. Пожалуйста подождите.');

exercise.addVerifyProcessor(function (callback) {
    phantom.create(function (ph) {
    ph.createPage(function (page) {

        //page.set('onConsoleMessage', function (arguments) {
            //console.log(arguments);
        //});

        //page.onConsoleMessage = function(msg) {
            //console.log(msg);
        //};

        page.set('onCallback', function (data) {
            if (data.testing === 'passed')  {
                exercise.emit('pass', 'блок `form` инициализирован');
                ph.exit();
                callback(null, true);
            } else {
                exercise.emit('fail', 'блок `form` не инициализирован');
                ph.exit();
            }
        });

        page.open(url, function (status) {
            console.log('opened url(', url, '): ', status);
            page.evaluate(function() {
                modules.require(['jquery'], function($) {
                    window.setTimeout(function() {
                        if ($('.header__form').hasClass('form_js_inited')) {
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
