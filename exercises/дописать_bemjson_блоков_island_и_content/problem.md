-------------------------------------------------------------------------------
**Задание**: В блок `content` добавить блок `island`, который должен состоять из следующих элементов:
* `header`
* `text`
* `footer`

В свою очередь, элемент `header` должен иметь такую структуру:

```html
<div class="island__header">
    <div class="user">
        <a class="link link__control user__name i-bem" data-bem="{"link":{}}" href="https://twitter.com/tadatuta">Владимир Гриненко @tadatuta</a>
        <div class="user__post-time">18 hours ago</div>
        <img class="image user__icon" src="https://pbs.twimg.com/profile_images/1384848690/image_400x400.jpg" alt="Владимир Гриненко">
    </div>
</div>
```

Обратите внимание, что, добавляя в блок `user` блоки `link` и `image`, вы должны примиксовать к этим блокам элементы блока `user` - `name` и `icon`, соответственно. Для миксов необходимо в BEMJSON использовать ключ `mix`.
Примеры использования блоков `image` (http://ru.bem.info/libs/bem-components/v2/desktop/image/) и `link` (http://ru.bem.info/libs/bem-components/v2/desktop/link/) можно посмотреть на сайте ru.bem.info.

Элемент `footer` на выходе должен получиться таким:

```html
<div class="island__footer">
    <div class="service service_type_twitter"></div>
</div>
```

Для добавления модификаторов необходимо в BEMJSON использовать ключ `mods`.

Элемент `text` пусть содержит в себе любую строку. Например, 'Твит про БЭМ #b_'.

-------------------------------------------------------------------------------

Перезагрузим нашу страницу: http://localhost:8080/desktop.bundles/index/

По окончанию процесса сборки запустим `node bfs-workshop.js verify` для тестирования результатов этого шага.
