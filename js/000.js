/* ======================================================
// ** Initial files

- 01. Создаем репо на гите с ридми и гитигнором, 
добавляем .DS_Store

- 02. Создаем хедер, мейн и футер. 
Устанавливаем язык в хеде.

- 03. В корне проекта создаем папку .vscode > settings.json 

{
   "liveSassCompile.settings.formats": [
      {
         "format": "expanded",
         "extensionName": ".css",
         "savePath": "/css"
      },
      {
         "format": "compressed",
         "extensionName": ".min.css",
         "savePath": "/css"
      }
   ],
   "liveSassCompile.settings.excludeList": [
      "**/node_modules/**",
      ".vscode/**"
   ],
   "liveSassCompile.settings.generateMap": true,
   "liveSassCompile.settings.autoprefix": [
      "> 1%",
      "last 2 versions"
   ]
   // "liveSassCompile.settings.autoprefix": null
} 

- 04. В корне создаем папку sass > main.scss и запускам 
Watch Sass. Автоматически создастся папка css. Если 
не создалась, то выкл/вкл Watch Sass

- 05. В html поле title подключаем минифицированный файл
<link rel="stylesheet" href="./css/main.min.css">

- 06. Создаем основные папки и файлы scss

utils >
_variables.scss

base >
_base.scss
_fonts.scss

layout >
_hero.scss
_page-footer.scss
_page-header.scss
_page-main.scss

components >
_container.scss
_logo.scss
_modeal.scss
_section.scss

- 07. Импортируем файл переменных в main.scss - 

@import "./utils/variables.scss";
@import "./base/base";
@import "./base/fonts";
@import "./layout/page-header";
@import "./layout/page-main";
@import "./layout/hero";
@import "./layout/page-footer";
@import "./components/logo";
@import "./components/container";
@import "./components/section";
@import "./components/modeal";

- 08. Создаем переменные в variables.scss: 

// Font
$primary-font: -apple-system, BlinkMacSystemFont, avenir next, avenir,
  helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;

// Font color
$primary-text-color: #;
$accent-text-color: #;

// Colors
$primary-color: #;
$accent-color: #;
$primary-white-color: #ffffff;

// Animation
$duration: 250ms;
$timing-function: cubic-bezier(0.4, 0, 0.2, 1);

- 08. Подключаем Modern normalize перед нашими стилями
https://cdnjs.com/libraries/modern-normalize

------------------------------------------------------ */

/* ======================================================
// ** Markup

- 01. Добавляем основные теги разметки
<header></header>
<main></main>
<footer></footer>

------------------------------------------------------ */
