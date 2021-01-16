/*
 *
 * function
 *
 */

// /* ======================================================
// ** Жека фрилансер по жизни

// Вызвать можно до или после объявления
showMessage() // Message

function showMessage() {
   console.log("Message");
};

showMessage() // Message

// === 02.

// Передача параметров в функцию
function calcSum(numOne, numTwo) {
   console.log(`Переменная numOne: ${numOne}`); // Переменная numOne: 1
   console.log(`Переменная numOne: ${numTwo}`); // Переменная numOne: 2

   const numSum = numOne + numTwo;

   console.log(`Сумма: ${numSum}`); // Сумма: 3
};

calcSum(1, 2);

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
   console.log("Больше чем 3");
};

function showLessMessage_03() {
   console.log("Меньше чем 3");
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
const funcResult = calcSum_04(1, 2);

console.log(`Сумма: ${funcResult}`);

// === 05.

// Рекурсия
function calcSum_05(numOne, numTwo) {
   if (numTwo === 1) {
      return numOne;
   } else {
      return numOne * calcSum_05(numOne, numTwo - 1)
   };
};

console.log(calcSum_05(2, 3));

// === 06.

// Функциональное выражение (function Expression)
// Вызвать можно только после ее создания
const showMessage_06 = function () {
   console.log("Привет!");
};

showMessage_06();

// === 07.

// Присвоение переменной раннее объявленной функции
// позволяет вызывать ее по двум разным именам 
function getSum() {
   const sum = 1 + 2;

   console.log(sum);
};

const someVar = getSum;

// Вызовы
someVar();
getSum();

// === 08.

// Стрелочные функции
const getMessage_08 = (text, name) => console.log(`${text} ${name}`);

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
   console.log(message);
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

console.log(equal_16); // 50

// === 17.

// Функция с одной глобальной переменной
const sum_17 = 0;

function addFive_17(arg) {
   let equal = sum_17;
   equal = arg + 5;
   return equal;
};

console.log(addFive_17(30)); // 35

// === 18.

// Две функции и глобальная переменная
let processed_18 = 0;

function processArg_18(num) {
  return (num + 17) / 2;
};

function getEqual_18() {
  processed_18 = processArg_18(7);
   console.log(processed_18); // 12
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

console.log(trueOrFalse_19(true)); // Yes, that was true

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

console.log(testGreaterThan_20(27)); // 10 or over

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

console.log(testSize_21(21));

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

console.log(golfScore_22(4, 3)); // Birdie

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

console.log(caseInSwitch_23("qwe")); // 8

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

console.log(sequentialSizes_24(4)); // Mid

// === 25.

// Вместо if else можно сразу вернуть результат выражения
function isLess_25(a, b) {
  return a < b;
};

console.log(isLess_25(10, 15)); // true

// === 26.

// if - Если одно из значений меньше 0 возвращаем undefined
function abTest_26(a, b) {
  if(a < 0 || b < 0) {
    return undefined;
   };

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
};

console.log(abTest_26(-3, 2));

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

console.log(cc_27("K")); // -1 Hold

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

console.log(checkObj_28(obj_28, "bed"));

// === 29.

// 




// ------------------------------------------------------ */