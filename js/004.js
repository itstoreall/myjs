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

/*
 *
 * This
 * Конспект:
 *
 * Значение контекста внутри функции определятся не в момент
 * ее создания, а в момент вызова. То есть значение this
 * определяется тем, как вызывается функция, а не где
 * она была объявлена.
 *
 */

/*

// Петя бежит быстро, потому что Петя пытается поймать поезд

const petya = {
  name: "Petya",
  showName() {
    console.log(petya.name);
  },
};

petya.showName();

*/
/*

// Петя бежит быстро, потому что он (this) пытается поймать поезд.

const petya = {
  name: "Petya",
  showName() {
    console.log(this.name);
  },
};

petya.showName();

*/

/*
 *
 * This в глобальной области видимости
 *
 */

/*

function fn() {
  console.log(this);
}

fn(); // window без "use strict" и udefined с "use strict"

 */

/*
 *
 * This в методе объекта
 *
 */

/*

const petya = {
  name: "Petya",
  showThis() {
    console.log(this);
  },
  showName() {
    console.log(this.name);
  },
};

petya.showThis(); // {name: "Petya", showThis: ƒ, showName: ƒ}
petya.showName(); // 'Petya'

*/

// - Более сложный пример

/*

function showThis() {
  console.log("this in showThis: ", this);
}

// Вызываем в глобальном контексте
showThis(); // this in showThis: Window

const user = { name: "Mango" };

// Записываем ссылку на функцию в свойство объекта
// Обратите внимание, что это не вызов - нет ()

user.showContext = showThis;

// Вызываем функцию в контексте объекта
// this будет указывать на текущий объект, в контексте
// которого осуществляется вызов, а не на глобальный объект.

user.showContext(); // log this in showThis: {name: "Mango", showContext: ƒ}

*/

/*
 *
 * This в функциях обратного вызова
 *
 */

/*

const hotel = {
  name: "Resort Hotel",
  showThis() {
    console.log(this);
  },
};

const fn = function (callback) {
  // Во время вызова fn, callback будет ссылкой
  // на функцию showThis объекта hotel.
  // Ее вызов происходит в глобальном контексте,
  // про hotel она ничего не знает.
  // Соответственно this не будет ссылаться на hotel

  callback();
};

// Передается ссылка на функцию а нее ее вызов
fn(hotel.showThis); // window или undefined

*/

/*
 *
 * This в стрелочных функциях
 *
 * Стрелочные функции не имеют своего this. В отличии
 * от обычных функций, изменить значение this внутри
 * стрелки после ее объявления нельзя.
 *
 * Контекст внутри стрелки определяется местом ее
 * объявления, а не вызова, и ссылается на контекст
 * родительской функции.
 *
 * Стрелочные функции также игнорируют наличие
 * строгого режима. Если стрелка запомнила глобальный
 * контекст, то this в ней будет содержать ссылку
 * на window вне зависимости выполняется ли скрипт
 * в строгом режиме или нет.
 *
 */

/*

const showThis = () => {
  console.log("this in showThis: ", this);
};

showThis(); // this in showThis: window (log this in showThis:  undefined)

const user = {
  name: "Mango",
};
user.showContext = showThis;

user.showContext(); // this in showThis: window

*/
/*

// Значение контекста берется из родительской области видимости.

const hotel = {
  name: "Resort hotel",
  showThis() {
    const fn = () => {
      // Стрелки запоминают контекст во время объявления, из родительской области видимости

      console.log("this in fn: ", this); // this in fn: {name: 'Resort hotel', showThis: ƒ}
    };

    fn();
    console.log("this in showThis: ", this); // this in showThis: {name: 'Resort hotel',showThis: ƒ}
  },
};

hotel.showThis();

*/
/*

// Если привести этот код к ES5, получится следующее.

const hotel = {
  name: "Rsort hotel",
  showThis: function showThis() {
    // Контекст для стрелки сохраняется и передается из внешней области видимости

    const context = this;

    const fn = function fn() {
      console.log("this in fn: ", context); // this in fn: {name: 'Resort hotel', showThis: ƒ}
    };

    fn();
    console.log("this in showThis: ", this); // this in showThis: {name: 'Resort hotel',showThis: ƒ}
  },
};

hotel.showThis();

*/

