/*
 * Перебирающие методы массива
 */

/*
 *
 * - forEach()
 * 
 * Array.prototype.forEach()
 * Поэлементно переберает оригинальный массив
 * Ничего не возвращает
 * Не изменяет инкремент
 * Заменяет классический for если не нужно прерывать цикл
 * 
 */

/*

// - Общая концепция:

// имеем массив
const numbers = [5, 10, 15, 20, 25];

// вызываем форИч в контексте массива
// в скобках() я передаю колбек, которая будет
// выполнена для каждоко элемента массива

numbers.forEach(function (element, index, array) {
  console.log(element); // текущий элемент во время перебора
  console.log(index); // текущий индекс
  console.log(array); // весь оригинальный массив
});

*/

/*
 *
 * - Map
 * 
 * Array.prototype.map()
 * Поэлементно перебирает оригинальный массив
 * Возвращает новый массив такой же длины
 * и может чтото делать для каждого элемента
 * (декларативный код)
 * 
 */

/*

// Общая концепция:

// имеем массив 
const numbers = [5, 10, 15, 20, 25];

// 1. вызываем метод меп в контексте массива
// передаем функцию для каждого элемента коллекции

const mappedNumbers = numbers.map(function (element) {
  console.log(element);

  // 2. возвращаем эл умноженый на 2

  return element * 2

});

console.log(numbers) // оригинал не мутируется log (5) [5, 10, 15, 20, 25]
console.log(mappedNumbers) // результат - log (5) [10, 20, 30, 40, 50]

*/
/*

// - Увеличить значение на 2

const numbers = [5, 10, 15, 20, 25];

const mappedNumbers = numbers.map(function (element) {
  return element * 2;
});

// console.log(numbers);
console.log(mappedNumbers);

*/
/*

// - Задача

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chris", timePlayed: 80, points: 48, online: true },
]

// - Получаем массив всех игроков

// map создает пустой мас и запихнет в него имя
const playerNames = players.map(function (player) {
  // console.log(player); // player - это element - один объект из массива
  return player.name; 
})

console.log(playerNames); // (5) ["Mango", "Poly", "Kiwi", "Ajax", "Chris"]

// - Увеличиваем кол-во поинтов каждого игрока

const updatedPlayers = players.map(function (player) {
  // console.log(player); // player - это element - один объект из массива
  return {
    ...player,
    points: player.points + player.points * 0.1
  }
});

console.table(updatedPlayers);

// - Увеличиваем кол-во часов игрока по id

const playerIdToUpdate = "player-3";

const updatedPlayers2 = players.map(function (player) {
  console.log(player.id);

  if (player.id === playerIdToUpdate) {
    console.log("Нашли нужного");
    return {
      ...player,
      timePlayed: player.timePlayed + 50
      }
  }
  // обязательно возвращать оригинальный мас для
  // тех которые не совпали. Иначе вернет undefined
  return players
})

console.log(updatedPlayers2);

*/

/*
 *
 * - Filter
 * 
 * Array.prototype.filter()
 * поэлементно перебирает оригинальный массив
 * Возвращает новый массив (с отфильтрованными элементами)
 * Возвращает пустой мас если не нашел ничего
 * Добавляет в возврщенный мас элементы которые удовлетворяют условию
 * Перебирает коллекцию до конца (прервать нельзя)
 * Фильтр не используется для изменения, только для фильтрации
 * Использовать чтобы найти много в коллекции
 * (декларативный код)
 * 
 */

/*

const numbers = [5, 10, 15, 20, 25];

// если function(number) возвращает true то
// элемент записывается в новый массив

const filteredNumbers = numbers.filter(function (number) {
  console.log(number);

  return number > 15;
});

console.log(filteredNumbers); // (2) [20, 25]

// - Задача

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chris", timePlayed: 280, points: 48, online: true },
];

// - Получить массив всех онлайн игроков

const onlinePlayers = players.filter(function (player) {

  // возвращаем всех игроков у которых true
  return player.online
})

console.table(onlinePlayers);

// - Получаем мас всех оффлайн игроков

const offlinePlayers = players.filter(function (player) {

  // возвращаем всех игроков у которых false
  return !player.online
})

console.table(offlinePlayers)

// - Получить список игроков с временем болше 250

const hardcorePlayers = players.filter(function (player) {
  return player.timePlayed > 250;
});

console.table(hardcorePlayers);

*/

