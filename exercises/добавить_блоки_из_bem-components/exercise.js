var exercise = require('workshopper-exercise')();

var path = require('path'),
    fs = require('fs'),
    stringInputCss = '.input_theme_normal',
    cssPath = path.resolve(__dirname + '../../..' + '/bfs-stub/desktop.bundles/index/index.css');

exercise.requireSubmission = false;

console.log('Проверяем правильность задания. Пожалуйста подождите.');

exercise.addVerifyProcessor(function (callback) {
    if (fs.existsSync(cssPath)) {
        var bundleCss = fs.readFileSync(cssPath, 'utf8');
        if (bundleCss.indexOf(stringInputCss) > 0) {
            exercise.emit('pass', 'Blocks from bem-components found');
            callback(null, true);
        } else {
            exercise.emit('fail', 'You should add blocks from `bem-components` to your BEMJSON');
        }
    } else {
        exercise.emit('fail', 'Bundle files not exist. You should run `bem make -m clean && bem make`, to compile project files');
    }
});


module.exports = exercise;
