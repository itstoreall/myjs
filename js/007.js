/**
 * 
 * - Main
 * 
 * JavaScript
 * ECMAScript
 * DOM
 * BOM
 * Window
 * document
 * html
 * head
 * meta
 * title
 * link
 * body
 * div
 * img
 * h1
 * p
 * div
 * script
 * root node (узел корневым)
 * ancestor (предок)
 * descendant (потомок)
 * parent (родитель)
 * child (ребенок)
 * sibling (сосед)
 * elem.parentNode (выберет родителя elem)
 * elem.childNodes (все дочерние элементы (псевдо-массив))
 * elem.children (только дочерние узлы-элементы (псевдо-массив))
 * elem.firstChild (первый дочерний элемент)
 * elem.firstElementChild (первый дочерний узел-элемент)
 * elem.lastChild (последний дочерний элемент)
 * elem.lastElementChild (последний дочерний узел-элемент)
 * elem.previousSibling (элемент "слева" от elem)
 * elem.previousElementSibling (узел-элемент "слева" от elem)
 * elem.nextSibling (элемент "справа" от elem)
 * elem.nextElementSibling (узел-элемент "справа" от elem)
 * elem.querySelector(selector) (возвращает первый найденный элемент)
 * elem.querySelectorAll(selector) (возвращает псевдомассив всех элементов)
 * hidden (видимость элемента)
 * value (текстовый контент (input, select, textarea))
 * checked (состояние чекбокса или радиокнопки)
 * name (значение HTML-атрибута name)
 * src (путь к изображению тега img)
 * elem.textContent (текстовый контент)
 * button.style (объект инлайн стилей)
 * elem.classList.contains(cls) (есть ли у элемента класс cls (true / false))
 * elem.classList.add(cls) (добавляет класс cls)
 * elem.classList.remove(cls) (удаляет класс cls)
 * elem.classList.replace(oldClass, newClass) (заменяет существующий на указанный)
 * elem.classList.toggle(cls) (добавляет, если есть, удаляет)
 * elem.classList.forEach() (переберает классы (псевдо-массив))
 * elem.hasAttribute(name) (проверяет наличие аттрибута (true / false))
 * elem.getAttribute(name) (возвращает значение атрибута)
 * elem.setAttribute(name, value) (устанавливает атрибут)
 * elem.removeAttribute(name) (удаляет атрибут)
 * elem.attributes (возвращает коллекцию всех атрибутов)
 * dataset (получение значения data-атрибута)
 * action (свойство data-action)
 * document.createElement(tagName)
 * parentElem.appendChild(elem) (+ в конец дочерних элементов)
 * parentElem.insertBefore(elem, nextSibling) (parentElem перед nextSibling)
 * elem.append(nodes) (добавляет nodes в конец elem)
 * elem.prepend(nodes) (добавляет nodes в начало elem)
 * elem.after(nodes) добавляет nodes после узла elem
 * elem.before(nodes)(добавляет nodes перед узлом elem)
 * elem.replaceWith(nodes) (добавляет nodes вместо elem)
 * parent.removeChild(elem) (удаляет ребенка из родителя)
 * elem.remove() (вызывается на удаляемом элементе)
 * elem.cloneNode(true) (копия элемента (false - без дочерних элементов))
 * innerHTML (вешает всю разметку за одно обращение к DOM)
 * element.insertAdjacentHTML(position, string) (добавляет узлы в указанное место DOM)
 * elem.insertAdjacentElement(position, elem) (вставляет в произвольное место элемент elem)
 * elem.insertAdjacentText(position, elem) (создаёт текстовый узел и вставляет в elem)
 * repaint (изменения в стилях: opacity, background-color, visibility и outline...)
 * reflow (изменения в структуре и положении. Влияет на детей и предков)
 * 
 * =================================================================
 * 
 * Рендеринг WEB-страницы - https://habr.com/en/post/224187/
 * 
 */

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

// - Для получения значения data-атрибута используется
// свойство dataset, после коготого идет свойство
// data-action это action, data=close это close
// то есть data- отбрасывается, а остальное имя записывается
// как ключ объекта
// https://codepen.io/goit-fe-adv/pen/YOKWxQ/

const saveBtn = document.querySelector('.editor button[data-action="save"]');
const closeBtn = document.querySelector('.editor button[data-action="close"]');

const saveBtnAction = saveBtn.dataset.action;
console.log(saveBtnAction); //save