/*
 * - Find
 *
 * Array.prototype.find()
 * Поэлементно перебирает оригинальный массив
 * Используется для поиска уникального элемента
 * Возвращает первый элемент удовлетворяющий условию или undefined
 * После нахождения прирывает перебор
 * Если не нашел ничего - вернет undefined
 * 
 */

/*

const numbers = [5, 10, 15, 20, 25];

const number = numbers.find(function (n) {

  // возвращает (true/false) первый элемент больше 10
  return n > 10
});

console.log(number);

// 

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chris", timePlayed: 280, points: 48, online: true },
];

// - Ищет игрока по id

const playerIdToFind = "player-3";

const player = players.find(function (player) {

  // возвращает ссылку на искомый объект (не копию)
  return player.id === playerIdToFind
});

console.log(player); // {id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true}

// */

/*
 *
 * - Every
 * 
 * Array.prototype.every()
 * Поэлементно перебирает оригинальный массив
 * Возвращает true если все элементы мас удовлетворяют условие
 * Прерывается на первом false
 */

/*

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chris", timePlayed: 280, points: 48, online: true },
];

// - Все ли онлайн

const isAllOnline = players.every(function (player) {
  return player.online
})
console.log("isAllOnline: ", isAllOnline); // false

// - Все ли больше 100 часов

const averagedInPlayTime = players.every(function (player) {
  return player.timePlayed > 100
})

console.log("averagedInPlayTime: ", averagedInPlayTime); // true

*/

/*
 *
 * - Some
 * 
 * Array.prototype.some()
 * Поэлементно перебирает оригинальный массив
 * Возвращает true если хотябы один элемент массива удовлетворяет условию
 * Переберает до первого true
 * 
 */

/*

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chris", timePlayed: 280, points: 48, online: true },
];

// - Есть ли хоть кто-то онлайн

const isAnyOnline = players.some(function (player) {
  return player.online
})
console.log("isAnyOnline: ", isAnyOnline); // false

// - Хотя бы один наиграл больше 400 часов

const anyHardcorePlayers = players.some(function (player) {
  return player.timePlayed > 400;
})

console.log("anyHardcorePlayers: ", anyHardcorePlayers); // false

*/
/*

// - map своими руками (что под капотом)
// Императивный код

const numbers = [5, 10, 15, 20, 25];

// 1. создает и возвращает новый массив

const map = function (array, callback) {
  const newArray = [];

  // 2. перебирает оригинальный массив

  for (let i = 0; i < array.length; i += 1){
    console.log(array[i]);

    // 3. вызывает колбек для кождого элемента и кидает туда аргументы

    const result = callback(array[i], i, array);
    newArray.push(result);
  }

  return newArray
}

const doubledNumbers = map(numbers, function (number, index, array) {
  console.log(number);
  console.log(index);
  console.log(array);

  return number * 2
})

console.log(doubledNumbers);

*/
/*

// - Пишем руками Array.prototype.map
// (Так никогда делать не нужно)

Array.prototype.map = function (callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i += 1) {
    const result = callback(this[i], i, this);
    newArray.push(result);
  }

  return newArray
};

const numbers = [5, 10, 15, 20, 25];

const doubled = numbers.map(function (number) {
  return number * 2;
})

console.log(doubled); // (5) [10, 20, 30, 40, 50]

*/
/*

// - Пишем filter своими руками

// 1. создает новый массив и возвращает

const filter = function (array, callback) {
  const newArray = [];

  // 2. вызывает колбек для каждого элемента

  for (let i = 0; i < array.length; i += 1){
    const passed = callback(array[i], i, array);

    // 3. если колбек вернул true пишет элемент в новый мас

    if (passed) {
      newArray.push(array[i])
    }
  }

  return newArray;
}

const numbers = [5, 10, 15, 20, 25];

const filteredNumbers = filter(numbers, function (number, index, array) {
  console.log(number);
  console.log(index);
  console.log(array);

  return number > 15;
})

console.log(filteredNumbers); // (2) [20, 25]

*/

