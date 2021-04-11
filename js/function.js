/*
 *
 * function
 *
 */

// Вызвать можно до или после объявления
showMessage_01(); // Message

function showMessage_01() {
  console.log('01--', 'Message');
}

showMessage_01(); // Message

// === 02.

// Передача параметров в функцию
function calcSum_02(numOne, numTwo) {
  console.log('02--', `Переменная numOne: ${numOne}`); // Переменная numOne: 1
  console.log('02--', `Переменная numOne: ${numTwo}`); // Переменная numOne: 2

  const numSum = numOne + numTwo;

  console.log('02--', `Сумма: ${numSum}`); // Сумма: 3
}

calcSum_02(1, 2);

// === 03

// Вызываем колбек с сообщением
function calcSum_03(numOne, numTwo, more, less) {
  const numSum_03 = numOne + numTwo;

  if (numSum_03 > 3) {
    more();
  } else {
    less();
  }
}

function showMoreMessage_03() {
  console.log('03--', 'Больше чем 3');
}

function showLessMessage_03() {
  console.log('03--', 'Меньше чем 3');
}

calcSum_03(1, 5, showMoreMessage_03, showLessMessage_03);

// === 04.

function calcSum_04(numOne, numTwo) {
  // Сложение
  const numSum_04 = numOne + numTwo;

  // Возврат результата
  return numSum_04;
}

// Присваиваем результат функции в переменную
const funcResult_04 = calcSum_04(1, 2);

console.log('04--', `Сумма: ${funcResult_04}`); // 3

// === 05.

// Рекурсия
function calcSum_05(numOne, numTwo) {
  if (numTwo === 1) {
    return numOne;
  } else {
    return numOne * calcSum_05(numOne, numTwo - 1);
  }
}

console.log('05--', calcSum_05(2, 3)); // 8

// === 06.

// Функциональное выражение (function Expression)
// Вызвать можно только после ее создания
const showMessage_06 = function () {
  console.log('06--', 'Привет!'); // Привет!
};

showMessage_06();

// === 07.

// Присвоение переменной раннее объявленной функции
// позволяет вызывать ее по двум разным именам
function getSum_07() {
  const sum = 1 + 2;

  console.log('07--', sum);
}

const someVar_07 = getSum_07;

// Вызовы
someVar_07(); // 3
getSum_07(); // 3

// === 08.

// Стрелочные функции
const getMessage_08 = (text, name) => console.log('08--', `${text} ${name}`);

getMessage_08('Hi', 'Serhii');

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
}

// Функция вывода в консоль
function showMessage_15(message) {
  console.log('15--', message);
}

// Объединяющая функция (вызывает обе функции)
function initMessage_15(text, name) {
  showMessage_15(createMessage_15(text, name));
}

initMessage_15('Привет', 'Фрилансер');

// === 16.

// Возвращает из функции значение
function timesFive_16(arg1) {
  return arg1 * 5;
}

const equal_16 = timesFive_16(10);

console.log('16--', equal_16); // 50

// === 17.

// Функция с одной глобальной переменной
const sum_17 = 0;

function addFive_17(arg) {
  let equal = sum_17;
  equal = arg + 5;
  return equal;
}

console.log('17--', addFive_17(30)); // 35

// === 18.

// Две функции и глобальная переменная
let processed_18 = 0;

function processArg_18(num) {
  return (num + 17) / 2;
}

function getEqual_18() {
  processed_18 = processArg_18(7);
  console.log('18--', processed_18); // 12
}

getEqual_18();

// === 19.

// Boolean - функция возвращает одно из сначений
function trueOrFalse_19(wasThatTrue) {
  if (wasThatTrue) {
    return 'Yes, that was true';
  }

  return 'No, that was false';
}

console.log('19--', trueOrFalse_19(true)); // Yes, that was true

// === 20.

// if - Выбор диапазона до 10 - между - 100 после
function testGreaterThan_20(val) {
  if (val >= 100) {
    return '100 or over';
  }

  if (val >= 10) {
    return '10 or over';
  }

  return 'Under 10';
}

console.log('20--', testGreaterThan_20(27)); // 10 or over

