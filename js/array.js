/*
 *
 * []
 * 
 * new Array()
 *
 */

// /* ======================================================
// ** Изменяет первый элемент

const myArray = [18,64,99];
myArray[0] = 45; 

console.log("01--", myArray); // [45,64,99]

// ------------------------------------------------------ */

// /* ======================================================
// ** 02. Достать 8

const myArray_02 = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
const myData_02 = myArray_02[2][1]; 

console.log("02--", myData_02); // [8]

// ------------------------------------------------------ */

// /* ======================================================
// ** 03. Добавляет эдемент в конец массива
// .push()

const myArray_03 = [["John", 23], ["cat", 2]];
myArray_03.push(["dog", 3]);

console.log("03--", myArray_03); // (3) [Array(2), Array(2), Array(2)]

// ------------------------------------------------------ */

// /* ======================================================
// ** 03_2 Добавляет элемент в начало массива
// .unshift()

const myArray_03_2 = [["John", 23], ["dog", 3]];
myArray_03_2.unshift(["Paul", 35]);

console.log("03-2", myArray_03_2); // [["Paul", 35], ["John", 23], ["dog", 3]]

// ------------------------------------------------------ */

// /* ======================================================
// ** 04 Удаляет последний элемент массива
// .pop()

const myArray_04 = [["John", 23], ["cat", 2]];
const removedFromMyArray_04 = myArray_04.pop();

console.log("04--", myArray_04); // ["John", 23]

// ------------------------------------------------------ */

// /* ======================================================
// ** 04_2 Удаляет первый элемент массива
// .shift()

const myArray_04_2 = [["John", 23], ["dog", 3]];
const removedFromMyArray_04_2 = myArray_04_2.shift();

console.log("05--", myArray_04_2); // ["dog", 3]

// ------------------------------------------------------ */

// /* ======================================================
// ** 05. Функция:
// Добавляет элемент в начало массива 
// Удаляет элемент с конца массива
// Возвращает удаленное значение

function nextInLine_05(arr, item) {
  arr.push(item);
  const removedNumber = arr.shift([0]);
  return removedNumber;
};

const testArr_05 = [1,2,3,4,5];

// JSON.stringify преобразовывает елемент в строку 
console.log("05--", "Before: " + JSON.stringify(testArr_05)); // Before: [1,2,3,4,5]
console.log("05--", nextInLine_05(testArr_05, 6));
console.log("05--", "After: " + JSON.stringify(testArr_05)); // After: [2,3,4,5,6]

// ------------------------------------------------------ */

// /* ======================================================
// ** 06. Находит минимальное число в массиве
// Math.min()

const minNumber_06 = Math.min(...[1, 5, -1, -10]);
console.log("06--", minNumber_06); // -10

// ------------------------------------------------------ */

// /* ======================================================
// ** 07. Выводит нужные слова из строки
// .split()

const [first_07, second_07, third_07, fourth_07] = 'hello sweet suny world'.split(' ');
console.log("07--", first_07, fourth_07); // hello world

// ------------------------------------------------------ */

// /* ======================================================
// ** 08. Перебирающие методы массива 

// Map - возвращает новый массив такой же длины, выполнив условие для каждого из элементов
// Синтаксис - .map(value, index, array)

// -- 08. Создает новый [] с элементами умноженными на 2
// .map()

const fn_08 = (arr) => arr.map(item => item * 2);
console.log("08--", fn_08([1, 2, 3, 4])); // [2, 4, 6, 8]

// -- 08_2. Возвращает новый массив с именами песен из массива объектов
// .map()

const songs_08_2 = [
  { id: 1, name: "Song-1", artist: "Art-1" },
  { id: 2, name: "Song-2", artist: "Art-2" },
  { id: 3, name: "Song-3", artist: "Art-3" },
];

const allSongsNames_08_2 = songs_08_2.map(song => song.name);

console.log("08_2", allSongsNames_08_2); // (3) ["Song-1", "Song-2", "Song-3"]

// -- 08_3. Переводит в нижний регистр передавая функцию toLowerCase в map
// .map()

const songs_08_3 = [
  { id: 1, name: "Song-1", artist: "Art-1" },
  { id: 2, name: "Song-2", artist: "Art-2" },
  { id: 3, name: "Song-3", artist: "Art-3" },
];

const songFunc = song => song.name.toLowerCase();
const lowerCaseSongs = songs_08_3.map(songFunc);

console.log("08_3", lowerCaseSongs); // (3) ["song-1", "song-2", "song-3"]

// -- 08_4. При мэпе добавляем новые свойства и удаляем artist используя реструктуризацию и ...rest
// .map()

const songs_08_4 = [
  { id: 1, name: "Song-1", artist: "Art-1" },
  { id: 2, name: "Song-2", artist: "Art-2" },
  { id: 3, name: "Song-3", artist: "Art-3" },
];

const mapped_08_4 = songs_08_4.map(song => {
  const { artist, ...rest } = song;
  return { ...rest, scrobbleContent: 0, spotifyUrl: "spotifyUrl text" }
});

console.log("08_4", mapped_08_4[0]); // {id: 1, name: "Song-1", scrobbleContent: 0, spotifyUrl: "spotifyUrl text"}

// Filter - возвращает новый массив с элементами true поле выполнения условия
// .filter(value, index, array)

// -- 08_5. Добавляет в новый [] элементы которые true
// .filter()