/*
 *
 * - Reduce
 * 
 * Array.prototype.reduce()
 * Поэлементно перебирает оригинальный массив
 * Возвращает что угодно
 * Заменяет все на все, но использовать нужно с умом
 * Reduce от слова сократить - берете много и делаете что-то одно
 * Reduce можно вызывать только на массивах
 * accumulator - это любое значение (есть только внутри функции)
 * Reduce не должен ничего изменять напрямую кроме аккумулятора
 * 
 */

/*

// - Концепция

const numbers = [5, 10, 15, 20, 25];

const total = numbers.reduce(function (accumulator, number, index, array) {
  // console.log("accumulator:", accumulator);
  // console.log(number);
  // console.log(index);
  // console.log(array);

  return accumulator + number;
}, 0);

// Схема работы Reduce
// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25

console.log(total); // 75

*/
/*

// Считаем общую зарплату

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

// 1. приобразовываем обж в мас - Object.values(salary)
// 2. на этом массиве вызываем редюс - reduce(function (acc, value)

const totalSalary = Object.values(salary).reduce(function (acc, value) {
  return acc + value;
})
console.log(totalSalary);

*/
/*

// - Считаем общее кол-во часов

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chris", timePlayed: 80, points: 48, online: true },
];

const totalTimePlayed = players.reduce(function (time, player) {
  return time + player.timePlayed;
}, 0)

console.log(totalTimePlayed); // 1240

*/
/*

// - Считаем общую сумму товаров в корзине

const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemon", price: 70, quantity: 4 },
]; 

// item - это отдельный объект у которого есть
// свойства price и quantity

const totalAmount = cart.reduce(function (total, item) {
  return total + item.price * item.quantity;
}, 0)
console.log(totalAmount); // 840

*/
/*

// - Ведем статистику тегов из твитов
// Грязная версия, мутирует аргумент который придет в acc
// Вариант 1 (много кода)

const tweets = [
  { id: "000", lokes: 5, tags: ["js", "nodejs"] },
  { id: "001", lokes: 2, tags: ["html", "nodejs"] },
  { id: "002", lokes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", lokes: 8, tags: ["css", "react"] },
  { id: "004", lokes: 0, tags: ["js", "nodejs", "react"] },
];

// начинаем перебор с пустого массива

const allTags = tweets.reduce(function (tags, tweet) {
  tags.push(...tweet.tags)

  return tags;
}, [])

console.log(allTags);

// - Статистика тегов

const tagsStats = allTags.reduce(function (acc, tag) {

  console.log("TAG:", tag);

  // на первой итерации акк пустой 
  console.log("ACC:", acc); // ACC: {}

  // в объекте будут храниться теги как ключ
  // если в текущем аккумуляторе есть такой ключ
  // то нужно туда сделать + 1
  // если еще нет, то его нужно записать и поставить 1
  // includes применять нельзя (это метод массива, а у нас обж)
  // применяем метод объекта hasOwnPropery

  if (acc.hasOwnProperty(tag)) {
    console.log("такое свойство есть, увличиваем!!!");

    acc[tag] += 1;

    return acc;
  }

  console.log("такого свойства нет, добавляем!!!");
  acc[tag] = 1;

  return acc;
  
}, {});
console.log(tagsStats); // {js: 3, nodejs: 4, html: 2, css: 1, react: 2}

*/
/*

// - Ведем статистику тегов из твитов
// Грязная версия, мутирует аргумент который придет в acc
// Вариант 2 (рефакторинг)

const tweets = [
  { id: "000", lokes: 5, tags: ["js", "nodejs"] },
  { id: "001", lokes: 2, tags: ["html", "nodejs"] },
  { id: "002", lokes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", lokes: 8, tags: ["css", "react"] },
  { id: "004", lokes: 0, tags: ["js", "nodejs", "react"] },
];

const allTags = tweets.reduce(function (tags, tweet) {
  tags.push(...tweet.tags)

  return tags;
}, [])

console.log(allTags);

const tagsStats = allTags.reduce(function (acc, tag) {
  // console.log("TAG:", tag);
  // console.log("ACC:", acc);

  acc[tag] = acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1

  return acc;
  
}, {});
console.log(tagsStats); // {js: 3, nodejs: 4, html: 2, css: 1, react: 2}

*/
/*

// - Ведем статистику тегов из твитов
// Чистая версия, каждый раз создает новый объект
// Вариант 3 (чистый код)

const tweets = [
  { id: "000", lokes: 5, tags: ["js", "nodejs"] },
  { id: "001", lokes: 2, tags: ["html", "nodejs"] },
  { id: "002", lokes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", lokes: 8, tags: ["css", "react"] },
  { id: "004", lokes: 0, tags: ["js", "nodejs", "react"] },
];

const allTags = tweets.reduce(function (tags, tweet) {
  tags.push(...tweet.tags)

  return tags;
}, [])

console.log(allTags);

// вместо того чтобы пушить в обж acc, мы каждый раз
// возвращаем новый обж, где сначала распыляем старый,
// а за тем в свойство с ключем [tag] записываем значение

const tagsStats = allTags.reduce(function (acc, tag) {
  return {
    ...acc,
    [tag]: acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1
  };
}, {});

console.log(tagsStats); // {js: 3, nodejs: 4, html: 2, css: 1, react: 2}

*/
/*

// - Reduce своими руками

Array.prototype.reduce = function (callback, initialValue = this[0]) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i += 1){
    accumulator = callback(accumulator, this[i], i, this);

    return accumulator;
  }
}

*/

