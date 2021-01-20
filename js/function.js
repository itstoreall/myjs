/*
 *
 * function
 *
 */

// /* ======================================================
// ** Жека фрилансер по жизни

// Вызвать можно до или после объявления
showMessage_01() // Message

function showMessage_01() {
   console.log("01--", "Message");
};

showMessage_01() // Message

// === 02.

// Передача параметров в функцию
function calcSum_02(numOne, numTwo) {
   console.log("02--", `Переменная numOne: ${numOne}`); // Переменная numOne: 1
   console.log("02--", `Переменная numOne: ${numTwo}`); // Переменная numOne: 2

   const numSum = numOne + numTwo;

   console.log("02--", `Сумма: ${numSum}`); // Сумма: 3
};

calcSum_02(1, 2);

// === 03

// Вызываем колбек с сообщением
function calcSum_03(numOne, numTwo, more, less) {
   const numSum_03 = numOne + numTwo;

   if (numSum_03 > 3) {
      more();
   } else {
      less();
   };
};

function showMoreMessage_03() {
   console.log("03--", "Больше чем 3");
};

function showLessMessage_03() {
   console.log("03--", "Меньше чем 3");
};

calcSum_03(1, 5, showMoreMessage_03, showLessMessage_03)

// === 04.

function calcSum_04(numOne, numTwo) {
   
   // Сложение
   const numSum_04 = numOne + numTwo;

   // Возврат результата
   return numSum_04;
};

// Присваиваем результат функции в переменную
const funcResult_04 = calcSum_04(1, 2);

console.log("04--", `Сумма: ${funcResult_04}`); // 3

// === 05.

// Рекурсия
function calcSum_05(numOne, numTwo) {
   if (numTwo === 1) {
      return numOne;
   } else {
      return numOne * calcSum_05(numOne, numTwo - 1)
   };
};

console.log("05--", calcSum_05(2, 3)); // 8

// === 06.

// Функциональное выражение (function Expression)
// Вызвать можно только после ее создания
const showMessage_06 = function () {
   console.log("06--", "Привет!"); // Привет!
};

showMessage_06();

// === 07.

// Присвоение переменной раннее объявленной функции
// позволяет вызывать ее по двум разным именам 
function getSum_07() {
   const sum = 1 + 2;

   console.log("07--", sum);
};

const someVar_07 = getSum_07;

// Вызовы
someVar_07(); // 3
getSum_07(); // 3

// === 08.

// Стрелочные функции
const getMessage_08 = (text, name) => console.log("08--", `${text} ${name}`);

getMessage_08("Hi", "Serhii");

// === 09.

/*

// setTimeout
const getMessage_09 = (text, name) => console.log(`${text} ${name}`);

setTimeout(getMessage_09, 3000, "Hi", "Serhii");

// === 10.

// setInterval
const getMessage_10 = (text, name) => console.log(`${text} ${name}`);

setInterval(getMessage_10, 1000, "Hi", "Serhii");

// === 11.

// Рекурсивный setTimeout
const getMessage_11 = (text, name) => {
   console.log(`${text} ${name}`);
   setTimeout(getMessage_11, 1000, "Hi", "Serhii");
}

setTimeout(getMessage_11, 1000, "Hi", "Serhii");

// === 12.

// Выводим по одной цифре раз в секунду (до пяти)
function showNumber_12(num) {
   console.log(num);

   if (num < 5) {
      setTimeout(showNumber_12, 1000, num += 1);
   };
};

setTimeout(showNumber_12, 1000, 1);

// === 13

// clearTimeout
function showNumber_13(num) {
   console.log("clearTimeout", num);

   const timeId = setTimeout(showNumber_13, 1000, num += 1);
   if (num === 6) {
      clearTimeout(timeId)
   };
};

setTimeout(showNumber_13, 1000, 1);

// === 14.

// clearInterval
let result = 0;
function showNumber_14(num) {
   result += num;

   console.log("clearInterval", result);

   if (result === 5) {
      clearInterval(timeId_14)
   };
};

const timeId_14 = setInterval(showNumber_14, 1000, 1);

*/

// === 15.

// Функция конкатенации
function createMessage_15(text, name) {
   return `${text} ${name}`;
};

// Функция вывода в консоль
function showMessage_15(message) {
   console.log("15--", message);
};

