Используя знания о том, как добавлять сущности на страницу, давайте допишем BEMJSON блока header. Перед этим введем несколько новых ключевых слов:

 * `mix` — позволяет разместить несколько БЭМ-сущностей на одной DOM-ноде;
 * `tag` — позволяет явно задать какой html-тэг использовать для текущей БЭМ-сущности;
 * `js` — указывает на то, имеет ли блок js-реализацию.

```js
({
block: 'header',
    content: [
        {
            block: 'logo',
            mix: { block: 'header', elem: 'logo' },
            content: 'Social Services Search Robot:'
        },
        {
            block: 'form',
            tag: 'form',
            js: true,
            mix: { block: 'header', elem: 'form' },
            content: [
                {
                    elem: 'search',
                    content: 'Search form controls will be here'
                }
            ]
        }
    ]
})
```

После этого запустим `bem make` для сборки файлов нашего проекта.

По окончанию процесса сборки запустим `node bfs-workshop.js verify` для тестирования результатов этого шага.
