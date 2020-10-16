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