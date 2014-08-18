var exercise = require('workshopper-exercise')();

//var phantom = require('phantom');

//var path = require('path'),
    //url = 'http://localhost:8080/desktop.bundles/index/';
    //results = '';


exercise.requireSubmission = false;
exercise.addVerifyProcessor(function (callback) {
    exercise.emit('fail', 'Block `form` should be inited.');
    callback(null, false);
}

//phantom.create(function (ph) {
  //ph.createPage(function (page) {

    //page.onConsoleMessage = function(msg) {
        //console.log(msg);
    //};

    ////page.set('onConsoleMessage', function(msg) {
        ////console.log(msg);
    ////});

    //page.set('onCallback', function (data) {
        //console.log(JSON.stringify(data));
        //if (data.testing === 'passed')  {
            //console.log('passed');
            //exercise.emit('pass', 'Block `form` inited.');
            //callback(null, true);
        //} else {
            //console.log('fails');
            //exercise.emit('fail', 'Block `form` should be inited.');
        //}
        //ph.exit();
    //});

    //page.open(url, function (status) {
      //console.log('opened url(', url, '): ', status);
        //page.evaluate(function() {
            //console.log('evaluating...');
            //modules.require(['jquery'], function($) {
                //window.setTimeout(function() {
                    //if ($('.header__form').hasClass('form_js_not_inited')) {
                        //window.callPhantom({ testing: 'passed' });

                    //} else {
                        //window.callPhantom({ testing: 'fail' });
                    //}
                //}, 200);
            //});
        //}, function(result) { console.log(result); });
    //});
  //});
//});

module.exports = exercise;
