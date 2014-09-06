В предыдущих шагах мы разработали прототип нашего приложения. В нем есть все основные блоки, осталось добавить только блоки `input`, `button`, `icon`. Давайте допишем их в наш `BEMJSON`:

```javascript
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
            mix: { block: 'header', elem: 'form' },
            content: [
                {
                    elem: 'search',
                    content: [
                        {
                            block: 'input',
                            mods: { theme: 'normal', size: 'm', 'has-clear' : true },
                            name: 'query',
                            placeholder: 'try me, baby!'
                        },
                        {
                            block : 'button',
                            mods: { theme: 'normal', size: 'm' },
                            type: 'submit',
                            text: 'Найти'
                        }
                    ]
                }
            ]
        }
    ]
})
```

Зайдем на страницу проекта в браузере [localhost:8080/desktop.bundles/index/](http://localhost:8080/desktop.bundles/index/)

Посмотрим на новые блоки. Вы видите, что они уже стилизованы, у них есть JavaScript-функциональность. Все это приезжает к нам из библиотеки [bem-components](http://github.com/bem/bem-components/).

Мы указываем какие нам нужны контролы, какую стилевую тему им использовать и остальные параметры, позволяющие описывать текущую БЭМ-сущность. Документяция по блокам доступна на сайте [ru.bem.info/libs/bem-components/](http://ru.bem.info/libs/bem-components/).

По окончанию процесса сборки запустим `node bfs-workshop.js verify` для тестирования результатов этого шага.