// Объединяющая функция (вызывает обе функции)
function initMessage_15(text, name) {
   showMessage_15(createMessage_15(text, name));
};

initMessage_15("Привет", "Фрилансер");

// === 16.

// Возвращает из функции значение
function timesFive_16(arg1){
    return arg1 * 5;
};

const equal_16 = timesFive_16(10);

console.log("16--", equal_16); // 50

// === 17.

// Функция с одной глобальной переменной
const sum_17 = 0;

function addFive_17(arg) {
   let equal = sum_17;
   equal = arg + 5;
   return equal;
};

console.log("17--", addFive_17(30)); // 35

// === 18.

// Две функции и глобальная переменная
let processed_18 = 0;

function processArg_18(num) {
  return (num + 17) / 2;
};

function getEqual_18() {
  processed_18 = processArg_18(7);
   console.log("18--", processed_18); // 12
};

getEqual_18();

// === 19.

// Boolean - функция возвращает одно из сначений
function trueOrFalse_19(wasThatTrue) {
   if(wasThatTrue) {
      return "Yes, that was true";
   }; 

   return "No, that was false";
}

console.log("19--", trueOrFalse_19(true)); // Yes, that was true

// === 20.

// if - Выбор диапазона до 10 - между - 100 после
function testGreaterThan_20(val) {
  if (val >= 100) { 
    return "100 or over";
  }

  if (val >= 10) {
    return "10 or over";
  }

  return "Under 10";
}

console.log("20--", testGreaterThan_20(27)); // 10 or over

// === 21.

// if - Проверка величины числа
function testSize_21(num) {
  if(num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
   };
};

console.log("21--", testSize_21(21));

// === 22.

// if - Условия с множественными значениями
const names_22 = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore_22(par, strokes) {
   if(strokes === 1) {
   return names_22[0]; // Hole-in-one!
   } else if (strokes <= par - 2) {
   return names_22[1]; // Eagle
   } else if (strokes == par - 1) {
   return names_22[2]; // Birdie
   } else if (strokes === par) {
   return names_22[3]; // Birdie
   } else if (strokes == par + 1) {
   return names_22[4]; // Bogey
   } else if (strokes == par + 2) {
   return names_22[5]; // Double Bogey
   } else if (strokes >= par + 3) {
   return names_22[6]; // Go Home!
   };
};

console.log("22--", golfScore_22(4, 3)); // Birdie

// === 23.

// switch - Результат записываем в answer и возвращаем
function caseInSwitch_23(val) {
  var answer = "";

  switch(val) {
   case "one":
      answer = "alpha";
      break;
   case "two":
      answer = "beta";
      break;
   case "three":
      answer = "gamma";
      break;
   case "four":
      answer = "delta";
      break;
   default:
      answer = 3 + 5;
      break;
   };

  return answer;
};

console.log("23--", caseInSwitch_23("qwe")); // 8

// === 24.

// switch - Условия с множественными идентичными параметрами
function sequentialSizes_24(val) {
  var answer = "";

  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
   };
 
  return answer;
};

console.log("24--", sequentialSizes_24(4)); // Mid

// === 25.

// Вместо if else можно сразу вернуть результат выражения
function isLess_25(a, b) {
  return a < b;
};

console.log("25--", isLess_25(10, 15)); // true

// === 26.

// if - Если одно из значений меньше 0 возвращаем undefined
function abTest_26(a, b) {
  if(a < 0 || b < 0) {
    return undefined;
   };

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
};

console.log("26--", abTest_26(-3, 2));

// === 27.

// Blackjack - 
let count_27 = 0;

function cc_27(card) {
   let holdBet = "Hold";

   switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
         count_27 += 1;
         break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
         count_27 -= 1;
   }; 

   if (count_27 > 0) {
      holdBet = "Bet";
   };
   
   return count_27 + " " + holdBet
};

console.log("27--", cc_27("K")); // -1 Hold

// === 28.

// .hasOwnProperty() - Проверяет наличие свойства. Возвращает значение
const obj_28 = {
   gift: "pony",
   pet: "kitten",
   bed: "sleigh",
};

function checkObj_28(obj, checkProp) {

   if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
   };

   return "Not Found"
};

console.log("28--", checkObj_28(obj_28, "bed"));

// === 29.

