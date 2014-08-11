Напишем шаблоны блоков `header` и `content`. Внимательно посмотрев на `index.bemjson.js`, вынесем повторяющиеся куски и
фрагменты, относящиеся к конкретным блокам, в отдельные шаблоны.

Начнем с блока `header`. В `index.bemjson.js`:

```js
block: 'header',
mix: { block: 'grid' }
```

Скопируем этот кусочек в шаблон `./desktop.blocks/header/header.bemhtml` и удалим его из `index.bemjson.js`:

```js
block('header').mix()({ block: 'grid' });
```

Сделаем то же самое с блоком `content`.
`./desktop.blocks/content/content.bemhtml`:

```js
block('content').mix()({ block: 'grid' });
```

Теперь мы можем редактировать шаблон блока в одном месте, переносить и реиспользовать этот блок с легкостью.

Чтобы код наших блоков попал в сборку, нужно либо явно указать блок в BEMJSON, либо добавить блок в зависимости к блоку, который уже есть в сборке. Для указания зависимостей используется технология `*.deps.js`. Подробнее про зависимости на сайте [bem.info](http://ru.bem.info/tools/bem/bem-tools/depsjs/).

Создадим файлы `desktop.blocks/content/content.deps.js` и `desktop.blocks/header/header.deps.js`:

```js
({
    shouldDeps: [
        { block: 'grid'}
    ]
})
```

После этого запустим `bem make` для сборки файлов нашего проекта.

По окончанию проесса сборки запустим `node bfs-workshop.js verify` для тестирования результатов этого шага.

