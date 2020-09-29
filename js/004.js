/*
 *
 * Функция обратного вызова (callback) и функция высшего порядка (hof)
 * Callback
 *
 */

/*

// Концепция колбек функции (функция которая передается в другую функцию)

const greet = function (name) {
  console.log(`Hello, ${name}`);
};

const greetWithName = function (callback) {
  const name = "Margo";

  console.log(callback);
  callback(name);
};

greetWithName(greet);

*/

/*
 *
 * Отложенный вызов: регистрация события
 * Click
 *
 */

/*

const buttonRef = document.querySelector("button");

const handleButtonClick = function () {
  console.log("Click");
};

buttonRef.addEventListener("click", handleButtonClick);

*/

/*
 *
 * Отложенный вызов: интервал
 * 3000!
 *
 */

/*

console.log("В коде перед таймаутом");

const buttonRef = document.querySelector("button");

const handleButtonClick = function () {
  console.log("Click");
};

buttonRef.addEventListener("click", handleButtonClick);

setTimeout(function () {
  console.log("3000!");
}, 3000);

console.log("В коде после таймаута");

*/

/*
 *
 * Отложенный вызов: HTTP запрос
 *
 */

/*

// const handleFetchSuccess = function (data) {
//   console.log(data);
// };

console.log("В коде перед fetch");

fetch("https://swapi.co/api/people/1/")
  .then((res) => res.json())
  .then(function (data) {
    console.log(data);
  });

console.log("В коде после fetch");

*/

/*
 *
 * Область видимости
 * Лексическое окружение
 *
 */

/*

console.log(a);

if (true) {
  const a = 5;
  console.log(a);
}

console.log(a);

*/
/*

// - Лексическое окружение создается в момент вызова функции, а не его объявления

  // Global env - создается при исполнении файла скрипта
  // Record: {}
  // Parent: null

const x = 10;

// Global env
// Record: {x: 10}
// Parent: null

const y = 20;

// Global env
// Record: {x: 10, y: 20}
// Parent: null

// Записывается в момент объявления функции
// [[Environment]] = Global env

const foo = function (z) {

  // Foo env - создается в момент вызова функции
  // Record: {z: 30}
  // Parent: Global env

  const x = 100;

  // Foo env - создается в момент вызова функции
  // Record: {z: 30, x: 100}
  // Parent: Global env

  return x + y + z;
};

// Global env
// Record: {x: 10, y: 20, foo: <function>}
// Parent: null

foo(30); // 150

*/

/*
 *
 * Замыкание
 *
 */

/*

// Grobal env
// Record: {}
// Parent: null

// Environment: Global env

const foo = function () {
  // Foo env
  // Record: {foo: f}
  // Parent: Global env

  const x = 5;

  // Foo env
  // Record: {x: 5}
  // Parent: Global env

  // Environment: Foo env
  return function () {
    // Anonim env
    // Record: {}
    // Prent: Foo env

    console.log(x);
  };
};

// Grobal env
// Record: {foo: f}
// Parent: null

const outerFn = foo();

// Grobal env
// Record: {foo: f, outerFn: f}
// Parent: null

outerFn();

*/

/*
 *
 * Замыкание
 *
 */

/*

// Замыкание это возможность функции запомнить то лексическое
// окружение, тот набор переменных, который был в момент ее
// создания и использовать в любом месте, даже если функция
// вызвана вне этой области видимости. Все это благодаря
// лексическому окружению

const foo = function () {
  const x = 5;

  return function () {
    console.log(x);
  };
};

const outerFn = foo();

outerFn();

*/

/*
 *
 * Готовим еду с поваром
 *
 * Замыкаемся на имени повара и потом просто вызываем функцию
 * передавая туда то, хотим приготовить, и оно будет туда запоминать name
 *
 */

/*

const makeDish = function (sheffName, dish) {
  console.log(`${sheffName} готовит ${dish}`);
};

// Повар готовит

// Задачи для Шефа
// makeDish("Mango", "пирожок");
// makeDish("Mango", "омлет");
// makeDish("Mango", "Чай");

// makeDish("Poly", "котлеты");
// makeDish("Poly", "супчик");
// makeDish("Poly", "кофе");

// Тут блюдо готовится
// Замыкание
// Каррирование (функциональное программирование)
const makeSheff = function (name) {
  return function (dish) {
    console.log(`${name} готовит ${dish}`); // лог Mango готовит котлеты
  };
};

// Назначаем Шефа
const mango = makeSheff("Mango");
const poly = makeSheff("Poly");

mango("котлеты");
poly("чай");

// Проверяем функцию Замыкание
// dir показывает функцию в первозданном виде
// в консоле - Clousure (makeSheff) означает на этой функции замкнулись
console.dir(mango);

*/
/*

const fnA = function (a) {
  return function fnB(b) {
    return function fnC(c) {
      console.log(a, b, c); // лог 5 10 15
    };
  };
};

// ()()
// () сначала вызывается fnA. На место вызова подставляется первый return
// На место второго выражения подставляется второй ретерн. Теперь внутри res будет fnC
const res = fnA(5)(10);
res(15);
console.dir(res);

*/