// Получает при клике на ссылку #apple из атрибут href
const refs_29 = {
   controls_29: document.querySelector(`.controls__item`),
};

refs_29.controls_29.addEventListener('click', e => {
   e.preventDefault();

   const controlItem = e.target;
   const paneId = controlItem.getAttribute('href').slice(1);

   console.log("29--", paneId); // apple
});

// === 30.

// Map создает массив домузлов с текстом из массива
const fn_30 = arr => arr.map(el => {
  const item = document.createElement('div');
  item.textContent = el;

  return item;
 });

console.log("30--", fn_30(['html', 'css', 'js', 'react'])); // (4) [div, div, div, div]

// === 31.

// Функция добавляет, удаляет и изменяет свойства объекта
const collection_31 = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold',
  }
};

function updateRecords_31(object, id, prop, value) {
   const objId = object[id];

   if (
      prop !== "tracks" && value !== "") {
      objId[prop] = value;
   } else if (
      prop === "tracks" && !objId.hasOwnProperty(prop)) {
      objId[prop] = [value];
   } else if (
      prop === "tracks" && value !== "") {
      object[id][prop].push(value);
   } else if (
      value === "") {
      delete object[id][prop];
   };

  return object;
};

updateRecords_31(collection_31, 5439, 'artist', 'ABBA');

console.log("31--", collection_31[5439]);

// === 32.

// 

// =========== Loops ===========

// === L01.

// While
// Выполняется «пока» заданное условие истинно

// - Добавляем в массив числа от 5 до 0 включительно
const myArray_L01 = [];
let i_L01 = 5

while (i_L01 >= 0) {
   myArray_L01.push(i_L01);
   i_L01 -= 1;
};

console.log("L01--", myArray_L01); // (6) [5, 4, 3, 2, 1, 0]

// === L02.

// For
// Выполняется «для» определенное количество раз

// Пушит в массив числа от 10 до 0 включительно (декремент - 2)
const myArray_L02 = [];

for (let i = 10; i >= 0; i -= 2) {
   myArray_L02.push(i);
};

console.log("L02--", myArray_L02); // (6) [10, 8, 6, 4, 2, 0]

// === L03.

// For

// Перебирает массив в цикле for .length раз добавляя элементы в total
const myArr_L03 = [ 2, 3, 4, 5, 6];

let total_L03 = 0;

for (let i = 2; i <= myArr_L03.length + 1; i += 1) {
    total_L03[i]
    total_L03 += i;
};

console.log("L03--", total_L03); // 20

// === L04.

// For

// Перебирает массивы в массиве и возвращает произведение всех чисел
function multiplyAll_L04(arr) {
   let product_L04 = 1;

   for (let i = 0; i < arr.length; i += 1){
      for (let q = 0; q < arr[i].length; q += 1){
         product_L04 *= arr[i][q];
      };
   };

   return product_L04;
};

console.log("L04--", multiplyAll_L04([[1,2],[3,4],[5,6,7]])); // 5040

// === L05

// Do...While
// Вначале выполняет тело, а потом условие

// Передает 10 в массив и на 11-ти цикл останавливается
const myArray_L05 = [];
let i_L05 = 10;

do {
myArray_L05.push(i_L05);
  i_L05 += 1;
} while (i_L05 < 5);

console.log("L05--", myArray_L05); // [10]

// ==========================================

// Входной тест на курс React

// 01. Что будет выведено в консоль?

// const x = 1;
// const x = 'hello';
// console.log(x);

// Ошибка ' Duplicate declaration "x" '

// ---

// 02. Что будет выведено в консоль?

// let b = 20;

// if (true) {
//   console.log(b);
//   let b = 10;
// }

// Ошибка 'ReferenceError: b is not defined'

// ---

// 03. Что будет выведено в консоль?

// const x;
// x = 1;
// console.log(x)

// Ошибка 'Missing initializer in const declaration'

// ---

// 04. Что будет выведено в консоль?

// const MAX = 10;
// let amount = 0;

// while (amount++ < MAX) {
//    let sum = amount;
// }
// console.log(sum);

// Ошибка 'ReferenceError: sum is not defined'

// --- 

// 05. Что будет выведено в консоль?

// const person = {
//   firstName: 'bob',
//   showName() {
//     console.log(this.firstName);
//   },
// };

// const foo = function(callback) {
//   callback();
// };

