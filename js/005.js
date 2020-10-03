/*
 *
 * Прототипы
 *
 */

// * Object.create()
// __proto__ - хранение ссылки на другой объект
// свойство __proto__ есть абсолютно у всех массивов, объектов, функций
// В спецификации обозначается как [[Prototype]], в браузере как __proto__
// Последний в конце цепочки прототипов лежит родительский объект Objekt со всеми методами. А у него в прототипе лежит null

/*

// const objA = {
//   x: 1,
//   y: 2,
// };

const objB = {
  z: 10,
};

const objA = Object.create(objB);

console.log(objA);

objA.x = 1;
objA.y = 2;

console.log(objA); // log {x: 1, y: 2}

//  * Правило поиска свойства в цепочке прототипов

console.log(objA.x); // log 1
console.log(objA.z); // log 10

// hasOwnProperty()
// Базовый метод в реестре объектов

console.log(objA.hasOwnProperty("x")); // log true

// если не находит свойство в цепочке прототипов
console.log(objA.qwe); // log undefined

*/

/*
 *
 * Функции-конструкторы
 * Свойства Function.prototype
 *
 */

/*

// Функция-конструктор обзывается с большой буквы
// тут мы говорим какие свойства хотим запихнуть в будущий объект
const Manager = function (name, sales) {
  this.name = name;
  this.sales = sales;
};

// в свойство prototype ложим методы которые потом по ссылке будут доступны каждому экземпляру
Manager.prototype.sell = function () {
  this.sales += 1;
};

console.dir(Manager);

// оператор new создает пустой объект
// возвращает новосозданный объект
const mango = new Manager("Mango", 5);
console.log(mango); // log Manager {name: "Mango", sales: 5}
mango.sell();
console.log(mango);

const poly = new Manager("Poly", 10);
console.log(poly); // log Manager {name: "Poly", sales: 10}

*/
/*

// изменяем имя свойства метадом в prototype

const Manager = function (name, sales) {
  this.name = name;
  this.sales = sales;
};

Manager.prototype.sell = function () {
  this.sales += 1;
};

Manager.prototype.changeName = function (name) {
  this.name = name;
};

console.dir(Manager);

const mango = new Manager("Mango", 5);
console.log(mango);
mango.sell();
console.log(mango);

const poly = new Manager("Poly", 10);
console.log(poly);

poly.changeName("Polllly");

console.log(poly); // log Manager {name: "Polllly", sales: 10}

*/
/*

// Сравниваем

const Manager = function (name, sales) {
  this.name = name;
  this.sales = sales;
};

Manager.prototype.sell = function () {
  this.sales += 1;
};

Manager.prototype.changeName = function (name) {
  this.name = name;
};

console.dir(Manager);

const mango = new Manager("Mango", 5);
console.log(mango);

console.log(
  "mango.__proto__ === Manager.prototype:",
  mango.__proto__ === Manager.prototype
); // true

*/
/*

// В JS динамическая диспетчеризация

// js-add-method

const Manager = function (name, sales) {
  this.name = name;
  this.sales = sales;
};

Manager.prototype.sell = function () {
  this.sales += 1;
};

Manager.prototype.changeName = function (name) {
  this.name = name;
};

const mango = new Manager("Mango", 5);
console.log(mango);

document.querySelector(".js-add-method").addEventListener("click", function () {
  Manager.prototype.newMethod = function () {
    console.log(this);
    console.log("HELLO!");
  };

  console.log(Manager.prototype);
  mango.newMethod();
});

console.log(Manager.prototype);

*/
