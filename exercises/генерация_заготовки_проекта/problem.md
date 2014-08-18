## Генерация заготовки проекта

У вас должен быть установлен и настроен генератор `Yeoman` и `generator-bem-stub`.
Теперь, в корневой папке `bfs-workshop`  необходимо запустить команду:

```
yo bem-stub
```

Пройдемся по вопросам:

```
$ yo bem-stub
[?] How to name the project? bfs-stub
[?] Who will mantain this project? Dima Belitsky
[?] What email to use? dmtry@yandex-team.ru
[?] What collector to use? bem-tools
[?] What base library to use? bem-core
[?] Would you like any additional libraries? bem-components
[?] What platforms to use? desktop
[?] Use design from bem-components? Yes
[?] What technologies to use? bemjson.js, bemtree, bemhtml, browser.js+bemhtml, node.js
[?] Build static html? Yes
```

Вы видите результаты ответов на вопросы. Первые три вопроса очевидны, после начинается интересное:

* 'What collector to use?' («Какой сборщик использовать?») — мы используем инструмент `bem-tools`. Это утилита, которая будет собирать наш проект — склеивать стили, скрипты, шаблоны, компилировать и оптимизировать в соответствии с декларацией страницы, зависимостями блоков и файлами конфигурации.
* 'What base library to use?' («Какую базовую библиотеку использовать?») – мы выбираем библиотеку [bem-core](http://ru.bem.info/libs/bem-core/), которая содержит в себе все необходимые нам технологии, шаблонизаторы и фреймворк для написания клиентского JavaScript — `i-bem.js`.
* 'Would you like any additional libraries?' («Хотим ли мы использовать дополнительные библиотеки?») – в нашем проекте мы будем использовать библиотеку блоков [bem-components](http://ru.bem.info/libs/bem-components/). В ней есть опциональные стилевые темы.

После того, как вы сгенерируете заготовку проекта и установщик установит все необходимые зависимости, нужно будет запустить проверку этого шага:
`node bfs-workshop.js verify`