// === 21.

// if - Проверка величины числа
function testSize_21(num) {
  if (num < 5) {
    return 'Tiny';
  } else if (num < 10) {
    return 'Small';
  } else if (num < 15) {
    return 'Medium';
  } else if (num < 20) {
    return 'Large';
  } else if (num >= 20) {
    return 'Huge';
  }
}

console.log('21--', testSize_21(21));

// === 22.

// if - Условия с множественными значениями
const names_22 = [
  'Hole-in-one!',
  'Eagle',
  'Birdie',
  'Par',
  'Bogey',
  'Double Bogey',
  'Go Home!',
];
function golfScore_22(par, strokes) {
  if (strokes === 1) {
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
  }
}

console.log('22--', golfScore_22(4, 3)); // Birdie

// === 23.

// switch - Результат записываем в answer и возвращаем
function caseInSwitch_23(val) {
  var answer = '';

  switch (val) {
    case 'one':
      answer = 'alpha';
      break;
    case 'two':
      answer = 'beta';
      break;
    case 'three':
      answer = 'gamma';
      break;
    case 'four':
      answer = 'delta';
      break;
    default:
      answer = 3 + 5;
      break;
  }

  return answer;
}

console.log('23--', caseInSwitch_23('qwe')); // 8

// === 24.

// switch - Условия с множественными идентичными параметрами
function sequentialSizes_24(val) {
  var answer = '';

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = 'Low';
      break;
    case 4:
    case 5:
    case 6:
      answer = 'Mid';
      break;
    case 7:
    case 8:
    case 9:
      answer = 'High';
      break;
  }

  return answer;
}

console.log('24--', sequentialSizes_24(4)); // Mid

// === 25.

// Вместо if else можно сразу вернуть результат выражения
function isLess_25(a, b) {
  return a < b;
}

console.log('25--', isLess_25(10, 15)); // true

// === 26.

// if - Если одно из значений меньше 0 возвращаем undefined
function abTest_26(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log('26--', abTest_26(-3, 2));

// === 27.

// Blackjack -
let count_27 = 0;

function cc_27(card) {
  let holdBet = 'Hold';

  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count_27 += 1;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count_27 -= 1;
  }

  if (count_27 > 0) {
    holdBet = 'Bet';
  }

  return count_27 + ' ' + holdBet;
}

console.log('27--', cc_27('K')); // -1 Hold

// === 28.

// .hasOwnProperty() - Проверяет наличие свойства. Возвращает значение
const obj_28 = {
  gift: 'pony',
  pet: 'kitten',
  bed: 'sleigh',
};

function checkObj_28(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  }

  return 'Not Found';
}

console.log('28--', checkObj_28(obj_28, 'bed'));

// === 29.

// Получает при клике на ссылку #apple из атрибут href
const refs_29 = {
  controls_29: document.querySelector(`.controls__item`),
};

refs_29.controls_29.addEventListener('click', (e) => {
  e.preventDefault();

  const controlItem = e.target;
  const paneId = controlItem.getAttribute('href').slice(1);

  console.log('29--', paneId); // apple
});

// === 30.

// Map создает массив домузлов с текстом из массива
const fn_30 = (arr) =>
  arr.map((el) => {
    const item = document.createElement('div');
    item.textContent = el;

    return item;
  });

console.log('30--', fn_30(['html', 'css', 'js', 'react'])); // (4) [div, div, div, div]

// === 31.

// Функция добавляет, удаляет и изменяет свойства объекта
const collection_31 = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    albumTitle: 'ABBA Gold',
  },
};

function updateRecords_31(object, id, prop, value) {
  const objId = object[id];

  if (prop !== 'tracks' && value !== '') {
    objId[prop] = value;
  } else if (prop === 'tracks' && !objId.hasOwnProperty(prop)) {
    objId[prop] = [value];
  } else if (prop === 'tracks' && value !== '') {
    object[id][prop].push(value);
  } else if (value === '') {
    delete object[id][prop];
  }

  return object;
}

updateRecords_31(collection_31, 5439, 'artist', 'ABBA');

console.log('31--', collection_31[5439]);

