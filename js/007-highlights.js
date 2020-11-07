
/* =========================================== 
** Найти и показать

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
** Создание, присвоение, добавление

- Создаем div
const containerRef = document.createElement("div");

- Создаем класс заголовка (oldS)
titleRef.setAttribute("class", "page-h3")

- Изменяем текст в элементе
element.textContent = 'Новый текст';

- Присваивает спану значение введенное в инпут
nameNameOutput.textContent = event.target.value;

- Присваиваем значение data-length
const inpunDataLength = inputRef.dataset.length;

- Добавляем и удаляем класс
inputRef.classList.remove("invalid");
inputRef.classList.add("valid");

- Добавляем атрибут для input type="range"
input.setAttribute("min", "16");

- Добавляем спану инлайн-стиль font-size с текущим значением инпута
span.style.fontSize = event.currentTarget.value + "px";

- Увеличиваем на 10 начальное значение (из инпута) amount раз 
const initialSize = 30;
for (let i = 0; i < amount; i += 1) {
   const size = initialSize + i * 10;
};

- Функция берет значение из инпута (type="number")
function getInputValue() {
  const inputValue = document.querySelector("#controls > input").value;

  - и вызываем функцию создания дива
  createBoxes(inputValue);
};

- Добавляем диву инлайн-стили: ширина, высота, рандомный цвет
div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${randomColor()} , ${randomColor()} , ${randomColor()} )`;

- Функция создания рандомного цвета
function randomColor() {
  return Math.floor(Math.random() * 256);
};

- Функция очистки инпута
function destroyBoxes() {
  boxesRef.textContent = "";
};

------------------------------------------- */

/* ===========================================
** if else

- Если значение спана пустая строка
if (nameNameOutput.textContent === "")

- Если кол-во введенных в input = значению data-length
if (inputValidationRef.value.length === Number(inpunDataLength))

------------------------------------------- */

/* ===========================================
** activeLinkRef

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
** imageRef

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
** classList

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
** createElement

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
** createElement

* Создаем карточку 

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
** product => {}

* Создаем крточку с помощью функции

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
** ul.categories > li.item > h2, ul > li

* Cчитаем кол-во li разной глубины и выводим текст из h2

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
** ul.ingredients

* Создаем li из массива и впихиваем их в ul

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
** Counter

* Кнопкими increment и decrement изменяем значение счетчика

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

/* ===========================================
** Input =-> h2 > text

* Когда вводим текст в input он отображается в h2

- Имеем два тега
<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>

- Находим итпут и спан
const nameInputRef = document.querySelector("#name-input");
const nameNameOutput = document.querySelector("#name-output");

- Функция отображения текста в заголовке
nameInputRef.addEventListener("input", event => {

   - Присваиваем спану значение вписанное в инпут
   nameNameOutput.textContent = event.target.value;
   
   - Если спан пустой, будет отображаться "незнакомец"
   if (nameNameOutput.textContent === "") {
      nameNameOutput.textContent = "незнакомец";
   };
});

------------------------------------------- */

/* ===========================================
** Input data-length blur =-> classList

* При 6 символах бордер зеленый, иначе - красный

- Имеем input с data-length
<input type="text" id="validation-input" data-length="6" placeholder="Введи 6 символов" />

- Находим input по id
const inputValidationRef = document.querySelector("#validation-input");

- Присваиваем значение data-length
const inpunDataLength = inputValidationRef.dataset.length;

- Функция - при потере фокуса меняем классы
inputValidationRef.addEventListener("blur", () => {

   - Если кол-во символов = data-length ...
   if (inputValidationRef.value.length === Number(inpunDataLength)) {
      inputValidationRef.classList.remove("invalid");
      inputValidationRef.classList.add("valid");
   } else if (inputValidationRef.value.length === 0) {
      inputValidationRef.classList.remove("valid");
      inputValidationRef.classList.remove("invalid");
   } else {
      inputValidationRef.classList.remove("valid");
      inputValidationRef.classList.add("invalid");
   }
});

------------------------------------------- */

/* ===========================================
** input type="range" =-> fontSize

- Имеем input и span
<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>

- Находим input
const input = document.querySelector("#font-size-control");

- Находим span
const span = document.querySelector("#text");

- Добавляем атрибуты для input type="range"
input.setAttribute("min", "16")
input.setAttribute("max", "45")

- Вешаем слушатель на input
input.addEventListener("input", onInputRange);

- Добавляем онлайн-стиль font-size (fontSize) спану 
function onInputRange(event) {

   - который изменяется от текущего значения inputa range
  span.style.fontSize = event.currentTarget.value + "px";
};

------------------------------------------- */

/* ===========================================
** input value =-> div.style.cssText

// - Находим div и кнопку по data-*

const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.getElementById("boxes");

// - Запускаем кликом функцию получения значения из инпута (type="number")
// и функцию очистки строки (удалить контент в input)

renderBtnRef.addEventListener("click", getInputValue);
destroyBtnRef.addEventListener("click", destroyBoxes);

// 2. - Функция создает div в который впихиваются маленькие дивы 
// с начальным значением созданные в цикле, рандомных цветов 
// и динамическим размером. Количество итераций определяется  
// amount - значением инпута type="number"

function createBoxes(amount) {
  const initialSize = 30;
  const containerRef = document.createElement("div");
  for (let i = 0; i < amount; i += 1) {
    const size = initialSize + i * 10;
    const newDiv = document.createElement("div");
    newDiv.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${randomColor()} , ${randomColor()} , ${randomColor()} )`;
    containerRef.appendChild(newDiv);
  }
  boxesRef.appendChild(containerRef);
};

// 1. - Функция берет из инпута значение, и в его 
// контексте запускает создание дивчика 

function getInputValue() {
  const inputValue = document.querySelector("#controls > input").value;
  createBoxes(inputValue);
};

// 3. - Функция создает рандомные цвета rgba

function randomColor() {
  return Math.floor(Math.random() * 256);
};

// 4. - Функция очищает строку (инпут)

function destroyBoxes() {
  boxesRef.textContent = "";
};

------------------------------------------- */