/*
 *
 * - Sort
 * 
 * Array.prototype.sort()
 * Сортирует и ИЗМЕНЯЕТ оригинальный массив
 * Сортирует только примитивы
 * return prev - next - по возрастанию (по умолчанию)
 * return next - prev - по убыванию
 * Sort используется редко
 * 
 */

/*

// - Концепция 

// по возрастанию 
const numbers = [1, 9, 6, 2, 3];
numbers.sort();
console.log(numbers); // (5) [1, 2, 3, 6, 9]

// по убыванию 
const numbers2 = [1, 9, 6, 2, 3];
numbers2.sort(function (prev, next) {
  return next - prev;
});
console.log(numbers2); // (5) [9, 6, 3, 2, 1]

// для сортировки символов сорт использует charCodeAt
// и сортирует по сзначению в юникоде
// Поэтому строки сотром не сортируют
console.log("A".charCodeAt(0)); // 65
console.log("a".charCodeAt(0)); // 97
console.log("B".charCodeAt(0)); // 66
console.log("b".charCodeAt(0)); // 98

const letters = ["b", "B", "a", "A"];
letters.sort();
console.log(letters); // (4) ["A", "B", "a", "b"]

*/
/*

// - Как создать копию массива чтобы не сортировать оригинал

const numbers = [1, 9, 6, 2, 3];

// 1. вариант - .slice() (Old School)

const copy = numbers.slice().sort();
console.log(copy); // это копия - (5) [1, 2, 3, 6, 9]
console.log(copy === numbers); // false

// 2. вариант - распыляем

const copy2 = [...numbers].sort();
console.log(copy2); // это копия - (5) [1, 2, 3, 6, 9]
console.log(copy === numbers); // false

*/
/*

// - Кастомная сортировка сложных типов

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];

// по возрастанию значения свойства
// ипользую оригинальный массив
players.sort(function (prevPlayer, nextPlayer) {
  return prevPlayer.timePlayed - nextPlayer.timePlayed;
})

console.table(players)

// по убыванию значения свойства
// использую копию массива
const sortByTopPlayers = [...players].sort(function (prevPlayer, nextPlayer) {
  return nextPlayer.timePlayed - prevPlayer.timePlayed;
})

console.table(sortByTopPlayers)

*/
/*

/*
 *
 * - Цепочка методов (method chaining)
 * 
 */