// === 32. Интерполяция

// Вызывает функцию toUpperCase() прямо из строки интерполяции
const up_32 = (str_32) => str_32.toUpperCase();
let str_32 = `this is ${up_32('sting')} in uppercase`;

console.log('32--', str_32); // this is STRING in uppercase

// === 32_2.

// Получет сумму чисел из строки интерполяции
const sum_32_2 = (...args) =>
  `Sum is equal ${args.reduce((start, arg) => start + arg, 0)}`;

console.log('32_2', sum_32_2(12, 23, 32)); // Sum is equal 67

// === 32_3.

// Вложенная интерполяция
const up_32_3 = (str) => str.toUpperCase();
let user_32_3 = 'user';
let str_32_3 = `these ${up_32_3(`${user_32_3}s`)} are great`;

console.log('32_3', str_32_3); // these USERS are great

// === 33. Стрелочные функции

// Возвращает сумму двух переданных ей аргументов
const add_33 = (a, b) => a + b;

console.log('33--', add_33(3, 4)); // 7

// === 33_2.

// function expression: два способа в ES6
const fn_33_2_a = function () {
  return 52;
};
const fn_33_2_b = () => 52;

// function declaration: один способ в ES6
function fn_33_2_с() {
  return 52;
}

// =========== This ===========

// === 34.

// В функции-конструктор this относится к вновь созданному экземпляру.
function Person_34(fn, ln) {
  this.first_name = fn;
  this.last_name = ln;

  this.displayName = function () {
    console.log('34--', `Name: ${this.first_name} ${this.last_name}`);
  };
}

let person_34 = new Person_34('Serhii', 'Stanislav');
person_34.displayName(); // Name: Serhii Stanislav

// === 34_2.

// Привязываем контекств при помощи .bind()

function Person_34_2(fn, ln) {
  this.first_name = fn;
  this.last_name = ln;

  this.displayName = function () {
    console.log('34_2', `Name: ${this.first_name} ${this.last_name}`);
  };
}

let person_34_2 = new Person_34_2('Serhii', 'Stanislav');

let person2Display_34_2 = person_34_2.displayName.bind(person_34_2);
person2Display_34_2(); // Name: Serhii Stanislav

// === 34_3.

// Умножает значение элементов и выводит результат в консоль через колбек
function multiply_34_3(p, q, callback) {
  callback(p * q);
}

let user_34_3 = {
  a: 3,
  b: 5,
  findMultiply: function () {
    multiply_34_3(this.a, this.b, function (total) {
      console.log('34_3', total); // 15
    });
  },
};

user_34_3.findMultiply();

// =========== Loops ===========

// === L01.

// While
// Выполняется «пока» заданное условие истинно

// - Добавляем в массив числа от 5 до 0 включительно
const myArray_L01 = [];
let i_L01 = 5;

while (i_L01 >= 0) {
  myArray_L01.push(i_L01);
  i_L01 -= 1;
}

console.log('L01--', myArray_L01); // (6) [5, 4, 3, 2, 1, 0]

// === L02.

// For
// Выполняется «для» определенное количество раз

// Пушит в массив числа от 10 до 0 включительно (декремент - 2)
const myArray_L02 = [];

for (let i = 10; i >= 0; i -= 2) {
  myArray_L02.push(i);
}

console.log('L02--', myArray_L02); // (6) [10, 8, 6, 4, 2, 0]

// === L03.

// For

// Перебирает массив в цикле for .length раз добавляя элементы в total
const myArr_L03 = [2, 3, 4, 5, 6];

let total_L03 = 0;

for (let i = 2; i <= myArr_L03.length + 1; i += 1) {
  total_L03[i];
  total_L03 += i;
}

console.log('L03--', total_L03); // 20

// === L04.

// For

// Перебирает массивы в массиве и возвращает произведение всех чисел
function multiplyAll_L04(arr) {
  let product_L04 = 1;

  for (let i = 0; i < arr.length; i += 1) {
    for (let q = 0; q < arr[i].length; q += 1) {
      product_L04 *= arr[i][q];
    }
  }

  return product_L04;
}

