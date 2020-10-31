// /*
// =================================================================
// querySelector, querySelectorAll

// - Современный стандарт для поиска DOM-узлов. 
// - Позволяют найти узел или группу узлов по CSS - селектору любой сложности
// - Если querySelector ничего не нашел, вернет null
// - Если querySelectorAll ничего не нашел вернет пустой массив.

const selectedById = document.querySelector('#menu');
selectedById.style.textTransform = 'uppercase';
selectedById.style.fontSize = '2rem';
console.log(selectedById); // ...

const menuItemsByTagName = document.querySelectorAll("li");
console.log(menuItemsByTagName); // ...

const menuItemsByClass = document.querySelectorAll(".menu-item");
console.log(menuItemsByClass); // ...

const firstMenuItem = document.querySelector(".menu-item");
firstMenuItem.style.color = '#BF4E30';
console.log(firstMenuItem); // ...

// */
// /*
// =================================================================
// Свойства: hidden, value, href, src

// - Ппри построении DOM-дерева многие стандартные HTML-атрибуты становятся свойствами узлов
// - https://codepen.io/goit-fe-adv/pen/RZmgpE/

const text = document.getElementById("text");
text.hidden = true; // текст стал невидимым

const message = document.querySelector("#message");
console.log(message.value); // Default textarea message

const link = document.querySelector(".active");
console.log(link.href); // https://s.codepen.io/about

const image = document.querySelector(".image");
console.log(image.src); // https://placeimg.com/640/480/animals
image.src = 'https://placeimg.com/640/480/tech';

// */
// /*
// =================================================================
// textContent

// - Свойство, содержит текстовый контент внутри элемента. 
// - Данные всегда будут записаны как текст
// - https://codepen.io/goit-fe-adv/pen/WEBjVV/

const text = document.querySelector(".article-text");
console.log(text.textContent); // текстовый контент внутри p.article-text

const title = document.querySelector(".article-title");
title.textContent = 'Welcome to Bahamas!';

// */
// /*
// =================================================================
// .style

// - Используется для получения и установки инлайновых стилей. Возвращает 
// объект CSSStyleDeclaration, который содержит список всех свойств 
// определенных только в инлайновом стиле элемента, а не весь CSS

const button = document.querySelector('.btn');

button.style.backgroundColor = 'teal';
console.log(button.style); // объект инлайн стилей

// /*
// =================================================================
// classList, add, remove, toggle, forEach

// - Объект, содержит методы для работы с классами элемента
// - classList – это псевдо - массив, в прототипе которого есть метод forEach,
// поэтому можно перебрать классы в цикле
// - https://codepen.io/goit-fe-adv/pen/eEaRME/

const elem = document.querySelector("#paragraph");

console.log(elem.classList); // ["text", "red", "big", value: "text red big"]

console.log(elem.classList.contains("red")); // true

elem.classList.remove("big");
console.log(elem.classList); // ["text", "red", value: "text red"]

elem.classList.add("new-class");
console.log(elem.classList); // ["text", "red", "new-class", value: "text red new-class"]

elem.classList.add("a", "b", "c"); // можно добавлять множественные классы
console.log(elem.classList);

elem.classList.toggle("hidden"); // спрячется, добавился класс hidden
elem.classList.toggle("hidden"); // покажется, удалили класс hidden

elem.classList.forEach(cls => {
  console.log(cls); // text, red, new-class
});

// */
// /*
// =================================================================
// hasAttribute, getAttribute, setAttribute

// - Доступ к атрибутам осуществляется при помощи стандартных методов. 
// - Методы работают со значением, которое находится в HTML
// - https://codepen.io/goit-fe-adv/pen/zdQzPP/

const image = document.querySelector(".image");

console.log(image.attributes); // обьект всех аттрибутов елемента NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

console.log(image.hasAttribute("src")); // true

console.log(image.getAttribute("alt")); // lake and clouds

image.setAttribute("alt", "amazing lake and clouds");

console.log(image.getAttribute("alt")); // amazing lake and clouds

// */
// /*
// =================================================================
// data-атрибут, dataset.action