/*

const numbers = [1, 5, 2, 4, 3];

// Отфильторать

const res = numbers.filter(function (num) {

  // Отфильторать

  return num > 2; // (3) [5, 4, 3]

  // Умножить на 3

}).map(function (num) {
  return num * 3; // (3) [15, 12, 9]

  // Сортируем

}).sort(function (a, b) {
  return a - b // (3) [9, 12, 15]
})

console.log(res)

*/
/*

// - Сортируем тех кто в онлайне по рангу

const players = [
  { id: "id-1", name: "Mango", isOnline: true, rank: 800 },
  { id: "id-2", name: "Poly", isOnline: false, rank: 600 },
  { id: "id-3", name: "Ajax", isOnline: true, rank: 100 },
  { id: "id-4", name: "Kiwi", isOnline: true, rank: 400 },
];

const onlineAndSorted = players
  .filter(function (player) {
    return player.isOnline;
  })
  .sort(function(prevPlayer, nextPlayer) {
    return prevPlayer.rank - nextPlayer.rank;
});

console.table(onlineAndSorted);

*/

/*
 *
 * Деструктурирующее присваивание(ДП)
 *
 */

/*

// Объект как параметр без ДП

const object = { num: 2 }
function getNum(obj) { return obj.num; }
console.log(getNum(object)) // 2

// ДП

const object = { num: 2 }
// const num  =  object.num;
const { num } = object;
console.log(num) // 2

// Объект как параметр c ДП

const object = { num: 2 }
//function getNum (obj) { return obj.num; }
function getNum({ num }) { return num; }
console.log(getNum(object)) // 2

*/

/**
 * 
 * - Geri
 * 
 */

/*

// - Чистая функция (poor function)
// чистая функцию не мутирует, никогда не изменяет данные 
// которые на входе, она создает новый массив

// - Концепция

const numbers = [1, 2, 3, 4];

function multiply(arr, x) {
  const res = [...arr];

  for (let i = 0; i < res.length; i += 1){
    res[i] *= x;
  }

  return res;
}

console.log(multiply(numbers, 2)); // [2, 4, 6, 8]
console.log(numbers); // [1, 2, 3, 4]

*/
/*

// - array, this

// фильтруем числа больше 3 и добавляем их в новый массив

Array.prototype.myFilter = function myFilter(callback) {
  const res = [];
  
  for (let i = 0; i < this.length; i += 1){
    if (callback(this[i])) {
      res.push(this[i]);
    }
  }

  return res;
};

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.myFilter((x) => x > 3));

*/

/**
 * 
 * - Filter
 * 
 * Array.filter
 * Возвращает новый массив с отфильтровванными элементами
 * 
 */

/*

// Задача:
// - Написать функцию фильтр которая фильтрует элементы внутри массива

//  * Параметры на входе
//  * Returns a filtered array
//  * @param {array} array
//  * @param {function} callback
 
// имеем массив
const numbers = [1, 2, 3, 4, 5];

// фильтруем элементы и добавляем в мас те что > 3
console.log(numbers.filter(item => item > 3)); // (2) [4, 5]

*/

/**
 * 
 * - forEach
 * 
 * Array.forEach
 * Переберает исходный массив
 * Ничего не возвращает
 * 
 */

/*

// - просто перебираем и выводим элементы массива

// numbers
const numbers = [1, 2, 3, 4];
numbers.forEach(value => console.log(value))

// numbers2
const numbers2 = ["apple", "orange", "strawberry"];
numbers2.forEach((value, index) => console.log(`index: ${index}, value: ${value}`),)

*/

/**
 * 
 * - Map
 * 
 * Array.map
 * Переберает исходный массив
 * Возвращает новый массив такой же длины
 * и может чтото делать для каждого элемента
 * 
 */

/*

// - Создаем элементы li и добавляем их в ul
// четные li - tomato, не четные li - green

const users = ["Bobby", "Peter", "Chris", "Vernon"];

const userItems = users.map((value, index, arr) => {
  const className = index % 2 === 0 ? 'tomato' : 'green';

  return `<li class="user-item ${className}">${value}</li>`;
});

// добавляем в DOM
document.getElementById("user-list").insertAdjacentHTML("afterbegin", userItems.join(''));

console.log(userItems)

*/
/*

// - Умножаем каждое число на 2

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.map(value => value * 2)); // (5) [2, 4, 6, 8, 10]

*/
/*

// - Делаем из списка обектов список имен
// возвращаем names

const numbers = [
  {
  id: 1,
    name: "Bobby",
  surname: "Ivanov"
  },
  {
  id: 2,
    name: "Peter",
  surname: "Petrov"
  },
  {
  id: 3,
    name: "Peter",
  surname: "Parker"
  }
];

console.log(numbers.map(user => user.name)) // (3) ["Bobby", "Peter", "Peter"]

*/
/*

// - Делаем из списка обектов новые объекты 
// без некоторых свойств (без фамилии)
// используем деструктуризацию

const numbers = [
  {
  id: 1,
    name: "Bobby",
  surname: "Ivanov"
  },
  {
  id: 2,
    name: "Peter",
  surname: "Petrov"
  },
  {
  id: 3,
    name: "Peter",
  surname: "Parker"
  }
];

// создаем новый объект без фамилии
console.log(numbers.map(({ id, name }) => ({ id, name })))

*/
/*
// ========================================
// Array.prototype.map
// - Вернуть новый массив содержащий длины элементов (слов)

const arr = ["Есть", "жизнь", "на", "Марсе"];

const res = arr.map((word) => word.length);

console.log(res) // (4) [4, 5, 2, 5]

*/

