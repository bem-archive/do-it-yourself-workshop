Нам осталось оформить обрамление страницы — блоки `content` и `page`. Скопируем стили блоков нашего проекта:

 * [блок `page`](https://github.com/bem/sssr/blob/master/desktop.blocks/page/page.css)
 * [блок `content`](https://github.com/bem/sssr/blob/master/desktop.blocks/content/content.css)

После добавления стилей запустим `bem server` для сборки файлов нашего проекта и запуска сервера для разработки. Теперь можно посмотреть на результаты нашей работы по адресу, на котором поднялся наш `bem server`: [localhost:8080/desktop.bundles/index/](http://localhost:8080/desktop.bundles/index/)

По окончанию проесса сборки запустим `node bfs-workshop.js verify` для тестирования результатов этого шага.
