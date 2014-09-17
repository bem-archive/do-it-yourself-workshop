var exercise = require('workshopper-exercise')();

var path = require('path'),
    fs = require('fs'),
    bundlePath = path.resolve(__dirname + '../../..' + '/bfs-stub/desktop.bundles/index/index.html'),
    errorArr = [
        ['island', 'Вам нужно добавить блок `island`'],
        ['island__header', 'Вам нужно добавить элемент `header` в блок `island`'],
        ['island__text', 'Вам нужно добавить элемент `text` в блок `island`'],
        ['island__footer', 'Вам нужно добавить элемент `footer` в блок `island`'],
        ['user', 'В элемент `header` блока `island` Вам нужно добавить блок `user` с его элементами'],
        ['link link__control user__name', 'Вам нужно добавить блок `link` с примиксованным к нему элементом `name` блока `user`'],
        ['user__post-time', 'Вам нужно добавить элемент `post-time` в блок `user`'],
        ['image user__icon', 'Вам нужно добавить блок `image` с примиксованным к нему элементом `icon` блока `user`'],
        ['service service_type_twitter', 'В элемент `footer` блока `island` Вам нужно добавить блок `service` с модификатором `type_twitter`']
    ];

exercise.requireSubmission = false;

console.log('Проверяем правильность задания. Пожалуйста, подождите.');

exercise.addVerifyProcessor(function (callback) {
    if (fs.existsSync(bundlePath)) {
        indexHtml = fs.readFileSync(bundlePath, 'utf8');
        msg = [];

        for(var i = 0; i < errorArr.length; i++) {
            var item = errorArr[i];
            if(indexHtml.indexOf(item[0]) === -1) {
                msg.push(item[1]);
            }
        }

        if(msg.length === 0) {
            exercise.emit('pass', 'Блоки добавлены');
            callback(null, true);
        } else {
            exercise.emit('fail', msg.join('\n'));
        }
    } else {
        exercise.emit('fail', 'index.html не существует. Необходимо запустить bem make для сборки проекта.');
    }
});


module.exports = exercise;
