/*
 * 
 * Node.js
 * 
 */

/*

// Основные команды

node -v (--version)
- текущая верся node

npm init 
— инициализирует npm и создает файл package.json

npm install 
— устанавливает все зависимости перечисленные в package.json

npm list --depth=0 
- выведет в терминале список локально установленных пакетов с номерами их версий, без зависимостей

npm install [package-name] 
— установит пакет локально в папку node_modules

npm install validator@1.0.0
- установит пакет нужной версии

npm uninstall [package-name] 
— удалит пакет установленный локально и обновит package.json

npm start и npm test 
— запустит скрипт start или test, расположенный в package.json

npm run [custom-script] 
— запустит кастомный скрипт, расположенный в package.json

npm outdated 
— используется для поиска обновлений, обнаружит совместимые версии программно и выведет список доступных обновлений

npm update 
— обновит все пакеты до максимально разрешенной версии

npm update [имя-пакета] 
- обновит указанный пакет

npm cache clean
- очистка кэша npm на компьтере

y
- да

npm init --yes
- да для всех пунктов

npm config set init.author.name "YOUR_NAME"
npm config set init.author.email "YOUR_EMAIL"
- устанока информации автора перед созданием package.json

--save — указывает что добавляется зависимость 
которая войдет в финальный продукт. Пакет будет 
установлен локально, в папку node_modules, и 
будет добавлена запись в поле dependencies 
в package.json. Если не указывать флаг, по 
умолчанию будет использован --save

--save-dev — указывает что добавляется зависимость 
разработки. Пакет будет установлен локально, в 
папку node_modules, и будет добавлена запись в 
поле devDependencies в package.json.

--global — указывает что добавляется глобальная 
зависимость, то есть инстурумент который доступен 
для любого проекта. Пакет будет установлен 
глобально (в систему). Лучше никогда такого
не делать

http://localhost:5000
- посмотреть на хосте (если порт 5000)

*/
/*

// NPM-скрипты

{
  "scripts": {
    "start": "node index.js"
  }
}

Если создать скрипт с любым другим именем, кроме 
start или test, он будет запускаться как 
npm run имя-скрипта

*/

/*
 * 
 * Webpack
 * 
 */

/*

// Последовательные шаги

// 1. Загрузчики

- 1.1. Инициализация npm в проекте
npm init -y

- 1.2. Ставим два пакета webpack и webpack-cli 
npm install webpack webpack-cli --save-dev

- 1.2.1 Создаем команту start
"scripts": {
    "start": "webpack"
  },

- 1.3. Точка входа (entry)
Создаем в корне папку src с файлом index.js
src > index.js

- 1.4. Entry (common js module)
Создаем в корне файл с именем webpack.config.js
> webpack.config.js

- 1.5. Из файла webpack.config.js мы экспортируем объект настроек
В файле пишем конфиг вебпака:
module.exports = {
  mode: "development",
  entry: "./src/index.js" // точка входа
};

- 1.6. Запускаем вебпак
npm start

- 1.7. В папке src создаем файл a.js и index.js 
В файле a.js пишем:
const a = 5
export default a;

В файле index.js пишем:
import value from "./a";
console.log(value);

npm start

- 1.8. В папке src создаем файл b.js
В файл b.js пишем:

export default "Hello";

В файл a.js пишем:

import b from "./b";
console.log(b);

npm statr

- 1.9. В файле webpack.config.js изменяем значение development 
на production (происходит минификация кода)
В файле пишем конфиг вебпака:

module.exports = {
  mode: "production",
  entry: "./src/index.js" // точка входа
};

npm start

- 1.10. Изменяем команды в package.json

"scripts": {
    "start": "webpack --mode development",
    "build": "webpack --mode production"
  },

npm start // код в main.js стал не минифицированый
npm run build // код в main.js минифицировался

Теперь строку mode: "production" из webpack.config.js можно удалить

Стало:

module.exports = {
   entry: "./src/index.js"
};

- 1.11. Output
Добавляем объект output в файл webpack.config.js

Стало:

module.exports = {
   entry: "./src/index.js",
   output: {
      filename: "bundle.js"
   }
};

Удаляем папку dist

npm start

--
Создается новая папку dist с файлом bundle.js

- 1.12. Чтобы сконкатенировать адрес к папке build
изменяем код ниже:

const path = require("path");
module.exports = {
   entry: "./src/index.js",
   output: {
      path: path.resolve(__dirname, 'build'),
      filename: "bundle.js"
   }
};

В глобальной переменной __dirname хранится абсолютный путь

--
Появилась папка build и в ней файл bundle.js

- 1.13. Добавляем массив загрузчиков
Свойство test говорит какого типа файлы мы хотим обрабатывать
Свойство use говорит какой загрузчик нужно использовать для этого типа файлов
Добавляем в код объект module:

const path = require("path");
module.exports = {
   entry: "./src/index.js",
   output: {
      path: path.resolve(__dirname, 'build'),
      filename: "bundle.js"
   },
   module: {
    rules: rules: [
       {
        test: /\.js$/, // (тестировать) означает все файлы кот заканчиваются на .js 
        exclude: /node_modules/, // (не тестировать) из поиска выкинуть папку
        use: "babel-loader" // (что использовать) обрабатывать каждый файл бабелом
      } 
    ]
  }
};

Потом заходим на сайт https://babeljs.io/setup#installation
копируем строку npm install --save-dev babel-loader @babel/core
и запускаем в терминале

- 1.14. .babelrc
Настройка бабела:

- Создаем в корне файл .babelrc
- Добавляем пресет env 
npm install @babel/preset-env --save-dev
- В .bablerc добавляем код (каким пресетом обрабатывать):

{
  "presets": ["@babel/preset-env"]
}

npm start

-- 
Теперь транспайлер настроен

*/