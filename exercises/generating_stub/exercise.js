var exercise = require('workshopper-exercise')(),
    path = require('path'),
    fs = require('fs'),
    _this;

var checkPaths = [
    'libs/bem-components/',
    'libs/bem-core/',
    'node_modules/bem/'
];

exercise.requireSubmission = false;

exercise.addVerifyProcessor(function (callback) {
    _this = this;
    function failBadPath() {
        exercise.emit('fail', 'You should install generator-bem-stub with needed params.')
    }
    checkPaths.map(function(pathItem) {
        var currentPath = path.join(__dirname + '../../..' + '/bfs-stub/' + pathItem);
        console.log(currentPath);
        fs.stat(currentPath, function(err, stat) {
            if (err) return failBadPath();
            if (!stat.isDirectory()) return failBadPath();
            exercise.emit('pass', 'Libraries on the places');
            callback(null, true);
        });
    });
});



module.exports = exercise;
