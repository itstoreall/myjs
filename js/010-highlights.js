/* ===========================================
** VSCode commands

01. Открыть терминал
ctrl + `

02. Переключиться между разными ВСКодами
cmnd + `

03. Open User Settings
cmnd + shift + P

/* ===========================================
** React

01. Создаем репо на GitHub и клонируем локально
cd documents/github
git clone https://github.com/itstoreall/geri-react.git
cd geri-react

02.1 В локальной папке проекта запускаем React app
npx create-react-app . --use-npm

02.2 if error for example @4.0.2:
npm uninstall -g create-react-app (uninstall)
npm i -g npm@latest (install the latest version of the npm)
npm cache clean -f (clean cache --force)
npx create-react-app .
или: npx create-react-app@4.0.3 . (в случае ошибки)

02.3 После клонирования или перезаливки проекта (если ошибки)
npm install --save --save-exact react-scripts@4.0.3

02.4 Открываем в IDE
open -a visual\ studio\ code .

03. Устанавливаем пакет prop-types и импортировать библиотеку
npm install --save-dev prop-types
import PropTypes from 'prop-types';

04.1 Установка ESLint and Prettier
npm install eslint
npm install prettier -D --save-exact

04.2 Create .prettierrc:
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "avoid",
  "proseWrap": "always"
}

04.3 Проверить User Settings in VSCode
- "editor.formatOnSave": true
- "editor.defaultFormatter": "esbenp.prettier-vscode"

05.] Build and Deploy. Добавляем строку в package.json и выполняем команду
"homepage": "https://itstoreall.github.io/goit-react-hw-01-components",

05.2 Устанавливаем пакет для публикации
npm install --save gh-pages

05.3 В package.json в поле script добавляем два скрипта
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

05.4 Деплоим на гитхаб
npm run deploy

06.] Установка modern-normalize
npm i modern-normalize

06.2 Импортируем стили в index.js
import 'modern-normalize/modern-normalize.css';

07. Устанавливаем пакетик sass
npm install node-sass --save

08. Устанавливаем и импортируем JSS
npm instal react-jss
import {createUseStyles} from 'react-jss'

09. Устанавливаем npm React Router
npm install react-router-dom
import { BrowserRouter } from 'react-router-dom'

10. Устанавливаем axios
npm install axios
import axios from 'axios'

11.1 Устанавливаем JSON Server
npm i json-server

11.2 Добавляем строку в "scripts"
"server": "json-server --watch server/db.json --port 2222 --delay 500",

11.3 В корне создаем папку с файлом: 
server > db.json

------------------------------------------- */

/* ===========================================
** Redux

01. Install the Redux: 
npm install redux

02. Сreate Store:
В src создаем redux > store.js
import { createStore } from 'redux';
const reducer = (state = {}, action) => state;
const store = createStore(reducer);
export default store;

03. Import store to the index.js:
import store from './redux/store';

04.1 Create React-Redux:
npm install react-redux

04.2 Import to index.js
import { Provider } from 'react-redux';

05.3 Оборачиваем App в Provider с пропсами store
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App initialValue={dataBase} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

06. mapState и mapDispatch:
import { connect } from 'react-redux';
const mapStateToProps = state => {
  return {
    value: state,
  };
};

const mapDispatchToProps = dispatch => ({
  doSomething: value => dispatch(actions.addContact(value)),
})
export default connect(mapStateToProps, mapDispatchToProps)(App);

07. Install redux-devtools-extension:
Установить в Chrome Redux DevTools (единоразово)
npm install --save-dev redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension';

08.1 Redux Toolkit installation
npm install @reduxjs/toolkit

08.2 Import to the store.js
import { configureStore } from '@reduxjs/toolkit';

09.1 Redux Persist installation
npm install redux-persist

09.2 Import to the store.js
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

------------------------------------------- */

/* ===========================================
** Download to Hosting

01. Изменть в package.json url homepage
"homepage": "http://test.storeall.com.ua",

02. Сбилдить проект 
npm run build

03. Создать в папке build/.htaccess 
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

04. Залить на хостинг
:)

------------------------------------------- */

