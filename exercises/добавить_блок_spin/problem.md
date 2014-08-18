### Добавим интерактивности. Блок `spin`

После нажатия на кнопку отправки формы у нас происходит какое-то действие, однако оно незаметно. Создается ощущение, что сервис «завис».
Давайте исправим это и добавим блок `spin`, который будет служить индикатором процесса отправки запроса. Он уже есть в нашей
BEMJSON-декларации. Исходный код блока находится в библиотеке `bem-components` и имеет собственное API. Протестируем его работу из консоли браузера:

```js
modules.require(['jquery'], function($) {
    $('.spin').bem('spin').setMod('progress');
})
```

Мы выставили булевый модификатор `spin_progress` в значение `true` и должны увидеть вращающийся спинер рядом с полем ввода.

![Результат выполнения в Web Inspector](https://github.yandex-team.ru/dmtry/bem-full-stack/raw/master/sssr-spinner.png)

Добавим стили для этого блока в файл `./desktop.blocks/sssr/sssr.roo`:

```css
.sssr
{
    .spin
    {
        margin-left: 1em;
        vertical-align: middle;
    }
}
```

Сделаем так, чтобы индикатор загрузки показывался программно. Отредактируем `./desktop.blocks/sssr/sssr.js`:

```js
modules.define('sssr', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    this.findBlockInside('form').on('submit', function() {
                        this.setMod('loading');
                        this._sendRequest();
                    }, this);
                }
            },
            loading: function(modName, modVal) {
                this.findBlockInside('spin').setMod('progress', modVal);
            }
        },

        // ...

        _onSuccess: function(result) {
            this.delMod('loading');
            BEMDOM.update(this.findBlockInside('content').domElem, result);
        }
    }))
})
```