/*
 *
 * Функция это частный случай объекта -> ССЫЛОЧНЫЙ ТИП
 *
 */

/*

console.log("[] === []: ", [] === []); // лог false (не равны, потому что две разные ссылки в памяти)
console.log("{} === {}: ", {} === {}); // лог false

console.log(
  "function () {} === function () {}: ",
  function () {} === function () {}
); // log false (функции - ссылочный тип, разные ссылки в памяти)

// Два объекта могут быть равны, только когда мы сравниваем две переменных в которых лежит ссылка на один и тот же объект

const fnA = function () {
  console.log("hello");
};
const fnB = fnA;

console.log("fnB === fnA: ", fnB === fnA); // log true

*/

// ============== This ===============

/*
 *
 * Контекст (this)
 * - Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
 * - Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно.
 *
 */

//  ==================================

/*
 *
 * Как метод объекта. Вызов в контексте объекта
 *
 */

/*

const user = {
  tag: "Mango",
  showTag() {
    console.log("this:", this);
    console.log("this.tag:", this.tag);
  },
};

user.showTag(); // слева от точки и есть то, что вызывает эту функцию. Поэтому ключевое слово this получит ссылка на объект user

*/

//  ==================================

/*
 *
 * Вызов без контекста
 *
 */

/*

// Обычная внешняя функция
const foo = function () {
  console.log("this:", this);
};

// ! Если функция без контекста (если скрипт выполняется в строгом режиме "use strict") то this будет undefined
foo(); // log this: undefined

*/

//  ==================================

/*
 *
 * Как метод объекта, но объявлена как внешняя функция. В контексте объекта
 *
 */

/*

const showTag = function () {
  console.log("this:", this);
  console.log("this.tag:", this.tag);
};

// showTag(); // вызов без контекста лог this: undefined, а "tag" ошибка, потому что такого нет вообще

const user = {
  tag: "Mango",
};

user.x = showTag; // в свойство x записывается ссылка на функцию showTag

console.log(user); // log {tag: "Mango", showTag: ƒ} - теперь в свойстве x лежит ссылка на эту функцию
user.x(); // и теперь log this.tag: Mango

*/

//  ==================================

/*
 *
 * Вызов без контекста, но объявлена как метод объекта
 *
 */

/*

const user = {
  tag: "Mango",
  showTag() {
    console.log("this:", this);
    console.log("this.tag:", this.tag);
  },
};

user.showTag(); // вызов как метод объекта лог this: {tag: "Mango", showTag: ƒ} и this.tag: Mango

const outerShowTag = user.showTag; // в переменную outerShowTag записываем метод showTag()

console.log(outerShowTag);

outerShowTag(); // log this: undefined и ошибка по this.tag

*/

//  ==================================

/*
 *
 * Контекст в callback-функциях
 *
 */

/*

const user = {
  tag: "Mango",
  showTag() {
    console.log("this:", this);
    console.log("this.tag:", this.tag);
  },
};

const invokeAction = function (action) {
  console.log(action);

  action();
};

*/

/*
 *
 * Функция это объект
 *
 */

/*

const fn = function () {
  console.log("Hello");
};

fn.method = function () {
  console.log("this:", this); // log this: ƒ () {console.log("Hello");}
  console.dir(this);
};

fn.method();

*/

//  ==================================

/*
 *
 * Контекст в callback-функциях
 *
 */

/*

// Методы объекта не знают про то, что они методы обекта
// это просто обычные функции которые хранятся в памяти
// и во время вызова, в эту функцию, в ее this записывается
// ссылка на этот объект

const user = {
  tag: "Mango",
  showTag() {
    console.log("this:", this);
    console.log("this.tag:", this.tag);
  },
};

const invokeAction = function (action) {
  console.log(action);

  action(); // ошибка и андефайнд - слева нет никакокго объекта, который ее вызывает
};

// user.showTag(); // this будет ссылаться на user потомучто в контексте user был вызван этот тег

invokeAction(user.showTag);

*/

//  ==================================

/*
 *
 * :)
 * Так запутывают на собесе
 *
 */

/*

const makeChangeColor = function () {
  // 2. сщздается функция changeColor
  const changeColor = function (color) {
    this.color = color;
  };
  // 3. сщздается объект свитера
  const sweater = {
    color: "teal",
  };
  // 4. объекту свитера, его свойству changeColor записывается ссылка на тело функции changeColor
  sweater.changeColor = changeColor;
  // 5. из вункции makeChangeColor мы возвращаем ссылку на метод объекта sweater.changeColor - то же самое, что ссылку на changeColor
  // Получается в переменной changeColor лежит тело функции changeColor
  return sweater.changeColor;
};

const changeColor = makeChangeColor(); // 1. вызов функции makeChangeColor
// 6. и в итоге мы вызываем эту функцию вот так --v
changeColor("blue"); // 7. слева нет объекта который ее вызывает (функция вызывается без контекста)
// Поэтому this будет undefined  и ошибка лог Uncaught TypeError: Cannot set property 'color' of undefined at changeColor
// потому что у undefined нет свойства color

 */