/* ===========================================
** Terminal

control+a (перейти в начало строки)
control+e (перейти в конец строки)

echo "любой текст" (просто выводит текст в терминал)
set -o (показывает опции терминала)
man имя_команды (показывает иануал команды)
q (выходит из мануала команды)

- В папке

ls (все файлы и папки)
ls -l (..расширено)
ls -a (..и скрытые файлы)
ls -t (..отсортировать по времени)
ls -lat (..все вместе)
ls имя_папки (войти в папку)
ls имя_папки/имя_папки (..в папке)
cd имя_папки (переходим в папку)
cd .. (шаг назад)
cd ~ (вернуться в корень)
pwd (покывает путь, где мы находимся)
open . (открывает текущую папку в finder)
open имя_файла (открывает файл)
open -a sublime\ text index.html (открыть файл саблайме)

- Работа с файлами и папками

touch somefile (создает файл в текущей папке)
nano (редактор кода в терминале)
mkdir имя_папки (создать папку)
touch имя_папки/имя_файла (создать файл в папке)
mv имя_файла имя_папки (переместить файл в паку)
touch f1 f2 f3 (создает несколько файлов)
mv f* foto (переместит все файлы с символами имени до* в папку foto)
mv имя_файла имя_файла2 (переименовует файл в другой)
cp имя_файла имя_файла.html (копирует файл с новым именем)
cp -r имя_папки имя_папки2 (скопировать папку рекурсивно)
rm имя_файла (удаляет файл)
rmdir имя_папки (удалить пустую папку)
rm -r имя_папки (удаляет папку рекурсивно)

- Ссылки

ln -s имя_файла имя_ссылки (создает sift ссылку)
ln имя_файла имя_ссылки (создает hard ссылку)
cat имя_файла (показывает контент в терминале)

------------------------------------------- */

/* ===========================================
** Team project

- Втянуть изменения с удаленного репо

git checkout main (переключиться на ветку main)
git fetch (забирает данные в локальный репозиторий)
git pull (вливает данные из удалённой ветки в текущую ветку)
git checkout [branch name] ()
git merge main (влить ветку main в ветку [branch name])

<<<<<<< Current Change
 ... some code
=======
 ... some code
>>>>>> Incoming Change

git add . (добавляем после исправления конфликта)
git commit -m "qweqweqwe" (коммитим)

// -------

- Cтянуть изменения с другой ветки

git pull origin [имя_ветки] (стянуть изменения с ветки одного из участников)
git add . (добавляем после исправления конфликта)
git commit -m "qweqweqwe" (коммитим)

- Залить изменения на удаленный main

git merge main (находясь в своей локальной ветке пишем команду)

// -------

- Перезаливаем заново проект

Переименовываем старый (в папке GitHub)

01. В терминале переходим в папку GitHub
cd documents/github

02. Клонируем репо проекта
git clone https://github.com/hushkov/filmoteka-firebase-app.git

03. Переходим в папку проекта
cd filmoteka-firebase-app

04. Устанавливаем все зависимости
npm install

05. Запускаем проект
npm start

// -------

- Установить Webpack глобально

sudo npm uninstall webpack-dev-server -g

- Установить Webpack глобально

npm uninstall webpack-dev-server -g
или
sudo npm install webpack-dev-server -g

------------------------------------------- */

/* ===========================================
** Webpack starter kit

01. Создаем новый репо с именем webpack-module-10
без ридми и гитигнор. Просто имя и жмем Создать

02. В терминале переходим в папку GitHub
cd documents/github

03. Клонируем репо Репеты
git clone https://github.com/luxplanjay/webpack-starter-kit.git

04. Переименовуем папку сборки
mv webpack-starter-kit webpack-module-10

05. Переходим в папку проекта
cd webpack-module-10

06. Удаляем папку .git связанную с репозиторием сборки
npx rimraf .git

07. Устанавливаем все зависимости
npm install

08. Открываем проект в IDE
open -a visual\ studio\ code .

09. Запустить режим разработки
npm start

10. CSS =-> SCSS
- Создаем src > sass
- Переименовуем styles.css в styles.scss
- В index.js изменяем путь - import './styles.scss';
- В index.html удаляем лишнее

11. Создаём в текущей директории новую поддиректорию с именем .git
git init

12. Связываем локальный репо с удаленным
git remote add origin https://github.com/itstoreall/иня-нового-remote-репо.git

13. Добавляем файлы в каталоге под версионный контроль
git add .

14. Делаем первый коммит
git commit -m "first commit"

15. Переименовываем ветку в main
git branch -M main

16.1. Пушим на гитхаб
git push -u origin main

17. Создаем оптимизированные файлы для хостинга
npm run build

18. В файле package.json редактируем поле homepage
"homepage": "https://имя_пользователя.github.io/имя_репозитория"

19. Запускаем сборку проекта в продакшен (в ветку gh-pages)
npm run deploy

// Комитим и пушим на гитхаб (уже в процессе работы)

git add . (добавляем файлы)
git status (проверяем статус)
git commit -m "qwe" (коммитим)
git push (пушим)

// Изменить ссылку на удаленный репозиторий

git remote -v (просмотр списка удаленных репозиториев)
git remote set-url origin https://github.com/другой-репо.git (изменение)

------------------------------------------- */
