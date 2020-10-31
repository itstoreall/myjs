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