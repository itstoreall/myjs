
/* =========================================== 

Найти и показать

- Найти элемент по классу
const linkRef = document.querySelector(".nav__link");
* <a href="" class="nav__link">link</a>

- Найти все элементы по классу
const linkRef = document.querySelectorAll(".nav__link");
* NodeList(2)[a.nav__link, a.nav__link.nav__link--active]

- Найти по id
const linkRef = document.querySelector("#nav__link");
* <a href="" id="nav__link">link</a>

- Найти кнопку по data-*
const incBtnRef = document.querySelector('button[data-action="increment"]');
* <button type="button" data-action="increment">+1</button>

- Показать текст в элементе
console.log(element.textContent);

------------------------------------------- */

/* ===========================================

Присвоение и замена

- Изменяем текст в элементе
element.textContent = 'Новый текст';

------------------------------------------- */

/* ===========================================

titleRef

const titleRef = document.querySelector("h3");
* <h3>Highlights</h3>

- Создаем класс заголовка (oldS)
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

   - Добавляем класс через терн. опер. (меняет цвет before)
   titleRef3.classList.add("product-card__name", product.available 
   ? "product-card__name--available" 
   : "product-card__name--not-available");

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

/* ===========================================

ul.categories > li.item > h2, ul > li

- Достучаться ко всем li.item
const items = document.querySelectorAll(".item");
* NodeList(3) [li.item, li.item, li.item]

- Узнать длину items (псевдо-мас)
const quantityItems = items.length;

- Перебрать items в forEach
items.forEach(item => {

   - Показать текст из h2
   item.children[0].innerText;

   - Показать количество li в ul
   item.children[1].children.length;
})

------------------------------------------- */

/* ===========================================

ul.ingredients

- Имеем массив ингредиентов
const ingredients = ['Картошка', 'Грибы', 'Чеснок'];

- Находим ul.ingredients
const ingredientsRef = document.querySelector(".ingredients");

- Перебираем массив ингредиентов
ingredients.forEach(element => {

   - Создаем li
   const ingredient = document.createElement("li");

   - Добавляем в li текс из массива
   ingredient.textContent = element;

   - Впихиваем li в ul
   ingredientsRef.appendChild(ingredient);
})

------------------------------------------- */

/* ===========================================

Counter (increment, decrement)

- Имеем такую конструкцию в HTML
<div id="counter">
   <button type="button" data-action="decrement">-1</button>
   <span id="value">0</span>
   <button type="button" data-action="increment">+1</button>
</div>

- Находим кнопку increment по data=*
const incrementBtnRef = document.querySelector('button[data-action="increment"]');

- Находим кнопку decrement по data=*
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');

- Находим span (отображение счетчика)
const counterValueRef = document.querySelector("#value");

- Создаем переменную значения счетчика
let counterValue = 0;

- Создаем функцию increment (+1)
incrementBtnRef.addEventListener("click", () => {
   counterValue += 1;

   - Записывает значение в переменную
   counterValueRef.textContent = counterValue;
});

- Создаем функцию decrement (11)
decrementBtnRef.addEventListener("click", () => {
   if (counterValue < 1) {
      counterValue = 0;
   } else { counterValue -= 1 };

   - Записывает значение в переменную
   counterValueRef.textContent = counterValue;
});

------------------------------------------- */