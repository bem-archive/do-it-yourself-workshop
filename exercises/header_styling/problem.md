Займемся CSS. Добавим оформление для блока `header`. Для этого отредактируем нужные файлы:

Воспользуемся для этого уже написанными стилями, которые вы можете взять из нашего репозитория:

 * [bfs-stub/desktop.blocks/header/header.css](https://github.com/bem/sssr/blob/master/desktop.blocks/header/header.css)
 * [bfs-stub/desktop.blocks/logo/logo.css](https://github.com/bem/sssr/blob/master/desktop.blocks/logo/logo.css)
 * [bfs-stub/desktop.blocks/form/form.roo](https://github.com/bem/sssr/blob/master/desktop.blocks/form/form.roo)
 * [bfs-stub/desktop.blocks/grid/grid.css](https://github.com/bem/sssr/blob/master/desktop.blocks/grid/grid.css)

На этом проекте мы используем как чистый CSS, так и препроцессор [roole](http://roole.org). В ходе сборки CSS файлы обрабатываются препроцессором, затем склеиваются.

После добавления стилей запустим `bem server` для сборки файлов нашего проекта и запуска сервера для разработки. Теперь можно посмотреть на результаты нашей работы по адресу, на котором поднялся наш `bem server`: [localhost:8080/desktop.bundles/index/](http://localhost:8080/desktop.bundles/index/)

По окончанию проесса сборки запустим `node bfs-workshop.js verify` для тестирования результатов этого шага.

