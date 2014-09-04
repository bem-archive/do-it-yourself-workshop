#### Блок `sssr`

Теперь создадим блок, который будет загружать запрашиваемые данные и обрабатывать их.

`./desktop.blocks/sssr/sssr.js`:

```js
modules.define('sssr', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    this._form = this.findBlockInside('form');
                    this._form.on('submit', function() {
                        this._sendRequest();
                    }, this);
                }
            }
        },
        _sendRequest: function() {
            var formVal = this._form.getVal();
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
        _onSuccess: function() {
            console.log('ajax loaded');
        }
    }))
})
```

Пройдемся по коду блока. В начале мы объявили модуль `sssr` с зависимостями от `i-bem__dom`, поскольку блок имеет DOM-представление, и `jquery` для работы с AJAX.

В конструкторе блока мы подписываемся на событие `submit` блока `form`. При возникновении этого события выполняется приватный метод `_sendRequest`, отправляющий AJAX-запрос. Когда ответ от сервера будет получен, выполнится обработчик `_onSuccess`, который обновит содержимое блока `content` полученными результатами.

В файле `index.bemjson.js` осталось к блоку `page` подмешать блок `sssr` и указать, что он имеет `js` реализацию.

Итак, мы получили первую, пока очень примитивную и недоработанную версию нашего приложения.
Теперь мы можем протестировать его работу. Чтобы запустить наше приложение, пересоберем бандл и выполним код скомпилированного `./desktop.bundles/index/index.node.js`. Перейдем на страницу http://localhost:8080/desktop.bundles/index/, введем что-нибудь в поле ввода и попробуем отправить форму. Если все сделано верно, то под шапкой мы увидим результаты поиска по заданному запросу.

Запустим `node bfs-workshop.js verify` для тестирования результатов этого шага.
