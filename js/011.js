/*
 * 
 * setTimeout  
 * setInterval
 * clearTimeout
 * clearInterval
 * 
 * эти методы лежат на window
 * 
 */

/*

// setTimeout
// регистрирует отложенный вызов функции
// возвращает id таймера

// Вариант функции 1.

setTimeout(() => {
   console.log("Лог при вызове callback через 3 сек");
}, 3000);

*/
/*

// Вариант функции 2.

const log = () => {
   console.log("Лог при вызове callback через 3 сек");
};

setTimeout(log, 3000);

*/
/*

// Асинхронность кода

const log = () => {
   console.log("Лог при вызове callback через 3 сек");
};

console.log("До вызова");

setTimeout(log, 0);

console.log("После вызова");

// --
// До вызова
// После вызова
// Лог при вызове callback через 3 сек

*/
/*

// Очистка таймаута с clearTimeout

// Пример доп параметров:
// const timerId = setTimeout(функкция, вызов в мс, любые другие параметры);

const logger = time => {
   console.log(`Лог через ${time} ms , потому что не отменили таймаут`);
};

const timerId = setTimeout(logger, 2000, 2000);

console.log(timerId);

// Очищает timerId и не выводится logger в консоль
clearTimeout(timerId);

*/
/*

// Отмена таймера

const logger = time => {
   console.log(`Лог через ${time} ms , потому что не отменили таймаут`);
};

const timerId = setTimeout(logger, 2000, 2000);

const shouldCancelTimer = Math.random() > 0.3;

console.log(shouldCancelTimer);

// Если false очищаем timerId, если false - выводим logger
if (shouldCancelTimer) {
   clearTimeout(timerId);
};

*/
/*

// setInterval

const logger = time => console.log(`Лог каждые ${time}ms - ${Date.now()}`);

// Выводит кождые 2 сек дату начиная с 1970 года
setInterval(logger, 2000, 2000);

*/
/*

// Подписка на рассылку
// Очистка интервала по id c clearInterval

const logger = time => console.log(`Лог каждые ${time}ms - ${Date.now()}`);

console.log("До");

let subscriptionCounter = 0;
let hasSubscribed = false;

const intervalId = setInterval(() => {

   // Есди подписка покажется 3 раза или юзер подпишется, 
   // то clearInterval и return останавливаем интервал

   if (subscriptionCounter === 3 || hasSubscribed) {
      console.log("Останавили интервал");
      clearInterval(intervalId);
      return;
   }

   console.log("Подпишись на рассылку");

   // Юзер подписался на рассылку
   // hasSubscribed = true;

   // Счетчик уверичивается на 1
   subscriptionCounter += 1;
}, 1000);

console.log("После");

*/

/**
 * 
 * Notification
 * 
 * Показываем дбавляя класс
 * Скрываем через нужное время
 * Скрываем при клике
 * Чистим таймер
 * 
 */

/*

// setTimeout, clearTimeout, 

const refs = {
   notification: document.querySelector('.js-notification'),
};

// Почему null?
// null - для разработчика (0 или undefined для языка)

let timoutId = null;

refs.notification.addEventListener("click", notificationClickHandler);

showNotification();

// Прячем по клику
function notificationClickHandler() {

   // Очищаем по id
   clearTimeout(timoutId);

   // Уезжает при клике
   hideNotification();
};

function showNotification() {
   refs.notification.classList.add("is-visible");

   // После показа скрываем через 3 сек
   timoutId = setTimeout(() => {
      console.log("Сейчас вызову hideNotification в колбеке от setTimeout",);
   hideNotification();
}, 3000);
};

// Убираем нотификашку
function hideNotification() {
   refs.notification.classList.remove("is-visible");
};

*/

/**
 * 
 * Date (timer)
 * 
 * https://date-fns.org
 * https://momentjs.com
 * https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
 * 
 */

/*

// Время (Объект)

const date = new Date();
console.dir(date);

*/
/*

// Концепт

// Милисекунд с 1970 года
const dateFrom1970 = Date.now();
console.log(dateFrom1970);

// Весь объект Date
const date = new Date();
console.dir(date);
console.log(date);

*/
/*

// Посекундно (дата)

setInterval(() => {
   console.log(new Date);
}, 1000);

// let time = `${setInterval} ${} ${}`;

*/
/*

// Таймер (своими руками)

const refs = {
   startBtn: document.querySelector("button[data-action-start]"),
   stopBtn: document.querySelector("button[data-action-stop]"),
   clockface: document.querySelector('.js-clockface'),
};

const timer = {
   intervalId: null,
   isActive: false,

   start() {

      // Блокирует повторный запуск таймера
      if (this.isActive) {
         return;
      };

      console.log(this);
      this.isActive = true;

      // запоминаем стартовое время
      const startTime = Date.now();

      // мгновенное обнуление
      updateClockface(0);

      // запускаем интервал
      this.intervalId = setInterval(() => {
         const currentTime = Date.now();

         // получаем результат вычитания
         const deltaTime = currentTime - startTime;

         // обновляем интерфейс счетчика
         updateClockface(deltaTime);
      }, 1000);
   },

   // Стоп сбрасывает все по нолям и останавлиет интервал
   stop() {

      // Блокирует повторную остановку таймера
      if (!this.isActive) {
         return;
      };

      // перестанет считать
      clearInterval(this.intervalId);
      console.log(this);

      // приобразовываем в null
      this.intervalId = null;

      // возвращаем к неактивному состоянию
      this.isActive = false;

      // мгновенное обнуление
      updateClockface(0);
   }
};

// Важно! При передаче метода, как колбека, в обработчик события
// необходимо привязать контекст (bind())
refs.startBtn.addEventListener("click", timer.start.bind(timer));
refs.stopBtn.addEventListener("click", timer.stop.bind(timer));

// Запуск таймера при загрузке страницы
// timer.start();

function updateClockface(time) {
   const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

   refs.clockface.textContent = `${hours}:${mins}:${secs}`;
};

function pad(value) {

   // Этот petStart приобразовывает в два символа добавляя 0
   return String(value).padStart(2, "0");
};

*/

