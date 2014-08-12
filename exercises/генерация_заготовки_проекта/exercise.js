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
        exercise.emit('fail', 'Вы должны установить generator-bem-stub с необходимыми параметрами.')
    }
    checkPaths.map(function(pathItem) {
        var currentPath = path.join(__dirname + '../../..' + '/bfs-stub/' + pathItem);
        console.log(currentPath);
        fs.stat(currentPath, function(err, stat) {
            if (err) return failBadPath();
            if (!stat.isDirectory()) return failBadPath();
            exercise.emit('pass', 'Все библиотеки на месте.');
            callback(null, true);
        });
    });
});



module.exports = exercise;