/*
 * - Find
 *
 * Array.find
 * Поэлементно перебирает оригинальный массив
 * Используется для поиска уникального элемента
 * Возвращает первый элемент удовлетворяющий условию или undefined
 * После нахождения прирывает перебор
 * Если не нашел ничего - вернет undefined
 * 
 */

/*

// - Ищем 5 в массиве

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.find(value => value === 5));

*/
/*

// - Поиск в объекте (элементе массива) по имени и фамилии
// учитываем регистр

const numbers = [
  {
  id: 1,
    name: "Bobby",
  surname: "Ivanov"
  },
  {
  id: 2,
    name: "Peter",
  surname: "Petrov"
  },
  {
  id: 3,
    name: "Peter",
  surname: "Parker"
  }
];

const userName = "peTer";
const userSurname = "Parker";

console.log(numbers.find(user => user.name.toLowerCase() === userName.toLowerCase() && user.surname === userSurname)); // {id: 2, name: "Peter"}

*/

/*
 *
 * - Every
 * 
 * Array.prototype.every()
 * Поэлементно перебирает оригинальный массив
 * Возвращает true если все элементы мас удовлетворяют условие
 * Прерывается на первом false
 * 
 */

/*

// - Проверяем в каком массиве все числа > 2

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [3, 4, 5];

const everyNumberIsLargerTwo1 = numbers1.every(value => value > 2);
const everyNumberIsLargerTwo2 = numbers2.every(value => value > 2);

console.log(everyNumberIsLargerTwo1); // false
console.log(everyNumberIsLargerTwo2); // true

*/

/*
 *
 * - Some
 * 
 * Array.prototype.some()
 * Поэлементно перебирает оригинальный массив
 * Возвращает true если хотябы один элемент массива удовлетворяет условию
 * Переберает до первого true
 * 
 */

/*

// - Проверяем есть ли хоть один элемент > 2

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [-5, 1, 2];

const someNumberIsLargerTwo1 = numbers1.some(value => value > 2);
const someNumberIsLargerTwo2 = numbers2.some(value => value > 2);

console.log(someNumberIsLargerTwo1); // true
console.log(someNumberIsLargerTwo2); // false

*/

/*
 *
 * - Цепочка методов (method chaining)
 * 
 */

/*

// - Развернуть слова используя чейнинг

const text = "Hello World";

// создаем массив, поворачиваем, объединяем
const textReverse = text.split('').reverse().join('')

console.log(textReverse)

*/

/**
 * 
 * - Деструктуризаця объекта
 * 
 */

/*

// - Концепция

const obj = {
  key1: "abc",
  key2: "def",
  key3: "ghi",
};

const { key2 } = obj;

console.log(key2) // def

*/
/*

// - Изменяем объект (удаляем фамилию) в массив объектов
// применяем деструктуризацию

const numbers = [
  {
  id: 1,
    name: "Bobby",
  surname: "Ivanov"
  },
  {
  id: 2,
    name: "Peter",
  surname: "Petrov"
  },
  {
  id: 3,
    name: "Peter",
  surname: "Parker"
  }
];

// 1. - без деструктуризации

console.log(numbers.map(function (obj) {
  return obj.name

})) // (3) ["Bobby", "Peter", "Peter"]

// 2. - с деструктуризацией

console.log(numbers.map(function ({ name }) {
  return name

})) // (3) ["Bobby", "Peter", "Peter"]

// 3. - создаем новый обж, но без id и деструктуризации

console.log(numbers.map(function (obj) {
  return {
    name: obj.name,
    surname: obj.surname,
  }
}))

// 4. - создаем новый обж, без id с деструктуризацией

console.log(numbers.map(function ({ name, surname }) {
  return {
    name,
    surname,
  }
}))

// 5. - создаем новый обж, без id с деструктуризацией 
// используя =>

console.log(numbers.map(({ name, surname }) => ({ name, surname })))

*/