//  ==================================

/*
 *
 * :)
 * Еще вариант...
 *
 */

/*

const makeChangeColor = function () {
  const changeColor = function (color) {
    console.log(this); // log {color: "blue", changeColor: ƒ}
    this.color = color;
  };

  return changeColor;
};

const hat = {
  color: "blue",
  changeColor: makeChangeColor(), // return записали как свойство метода
};

hat.changeColor("orange"); // цвет изменится потому что эта функция была вызвана в контексте объекта hat
// и в ее thos запишится ссылка на этот объект
// console.log(hat); // цвет изменился log {color: "orange", changeColor: ƒ}

*/

/*
 *
 * Call
 * - метод, позволяет вызвать функцию в контексте какого-то объекта
 * showTag.call(mango) - mango будет this в этой функции
 */

/*

const showTag = function () {
  console.log("this:", this); // log this: {tag: "Mango"} и this.tag: Mango
  console.log("this.tag:", this.tag); // log this: {tag: "Poly"} и this.tag: Poly
};

const mango = {
  tag: "Mango",
};

const poly = {
  tag: "Poly",
};

showTag.call(mango);
showTag.call(poly);

*/
/*

const showTag = function (arg1, arg2, arg3) {
  console.log(arg1, arg2, arg3); // log:nymber 1 2 3
  console.log("this:", this);
  console.log("this.tag:", this.tag);
};

const mango = {
  tag: "Mango",
};

const poly = {
  tag: "Poly",
};

showTag.call(mango, 1, 2, 3);
showTag.call(poly, 4, 5, 6);

*/

/*
 *
 * Apply
 * то же что и Call, только вторым набором передается массив
 *
 */

/*

const showTag = function (arg1, arg2, arg3) {
  console.log(arg1, arg2, arg3); // log:nymber 1 2 3
  console.log("this:", this);
  console.log("this.tag:", this.tag);
};

const mango = {
  tag: "Mango",
};

const poly = {
  tag: "Poly",
};

// showTag.call(mango, 1, 2, 3);
// showTag.call(poly, 4, 5, 6);

showTag.apply(mango, [1, 2, 3]); // то же самое но передает []
showTag.apply(poly, [4, 5, 6]);

*/

/*
 *
 * Bind
 * метод, НЕ вызывает функцию showTag прямо здесь и сейчас,
 * а создает ее копию с привязаным контекстом который вы передаете
 * ! Привязывается навсегда
 *
 *
 */

/*

const showTag = function (arg1, arg2, arg3) {
  console.log(arg1, arg2, arg3); // log:nymber 1 2 3
  console.log("this:", this);
  console.log("this.tag:", this.tag);
};

const mango = {
  tag: "Mango",
};

const poly = {
  tag: "Poly",
};

// showTag.call(mango, 1, 2, 3);
// showTag.call(poly, 4, 5, 6);

// showTag.apply(mango, [1, 2, 3]);
// showTag.apply(mango, [4, 5, 6]);

const showMangoTag = showTag.bind(mango);
const showPoliTag = showTag.bind(poly);

showMangoTag(1, 2, 3);
showPoliTag(4, 5, 6);

// showTag(); // оригинал он не трогает
// showTag(); // оригинал он не трогает

*/

/*
 *
 * Кнопка "Show items"
 * слушатель события
 * привязка контекста
 *
 */

/*

const cart = {
  items: ["Телефон", "Наушники"],
  showItems() {
    console.log("thes:", this);
    console.log("thes.items:", this.items);
  },
};

// - исходный вариант
// document.querySelector(".js-show-items").addEventListener("click", function () {
//   console.log("Click :)");
// });

// вариант (ссылается на кнопку
// document.querySelector(".js-show-items").addEventListener("click", function () {
//   console.log(this); // при нажатии this ссылается на объкт на котором стоит обработчик, на кнопк
// });

document
  .querySelector(".js-show-items")
  .addEventListener("click", cart.showItems.bind(cart)); // привязка контекста - берет метод showItems (функцию, ее тело), создает копию bind и к ее this навсегда привяжи объект cart

*/

// ===========================

/*

const mango = {
  tag: "Mango",
  showTag() {
    console.log(this); // {tag: "Poly"}
  },
};

const poly = {
  tag: "Poly",
};

mango.showTag.call(poly); // log {tag: "Poly"}

const showPolyTag = mango.showTag.bind(poly);

showPolyTag();

*/