const closeBtnAction = closeBtn.dataset.action;
console.log(closeBtnAction); //close

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
// insertAdjacentHTML, insertAdjacentElement, insertAdjacentText

// - element.insertAdjacentHTML(position, string) - vетод парсит строку как HTML и добавляет результирующие узлы в указанное место DOM-дерева.
// - elem.insertAdjacentElement(position, elem) — вставляет в произвольное место не HTML-строку, а элемент elem.
// - elem.insertAdjacentText(position, text) — создаёт текстовый узел из строки text и вставляет его в указанное место относительно elem.

// - position — позиция относительно элемента. Принимает одно из следующих значений:
// - 'beforebegin' - перед element
// - 'afterbegin' - внутрь element, в самое начало контента
// - 'beforeend' - внутрь element, в самый конец контента
// - 'afterend' - после element
// - beforebegin и afterend работают если узел уже есть в DOM и имеет родительский элемент
// - https://codepen.io/goit-fe-adv/pen/jLgQyR/

const list = document.querySelector('#list');

list.insertAdjacentHTML('beforebegin', '<h2>beforebegin заголовок</h2>');
list.insertAdjacentHTML('afterbegin', '<li>afterbegin item</li>');
list.insertAdjacentHTML('beforeend', '<li>beforeend item</li>');
list.insertAdjacentHTML('afterend', '<p>afterend текст</p>');

// */

/*
 *
 * DOM-узлы (Репета)
 * 
 */

/*

// - querySelector

// возвращает первый найденный элемент (по принципу find)
// на выходе получаем обычный JS объект
// если ничего не нашел, вернет пустой []

// найдет первый h1 на странице
 
const titleRef = document.querySelector(".title.header")
console.dir(titleRef) // h1.title.header

// найдет первую ссылку с этим классом

const linkRef = document.querySelector('.logo-link');
console.log(linkRef) // a.logo-link

// ищем все ссылки внутри нашело ul

const linksRef = document.querySelectorAll(".content-list")
console.log(linksRef) // NodeList [ul.content-list.list]

*/
/*

// - text content
// изменяет текстовый контент

const titleRef = document.querySelector(".title.header")

// изменяем текстовый контент
titleRef.textContent = "Привет, добро пожаловать!"

console.dir(titleRef) // заголовок изменился

*/
/*

// - Изображение

const imageRef = document.querySelector(".test-img")
console.log(imageRef)

// заменяем картинку

imageRef.src = "./images/img-002.jpg"

// заменяем alt   
   
imageRef.alt = "Это моя фотка!"

*/
/*

// - Инлайн стили для ссылки

const linkRef = document.querySelector('.logo-link');
console.log(linkRef) 

// добавляем инлайн стили для ссылки

linkRef.style.color = "red" // лого стал красным

*/
/* 

// - getAttribute

// официальный интерфейс для работы с атрибутами 

const imageRef = document.querySelector(".test-img")
console.log(imageRef)

// получаем alt

console.log(imageRef.getAttribute("alt"))

// получаем src

console.log(imageRef.getAttribute("src"))

*/
/*

// - setAttribute

// использовать если на элементе нет конкретного аттрибута

const imageRef = document.querySelector(".test-img")
console.log(imageRef)

// меняем значение аттрибута
// .setAttribute(name, value)

// меняем src
imageRef.setAttribute("src", "./images/img-002.jpg")

// меняем alt
imageRef.setAttribute("alt", "Это моя фотка")

*/
/*

// - classList

const activeLinkRef = document.querySelector('.logo-link');

// при помощи contains проверяем есть ли такой класс
// на элементе (класс указывать без точки)

console.log(activeLinkRef.classList.contains("logo-link")) // true

// добавляем класс в элемент

activeLinkRef.classList.add('ddd001')

// удаляем класс из элемента

activeLinkRef.classList.remove('logo-link')

// если класс есть, то удаляет и наоборот

activeLinkRef.classList.toggle('logo-link')

*/
/*

/*
 *
 * - Создание элементов
 *
 * Создание js-узла - это просто создание объекта (создается он в памяти)
 * изначально этого объекта на странице нет (просто ссылка в памяти)
 * 
 */

