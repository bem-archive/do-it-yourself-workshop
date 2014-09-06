### Модульная система

Библиотека `bem-core` использует модульную систему [ymodules](https://github.com/ymaps/modules/).
Что это, зачем, для кого и как этим пользоваться можно прочитать по [ссылке](https://github.com/ymaps/modules/blob/master/what-is-this.md).

Она позволяет обернуть код нашего блока в обёртку-модуль и вызывать его при необходимости из других модулей.

Давайте напишем js-модуль для блока `form`, для этого создадим файл `./desktop.blocks/form/form.js`:

```js
modules = require('ym');

modules.define('form', function(provide) {
    provide({
        get: function() {
            return 'Hello from FORM module';
        }
    })
});

modules.require('form', function(form) {
    var msg = form.get();
    console.log(msg);
});
```

Мы декларируем блок `form`, в котором возвращаем хэш с полем `get`, которое выполняет нужную нам функциональность.

После декларации мы можем вызвать нужный нам модуль с помощью метода `modules.require`, в который мы передаем имя вызываемого модуля. Затем, внутри функции мы вызываем `form.get`.

Откроем нашу страницу: http://localhost:8080/desktop.bundles/index/

Проверьте правильность работы написанного модуля, запустив его с помощью `node ./bfs-stub/desktop.blocks/form/form.js`. В консоли должно появиться сообщение от нашего модуля.

По окончанию процесса сборки запустим `node bfs-workshop.js verify` для тестирования результатов этого шага.
