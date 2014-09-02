В шапке, в свою очередь, будет расположена поисковая форма, содержащая необходимые элементы. Давайте добавим перечисленные сущности в `index.bemjson.js`. Шапка нашего проекта состоит из логотипа и поисковой формы:

```js
({
    block: 'header',
    content: [
        {
            block: 'logo',
            content: 'Social Services Search Robot'
        },
        {
            block: 'form',
            tag: 'form',
            content: [
                {
                    elem: 'search',
                    content: 'try me, baby!'
                }
            ]
        }
    ]
})
```

Откроем нашу страницу: http://localhost:8080/desktop.bundles/index/

По окончанию процесса сборки запустим `node bfs-workshop.js verify` для тестирования результатов этого шага.
