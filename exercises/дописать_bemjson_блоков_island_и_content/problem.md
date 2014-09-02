В содержимом блока `content` нашей страницы будем выводить блоки, содержащие отдельный твит:

```js
({
    block: 'content',
    content: [
        {
            block: 'island',
            content: [
                {
                    elem: 'header',
                    content: {
                        block: 'user',
                        content: [
                            {
                                elem: 'post-time',
                                content: 'time'
                            },
                            {
                                block: 'image',
                                mix: { block: 'user', elem: 'icon' },
                                url: 'https://pbs.twimg.com/profile_images/1384848690/image_400x400.jpg',
                                alt: 'user.name'
                            }
                        ]
                    }
                },
                {
                    elem: 'text',
                    content: 'Twitter message text'
                },
                {
                    elem: 'footer',
                    content: [
                        {
                            block: 'service',
                            mods: { type: 'twitter' }
                        }
                    ]
                }
            ]
        }
    ]
})
```

Откроем нашу страницу: http://localhost:8080/desktop.bundles/index/

По окончанию процесса сборки запустим `node bfs-workshop.js verify` для тестирования результатов этого шага.
