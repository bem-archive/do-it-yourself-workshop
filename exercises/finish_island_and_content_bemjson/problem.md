В содержимом блока `content` нашей страницы будем выводить блоки, содержащие отдельный твит:

```js
{
    block: 'content',
    mix: { block: 'grid' },
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
}
```

После этого запустим `bem make` для сборки файлов нашего проекта.

По окончанию процесса сборки запустим `node bfs-workshop.js verify` для тестирования результатов этого шага.