/*
 *
 * - Reduce
 * 
 * Array.prototype.reduce()
 * Поэлементно перебирает оригинальный массив
 * Возвращает что угодно
 * Заменяет все на все, но использовать нужно с умом
 * Reduce от слова сократить - берете много и делаете что-то одно
 * Reduce можно вызывать только на массивах
 * accumulator - это любое значение (есть только внутри функции)
 * Reduce не должен ничего изменять напрямую кроме аккумулятора
 * initial value - начальное значение, он же и аккумулятор
 * 
 */

/*
// ========================================
// - Посчитать сумму всех элементов массива
// Пример с forEach - Get sum 
// так делали раньше

const numbers = [1, 5, 3]; // 9

let sum = 0;

numbers.forEach((item, index, arr) => sum += item);

console.log("Sum:", sum); // Sum: 9

*/
/*
// ========================================
// Array.prototype.reduce
// - Посчитать сумму всех элементов массива

const numbers = [1, 5, 3]; // 9

const acc = numbers.reduce((acc, item) => {
  return acc += item;
}, 0);

console.log(acc) // 9

*/
/*
// ========================================
// Array.prototype.reduce
// - Посчитать сумму всех элементов массива объектов
// (деструктуризация, одна строка, => )

const goods = [
  {
    name: "phone",
    price: 1000,
  },
  {
    name: "pc",
    price: 2000,
  },
  {
    name: "earphones",
    price: 500,
  },
];

const arr = goods.reduce((acc, { price }) => acc + price, 0);

console.log("Sum:", arr); // Sum: 3500

*/
/*
// ========================================
// Array.prototype.reduce
// - min, max
// - без использования initial value
// Пример - max = Math.max(...numbers)
// (Math, ...numbers, reduce)

const numbers = [5, 3, -1, 0, 2, 4, 1];

const min = numbers.reduce((acc, item) => item < acc ? item : acc); // -1
const max = numbers.reduce((acc, item) => item > acc ? item : acc); // 5

console.log(min)
console.log(max)

*/
/*
// ========================================
// Array.prototype.reduce
// - Счетаем сколько каждой буквы в словах
// Номера символов (букв) - asciitable.com
// (acc[letter], ...acc, ascii, )

const letters = "Hello World"

const res = letters.split("").reduce((acc, letter) => {
  return {
    ...acc,
    [letter]: acc[letter] ? acc[letter] + 1 : 1
  }
}, {});
  
console.log("Result:", res) // Result: {H: 1, e: 1, l: 3, o: 2, " ": 1, …}

*/
/*
// ========================================
// Array.prototype.reduce
// - Сумировать рядом стоящие цифры с учетом предыдущей суммы

const numbers = [1, 2, 3, 4, 5];

const res = numbers.reduce((acc, item, idx) => {
  return idx === 0 ? [item] : [...acc, acc[idx - 1] + item];
}, [])

console.log(res) // (5) [1, 3, 6, 10, 15]

*/

/*
 *
 * - Sort
 * 
 * Array.prototype.sort()
 * Сортирует и ИЗМЕНЯЕТ оригинальный массив
 * Сортирует только примитивы
 * return prev - next - по возрастанию (по умолчанию)
 * return next - prev - по убыванию
 * Sort используется редко
 * 
 */