// foo(person.showName);

// Uncaught TypeError: Cannot read property 'firstName' of undefined (undefined)

// ---

// 06. Что будет выведено в консоль?

// const person = {
//   age: 10,
//   setAge(newAge) {
//     this.age = newAge;
//   },
//   refreshAge(userId) {
//     fetchAgeFromDb(function(newAge) {
//       this.setAge(newAge);
//     });
//   },
// };

// function fetchAgeFromDb(cb) {
//  cb(20);
// }

// person.refreshAge();
// console.log(person.age);

// Uncaught TypeError: Cannot read property 'setAge' of undefined (Ошибка 'this.setAge is not a function')

// --- 

// 07. Что будет выведено в консоль?

// const add = (a = 0, b = 10) => a + b;
// const sum = add(10);
// console.log(sum);

// 20

// ---

// 08. Что будет выведено в консоль?

// const sum = (...numbers) => numbers.reduce((acc, number) => acc + number, 2);
// const answer = sum(1, 5, 20, 10);
// console.log(answer);

// 38

// --- 

// 09. Что будет выведено в консоль?

// const multiplyByValue = (value, base, ...numbers) => {
//   return numbers.map(number => number * value + base);
// };
// console.log(multiplyByValue(2, 100, 1, 5, 20, 10));

// (4) [102, 110, 140, 120]

// ---

// 10. Что будет выведено в консоль?

// const names = ['bob', ...['donald'], 'suzy', 'lacy', ...['richard', 'alex']];
// console.log(names);

// (6) ['bob', 'donald', 'suzy', 'lacy', 'richard', 'alex']

// ---

// 11. Что будет выведено в консоль?

// const min = Math.min(...[1, 5, -1, -10]);
// console.log(min);

// -10

// ---

// 12. Что будет выведено в консоль?

// const name = 'bob';
// const age = 20;
// const obj = { name, age };

// console.log(obj);

// {name: "bob", age: 20}

// ---

// 13. Что будет выведено в консоль?

// const confused = 'no';
// const myKey = confused;

// const obj = {
//   [myKey]: false,
// };

// console.log(obj);

// {no: false}

// 14. Что будет выведено в консоль?

// const piece = {
//   x: 0,
//   y: 0,
//   move(x, y) {
//     this.x = x;
//     this.y = y;
//   },
// };

// piece.move(10, 10);
// console.log(piece);

// {x: 10, y: 10, move: ƒ}

// ---

// 15. Что будет выведено в консоль?

// const [first, , third] = 'hello sweet world'.split(' ');
// console.log(first, third);

// 16. Что будет выведено в консоль?

// const { name, age, gender = 'm', hairColor: color } = {
//  name: 'bob',
//  age: 20,
//  hairColor: 'blue',
// };

// console.log(name, age, gender, color);

// bob 20 m blue

// --- 

// 17. Что будет выведено в консоль?

// const dog = { name: 'Poly' };

// function showDogName() {
//   console.log(this.name); // Poly
// }

// const boundShowDogName = showDogName.bind(dog);

// boundShowDogName();

// ---

// 18. Что будет выведено в консоль?

// const userA = {
//   name: 'Mango',
//   age: 5,
// };

// const userB = {
//   ...userA,
//   age: 10,
//   happy: true,
// };

// console.log(userB); // {name: "Mango", age: 10, happy: true}

// ---

// 19. Что будет выведено в консоль?

// const fn = (arr, val) => arr.filter(el => el > val);

// console.log(fn([1, 2, 3, 4, 5], 3)); // (2) [4, 5]

// ---

// 20. Что будет выведено в консоль?

// const fn = arr => arr.map(el => {
//   const item = document.createElement('div');
//   item.textContent = el;

//   return item;
//  });

// console.log(fn(['html', 'css', 'js', 'react'])); // (4) [div, div, div, div]

// ---

// Ссылка на результаты теста на курс React:
// https://docs.google.com/forms/d/e/1FAIpQLSfcz0GiyO5D6ad3cKkkeFJyE3VY0dsLaF1J3yU425auSXazzQ/viewscore?viewscore=AE0zAgDqHIyc-daivLEpj9iYfQFFPlpxl7RjIsCEW2GKbgMBUWR31ITCQ4VczrJEJQoj1cQ



// ------------------------------------------------------ */