/*
 * Объекты
 * Это структура данных, позволяет хранить в одной переменной описательные характеристики одной сущности
 * Литерал объекта - {}
 */

/*

const hotel = {}; // {} - Литерал объекта

console.log({}); // {} - Литерал объекта

const hotel = { name: "Sunset resort" }; // { name: "Sunset resort" } - свойство, name: - ключ или имя свойства (ключ - это всегда строка), "Sunset resort" - значение

const hotel = { name: "Sunset resort", stars: 5 }; // через запятую можно добавлять другие свойства

*/
/*

// * Доступ к свойствам объекта

const hotel = {
  name: "Sunset resort",
  stars: 5,
  capasity: 200,
};

console.log(hotel);

- Способ 1.

console.log(hotel.name, hotel.stars, hotel.capasity); // посли точки пишем имя значения, выв Sunset resort 5 200

* /
/*

// - Способ 2.

const hotel = {
  name: "Sunset resort",
  stars: 5,
  capasity: 200,
};

const key = "stars";

console.log(hotel[key]); // ставим [] и в скобках имя переменной

*/
/*

// - Перезаписать свойство

const hotel = {
  name: "Sunset resort",
  stars: 5,
  capasity: 200,
};

hotel.stars = 3; // после точки пишем имя свойства = 3
console.log(hotel); // выв {name: "Sunset resort", stars: 3, capasity: 200}

*/
/*

// - Добавить свойство заранее

const hotel = {
  name: "Sunset resort",
  stars: 5,
  capasity: 200,
};

hotel.guests = [];
console.log(hotel); // в объете создастся пустой масив. Выв {name: "Sunset resort", stars: 5, capasity: 200, guests: Array(0)}

*/

/*
 * Ссылочны тип {} === {}
 *
 * Объект как и массив копируется по ссылк (передает указатель на ячейку памяти)
 *
 */

/*

const a = { x: 1, y: 2 };
const b = a;

console.log(b === a); // выв true

*/

/*
 * Секрет
 *
 * В JS нет массивов - и массив и функция это объеты
 *
 */

/*

// Массив это подвид объекта

const arr = ["a", "b", "c"];

console.log(arr); // выы (3) ["a", "b", "c"]

arr.hello = ";)";

console.log(arr); // выв (3) ["a", "b", "c", hello: ";)"]

 */
/*

// Тоже самое с функцией

const fn = function () {}; // объявляем функцию

fn.hello = "xD";

console.log(fn.hello); // выв xD

*/

/*
 * Методы обекта и this при обращении к свойствам в методах
 *
 * Объкты хранят не только данные, но и методы работы с этими данными
 * Чтобы обратиться к свойству объекта внутри метода объекта используем this.имя_свойства
 * This - это ссылка на весь обект hotel
 *
 */

/*

// * This

// - Синтаксис Old School

const hotel = {
  name: "Sunset resort",
  stars: 5,
  capasity: 200,
  updateName: function (newName) {
    this.name = newName; // называется - контекст вызова функции. Внутри метода объета обращаться к свойству оъета через this, а потом имя свойства (this.name)
  },
};

console.log(hotel); // изначальный объект выв {name: "Sunset resort", stars: 5, capasity: 200, updateName: ƒ}

hotel.updateName("Lagoon"); // меняем свойство updateName выв {name: "Lagoon", stars: 5, capasity: 200, updateName: ƒ}

console.log(hotel);

 */
/*

// * This

// - Метод объекта Modern

const hotel = {
  name: "Sunset resort",
  stars: 5,
  capasity: 200,
  updateName(newName) {
    // убираем : function - это новый синтаксис (писать именно так)
    console.log("this:", this);

    this.name = newName;
  },
};

hotel.updateName("Lagoon"); // меняем свойство updateName выв {name: "Lagoon", stars: 5, capasity: 200, updateName: ƒ}

console.log(hotel);

 */
/*

// * This

// - Вызываем в одном методе объекта другой метод объекта

const hotel = {
  name: "Sunset resort",
  stars: 5,
  capasity: 200,
  updateName(newName) {
    console.log("this:", this);

    this.someMethod(); // для вызова метода пишем внутри другого объекта this.someMethod();

    this.name = newName;
  },
  someMethod() {
    console.log("Hello from someMethod");
  },
};

// hotel.updateName("Lagoon");

// console.log(hotel);

 */
/*

// На дно :)

const objA = {
  x: 1,
  objB: {
    y: 5,
  },
};

console.log(objA); // получаем ссылку на весь объект выв {x: 1, objB: {…}}
console.log(objA.x); // выв 1
console.log(objA.objB.y); // выв 5

*/

