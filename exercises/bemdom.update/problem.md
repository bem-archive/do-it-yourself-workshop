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
            $.ajax({
                type: 'GET',
                dataType: 'html',
                cache: false,
                url: this.params.url,
                data: this.findBlockInside('form').getVal(),
                success: this._onSuccess,
                context: this
            });
        },

        _onSuccess: function(result) {
            BEMDOM.update(this.findBlockInside('content').domElem, result);
        }
    }))
})
```