// - Для получения значения data-атрибута используется свойство dataset, после 
// коготого идет свойство data - action это action, data = close это close то есть 
// data - отбрасывается, а остальное имя записывается как ключ объекта
// https://codepen.io/goit-fe-adv/pen/YOKWxQ/

const saveBtn = document.querySelector('.editor button[data-action="save"]');
const closeBtn = document.querySelector('.editor button[data-action="close"]');

const saveBtnAction = saveBtn.dataset.action;
console.log(saveBtnAction); // save

const closeBtnAction = closeBtn.dataset.action;
console.log(closeBtnAction); // close

// */
// /*
// =================================================================
// createElement, textContent, setAttribute

// - Используя DOM API можно удалять, создавать элементы и добавлять их в документ
// - createElement создает HTML-элемент по указаному имени тега и возвращает ссылку на него


const heading = document.createElement('h1');
console.log(heading); // <h1></h1>

heading.textContent = 'This is a heading';
console.log(heading); // <h1>This is a heading</h1>

const image = document.createElement('img');
image.setAttribute('src', 'https://placeimg.com/640/480/nature');
image.setAttribute('alt', 'nature');

console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="nature">

// */
// /*
// =================================================================
// appendChild, insertBefore

// - Добавляет элемент к уже существующему элементу в DOM
// - Существующий узел изымается из своего старого места и ставится на новое
// - https://codepen.io/goit-fe-adv/pen/zdgLmN/

const item = document.createElement("a");
item.href = "#";
item.classList.add("btn");
item.textContent = "item 4";

const nav = document.querySelector(".nav");
nav.appendChild(item); // Вставляет элемент в конец списка

const heading = document.createElement("h1");
heading.textContent = "Nav heading";

const container = document.querySelector(".container");
container.insertBefore(heading, nav); // Вставляем элемент в container перед списком

// */
// /*
// =================================================================
// .append, .prepend, .before, .after

// - Методы которые позволяют вставить что угодно и куда угодно. 
// - Строки вставляются как текстовые узлы
// - https://codepen.io/goit-fe-adv/pen/VzoEXa/

const list = document.querySelector(".list");

const item = document.createElement("li");
item.textContent = "Poly";
list.append(item); // Добавлем элемент в конец списка

const clone = item.cloneNode(true);
clone.textContent = "Ajax";
list.prepend(clone); // Добавляем элемент в начало списка

const title = document.createElement("h2");
title.textContent = "Список клиентов";
list.before(title); // Добавляет заголовок перед списком

const text = document.createElement("p");
text.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
list.after(text); // Добавляет абзац после списка

// */
// /*
// =================================================================
// .removeChild(), .remove()

// - Старый метод removeChild (всех браузерах), удаляет ребенка из родителя. Нужна ссылка на родителя и на ребенка
// - Современный метод remove (только новые браузеры), вызывается на элементе который нужно удалить
// - https://codepen.io/goit-fe-adv/pen/MvNBde/

const article = document.querySelector('.article'); 

const text = article.querySelector('.text');
article.removeChild(text); // Удаляет текст p

const link = article.querySelector('.link');
link.remove(); // Удаляет ссылку a

// */
// /*
// =================================================================
// .cloneNode(true), (false)

// - Создаст глубокую копию элемента – вместе с атрибутами, включая все поддерево. 
// - Аргументом false создает копию без дочерних элементов
// - https://codepen.io/goit-fe-adv/pen/JygaNZ/

const parent = document.querySelector('.parent');
const article = document.querySelector('.article');

const clone = article.cloneNode(true);
clone.classList.add('blue-text');
parent.appendChild(clone); // Создает точную глубокую копию всей статьи

// */
// /*
// =================================================================
// innerHTML

// - Свойство, получает все содержимое элемента. 
// - Значение, возвращаемое innerHTML — всегда валидный HTML - код
// - В отличии от createElement, мы не получаем ссылку на созданный DOM-элемент
// - Проще создавать много разметки
// - Изменение innerHTML полностью удалит и пересоздаст потомков контейнера (не очень хорошо)
// - https://codepen.io/goit-fe-adv/pen/QMeVyj/

