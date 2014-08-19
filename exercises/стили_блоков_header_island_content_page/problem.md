Займемся CSS. Добавим оформление для блока `header`. Для этого отредактируем нужные файлы:

Воспользуемся для этого уже написанными стилями, которые вы можете взять из нашего репозитория:

 * bfs-stub/desktop.blocks/header/header.css — https://github.com/bem/sssr/blob/master/desktop.blocks/header/header.css
 * bfs-stub/desktop.blocks/logo/logo.css — https://github.com/bem/sssr/blob/master/desktop.blocks/logo/logo.css
 * bfs-stub/desktop.blocks/form/form.roo — https://github.com/bem/sssr/blob/master/desktop.blocks/form/form.roo
 * bfs-stub/desktop.blocks/grid/grid.css — https://github.com/bem/sssr/blob/master/desktop.blocks/grid/grid.css

На этом проекте мы используем как чистый CSS, так и препроцессор roole http://roole.org. В ходе сборки CSS файлы обрабатываются препроцессором, затем склеиваются.

После добавления стилей запустим `bem server` для сборки файлов нашего проекта и запуска сервера для разработки. Теперь можно посмотреть на результаты нашей работы по адресу, на котором поднялся наш `bem server`: http://localhost:8080/desktop.bundles/index/

По окончанию процесса сборки запустим `node bfs-workshop.js verify` для тестирования результатов этого шага.

Настало время привести в порядок оформление блока `island`.
Стили для этого блока и его элементов мы возьмем в нашем репозитории, в папке /desktop.blocks/island — https://github.com/bem/sssr/tree/master/desktop.blocks/island и перенесем их в наш проект.

После добавления стилей запустим `bem server` для сборки файлов нашего проекта и запуска сервера для разработки. Теперь можно посмотреть на результаты нашей работы по адресу, на котором поднялся наш `bem server`: http://localhost:8080/desktop.bundles/index/

По окончанию процесса сборки запустим `node bfs-workshop.js verify` для тестирования результатов этого шага.



Нам осталось оформить обрамление страницы — блоки `content` и `page`. Скопируем стили блоков нашего проекта:

 * [блок `page`](https://github.com/bem/sssr/blob/master/desktop.blocks/page/page.css);
 * [блок `content`](https://github.com/bem/sssr/blob/master/desktop.blocks/content/content.css).

После добавления стилей запустим `bem server` для сборки файлов нашего проекта и запуска сервера для разработки. Теперь можно посмотреть на результаты нашей работы по адресу, на котором поднялся наш `bem server`: http://localhost:8080/desktop.bundles/index/

По окончанию процесса сборки запустим `node bfs-workshop.js verify` для тестирования результатов этого шага.
