var exercise = require('workshopper-exercise')();

var path = require('path'),
    fs = require('fs'),
    bundlePath = path.resolve(__dirname + '../../..' + '/bfs-stub/desktop.bundles/index/index.html'),
    stringIslandHtml = 'div class=\"island',
    stringIslandHeaderHtml = 'div class=\"island__header',
    stringIslandTextHtml = 'div class=\"island__text',
    stringIslandFooterHtml = 'div class=\"island__footer',
    stringIslandUserHtml = 'div class=\"user',
    stringIslandLinkMixHtml = 'a class=\"link link__control user__name',
    stringIslandPostTimeHtml = 'div class=\"user__post-time',
    stringIslandImageMixHtml = 'img class=\"image user__icon',
    stringIslandServiceHtml = 'div class=\"service service_type_twitter';

exercise.requireSubmission = false;

console.log('Проверяем правильность задания. Пожалуйста, подождите.');

exercise.addVerifyProcessor(function (callback) {
    if (fs.existsSync(bundlePath)) {
        indexHtml = fs.readFileSync(bundlePath, 'utf8');

        if ((indexHtml.indexOf(stringIslandHtml) > 0)
            && (indexHtml.indexOf(stringIslandHeaderHtml) > 0)
            && (indexHtml.indexOf(stringIslandTextHtml) > 0)
            && (indexHtml.indexOf(stringIslandFooterHtml) > 0)
            && (indexHtml.indexOf(stringIslandUserHtml) > 0)
            && (indexHtml.indexOf(stringIslandLinkMixHtml) > 0)
            && (indexHtml.indexOf(stringIslandPostTimeHtml) > 0)
            && (indexHtml.indexOf(stringIslandImageMixHtml) > 0)
            && (indexHtml.indexOf(stringIslandServiceHtml) > 0)
            ) {
            exercise.emit('pass', 'Блоки добавлены');
            callback(null, true);
        } else if (indexHtml.indexOf(stringIslandHtml) === -1) {
            exercise.emit('fail', 'Вам нужно добавить блок `island`');
        } else if (indexHtml.indexOf(stringIslandHeaderHtml) === -1) {
            exercise.emit('fail', 'Вам нужно добавить элемент `header` в блок `island`');
        } else if (indexHtml.indexOf(stringIslandTextHtml) === -1) {
            exercise.emit('fail', 'Вам нужно добавить элемент `text` в блок `island`');
        } else if (indexHtml.indexOf(stringIslandFooterHtml) === -1) {
            exercise.emit('fail', 'Вам нужно добавить элемент `footer` в блок `island`');
        } else if (indexHtml.indexOf(stringIslandUserHtml) === -1) {
            exercise.emit('fail', 'В элемент `header` блока `island` Вам нужно добавить блок `user` с его элементами');
        } else if (indexHtml.indexOf(stringIslandLinkMixHtml) === -1) {
            exercise.emit('fail', 'Вам нужно добавить блок `link` с примиксованным к нему элементом `name` блока `user`');
        } else if (indexHtml.indexOf(stringIslandPostTimeHtml) === -1) {
            exercise.emit('fail', 'Вам нужно добавить элемент `post-time` в блок `user`');
        } else if (indexHtml.indexOf(stringIslandImageMixHtml) === -1) {
            exercise.emit('fail', 'Вам нужно добавить блок `image` с примиксованным к нему элементом `icon` блока `user`');
        } else if (indexHtml.indexOf(stringIslandServiceHtml) === -1) {
            exercise.emit('fail', 'В элемент `footer` блока `island` Вам нужно добавить блок `service` с модификатором `type_twitter`');
        }
    } else {
        exercise.emit('fail', 'index.html не существует. Необходимо запустить bem make для сборки проекта.');
    }
});


module.exports = exercise;