const article = document.querySelector(".article");
const htmlString =
  `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
   <a class="link" href="#">Read more...</a>`;

// Уберите += и поставьте =, видите результат? заголовок удаляется,
// еще раз перечитайте сноску о работе innerHTML, о том как содержимое перезаписывается
// Если необходимо добавить к уже существующей разметке, то используем +=

article.innerHTML += htmlString;

// Можно делать множественные вставки, для этого мы конкатенируем всю необходимую 
// разметку в одну строку, после чего присваиваем ее innerHTML родителя. 

const list = document.querySelector(".list");
const tech = ["HTML", "CSS", "JavaScript", "React", "Node"];

const markup = tech.reduce(
  (string, item) => string + `<li>${item}</li>`, "");

// Вешаем всю разметку за одно обращение к DOM

list.innerHTML = markup; 

// */
// /*
// =================================================================
// insertAdjacentHTML(position, string)

// - element.insertAdjacentHTML(position, string) - vетод парсит строку как HTML и добавляет результирующие узлы в указанное место DOM-дерева.
// - elem.insertAdjacentElement(position, elem) — вставляет в произвольное место не HTML-строку, а элемент elem.
// - elem.insertAdjacentText(position, text) — создаёт текстовый узел из строки text и вставляет его в указанное место относительно elem.

// - position — позиция относительно элемента. Принимает одно из следующих значений:
// 'beforebegin' - перед element
// 'afterbegin' - внутрь element, в самое начало контента
// 'beforeend' - внутрь element, в самый конец контента
// 'afterend' - после element

// - beforebegin и afterend работают если узел уже есть в DOM и имеет родительский элемент
// - https://codepen.io/goit-fe-adv/pen/jLgQyR/

const list = document.querySelector('#list');

list.insertAdjacentHTML('beforebegin', '<h2>beforebegin заголовок</h2>');
list.insertAdjacentHTML('afterbegin', '<li>afterbegin item</li>');
list.insertAdjacentHTML('beforeend', '<li>beforeend item</li>');
list.insertAdjacentHTML('afterend', '<p>afterend текст</p>');

// */
// /*
// =================================================================
// addEventListener(event, handler[, phase])

// event - имя события, строка, например click
// handler - ссылка на функцию, которую надо поставить обработчиком
// phase - необязательный аргумент, фаза, на которой обработчик должен сработать. 

// - https://codepen.io/goit-fe-adv/pen/ayePLG/

const singleBtn = document.querySelector('#single');

// Используем отдельную функцию, ссылку на которую передаем вторым аргументом в addEventListener

const handleClick = () => alert('CLICK!');
singleBtn.addEventListener('click', handleClick);

// Вешаем более одного обработчика на элемент, на одно и тоже событие

const multiBtn = document.querySelector('#multiple');

// Колбэки

const firstCallback = () => alert('First callback!');
const secondCallback = () => alert('Second callback!');
const thirdCallback = () => alert('Third callback!');

// Слушатели

multiBtn.addEventListener('click', firstCallback);
multiBtn.addEventListener('click', secondCallback);
multiBtn.addEventListener('click', thirdCallback);

/**
 * 
 * - addEventListener и this
 * 
 * По умолчанию this внутри функции ссылается на DOM-узел на котором висит слушатель. 
 * Обязательно привязывать контекст используя метод bind
 * 
 */

// Имеем объект user кнопку с классом js-btn
// Подключаем и вешаем на нее слушатель клика используя bind

const user = {
  name: 'Mango',
  showName() {
    console.log(this); // this будет ссылаться на button если использовать showName как callback
    console.log(`My name is: ${this.name}`); // тут undefined так как поля name у button нет
  },
};

const btn = document.querySelector('.js-btn');
user.showName(); //работает
btn.addEventListener('click', user.showName); // не работает
btn.addEventListener('click', user.showName.bind(user)); // работает


// /*
// =================================================================
// removeEventListener(event, handler[, phase])

// - Удаляет функцию-обработчик, назначенную в addEventListener. 
// - Для сallback передают ее по имени отдельную функцию
// - https://codepen.io/goit-fe-adv/pen/brXOOw/