console.log(
  'L04--',
  multiplyAll_L04([
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ])
); // 5040

// === L05

// Do...While
// Вначале выполняет тело, а потом условие

// Передает только 10 в массив и на 11-ти цикл останавливается
const myArray_L05 = [];
let i_L05 = 10;

do {
  myArray_L05.push(i_L05);
  i_L05 += 1;
} while (i_L05 < 5);

console.log('L05--', myArray_L05); // [10]

// =========== Class ===========

// === C01.

class Car_C01 {
  constructor(speed) {
    this.fuel = 0;
    this.distance = 0;
    this.topSpeed = Math.round(Math.random());

    this.speed = speed;
  }
  static isFaster(left, right) {
    return left.topSpeed > right.topSpeed;
  }
  move() {
    if (this.fuel < 1) {
      throw new RangeError('Fuel tank is depleted');
    }
    this.fuel--;
    this.distance += 10;
  }
  addFuel() {
    if (this.fuel >= 60) {
      throw new RangeError('Fuel tank is full');
    }
    this.fuel++;
  }
}
console.dir(Car_C01);
const car_C01 = new Car_C01(120);
car_C01.addFuel();
car_C01.addFuel();
car_C01.addFuel();
car_C01.move();
car_C01.move();

console.log('C05--', car_C01); // Car_C01 {fuel: 1, distance: 20, topSpeed: 0, speed: 120}

class Tesla_C01 extends Car_C01 {
  constructor(speed) {
    super(speed * 2);
  }
  move() {
    super.move();
    this.distance += 15;
  }
}

const tesla_C01 = new Tesla_C01(120);
tesla_C01.addFuel();
tesla_C01.addFuel();
tesla_C01.addFuel();
tesla_C01.move();
tesla_C01.move();

console.log('C05--', tesla_C01); // Tesla_C01 {fuel: 1, distance: 50, topSpeed: 0, speed: 240}
console.log('C05--', tesla_C01.distance); // 50

// === Free Code Camp 2021

/**
 * ===== fcc01
 * Рекурсия
 * Вернуть сумму первых n чисел из массива
 */

function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}
console.log('fcc01:', sum([2, 3, 4, 5], 3));

/**
 * ======= fcc02
 * For
 * Если совпало name, вернуть prop
 * Если name отсутствует - 'No such contact'
 * Если совпало name, но нет prop - 'No such property'
 */

const contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i += 1) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || 'No such property';
    }
  }
  return 'No such contact';
}

console.log('fcc02.1:', lookUpProfile('Akira', 'likes')); // ['Pizza', 'Cod....']
console.log('fcc02.2:', lookUpProfile('Kristian', 'lastName')); // Vos
console.log('fcc02.4:', lookUpProfile('Bob', 'number')); // No such contact
console.log('fcc02.5:', lookUpProfile('Akira', 'address')); // No such property

/**
 * ======= fcc03
 * Math.random()
 * Вернуть рандомное число 0-10
 * Округлить до целого (вниз)
 */

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
console.log(
  'fcc03: Math.random - Округляем до целого числа:',
  randomWholeNum()
);

/**
 * ======= fcc04
 * Math.random()
 * Устанавливает диапазон рандома от и до
 */

function randomRange(myMin, myMax) {
  console.log(
    `fcc04.1: Устанавливаем диапазон рандома от ${myMin} до ${myMax} `
  );

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(
  `fcc04.2: Math.random - Получаем рандомное число:`,
  randomRange(3, 15)
);

/**
 * ======= fcc05
 * parseInt()
 * Преобразовует строку в число
 */

function convertToInteger(str) {
  return parseInt(str);
}

console.log(
  'fcc05: parseInt() - Преобразовует строку "56" в ',
  convertToInteger('56')
);

/**
 * ======= fcc06
 * parseInt(string, radix)
 * Radix второй аргумент, преобразовывает число в бинарное
 */

function convertToInteger_fcc06(str) {
  return parseInt(str, 2);
}

console.log(
  'fcc06: parseInt() - Преобразовываем число "10011" в бинарное ',
  convertToInteger_fcc06('10011')
);

/**
 * ======= fcc07
 * Ternary
 * Множественный тернарный оператор
 */

function checkSign(num) {
  return num === 0 ? 'zero' : num > 0 ? 'positive' : 'negative';
}

console.log(
  'fcc07: Ternary - Множественный тернарный оператор:',
  checkSign(10)
);

/**
 * ======= fcc08.1
 * Recursion, push
 * Возвроащает массив с n кол-вом елементов
 */

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);

    return countArray;
  }
} // [1, 2, 3, 4, 5];
console.log(
  'fcc08.1: Recursion - Возвроащает массив с n кол-вом елементов:',
  countup(5)
);

