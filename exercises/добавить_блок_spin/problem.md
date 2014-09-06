### Добавим блок `spin`

После нажатия на кнопку отправки формы у нас происходит какое-то действие, однако оно незаметно. Создается ощущение, что сервис «завис».
Давайте исправим это и добавим блок `spin`, который будет служить индикатором процесса отправки запроса. Добавим блок в BEMJSON-декларацию. Исходный код блока находится в библиотеке `bem-components` и имеет собственное API.

`./desktop.bundles/index/index.bemjson.js`:

```js
({
    block: 'form',
    mix: { block: 'header', elem: 'form' },
    content: [
        {
            elem: 'search',
            content: [
                {
                    block: 'input',
                    mods: { theme: 'normal', size: 'm', 'has-clear': true },
                    name: 'query',
                    placeholder: 'try me, baby!'
                },
                {
                    block: 'button',
                    mods: { theme: 'normal', size: 'm' },
                    type: 'submit',
                    text: 'Найти'
                },
                {
                    block: 'spin',
                    mods: { theme: 'normal', size: 's' }
                }
            ]
        },
        //...
    ]
})
```

Протестируем его работу из консоли браузера:

```js
modules.require(['jquery'], function($) {
    $('.spin').bem('spin').setMod('progress');
})
```

Мы выставили булевый модификатор `spin_progress` в значение `true` и должны увидеть вращающийся спинер рядом с полем ввода.

Добавим стили для этого блока в файл `./desktop.blocks/sssr/sssr.css`:

```CSS
.sssr .spin
{
    margin-left: 1em;
    vertical-align: middle;
}
```

Сделаем так, чтобы индикатор загрузки показывался программно. Отредактируем `./desktop.blocks/sssr/sssr.js`:

```js
modules.define('sssr', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    this._form = this.findBlockInside('form')
                        .on('submit', this._sendRequest, this);
                }
            },
            loading: function(modName, modVal) {
                this.findBlockInside('spin').setMod('progress', modVal);
            }
        },

        _sendRequest: function() {
            this.setMod('loading');
            // ...
        },

        _onSuccess: function(result) {
            this.delMod('loading');
            BEMDOM.update(this.findBlockInside('content').domElem, result);
        }
    }))
})
```

Модификаторы можно использовать не только в JavaScript, но и в CSS. Давайте сделаем так, чтобы содержимое страницы затенялось, пока идет загрузка. Для этого отредактируем `./desktop.bundles/sssr/sssr.css`:

```css
.sssr .spin
{
    margin-left: 1em;
    vertical-align: middle;
}
.sssr .spin_loading .content
{
    opacity: 0.5;
}
```

Протестируем наше приложение: http://localhost:8080/desktop.bundles/index/. Во время отправки запроса и загрузки данных
должен показываться блок `spin`, а содержимое страницы — затеняться.

После окончания редактирования запустите `node bfs-workshop.js verify` для проверки результата.
