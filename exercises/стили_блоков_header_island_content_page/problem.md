-------------------------------------------------------------------------------
**Задание**: Добавить стили для блоков.

-------------------------------------------------------------------------------

Чтобы создать блок, нужно в файловой системе на нужном уровне создать папку с именем этого блока. В ней уже будут создаваться файлы с именем этого блока и с расширением нашей технологии, например, `header.css`. Так выглядит на файловой системе блок `menu`:

```
menu/
  __item/
    _state/
      menu__item_state_current.css
      menu__item_state_current.bemhtml
    menu__item.css
    menu__item.bemhtml
  menu.css
  menu.js
  menu.bemhtml
```

Создавать папки и файлы блока можно вручную или воспользоваться командой `bem create`. Подробное описание этой команды Вы можете узнать на сайте ru.bem.info - http://ru.bem.info/tools/bem/bem-tools/commands/.

Пример использования:

```bash
bem create -l desktop.blocks -b header -T css
```
где:
* -l - уровень переопределения;
* -b - имя блока;
* -T - название технологии, которую нужно добавить.

На данный момент на нашем уровне пока нет блоков. Добавьте их любым удобным для Вас способом.

Займемся CSS. Добавим оформление для блока `header`. Воспользуемся для этого уже готовыми стилями:

`./desktop.blocks/header/header.css`:

```css
.header
{
    position: fixed;
    z-index: 1;
    top: 0;

    box-sizing: border-box;
    width: 100%;
    padding: 10px 10%;

    background: #f6f6f6;
    box-shadow: 0 0 0 1px rgba(0,0,0,.1), 0 10px 20px -5px rgba(0,0,0,.4);
}

.header .button
{
    margin-left: 10px;
}
```

Настало время привести в порядок оформление блока `island`.

`./desktop.blocks/island/island.css`:

```css
.island
{
    font-size: 18px;
    line-height: 140%;

    position: relative;

    display: inline-block;

    box-sizing: border-box;
    width: 100%;
    margin-bottom: 15px;
    padding: 15px 5px 5px 15px;

    border-radius: 3px;
    background: #fff;
    box-shadow: inset 0 0 1px rgba(0, 0, 0, .4);
}

.island__footer
{
    margin-top: 10px;
}

.island__image
{
    display: block;

    width: 100%;

    border-radius: 3px;
}
```

Нам осталось оформить обрамление страницы — блоки `content` и `page`.

`./desktop.blocks/content/content.css`:

```css
.content
{
    padding: 10px 10%;

    column-count: 4;
    column-gap: 15px;
}
```
`./desktop.blocks/page/page.css`:

```css
.page
{
    font-family: Tahoma, sans-serif;

    min-height: 100%;
    margin: 0;
    padding-top: 100px;

    background: #000;
}
```

После добавления стилей снова обновим нашу страницу для пересборки проекта. Теперь можно посмотреть на результаты работы ещё раз.

-------------------------------------------------------------------------------

**NB** Убедитесь, что путь к странице указан правильно - со слешем в конце (http://localhost:8080/desktop.bundles/index/) или полный путь к HTML-файлу (http://localhost:8080/desktop.bundles/index/index.html). В противном случае, могут возникнуть проблемы с относительными путями до статики, и CSS-правила будут игнорироваться в процессе сборки.

-------------------------------------------------------------------------------

По окончанию процесса сборки запустим `node bfs-workshop.js verify` для тестирования результатов этого шага.
