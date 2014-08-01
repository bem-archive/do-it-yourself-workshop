var exercise = require('workshopper-exercise')(),
    path = require('path'),
    fs = require('fs');

exercise.requireSubmission = false;

var checkPaths = [
    'libs/bem-components',
    'libs/bem-core',
    'node_modules/bem'
];

checkPaths.map(function(pathItem) {
    var currentPath = path.join(__dirname + '../../../' + '/bem-stub/' + pathItem);
    console.log(currentPath);
});

module.exports = exercise;
