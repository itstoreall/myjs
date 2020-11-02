
/* =========================================== 

linkRef

- Поиск элемента по классу
const linkRef = document.querySelector(".nav__link");
* <a href="" class="nav__link">link</a>

- Поиск всех элементов по классу
const linkRef = document.querySelectorAll(".nav__link");
* NodeList(2)[a.nav__link, a.nav__link.nav__link--active]

------------------------------------------- */

/* ===========================================

titleRef

const titleRef = document.querySelector("h3");
* <h3>Highlights</h3>

- Создаем класс заголовка
titleRef.setAttribute("class", "page-h3")

- Изменяем текст заголовка
titleRef.textContent = "Новый Highlights";

------------------------------------------- */

/* ===========================================

activeLinkRef

const activeLinkRef = document.querySelector(".nav__link--active");
* <a class="nav__link nav__link--active">link Active</a>

- Добавляем href
activeLinkRef.setAttribute("href", "https://google.com");

- style.color
activeLinkRef.style.color = "red";

- Узнать есть ли такой класс
console.log(activeLinkRef.classList.contains("nav__link")) // true

- Добавляет новый класс
activeLinkRef.classList.add("new-class-activeLink");

------------------------------------------- */

/* ===========================================

imageRef

const imageRef = document.querySelector(".hero-img");
* <img class="test-img" src="./images/img-001.jpg">

- Создаем alt 
imageRef.alt = "Это моя фотка!";

- Изменяем src
imageRef.src = "./images/img-002.jpg";

- Получаем значение альта
console.log(imageRef.getAttribute("alt"));

- Удаляем alt
imageRef.removeAttribute("alt");

------------------------------------------- */

/* ===========================================

classList

const linkRef = document.querySelector(".nav__link");
console.log(linkRef.classList)
* DOMTokenList ["nav__link", value: "nav__link"]

- Проверяет есть ли класс 
console.log(linkRef.classList.contains("nav__link")); // true

- Добавляет класс в список классов
linkRef.classList.add("new--link__class");

- Множественное добавление
linkRef.classList.add("new-1", "new-2", "new-3");

- Удаляем класс из списка классов
linkRef.classList.remove("new--link__class");

- Заменяет класс на класс
linkRef.classList.replace("new--link__class", "supernew--link__class");

- Toggle классов
linkRef.classList.toggle("supernew--link__class");

- Перебираем псевдо-массив в forEach
linkRef.classList.forEach(cls => {
  console.log(cls); 
});
* nav__link, new-1, new-2, new-3

------------------------------------------- */

/* ===========================================

createElement

- Создаем элемент h3 в пямяти
const titleRef2 = document.createElement("h3");

- Добавляем текст заголовка
titleRef2.textContent = "Созданный заголовок 2";

- Добавляем класс
titleRef2.classList.add("created__title--class");

- Добавляет id
titleRef2.id = "created__title-id";

------------------------------------------- */

/* ===========================================

createElement

- Создаем div в пямяти
const containerRef = document.createElement("div");

- Добавляем класс
containerRef.classList.add("product-card");

- Создаем заголовок
const titleRef3 = document.createElement("h3");

- Добавляем текст заголовка 
titleRef3.textContent = product.name;

- Добавляем класс заголовка
titleRef3.classList.add("product-card__name");

- Добавляем описание карты
const descrRef = document.createElement("p");

- Добавляем текст описания
descrRef.textContent = product.description;

- Добавляем цену
const priceRef = document.createElement("p");

- Добавляем текст в строку цены
priceRef.textContent = `Цена: ${product.price} кредитов`;

- Вставляем 1 элемент в контейнер
containerRef.appendChild(titleRef3);

- Вставляем 2 элемента в контейнер
containerRef.append(descrRef, priceRef);

- Добавляем в DOM
const cardRootRef = document.querySelector(".root")
cardRootRef.appendChild(containerRef)

------------------------------------------- */

/* ===========================================

product => {}

- Импортируем объект с продуктами
import products from "./007-products.js";

- Создаем функцию которая ретернет готовую разметку
const createProductCard = product => {

   - div
   const containerRef = document.createElement("div");
   containerRef.classList.add("product-card");

   - h3
   const titleRef3 = document.createElement("h3");
   titleRef3.textContent = product.name;
   titleRef3.classList.add("product-card__name");

   - description
   const descrRef = document.createElement("p");
   descrRef.textContent = product.description;

   - price
   const priceRef = document.createElement("p");
   priceRef.textContent = `Цена: ${product.price} кредитов`;

   - контейнер с разметкой
   containerRef.append(titleRef3, descrRef, priceRef);

   return containerRef;
}

- Создаем массив продуктовых карточек
const productCards = products.map(product => createProductCard(product));

- Распыляем массив карточек в DOM
const productsListRef = document.querySelector(".js-products");
productsListRef.append(...productCards);

------------------------------------------- */