## BEMDOM.update()

Метод позволяет заменить содержимое выбранного DOM-элемента.

Допишем наш блок SSSR, чтобы он умел обновлять данные на странице.

`./desktop.blocks/sssr/sssr.js`:

```js
modules.define('sssr', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    this.findBlockInside('form').on('submit', function() {
                        this._sendRequest();
                    }, this);
                }
            }
        },
        _sendRequest: function() {
            var formVal = this.findBlockInside('form').getVal();
            this._xhr = $.ajax({
                type: 'GET',
                dataType: 'html',
                cache: false,
                url: 'https://sssr.bem.yandex.net/search/',
                data: formVal,
                success: this._onSuccess,
                context: this
            });
        },
        _onSuccess: function(result) {
            console.log('ajax loaded');
            BEMDOM.update(this.findBlockInside('content').domElem, result);
        }
    }))
})
```

Теперь наше приложение умеет показывать загруженный `html`. Откроем страницу в браузере и проверим работу сайта.После чего запустим `node bfs-workshop.js`.
