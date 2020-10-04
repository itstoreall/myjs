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
/*

// Собственные свойства объекта и for...in

const objA = {
  q: 5,
  z: 6,
};

// прототипом objB будет objA (в свойстве __proto__ ссылка на objA)
// свойства которые находятся в objB называятся собственными
// свойства в objB называются унаследованные
const objB = Object.create(objA);

objB.x = 1;
objB.y = 2;

// - Метод hasOwnProperty можно использовать для определения собственное свойство или нет

// x собстветтное свойство objB поэтому true
console.log(objB.hasOwnProperty("x")); // log true

// z унаследованное свойство, поэтому false
console.log(objB.hasOwnProperty("z")); // log false

// цикл for...in перебирает не только собствнные, но и унаследованные свойства по всей цепочке прототипов
// это никогда не нужно, поэтому его не юзаем
for (const key in objB) {
  console.log(key); // log x и y и q и z
}
// можно использовать метод hasOwnProperty
// это предикатная функция которая возвращает true или false
// но лучше всего использовать Object.keys
console.log(Object.keys(objB)); // (2) ["x", "y"]

*/

/*
 *
 * Пишем класс Hero
 * Статические свойства и методы
 *
 */

/*

const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};

// добавляем новое свойство в Hero.prototype
Hero.prototype.changeName = function (name) {
  this.name = name;
};

const mango = new Hero("Mango", 1000);

// экземпляр класса Hero - это объект, и в __proto__ лежит ссылка на Hero.prototype
console.log(mango); // log Hero {name: "Mango", xp: 1000}

// в свойстве Hero.prototype мы будем хранить методы на нашего героя (прототипное наследование)
console.log(Hero.prototype); // log {changeName: ƒ, constructor: ƒ}

// Статические свойства и методы
// они не доступны на экземплярах
// Они есть только на самом конструкторе

// .pow это статический метод
console.log(Math.pow(2, 5));

// .PI это статическое свойство
console.log(Math.PI);

// .parseInt это статический метод
console.log(Number.parseInt("5a"));

Hero.description = "gggkuihiuihvvg;ugufurtdu";

Hero.showStats = function (hero) {
  console.log(hero);
};

console.dir(Hero);

// пример статитециских методов
// это методы конструкторов
// Array.from();
// Number.parseInt();
// Object.keys();

*/

/*
 *
 * Класс Hero
 * Статические свойства и методы
 * - Синтаксический сахар
 *
 */

/*

// class - зарезервированное слово
// Hero - имя класса
// {} - открываем тело класса (в теле используются свои правила синтаксиса)
// методы класса записываются в его свойство prototyp

class Hero {
  constructor(name, xp) {
    this.name = name;
    this.xp = xp;
  }

  changeName(name) {
    this.name = name;
  }

  // добавить опыта герою
  gainXp(amount) {
    console.log(`${this.name} получил ${amount} опыта`);
    this.xp += amount;
  }
}

const mango = new Hero("Mango", 1000);

console.dir(Hero); // log class Hero
console.dir(mango); // log class Hero

// добавляем опыт герою
mango.gainXp(2000);
console.log(mango); // log Hero {name: "Mango", xp: 3000}

*/
/*

// Статические свойства
// в статических методах вообще нету this

class Hero {
  // это новый синтаксис статических свойств
  static description = "labsivaivavaiuv";

  // это новый синтаксис статических метадов
  static showStats(hero) {
    // в статических методах this это будет ссылка на сам класс
    console.log("this:", this);
  }

  constructor(name, xp) {
    this.name = name;
    this.xp = xp;
  }

  changeName(name) {
    this.name = name;
  }

  gainXp(amount) {
    console.log(`${this.name} получил ${amount} опыта`);
    this.xp += amount;
  }
}

console.dir(Hero);

const mango = new Hero("Mango", 1000);

mango.gainXp(2000);
console.log(mango);

Hero.showStats(mango);

*/
// /*

// Геттеры и Сеттеры
// имя свойства и имя геттера должны быть разные иначе все зациклится
// по-этому перед именем свойства ставят подчеркивание _name
// пара get и set должна называться одинаково

class Hero {
  static description = "labsivaivavaiuv";

  static showStats(hero) {
    console.log("this:", this);
  }

  constructor(name, xp) {
    this._name = name;
    this.xp = xp;
  }

  // геттер
  get name() {
    return this._name;
  }

  // сеттер
  set name(newName) {
    this._name = newName;
  }

  // Old School
  // changeName(name) {
  //   this.name = name;
  // }

  // getName() {
  //   return this.name;
  // }

  gainXp(amount) {
    console.log(`${this.name} получил ${amount} опыта`);
    this.xp += amount;
  }
}

console.dir(Hero);

const mango = new Hero("Mango", 1000);

mango.name = "Mangocooldog";
console.log(mango.name); // log Mangocooldog

// mango.gainXp(2000);
// console.log(mango);

// Hero.showStats(mango);