/**
 * ======= fcc08.2
 * * Recursion, unshift
 * Возвроащает реверс массива с n кол-вом елементов
 */

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);

    return countArray;
  }
} // [7, 6, 5, 4, 3, 2, 1]
console.log(
  'fcc08.2: Recursion - Возвроащает реверс массива с n кол-вом елементов:',
  countdown(7)
);

/**
 * ======= fcc09
 * * Recursion, push
 * Возвроащает массив чисел в диапазоне startNum - endNum
 */

function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    const arr = rangeOfNumbers(startNum, endNum - 1);
    arr.push(endNum);

    return arr;
  }
} // [5, 6, 7, 8, 9, 10]
console.log(
  'fcc09: Recursion - Возвроащает массив чисел в диапазоне:',
  rangeOfNumbers(5, 10)
);

/**
 * ======= fcc010
 * * var with let
 * can only be declared once
 */

var camper = 'James';
var camper = 'David';
var camper = 'Rik';
var camper = 'Pony';
console.log('fcc010.1: var & let - can only be declared once -', camper);
// ('use strict');
let camper_fcc010 = 'Rik';
// let camper_fcc010 = 'Pony'; // ERROR !!! //can only be declared once
camper_fcc010 = 'Pony'; // <---Do this!
console.log(
  'fcc010.2: var & let - I changed let velue after mistake! -->',
  camper_fcc010
);

/**
 * ======= fcc011
 * * var with let
 *
 */

var catName;
var quote;
function catTalk() {
  'use strict';

  catName = 'Oliver';
  quote = catName + ' says Meow!';
}
catTalk();

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
//    refreshAge(userId) {
//       fetchAgeFromDb(function (newAge) {
//          this.setAge(newAge);
//     });
//   },
// };

// function fetchAgeFromDb(cb) {
//  cb(20);
// };

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

// /* ==========================================

console.log('======== Interview ========');

// 01.
const str = 'Hello';
console.log('01.', str[0]); // H

// 02.
const num = 1 + 2;
console.log('02.', num === 3); // true

// 03.
const numm = 0.1 + 0.2;
console.log('03.', numm === 0.3); // false

// 04.
function calculate(arr) {
  const res = arr.reduce(
    (acc, num) => (num > 0 && num % 2 ? acc + num : acc),
    0
  );
  return res;
}
console.log('04.', calculate([5, 0, -5, 20, 88, 17, -32]));

// 05.
let arr1 = [5, 10, 15];
let arr2 = arr1;
arr2 = [50, 100, 150];
console.log('04.', arr1[0]); // 5

// 06. Cумма двух чисел в массиве должна быть равна num
// Рекурсия

function check(arr, num) {
  return (
    arr.reduce((acc, item, _, array) => {
      const findedNumber = array.find((el) => {
        return el + item === num;
      });

      return findedNumber ? (acc += findedNumber) : acc;
    }, 0) === num
  );
}

console.log('06: true ->', check([10, 15, 3, 7], 17)); // true
console.log('06: false ->', check([10, 15, 3, 7], 20)); // false

// 07. Вернуть сумму всех чисел из переданного числа

function sumDigits(num) {
  let total = 0;
  const splitedeNum = [...num.toString()];

  for (let i = 0; i < splitedeNum.length; i += 1) {
    total += Number(splitedeNum[i]);
  }

  return total;
}

console.log('07:', sumDigits(123)); // 6
console.log('07:', sumDigits(904)); // 13
console.log('07:', sumDigits(3)); // 3

// ------------------------------------------ */