/* 

// делаем тег h1

const titleRef = document.createElement("h1")

console.log(titleRef) 

// добавляем текстовый контент в тег

titleRef.textContent = "Динамически зазданный h1";

// добавляем класс в тег

titleRef.classList.add('site-title')

// добавляем свойство id

titleRef.id = 'title'

console.log(titleRef)

*/
/*

// - Делаем карточку товара

// имеем объект 

const product = {
   name: "Сервоприводы",
   description: "dsfugoueygf ygd a uyg dc qywgeuwk  wuce w wuwvecugwef aasdcas labcjbc lrwbfvysb rfwlerfw euyrgebfvdc  elrufgasgvce rf w",
   price: 2001,
   available: true,
}

// создаем див

const containerRef = document.createElement("div")

// добавляем класс

containerRef.classList.add('product-card');
console.log(containerRef)

// создаем h2

const titleRef = document.createElement("h2")
titleRef.textContent = product.name;
titleRef.classList.add("product-card__name")

console.log(titleRef);

// создаем p

const descrRef = document.createElement("p");
descrRef.textContent = product.description;
console.log(descrRef);

// создаем цену

const priceRef = document.createElement("p");
priceRef.textContent = `${product.price} грн`;
console.log(priceRef)

// собираем все элементы в кучу при помощи appendChild()
// appendChild добавляет в конец детей элемента добавляет еще один
// Для вставки одного элемента использовать appendChild()

// containerRef.appendChild(titleRef);
// containerRef.appendChild(descrRef);
// containerRef.appendChild(priceRef);
// console.log(containerRef)

// то же сомое через append()
// Для вставки множества элементов использовать append()

containerRef.append(titleRef, descrRef, priceRef);
console.log(containerRef)

// ========= ul > li ==========

const contentList = document.querySelector(".content-list");

// получаем ссылка на первый li при помощи firstElementChild

console.log(contentList.firstElementChild)

// создаем элемент в списка

const listItemRef = document.createElement("li");
listItemRef.textContent = "New Item";

// добавляем этот элемент в конец списка

contentList.appendChild(listItemRef);

// создаем еще элемент в списка

const listItemRef2 = document.createElement("li");
listItemRef2.textContent = "New Item2";

// добавляем этот же элемент в начало списка

contentList.prepend(listItemRef2);
console.log(contentList)

// добавляет элемент перед первым элементом

contentList.insertBefore(listItemRef, contentList.firstElementChild)

*/
/*

// - Добавляет елементы в DOM


// имеем объект 

const product = {
   name: "Сервоприводы",
   description: "dsfugoueygf ygd a uyg dc qywgeuwk  wuce w wuwvecugwef aasdcas labcjbc lrwbfvysb rfwlerfw euyrgebfvdc  elrufgasgvce rf w",
   price: 2001,
   available: true,
}

// создаем див

const containerRef = document.createElement("div")

// добавляем класс

containerRef.classList.add('product-card');
// console.log(containerRef)

// создаем h2

const titleRef = document.createElement("h2")
titleRef.textContent = product.name;
titleRef.classList.add("product-card__name")

// console.log(titleRef);

// создаем p

const descrRef = document.createElement("p");
descrRef.textContent = product.description;
// console.log(descrRef);

// создаем цену

const priceRef = document.createElement("p");
priceRef.textContent = `${product.price} грн`;
// console.log(priceRef)

// собираем все элементы в кучу при помощи appendChild()
// appendChild добавляет в конец детей элемента добавляет еще один
// Для вставки одного элемента использовать appendChild()

// containerRef.appendChild(titleRef);
// containerRef.appendChild(descrRef);
// containerRef.appendChild(priceRef);
// console.log(containerRef)

// то же сомое через append()
// Для вставки множества элементов использовать append()

containerRef.append(titleRef, descrRef, priceRef);
// console.log(containerRef)

// ========= ul > li ==========

const contentList = document.querySelector(".content-list");

// получаем ссылка на первый li при помощи firstElementChild

console.log(contentList.firstElementChild)

// создаем элемент в списка

const listItemRef = document.createElement("li");
listItemRef.textContent = "New Item";

// добавляем этот элемент в конец списка

contentList.appendChild(listItemRef);

// создаем еще элемент в списка

const listItemRef2 = document.createElement("li");
listItemRef2.textContent = "New Item2";

// добавляем этот же элемент в начало списка

contentList.prepend(listItemRef2);
// console.log(contentList)

// добавляет элемент перед первым элементом

contentList.insertBefore(listItemRef, contentList.firstElementChild)

// добавляет карточку товара внутрь дива в html

const cardRootRef = document.querySelector("#root");

cardRootRef.appendChild(containerRef)

console.log(containerRef)

*/