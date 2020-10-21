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
 * Function.prototype это - объект, который является свойством всех функций
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
/*

// Геттеры и Сеттеры
// имя свойства и имя геттера должны быть разные иначе все зациклится
// по-этому перед именем свойства ставят подчеркивание _name
// пара get и set должна называться одинаково
// также можно использовать в объектах

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

*/

// ============= Hero =============

// Наследование и конструкторы

/*
 *
 * - Super Constructor
 *
 * Для того чтобы получить доступ к this - нужно
 * внутри конструктора у наследуемого класса
 * вызвать super() родителя
 *
 * Когда создается новый кземпляр Варриора и мы
 * class наследуется от Героя:
 * 1. вызывается конструктор
 * 2. вызввается супер
 * 3. в объект который создается запихиваются свойства из Героя, xp и name
 * 4. выполняется this из Варриора
 *
 * Hero (родитель)
 *
 * Warrior (ребенок)
 *
 * У нас есть Hero, в котором есть Hero.prototype
 * Мы делаем наследование от него
 * Объект создается через new (new создает пустой объект)
 * Когда Warrior extends Hero, на Warrior.prototype в его свойство __proto__ записывается ссылка на Hero.prototype
 * Warrior вызывается в контексте этого объекта
 * this внутри конструктора получает ссылку на этот объект
 * во врямя вызова super(), this из Hero тоже получает ссылку на этот объект
 * вызвваем супер и на этот же объект запихивается name и xp
 * потом на него запихивается weapon
 *
 * У нас есть объект mango
 * в mango __proto__ лежит ссылка на Warrior.prototype
 * а в Warrior.prototype __proto__ лежит ссылка на Hero.prototype
 * a e Hero.prototype в свойстве __proto__ лежит ссылка на Object.prototype
 * Это называется прототипное наследование или делегирование, и динамическая диспетчеризация
 *
 */

/*

class Hero {
  constructor(name, xp) {
    this._name = name;
    this.xp = xp;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  gainXp(amount) {
    console.log(`${this.name} получил ${amount} опыта`);
    this.xp += amount;
  }
}

// extends - расширяет
class Warrior extends Hero {
  constructor(name, xp, weapon) {
    super(name, xp); // 1.1 вызвали супер, передали xp
    this.weapon = weapon;
  }

  // 1.2 attack
  attack() {
    console.log(`${this.name} атакует испоьзуя ${this.weapon}`); // 2.1 log Mango атакует испоьзуя Алибарда
  }
}

// 1. создаем Warrior
// const mango = new Warrior("Mango", 1000, "Алибарда");
// console.log(mango);

// 2. вызвываем mango
// mango.attack();

// 3 - это мы сделали первое наследование
// мы после имени класса Варриор поставили ключевое слово extends
// указали кого мы наследуем - Hero (родителя)
// в конструкторе ребенка вызвали конструктор родителя с помощью метода super
// вызывается конструктор родителя, на объект добавляются все свойства

// 4.
// mango.gainXp(2000); // log Mango получил 2000 опыта

// 5.
class Paladin extends Warrior {
  // сюда мы получаем
  constructor(name, xp, weapon, spell) {
    // 6.1 вызываем super
    super(name, xp, weapon);

    this.spell = spell;
  }

  // 6.2
  cast() {
    console.log(`${this.name} кастует ${this.spell}`);
  }
}

// 6. И тогда у нас манго резко превращается в Паладина --^
const mango = new Paladin("Mango", 1000, "Алибарда", "Cleanse");
console.log(mango);
mango.attack();
mango.gainXp(2000);
console.log(mango.name);
mango.cast();

// 6.3 получается следующая цепочка:
// Варриор наследует Хиро, а Паладин наследует Варриор
// и экземпляру mango доступны все эти методы, потому что в __proto__ mango
// лежит ссылка на Paladin.prototype
// в Paladin.prototype.__proto__ лежит ссылка на Warrior.prototyp
// а в Warrior.prototyp.__proto__ лежит ссылка на Hero.prototype
// ну и в Hero.prototype.__proto__ лежит ссылка на Object.prototype

*/
/*

// - Текст который написан в HTML файле

document.querySelector(".js-title");
console.log(document.querySelector(".js-title"));
console.dir(document.querySelector(".js-title"));

// меняем этот текст
const titleRef = document.querySelector(".js-title");
titleRef.textContent = "Работа с DOM это ерунда";

// titleRef - объект
// textContent - свойство объекта
// = - операция присваивания
// "Работа с DOM это ерунда" - строчный литерал

// добавляем клик
titleRef.addEventListener("click", function () {
  console.log("Хватит меня кликать ;0");
});

*/

