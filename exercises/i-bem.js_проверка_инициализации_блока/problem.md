### Клиентский JavaScript с `i-bem.js`

Для декларативной работы с JavaScript в Яндексе написали специализированный JavaScript-фреймворк для веб-разработки в рамках БЭМ-методологии – `i-bem.js`. Он является частью `bem-core`.
`i-bem.js` — это реализация блока `i-bem` в технологии `js`. Он позволяет делать другие блоки и использует `jQuery` для нормализации API браузера.

О том, что такое i-bem.js и как он работает, можно прочитать в подробном [Руководстве пользователя](http://ru.bem.info/libs/bem-core/current/i-bem-js/i-bem-js/).

Что мы получаем от использования этого фреймворка:

 * работу с предметной областью БЭМ;
 * декларативность;
 * возможность доопределения блоков.

#### Блоки с js-представлением

Блоки бывают как с js-представлением, так и без него. Для того, чтобы указать, что блок имеет js-представление, в BEMHTML используется мода `js`, а в BEMJSON — поле `js`:

```js
// bemhtml
block('form').js()(true);
```

```js
// bemjson
{
    block: 'form',
    js: true
}
```

```js
// bemjson with js params
{
    block: 'form',
    js: {
        p1: 'v1',
        p2: 'v2'
    }
}
```

Поле `js` позволяет использовать как булевы значения, так и объект, который будет передан в `data`-атрибутах. Наш пример будет отрендерен в подобный HTML:

```html
<div class="form i-bem" data-bem="{form: {p1: 'v1', p2 : 'v2'}}"></div>
```

Класс `i-bem` говорит о том, что на этом узле DOM-дерева есть блок с js-представлением. А в дата-атрибуте `data-bem` ключами передаются имена блоков, которые имеют js-представление, и при наличии параметры.

Подробное описание работы блока `i-bem` описано в [декларации блоков](http://ru.bem.info/libs/bem-core/current/i-bem-js/i-bem-js/#decl),
[работе с DOM-деревом](http://ru.bem.info/libs/bem-core/current/i-bem-js/i-bem-js/#dom), [событиях](http://ru.bem.info/libs/bem-core/current/i-bem-js/i-bem-js/#events),
[взаимодействии блоков](http://ru.bem.info/libs/bem-core/current/i-bem-js/i-bem-js/#ibc) и т.д. в [i-bem.js: Руководство пользователя](http://ru.bem.info/libs/bem-core/current/i-bem-js/i-bem-js/).

#### Блок `form`

Давайте отредактируем файл `./desktop.blocks/form/form.js` и опишем минимальную функциональность:

```js
modules.define('form', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    console.log('block FORM inited');
                }
            }
        }
    }));
});
```

Мы объявили модуль `form`, в зависимости которого добавили `i-bem__dom`, поскольку блок будет иметь DOM-представление.
Перезагрузив страницу, мы можем из консоли проверить работу методов нашего блока. Для этого в js-консоли браузера напишем:

```js
modules.require(['jquery'], function($) {
    var form = $('.form').bem('form');
    console.log(form);
})
```

В консоли отобразится структура объекта ```form```.
