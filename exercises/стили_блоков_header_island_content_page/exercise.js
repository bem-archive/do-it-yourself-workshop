var exercise = require('workshopper-exercise')();

var path = require('path'),
    fs = require('fs'),
    bundlePath = path.resolve(__dirname + '../../..' + '/bfs-stub/desktop.bundles/index/index.css'),
    cssStrings = [
        '.page',
        '.content',
        '.header',
        '.form__search',
        '.island',
        '.island__footer'
    ];

exercise.requireSubmission = false;

exercise.addVerifyProcessor(function (callback) {
    if (fs.existsSync(bundlePath)) {

        var indexCss = fs.readFileSync(bundlePath, 'utf8');
        cssStrings.forEach(function(cssString) {
            if (indexCss.indexOf(cssString) < 0) {
                var msg = 'You should add all needed CSS styling for block: ' + cssString.slice(1);
                exercise.emit('fail', msg);
                callback(null, false);
            } 
        });
        exercise.emit('pass', 'All blocks CSS found.');
        callback(null, true);
    } else {
        exercise.emit('fail', 'Compiled CSS file not exist. You should run bem make, to compile project files');
        callback(null, false);
    }
});


module.exports = exercise;