/*
 *
 * Bind
 *
 * В случае функции обратного вызова, когда необходимо
 * не вызвать функцию на месте, а передать ссылку на
 * эту функцию, причем с привязанным контекстом,
 * call и apply не подходят. Метод bind позволяет
 * решить эту задачу.
 *
 * const boundFn = fn.bind(obj, arg1, arg2, ...)
 *
 * Метод bind создает копию функции fn с привязанным
 * контекстом obj и аргументами arg1, arg2 и так
 * дале, после чего возвращает ее как результат своей
 * работы. В результате мы получаем копию функции
 * с привязанным контекстом, которую можно передать
 * куда угодно и вызвать когда угодно.
 *
 */

/*

const greet = function (guest) {
  return `${guest}, welcome to ${this.name}!`;
};

const hotel = { name: "Resort Hotel" };

const hotelGreeter = greet.bind(hotel, "Mango");

hotelGreeter(); 

*/
/*

const hotel = {
  name: "Resort Hotel",
  showThis() {
    console.log(this);
  },
};

const fn = function (callback) {
  callback();
};

// Передаем копию метода showThis с контекстом привязанным к hotel
fn(hotel.showThis.bind(hotel)); // log {name: "Resort Hotel", showThis: ƒ}

*/

/*
 *
 * Стек вызовов
 *
 * LIFO - Last In, First Out
 * Представьте стек как массив у которого есть только
 * методы pop и push, то есть мы можем добавить или
 * удалить только элемент в конце коллекции.
 *
 * Контекст выполнения (execution context) - внутренняя
 * конструкция языка для отслеживания выполнения
 * функции, содержит метаинформацию о ее вызове.
 *
 * Глобальный контекст выполнения (global execution
 * context) - это контекст есть по умолчанию, сам
 * файл скрипта это функция которая запускается на
 * выполнение.
 *
 * Контекст выполнения функции (functional execution
 * context) - создается каждый раз при вызове функции.
 *
 * Стек вызовов (Execution Context stack, call stack)
 * - внутреняя констуркция движка, которая содержит
 * все контексты выполнения.
 *
 * Stack frame (кадр стека, запись стека) - структура
 * которая добавляется на стек при вызове функции.
 * Хранит некоторую метаинформацию: имя функции,
 * аргументы которые были переданы во время вызова
 * и номер строки в которой произошел вызов.
 *
 */

 /*
 *
 * Gari
 *
 */