/**
 * 
 * Date (all)
 * 
 */

/*

// Создать событие на дату

const date = new Date('March 4, 2021');
console.log(date);

*/
/*

const date = new Date(2000, 5, 8, 12, 0, 0, 0);

// Индексы месяцев начинаются с 0, поэтому 5-й месяц это июль.
console.log(date);

*/
/*

// 1000000 прошло с 1 января 1970 года в часовом поясе UTC

const date = new Date(1000000);
console.log(date);

*/
/*

// Геттеры

const date = new Date();
console.log('Date: ' + date);

// возвращает день месяца от 1 до 31
console.log('getDate(): ' + date.getDate());

// возвращает день недели от 0 до 6
console.log('getDay(): ' + date.getDay());

// возвращает месяц от 0 до 11
console.log('getMonth(): ' + date.getMonth());

// возвращает год из 4 цифр
console.log('getFullYear(): ' + date.getFullYear());

// возвращает час
console.log('getHours(): ' + date.getHours());

// возвращает минуты
console.log('getMinutes(): ' + date.getMinutes());

// возвращает секунды
console.log('getSeconds(): ' + date.getSeconds());

// возвращает миллисекунды
console.log('getMilliseconds(): ' + date.getMilliseconds());

// возвращает кол-во миллисекунд прошедших со старта эпохи Unix
console.log('getTime(): ' + date.getTime());

*/
/*

// Эксперимент

let date = "";

setInterval(() => {
   const date = new Date();

   // проверим количество мс с с начала эпохи Unix
   // console.log(`Время в мс с начала эпохи Unix: ${date.getTime()}`);
   // "Время в мс с начала эпохи Unix: ....  значения будут меняться :-)
   // "Время в мс с начала эпохи Unix: 1504721892483"

   let result = 'Date: ';
   result += date.getFullYear() + '/'; // год
   result += date.getMonth() + '/'; // месяц, начиная с 0
   result += date.getDate() + '. Day of week: '; // день недели, начиная с 1
   result += date.getDay() + '.'; // день , начиная с 0

   result += ' Time: ' + date.getHours() + ':'; // часы
   result += date.getMinutes() + ':'; // минуты
   result += date.getSeconds() + ':'; // секунды
   result += date.getMilliseconds() + ''; // милисекунды

   // строка должна показать текущее время и дату
   console.log(result); // "Date: 2017/8/6. Day of week: 3. Time: 21:18:12:483"
   // ...  значения будут меняться :-)
   return result;
}, 1000);

*/

/**
 * 
 * Geri
 * 
 */

/* 

// Запрос на SERVER

fetch('http://localhost:3000/users')
   .then(data => data.json())
   .then(console.log)
   .catch(() => console.log("My awesome error"));

*/
/*

// Promise
// Асинхронная структура
// Выполняем cl сразу после таймера

console.log("Start...");

const promise = new Promise((resolve, reject) => {
setTimeout(() => {
   console.log("from timer...");

   resolve(); // return (promise.then не выполняется)
   reject();
}, 1000);
})

promise.then(() => {
   console.log("SUCCESS after timer...");
}).catch(() => {
   console.log("my ERROR...");
})

console.log("End...");

*/
/*

// Loader (показываем и скрывем)
// Loader срываем внезависаммости от resolve или reject
// при помощи finally

const loader = document.querySelector('#loader');

console.log("Start...");

loader.classList.add('show');

const promise = new Promise((resolve, reject) => {
setTimeout(() => {
   console.log("from timer...");

   // resolve(); // return (promise.then не выполняется)
   reject();
}, 1000);
})

promise.then(() => {
   console.log("SUCCESS after timer...");
}).catch(() => {
   console.log("my ERROR...");
}).finally(() => {
   loader.classList.remove('show');
})

console.log("End...");

*/
// /*
// eslint-disable-next-line

// Задача
// Как сделать 1, 2, 3..., а не 10 10, без использования let

// Условие
/*
for (var i = 0; i < 10; i += 1){ 
   setTimeout(function(){
      console.log(i);
   }, 200)
};
*/

// Решение 1.
// Добавить параметр i
/*
for (var i = 0; i < 10; i += 1){ 
   setTimeout(function(i){
      console.log(i);
   }, 200, i)
};
*/

// Решение 2. (так писать не нужно)
// Создать самозамыкающуюся функцию
/*
for (var i = 0; i < 10; i += 1){ 
   setTimeout(function () {
      const x = i;

      return function () {
         console.log(x);
      }
   }(), 2000);
};
*/

// Решение 3.
// Хорошее решение
/*
for (var i = 0; i < 10; i += 1) {
   setTimeout(
      function (i) {
         console.log(i);
      }, 2000, i);
};
*/
// Решение 4.
// Решение студента
/*
for (var i = 0; i < 1; i += 1) {
   setTimeout(() => {
      for (let i = 0; i < 10; i += 1) {
         console.log(i);
      }
   }, 1000);
};
*/


// Задача 2.
// Как сделать чтобы функция вызывала сама себя

// Условие
/*
function fn() {
   console.log("hello");
};
*/

// Решение
/*
// Обернуть в скобки и поставить скобки в конце
(function fn() {
   console.log("hello");
})();
*/