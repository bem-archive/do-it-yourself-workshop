Займемся CSS. Добавим оформление для блока `header`. Для этого отредактируем нужные файлы:

Воспользуемся для этого уже написанными стилями:

`./desktop.blocks/header/header.css`:

```css
.header
{
    position: fixed;
    z-index: 1;
    top: 0;

    width: 100%;
    padding: 10px 10%;
    box-sizing: border-box;

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
    column-count: 4;
    column-gap: 15px;
    padding: 10px 10%;
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

После добавления стилей опять обновим нашу страницу для пересборки нашего проекта. Теперь можно посмотреть на результаты нашей работы ещё раз.

По окончанию процесса сборки запустим `node bfs-workshop.js verify` для тестирования результатов этого шага.