/*
// ========================================
// Array.prototype.sort
// - Неправильная сортировка чисел
// (ascii, )

const numbers = [5, 42, 3, -1, 0, 100, 234, 2, 4, 1];

numbers.sort();

// не сортирует правильно, потому что по ascii
console.log(numbers); // (10) [-1, 0, 1, 100, 2, 234, 3, 4, 42, 5]

*/
/*
// ========================================
// Array.prototype.sort
// - Правильная сортировка чисел
// (sort,  )

const numbers = [5, 42, 3, -1, 0, 100, 234, 2, 4, 1];

// a - b или b - a
numbers.sort((a, b) => a - b);

console.log(numbers); // (10) [-1, 0, 1, 2, 3, 4, 5, 42, 100, 234]

*/
/*
// ========================================
// Array.prototype.sort
// - Сортировка объекта по цене

const goods = [
  {
    name: "pc",
    price: 2000,
  },
  {
    name: "earphones",
    price: 500,
  },
  {
    name: "phone",
    price: 1000,
  },
];

// b.price - a.price или a.price - b.price
const sortedGoods = goods.sort((a, b) => b.price - a.price);

console.log(sortedGoods)

*/
/*
// ========================================
// Array.prototype.sort
// - Пишем свою сортировку

// Условие:
// a < b = -1
// b < a = 1
// a = b = 0

const goods = [
  {
    name: "pc",
    price: 2000,
  },
  {
    name: "earphones",
    price: 500,
  },
  {
    name: "phone",
    price: 1000,
  },
];

const sortedGoods = goods.sort((a, b) => {
  if (a.price < b.price) {
    return -1;
  }

  if (a.price > b.price) {
    return 1;
  }

  return 0;
});

console.log(sortedGoods)

*/

/**
 * 
 * - Пишем программу (супер-нужную для мужчин)
 * 
 */

/*
// ========================================
// todoList
// - Пишем свою сортировку
// В toggleTodo используется map - классический подход к изменению значений в списке массивов
// Удалять через filter (потому что вернуть все кроме этого)
// (терн.опер, map, filter, sort, toggle, )

class TodoList {
  items = [];

  // метод возвращает список
  showTodos() {
    console.log(this.items)
  }

  // добавляет элемент списка
  // id генерируем через библиотеку
  // Скрипт из https://cdnjs.com/libraries/uuid добавляем в HTML > head 
  // Вписать в значение id: uuid.v4() из https://www.npmjs.com/package/uuid

  addTodo(text) {
    this.items.push({
      id: uuid.v4(),
      isDone: false,
      text,
    });
  }

  // переключатель значения isDone
  toggleTodo(id) {
    this.items = this.items.map(item =>
      item.id === id ? { ...item, isDone: !item.isDone } : item,
    );
  }

  // удаляем элемент из массива элементов
  // нужно вернуть все которые не совпадают с входящим id

  removeTodo(id) {
    this.items = this.items.filter(item => item.id !== id) 
  };

  // сортируем элементы
  // @param {string} direction ASC, DESC
  // ASC - значение по умолчанию для direction

  sortTodos(direction = ASC) {
    this.items.sort((a, b) => {
      if (a.text < b.text) {
        return direction === "DESC" ? -1 : 1;
      }
      if (a.text > b.text) {
        return direction === "DESC" ? 1 : -1;
      }
      return 0;
    });
  }
}

// создаем экземпляр
const todoList = new TodoList();

todoList.showTodos();

// добавляем элементы
todoList.addTodo("Картошка"); // 0
todoList.addTodo("Морква"); // 1
todoList.addTodo("Капуста"); // 2
todoList.addTodo("Колбаса");

// переключение 
// idForToggle присваиваем сгенерированный id по индексу 

const idForToggle = todoList.items[2].id;
todoList.toggleTodo(idForToggle);

// удаление
// idForRemove присваиваем сгенерированный id по индексу 

const idForRemove = todoList.items[3].id;
todoList.removeTodo(idForRemove)

// DESC созтирует в одном направлении, 
// без параметра сортирует в другом

todoList.sortTodos("DESC")

todoList.showTodos();

*/
/*
// ========================================
// toggle
// - Концепция
// Использовать в чекбоксах

let isOn = true;
console.log("isOn:", isOn); // isOn: true

isOn = !isOn;
console.log("isOn:", isOn); // isOn: false

isOn = !isOn;
console.log("isOn:", isOn); // isOn: true

isOn = !isOn;
console.log("isOn:", isOn); // isOn: false

*/



