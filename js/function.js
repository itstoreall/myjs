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

// ------------------------------------------------------ */