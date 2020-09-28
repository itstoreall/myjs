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
