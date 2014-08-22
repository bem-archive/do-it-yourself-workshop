var exercise = require('workshopper-exercise')();

var path = require('path'),
    fs = require('fs'),
    modules = require('ym'),
    formBlockJs = path.resolve(__dirname + '../../..' + '/bfs-stub/desktop.blocks/form/form.js'),
    moduleResult = '';

exercise.requireSubmission = false;

console.log('Проверяем правильность задания. Пожалуйста подождите.');

exercise.addVerifyProcessor(function (callback) {
    if (fs.existsSync(formBlockJs)) {
        var form = require(formBlockJs);
        modules.require('form', function(form) {
            moduleResult = form.get();
            if (moduleResult.length > 0) {
                exercise.emit('pass', 'Module `form` required successfully!');
                callback(null, true);
            } else {
                exercise.emit('fail', 'You should define and require module `form` in your FORM block `js` tech realisation');
                callback(null, false);
            }
        });
    } else {
        exercise.emit('fail', 'There are no such file: ./desktop.blocks/form/form.js');
        callback(null, false);
    }

});


module.exports = exercise;