// Подключаемся к кнопкам через data-action и id

const addBtn = document.querySelector('button[data-action="add"]');
const removeBtn = document.querySelector('button[data-action="remove"]');
const btn = document.querySelector("#btn");

// Колбек => алерт с тектом

const handleClick = () => {
  alert("CLICK EVENT LISTENER ALERT!");
};

// Вешаем слушатель клика с функцией добавления слушателя на кнопк btn

addBtn.addEventListener("click", () => {
  btn.addEventListener("click", handleClick);
});

// Вешаем слушатель клика с функцией удаления слушателя с кнопки btn

removeBtn.addEventListener("click", () => {
  btn.removeEventListener("click", handleClick);
});

// */
   // /*
   // =================================================================
// event.type, event.target, event.currentTarget

// - Объект события содержит информацию о деталях события. 
// - Автоматически передается первым аргументом в обработчик события
// - Принято обзывать e, evt или event

// event.type - тип события
// event.target - элемент, на котором произошло событие
// event.currentTarget - элемент, на котором сработал обработчик

// - https://codepen.io/goit-fe-adv/pen/LjwMva/

const btn = document.querySelector("#btn");

const handleClick = event => {
  console.log("event: ", event); 
  console.log("event type: ", event.type); // event type:  click
  console.log("this: ", this); // Используя обычную функцию this будет самим элементом button как currentTarget
  console.log("target: ", event.target); // <button id="btn">CLICK ME!</button>
};

btn.addEventListener("click", handleClick);

// */
// /*
// =================================================================
// submit

// - Возникает при отправке формы. 
// - Его применяют для валидации(проверки) формы перед отправкой.
// - Чтобы отправить форму, у посетителя есть два способа:

// Нажать кнопку с type="submit"
// Нажать клавишу Enter, находясь в каком-нибудь поле формы

// - https://codepen.io/goit-fe-adv/pen/YxmgPV/

// Подключаемся к классу формы и тайпу инпутов

const form = document.querySelector(".form");
const loginInput = form.querySelector('input[type="text"]');
const passInput = form.querySelector('input[type="password"]');

// Вешаем слушателя события на отправку

form.addEventListener("submit", handleSubmit);

// Колбек (обработка)

function handleSubmit(event) {
  event.preventDefault(); // Предотвращаем поведение по умолчанию

  const login = loginInput.value.trim(); // удаляет пробелы
  const password = passInput.value.trim(); // удаляет пробелы
  
  if(login === '' || password === '') {
    return alert('Пожалуйста введите валидную информацию!')
  }

  form.reset();
  
   alert(`Спасибо за регистрацию! Логин: ${login} Пароль: ${password}`
   );
}

// */
// /*
// =================================================================
// KeyboardEvent.key, KeyboardEvent.code, keydown, keyup, key, code

// - Свойство KeyboardEvent.key доступно для чтения и возвращает значение клавиши
// - Свойство KeyboardEvent.code - физическая клавиша на клавиатуре
// - Вешать слушателя на событий keydown и keyup на window
// - https://codepen.io/goit-fe-adv/pen/yxBdvr/

// Подключаемся к кнопке по data-action и к диву по классу

const clearLogBtn = document.querySelector('button[data-action="clear"]');
const logList = document.querySelector(".log-list");

// Вешаем слушателя (на window) на нажатие клавиши и клик по кнопке

window.addEventListener("keydown", logMessage);
window.addEventListener("keyup", logMessage);

clearLogBtn.addEventListener("click", e => {
  logList.innerHTML = "";
}); // При клике поле станет пустой сторокой 

// Выводим при нажатии клавиши

function logMessage({type, key, code}) {
  const message = document.createElement("section"); // Создаем секцию
  const title = document.createElement('h2'); // Создаем заголовок
  title.textContent = `${type} event`; // Создаем текст динамического заголовка
  
  const text = document.createElement('p'); // Создаем текст динамического поля
  text.textContent = `key value is "${key}" | code value is "${code}"` // 
  
  message.append(title, text); // Добавляем в секцию заголовок и текст
  logList.appendChild(message); // Добавляем секцию в див в HTML
}

// */
