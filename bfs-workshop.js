#!/usr/bin/env node

var workshopper = require('workshopper'),
    path        = require('path')
    credits     = require('./credits'),
    menu        = require('./exercises/menu'),

    name        = 'node bfs-workshop.js',
    title       = 'Разработка приложения на полном стеке БЭМ',
    subtitle    = '\x1b[23mВыберите задание и нажмите \x1b[3mEnter\x1b[23m для начала';


function fpath (f) {
  return path.join(__dirname, f);
}


workshopper({
    name        : name,
    title       : title,
    subtitle    : subtitle,
    exerciseDir : fpath('./exercises/'),
    appDir      : __dirname,
    helpFile    : fpath('help.txt'),
    menuItems   : [ {
        name    : 'Авторы',
        handler : credits
    } ]
})