// =================== Geri ===================

/*
 *
 * constructor
 * Это функция которая умеет создавать объекты
 * просто вызов - [[ Call ]] - fn вызывается здесь и сейчас
 * вызов через new - [[ Constructor ]] - внутри создается объект с this
 * 
 */

/*

// Концепция

function Human(name, age) {
  this.name = name;
  this.age = age;


  this.walk = function () {
    console.log(`${this.name} is walking`); 
  };
}
 
const bobby = new Human("Boddy", 15);
console.log(bobby); // Human {name: "Boddy", age: 15, walk: ƒ}
bobby.walk() // Boddy is walking

const peter = new Human("Peter", 20);
console.log(peter); // Human {name: "Peter", age: 20, walk: ƒ}
peter.walk() // Peter is walking

// - Сделать копию функции peter.walk()

const fn = peter.walk.bind(peter);
fn() // Peter is walking

*/
/*

// - Создаем телефон

function Phone(model, accumulator) {
  this.model = model;
  this.accumulator = accumulator;
  this.isOn = false;

  this.turnOn = function () {
    this.isOn = true
  }

  this.turnOff = function () {
    this.isOn = falsel
  };

  this.getModel = function () {
    return this.model;
  }
};

const nokia = new Phone("Nokia 3310", 600);
console.log(nokia); // Phone {model: "Nokia 3310", accumulator: 600, isOn: false, turnOn: ƒ, turnOff: ƒ}

nokia.turnOn();
console.log(nokia); // Phone {model: "Nokia 3310", accumulator: 600, isOn: true, turnOn: ƒ, turnOff: ƒ}

const siemens = new Phone("Siemens C55", 500);
console.log(siemens); // Phone {model: "C55", accumulator: 500, isOn: false, turnOn: ƒ, turnOff: ƒ, …}
console.log(siemens.getModel()); // Siemens C55

*/
/*

// - Добавляем карточки пользователей

function Seller(name) {
  this.name = name;
}

const cards = {
  items: [],

  createCard(userName, phone) {
    this.items.push({
      id: this.items.length,
      userName,
      phone,
    });
  },
};

// создаем экземпляры класса
const seller1 = new Seller("Margo");
const seller2 = new Seller("Ingrid");


cards.createCard(seller1.name, "555-342");
cards.createCard(seller1.name, "555-111");
cards.createCard(seller2.name, "555-098");
console.log(cards);
// Результат:
// {items: Array(3), createCard: ƒ}
// > 0: {id: 0, userName: "Margo", phone: "555-342"}
// > 1: {id: 1, userName: "Margo", phone: "555-111"}
// > 2: {id: 2, userName: "Ingrid", phone: "555-098"}

*/
/*

// - Создаем автомобиль

function Auto(model) {
  this.model = model;
  this.speed = 0;
  
  this.accelerate = function (speed) {

    // ставим ограничение по скорости

    if (speed > 140) {
      this.speed = 140;
    } else {
      this.speed = speed
    };
  }

  this.break = function (speed) {

    // тормозим автомобиль

    if (speed < 0) {
      this.speed = 0;
    } else {
      this.speed = speed
    };
  }

  this.showSpeed = function () {
    console.log(this.speed);
  }
}

const auto1 = new Auto("Red Kopeyka");

auto1.accelerate(3000000);
auto1.showSpeed(); // 140
console.log(auto1) // 140

auto1.break(-40); 
auto1.showSpeed(); // 0
console.log(auto1) // 0

*/
/*

// Просто пример суммирования числа и строки

function sum(a, b, c = 0) {
  return Number(a) + Number(b) + Number(c);
}

console.log(sum(1, 1)) // 2
console.log(sum(1, 1, 1)) // 3
console.log(sum("2", "2")) // 4

*/
/*

// - Как работает filter и indexOf
// фильтруем и оставляем уникальные числа
           
//           0  1  2  3
const arr = [1, 2, 2, 3];
const isUniq = (element, index, arr) => arr.indexOf(element) === index;

function filter(arr, callback) {
  for (let i = 0; i < arr.length; i += 1){
    if (callback(arr[i], i, arr)) {

      // Принцип: 
      // проверяет совпадает ли index с текущим index
      // 0 === 0 // true
      // 1 === 1 // true
      // 1 === 2 // false - indexOf возвращает первый элемент
      // 3 === 3 // true
    }
  }
}

console.log(arr.filter(isUniq)) // (3) [1, 2, 3]

*/