const fn_08_5 = (arr) => arr.filter(item => !!item);
console.log("08_5", fn_08_5([false, undefined, 0, 1, 'str'])); // [1, "str"]

// -- 08_6. Отфильтровует числа больше 3
// .filter()

const fn_08_6 = (arr, val) => arr.filter(el => el > val);
console.log("08_6", fn_08_6([1, 2, 3, 4, 5], 3)); // (2) [4, 5]

// -- 08_7. Возвращает нов мас с элементами, остаток которых от деления на 2 равен 0 (even - четные)
// .filter()

const arr_08_7 = [1, 2, 3, 4];
const eventArr_08_7 = arr_08_7.filter(value => value % 2 === 0);

console.log("08_7", eventArr_08_7); // (2) [2, 4]

// -- 08_8. Возвращает нов мас с элементами включающими "at"
// .filter()

const strings_08_8 = ["hello", "Matt", "cat", "dog"];
const filtered_88_8 = strings_08_8.filter(str => str.includes("at"));

console.log("08_8", filtered_88_8); // (2) ["Matt", "cat"]

// Reduce - сокращает массив до одного значения
// .reduce(function(acc, currValue, index, array) {}, 0)

// -- 08_9. Возвращает результат сложения всех чисел
// .reduce()

const fn_08_9 = (...args) => args.reduce((m, n) => m + n, 0);
console.log("08_9", fn_08_9(10, 15, 20, 8)); // 53

// -- 08_10. Привращает массив массивов в один массив объектов
// .reduce()

const songs_08_10 = [
  { id: 1, name: "Song-1", artist: "Art-1" },
  { id: 2, name: "Song-2", artist: "Art-2" },
  { id: 3, name: "Song-3", artist: "Art-3" },
];

const multArr_08_10 = [songs_08_10, [{id: 4, name: "Song-4", artist: "Art-4"}]]
const flatMult_08_10 = multArr_08_10.reduce((acc, currValue) => acc.concat(currValue));

console.log("08_10", flatMult_08_10[3]); // {id: 4, name: "Song-4", artist: "Art-4"}

// ------------------------------------------------------ */

// /* ======================================================
// ** 09. Доступ к подсвойствам объекта в массиве

const myPlants_09 = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree_09 = myPlants_09[1].list[1];

console.log("09--", secondTree_09); // pine

// ------------------------------------------------------ */

// /* ======================================================
// ** 10. Реструктуризация массива

const arrFunc_32 = function() {
  return ['this', 'is', 'array'];
};

const [ first, second, third ] = arrFunc_32();

console.log("10--", first, second, third); // this is array
console.log("10--", arrFunc_32()); // (3) ["this", "is", "array"]

// -- 10_2. Реструктуризация строки в массив элементов

const [a_10_2, b_10_2, c_10_2] = 'Hello';
console.log("10_2", a_10_2, b_10_2, c_10_2); // H e l

// -- 10_3. Реструктуризация ссылок на странице

const [l1_10_3, l2_10_3] = document.links;
console.log("10_3", l1_10_3.tagName); // A
console.log("10_3", l2_10_3.textContent); // source Object

// -- 10_4. Реструктуризация и spread

const [a_10_4, b_10_4, ...c_10_4] = [1, 2, 3, 4, 5];
console.log("10_4", a_10_4, b_10_4, c_10_4); // 1 2 (3) [3, 4, 5]

// -- 10_5. Реструктуризация с параметром по умолчанию

const [x_10_5, y_10_5, z_10_5 = 3] = [1, 2];
console.log("10_5", x_10_5, y_10_5, z_10_5); // 1 2 3

// ------------------------------------------------------ */

// /* ======================================================
// ** 11. Spread & Rest
// ...

const spread_11 = function(a, b, c) {
  console.log("11--", a, b, c);
};

spread_11(...['Hi', 'is', 'Developer']); // Hi is Developer

// -- 11_2. Клонирование элементов массива

const arr_11_2 = ['one', 'two'];
const secondArr_11_2 = ['zero', ...arr_11_2, 'three', 'four'];

console.log("11_2", secondArr_11_2); // (5) ["zero", "one", "two", "three", "four"]

// -- 11_3. Копирование массива целиком

var arr_11_3 = [1, 2, 3];
var secondArr_11_3 = [...arr_11_3];

console.log("11_3", secondArr_11_3); // (3) [1, 2, 3]

// -- 11_4. Два способа преобразовать DOM коллекцию ссылок в массив

var links_11_4 = [...document.querySelectorAll('A')];
var links_11_4_2 = [...document.links];

console.log("11_4", links_11_4); // (3) [a.logo-link, a.sourсe-link.link, a.logo-link]
console.log("11_4", Array.isArray(links_11_4), Array.isArray(links_11_4_2)); // true true

// -- 11_5.

const date_11_5 = [1982, 6, 26];
const theDay_11_5 = new Date(...date_11_5);

console.log("11_5", theDay_11_5); // Mon Jul 26 1982 00:00:00 GMT+0400 (Eastern European Summer Time)

// -- 11_6. Rest соединяет отдельные значения в массив

const numbers_11_6 = function(x, y, ...rest) {
  console.log("11_6", x, y, rest);
};

numbers_11_6('one', 'two', 'three', 'four'); // one two (2) ["three", "four"]

// ------------------------------------------------------ */

// /* ======================================================
// ** 000
// ------------------------------------------------------ */

// /* ======================================================
// ** 000
// ------------------------------------------------------ */

// /* ======================================================
// ** 000
// ------------------------------------------------------ */