/*
 * Передор через for...in и Object.keys[values]entries
 *
 */

/* 

// for...in - метод Old School

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

// console.log("good" in feedback); // - in отдельно, без for возвращает true если свойство с таким ключем ("good") в объекте есть

// Вычисляет Total - сумму значений свойств

let totalFeedback = 0; // объявляем тотал

for (const key in feedback) {
  console.log(key); // получаем список ключей выв good neutral bad (в три строки по количеству итераций)
  console.log(feedback[key]); // получаем значение свойстве на каждой итерации выв 5 10 3 (в три строки по количеству итераций)

  totalFeedback += feedback[key]; // прибавляем к тоталу значение на каждой итерации
}

console.log("Total:", totalFeedback); // выв Total: 18

*/
/*

/*
 * Object.keys
 *
 * Конструктор для создания обектов
 * - создает массив с ключами из объекта feedback
 * Object.keys(feedback) - keys - статический метод (метод самого конструктора), а feedback это сам объект
 *
 */

/*

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

const keys = Object.keys(feedback);

console.log(keys); // выв (3) ["good", "neutral", "bad"]
console.log(keys.length); // чтобы узнать кол-во свойств в массиве укажите keys.length выв 3

*/
/*

// * Object.keys()

// - Считаем Тотал с Object.keys()

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

const keys = Object.keys(feedback);

let totalFeedback = 0;

for (const key of keys) {
  console.log(key);
  console.log(feedback[key]);

  totalFeedback += feedback[key]; // прибавляем к тоталу значение на каждой итерации
}

console.log("Total:", totalFeedback); // выв Total: 18

*/
/*

// * Object.values()

// - Считаем Тотал с Object.values

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

const values = Object.values(feedback); // получаем массив всех значений
console.log(values); // выв (3) [5, 10, 3]

let totalFeedback = 0; // объявляем Тотал

for (const value of values) {
  console.log(value); // получаем значение на каждой итерации

  totalFeedback += value; // прибавляем к тоталу значение на каждой итерации
}

console.log("Total:", totalFeedback); // выв Total: 18

*/
/*

// Массив Массивов

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

console.log(Object.entries(feedback)); // получаем три массива и по два свойства в каждом (один их них - 0: (2) ["good", 5])

*/
/*

// * Перебор массива с объектами в цикле

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
];

console.table(friends); // выводится массив с тремя объектами (по два своиства в каждом)
console.log(friends[2]); // лог {name: "Poly", online: true}

const nameToFind = "Poly";

for (const friend of friends) {
  // friend это ссылка на объект
  console.log("1:", friend); // на каждой итерации я получаю доступ к отдельному объекту
  console.log("2:", friend.name); // лог имена на каждой итерации
  console.log("3:", friend.online); // лог online на каждой итерации
}

*/
/*

// * Находит имя друга

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
];

console.table(friends); //

const nameToFind = "Poly";

for (const friend of friends) {
  console.log(friend); //

  if (friend.name === "Poly") {
    console.log(`Нашли ${friend.name}!!!`);
    break;
  }
}

*/
/*

// * Найти друга по имени (функция)

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
];

console.table(friends); //

const nameToFind = "Poly";

const findFreandByName = function (allFriends, name) {
  for (const friend of allFriends) {
    console.log(friend);

    if (friend.name === name) {
      return `Нашли ${friend.name}!!!`;
    }
  }

  return `Не нашли 8(`;
};

console.log(findFreandByName(friends, "Poly"));
console.log(findFreandByName(friends, "Chelsy"));
console.log(findFreandByName(friends, "Kiwi"));

*/
/*

// * Получаем имена всех друзей (функция)

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
];

console.table(friends);

const getAllNames = function (allFriends) {
  const names = []; // создаю пустой массив names

  for (const friend of allFriends) {
    console.log(friend); // перебираю массив friends
    names.push(friend.name);
  }
  return names;
};

console.log(getAllNames(friends));

*/
/*

// * Получаем имена только друзей которые online (функция)

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
];

console.table(friends);

const getOnlineFriends = function (allFriends) {
  const names = []; // создаю пустой массив names

  for (const friend of allFriends) {
    console.log(friend); // перебираю массив friends

    if (friend.online) {
      // friend.online === true писать не нужно. Если значение будет true - и запушится имя друга
      // если будет false, этот if не выполнится и пойдет следующая итерация фора
      // Если нужне НЕ онлайн тогда if (!friend.online)

      names.push(friend.name); // пушим имена друзей онлайн
    }
  }
  return names;
};

console.log(getOnlineFriends(friends));

*/