/*

// - Callback()

// - Концепция

// функция высшего порядка
function sayHello(x, callback) {
  console.log("Hello", x);

  // иногда добавляют проверку:
  // если это колбек и тайпоф колбек это точно функция
  // то только в этов случае делать вызов

  if (callback && typeof callback === "function") {
    // функция обратного вызова
    callback();
  }
}

function fn(){
  console.log("some function")
}

const a = 1;
// вызов
sayHello(a, fn)

*/
/*

// - Filter

// нужно получить вот такой массив на выходе -v
// если x > 3 =-> [4, 5, 6] и x < 3 || x > 4

const numbers = [1, 2, 3, 4, 5, 6];

console.log(filter(numbers, x => x > 3)) // x > 3 =-> [4, 5, 6]
console.log(filter(numbers, x => x < 4)) // x < 4 =-> [1, 2, 3]
console.log(filter(numbers, x => x < 3 || x > 4)) // x < 3 || x > 4 =-> [1, 2, 3]

function filter(arr, callback) {
  const result = [];
  // const check = (x) => x > 3; // true || false

  for (const value of arr) {
    if (callback(value)) {
      result.push(value);
    }
  }

  return result;
}

*/
/*

// - Find 

// x === 3
// x === 7
// x > 1
// x > 5

const numbers = [1, 2, 3, 4, 5, 6];

function find(arr, callback) {
  const result = [];

  for (const value of arr) {
    if (callback(value)) {
      return value
    }
  }
}

console.log(find(numbers, x => x === 3));
console.log(find(numbers, x => x === 7));
console.log(find(numbers, x => x > 1));
console.log(find(numbers, x => x > 5));

*/
/*

// - indexOf 

// x === 3 =-> 2

const fruits = ['apple', "orange", "strawberry"];

function indexOf(arr, callback) {
  const result = [];
  // console.log(callback);

  for (let i = 0; i < arr.length; i += 1){
    if (callback(arr[i])) {
      // "jhfg" ---> false
      return i;
    }
  }

  return -1;
}

function check(fruit) {
  // "jhfg"
  return fruit === "apple";
}

// различные варианты написания
console.log(indexOf(fruits, check)); // 0
console.log(indexOf(fruits, x => x === "strawberry")); // 2
console.log(indexOf(fruits, fruit => fruit === "jhfg")); // -1

*/
/*

// - map()

const fruits = ["apple", "orange", "strawberry"];

function transform(x) {
  return `<li>${x}</li>`
}

function map(arr, callback) {
  const result = [];

  for (const item of arr) {
    result.push(callback(item));
  }

  return result;
}

console.log(map(fruits, transform));
console.log(map(fruits, x => `<li class="list-item">${x}</li>`))

// <li>apple</li>;
// <li>orange</li>;
// <li>strawberry</li>;

*/
/*

// - Замыкание (Closures)

// способность функции запоминать лекс. окружение родителя 
// работать с ним и практически во всех случаях возвращать
// функцию которая работает с этим лекс. окр.

// для этой функции глобальным считается глобальное
function createCount() {
  let x = 0;

  // для этой функции глобальным считается лекс.
  // окружение createCount(). Из-за этого эта функция
  // при каждом вызове будет обращаться именно к 
  // этому let x = 0;
  
  return function () {
    console.log((x += 1));
  }
}

const count = createCount();

count(); // 1
count(); // 2
count(); // 3
count(); // 4

// снова считает с ноля, так как в момент вызова
// createCount() создается новое лекс. окружение
const count2 = createCount();

count2(); // 1
count2(); // 2

// продолжим снова count() и видим, что порядок 
// создания продолжается 
count(); // 5
count(); // 6
count(); // 7
count(); // 8

*/
/*

// - count начиная c 10 и с 22

// Record: {x: 10}
function createCount(x = 0) {

  return function () {
    console.log((x += 1));
  }
}

// тут по дефолту приходит 0
const count = createCount();

count(); // 1
count(); // 2
count(); // 3
count(); // 4

// тут начально значение 10
const count3 = createCount(10);

count3(); // 11
count3(); // 12

// тут начально значение 22
const count4 = createCount(22);

count4(); // 23
count4(); // 24

*/
/*

// - Замыкание
// Возвращаем результат функции

function createCounter(x = 0) {

  // возвращаем функцию
  return function () {

    // возвращаем результат функции
    return (x += 1);
  }
}

const counter = createCounter(5);

console.log(counter); // функция

console.log(counter()); // 6 - return (x += 1)
console.log(counter()); // 7 - return (x += 1)

*/
/*

// - increment, decrement

// доступ к х только через функцию
function createCounter(x = 0) {

  // замыкает лекс. окр. родителя
  function increment() {
    return (x += 1);
  }

  // замыкает лекс. окр. родителя
  function decrement() {
    return (x -= 1);
  }

  return {
    increment,
    decrement
  }
}

const counter = createCounter(100)

console.log(counter.increment); // видим функц. increment
console.log(counter.decrement); // видим функц. decrement

console.log(counter.increment()); // 101
console.log(counter.increment()); // 102
console.log(counter.increment()); // 103
console.log(counter.increment()); // 104
console.log(counter.increment()); // 105

console.log(counter.decrement()); // 104
console.log(counter.decrement()); // 103
console.log(counter.decrement()); // 102
console.log(counter.decrement()); // 101
console.log(counter.decrement()); // 100

*/
/*

// - Возыращаем массив

// ! такой вариант лучше не изпользовать

function createCounter(x = 0) {
  function increment() {
    return (x += 1);
  }

  function decrement() {
    return (x -= 1);
  }

  return [increment, decrement];
}

const counter = createCounter(100)

console.log(counter[0]()); // 101
console.log(counter[0]()); // 102
console.log(counter[0]()); // 103

console.log(counter[1]()); // 101
console.log(counter[1]()); // 102
console.log(counter[1]()); // 103

*/
/*

// - This

// Концепция

const bobby = {
  name: "Bobby",

  sayHello() {
    console.log(this.name);
  }
}

// this записан в лекс.инв. в момент вызова функции
bobby.sayHello();

*/
/*

// - Call

function sayHello() {
  console.log(`Hello, my name is ${this.name}`);
}

const bobby = {
    name: "Bobby",
}

const peter = {
    name: "Peter",
}

const chris = {
    name: "Chris",
}

sayHello.call(bobby) // bobby.sayHello()
sayHello.call(peter) // peter.sayHello()
sayHello.call(chris) // chris.sayHello()

*/
/*

// - Apply

function sayHello(years = -1, x) {
  console.log(`Hello, my name is ${this.name} and I'm ${years} years old. ${x}`);
};

const bobby = {
  name: "Bobby",
};

const peter = {
  name: "Peter",
};

const chris = {
  name: "Chris",
};

// изпользовать когда нeжно передать несколько параметров
// call в качестве параметров передает значения

sayHello.call(bobby, 15, 4); // bobby.sayHello(15)
sayHello.call(peter, 20, 6); // bobby.sayHello(20)
sayHello.call(chris, 30, 8); // bobby.sayHello(30)

// не используется почти никогда
// apply в качестве параметров передает массив

sayHello.apply(bobby, [15, 4]); // bobby.sayHello()
sayHello.apply(peter, [20, 6]); // peter.sayHello()
sayHello.apply(chris, [30, 8]); // chris.sayHello()

*/
/*

// - Bind 
// this, bind

// создаем функцию для корректной работы setTimeout()

function sayHello(years = -1, x) {
  console.log(`Hello, my name is ${this.name} and I'm ${years} years old. ${x}`);
};

const bobby = {
  name: "Bobby",
};

// bind создает копию функции замыкает this 
// и запускает в нужное время

const fn = sayHello.bind(bobby);

setTimeout(fn, 2000, 35, ":)")

*/
/*

// - This и стрелочные функции (arrow function)

class Human {
  constructor(newName) {
    this.name = newName;
  }

  sayHello() {
    console.log(this);
  }

  // стрелка всегда помнит свой this
  sayBye = () => console.log(`${this.name} Bye`);
}

const bobby = new Human("Bobby");

bobby.sayHello();
const fn = bobby.sayHello;
fn(); // Bye

bobby.sayBye();
const fn2 = bobby.sayBye;
fn2(); // Bye

*/
/*

// Задача: Написать свой bind

// myBind в момент вызова замыкает внутри ctx и 
// callback и возвращает функцию вызова замкнутых 
// ctx и callback

function myBind(ctx, callback) {
  return function bindedFunction() {
    callback.call(ctx)
  }
}

const obj = {
  name: "Bobby",

  sayHello() {
  console.log(this);
}
}

const fn = myBind(obj, obj.sayHello)

console.dir(fn); // ƒ bindedFunction()

fn() // {name: "Bobby", sayHello: ƒ}

*/
