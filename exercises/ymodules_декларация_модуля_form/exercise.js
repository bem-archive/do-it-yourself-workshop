var exercise = require('workshopper-exercise')();

var path = require('path'),
    fs = require('fs'),
    modules = require('ym'),
    formBlockJs = path.resolve(__dirname + '../../..' + '/bfs-stub/desktop.blocks/form/form.js'),
    form = require(formBlockJs),
    moduleResult = '';

exercise.requireSubmission = false;

exercise.addVerifyProcessor(function (callback) {
    
    modules.require('form', function(form) {
        moduleResult = form.get();
        if (moduleResult.length > 0) {
            exercise.emit('pass', 'Module `form` required successfully!');
            callback(null, true);
        } else {
            exercise.emit('fail', 'You should define and require module `form` in your FORM block `js` tech realisation');
        }
    });

});


module.exports = exercise;
