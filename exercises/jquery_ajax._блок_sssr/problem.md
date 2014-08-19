#### Блок `sssr`

Теперь создадим блок, который будет загружать запрашиваемые данные и отображать их на странице.

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
                url: 'http://localhost:3000/search',
                data: this.findBlockInside('form').getVal(),
                success: console.log('ajax loaded'),
                context: this
            });
        }
    }))
})
```

Пройдемся по коду блока. В начале мы объявили модуль `sssr` с зависимостями от `i-bem__dom`,
поскольку блок имеет DOM-представление, и `jquery` для работы с AJAX.

В конструкторе блока мы подписываемся на событие `submit` блока `form`. При возникновении этого события выполняется приватный метод `_sendRequest`, отправляющий AJAX-запрос. Когда ответ от сервера будет получен, выполнится обработчик `_onSuccess`, который обновит содержимое блока `content` полученными результатами.

Осталось подмешать блок `sssr` к блоку `page` в файле `index.bemjson.js`:

```js
block: 'page',
//...
mix: { block: 'sssr' }

```

Итак, мы получили первую, пока очень примитивную и недоработанную версию нашего приложения.
    Теперь мы можем протестировать его работу. Чтобы запустить наше приложение пересоберем бандл и выполним код скомпилированного `./desktop.bundles/index/index.node.js`. Перейдем на страницу [localhost:3000](http://localhost:3000/), введем что-нибудь в поле ввода и попробуем отправить форму. Если все сделано верно, то под шапкой мы увидим результаты поиска по заданному запросу.  

