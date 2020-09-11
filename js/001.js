// const age = 10;
// const totalPrice = 200.74;
// const userName = "Chelsy";
// const message = "Добро пожаловать";
// const isOpen = true;
// const shouldConfirm = false;

// const type = typeof "bububu";
// console.log(message, age, type);

// ==========

// * Alert

// console.log("До");
// alert("iggigihih");
// console.log("После");

// * Confirm

// const message = "Подписка";
// const shouldRenew = confirm("message");
// console.log(shouldRenew);

// * Prompt

// const quantity = prompt("Введите кол-во");
// console.log(quantity);
// console.log(typeof quantity);

// let quantity = prompt("Введите кол-во"); // Возвращает только строку
// quantity = Number(quantity); // Выражение присваиваия числа
// console.log(quantity);
// console.log(typeof quantity);

// * ParseInt

// let elementWidth = "50.6px";
// const result = Number.parseInt(elementWidth); // Останавливается на первом НЕ-числе (от 0-9)
// console.log(result);

// * Записываем в него же полученное значение

// let elementWidth = "50px";
// elementWidth = Number.parseInt(elementWidth);
// console.log("Element Width: ", elementWidth);

// * ParseFloat

// let elementHeight = "200.74px";
// elementHeight = Number.parseFloat(elementHeight); // То же самое, но включает точку в поиск
// console.log(elementHeight);

// * toFixed

// const salary = 1300.486768;
// console.log(salary.toFixed()); // Отсекает после точки (но выдает, как строку)
// console.log(salary);

// let salary = 1300.486768;
// salary = salary.toFixed(2); // Заменяем на новое значение ((2) - кол-во симв после точки)
// salary = Number(salary); // Приобразовали в число
// console.log(salary);
// console.log(typeof salary);

// * Матрешки (упрощение --^)

// let salary = 1300.486768;
// salary = Number(salary.toFixed(2));
// console.log(salary);

// Матрешки (упрощение прямо в console --^)

// let salary = 1300.486768;
// console.log(Number(salary.toFixed(2)));

// * Number - Конструктор - приводим строки к числу

// let quantity = "30";
// console.log(Number(true)); // True приводится в приобразовании к 1
// console.log(Number(false)); // False приводится к 0
// console.log(Number("bugunichcosmhdcgsgd")); // NaN - не число
// console.log(Number(quantity)); // Приводит строку к числу
// console.log(Number(5 / 0)); // К сожалению в JS можно делить на 0

// * Math - Объект (полезный) - математические вычисления

// console.log(Math.PI); // Число Пи

// * Pow - возведение в степень

// const base = 2;
// const power = 5;
// const result = Math.pow(2, 5); // Возвели в степень
// console.log(result);

// M* ** - оператор экспонента (современный синтаксис)

// const base = 2;
// const power = 5;
// console.log(base ** power); // Другой способ возведения в степень

// sqrt - квадратный корень

// console.log(Math.sqrt(5)); // Кв. корень из 5

// * Просим пользователя ввести число и степень, возводим число в эту степень и выводим результат в консоль

// 1. Просим ввести число и сохраняем его в переменную
// let base = prompt("Давай число");
// base = Number(base);
// console.log(base);

// 2. Просим ввести степень и сохраняем ее в переменную
// let power = prompt("Дай степень");
// power = Number(power);
// console.log(power);

// 3. Возводим число в степень и выводим в консоль
// const result = base ** power;
// console.log(result);

// * Random и Round - генерим псевдослучайные числа

// console.log(Math.random()); // Выдает псевдослучайное число от 0 до 1
// Формула - Math.random() * (max - min) + min)
// Метод round - сокращает число вниз и вверх

// const max = 50;
// const min = 30;
// const result = Math.round(Math.random() * (max - min) + min); // Рандомное число в диапазоне 30-50
// console.log(result);

// * Сайт меняет цвет фона при каждом заходе

// const colors = ["tomato", "teal", "orange", "dippink"];
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;

// * length * количество символов в строке

// const message = "в этой строке 26 симвлов, ";
// console.log(message.length); // обращение к свойству (не вызов с пузатыми скобками)

// * - конкотенация строк

// console.log("qwe" + "asd" + " zxc"); // - сшивание строк

// const firstName = "Chelsy";
// const lastName = "Emerald";
// const fullName = firstName + " " + lastName; // - сшивание с пробелом - (" ")
// console.log(fullName);

/* Задание - вывести строку в формате:
 * "Гость x y поселятся в z номер q",
 * подставив вместо x y z q знечения переменных
 */

/*// Решение №1 - (Old School)

const firstName = "Chelsy";
const lastName = "Emerald";
const room = 716;
const type = "VIP";

const welcomeMsg =
  "Гость" +
  " " +
  firstName +
  " " +
  lastName +
  " " +
  "поселился в" +
  " " +
  type +
  " " +
  "номер" +
  " " +
  room;
console.log(welcomeMsg);*/

/*// Другой пример - подставляем внутрь строки переменные

const quantity = 5;
const orderMsg = `Вы заказываете ${quantity} холодильников.` // - косые ковычки `` - это шаблонная строка
console.log(orderMsg);*/

/*// Решение №2 - шаблонная строка с подставленными внутрь значениями

const firstName = "Chelsy";
const lastName = "Emerald";
const room = 716;
const type = "VIP";

const welcomeMsg = `Гость ${firstName} ${lastName} поселятся в ${type} номер ${room}`;
console.log(welcomeMsg); */

/*// * toLowerCase() - приводит к нижнему регистру

const brand = "Sansung";
const normalizedBrand = brand.toLowerCase(); // приводит к нижнему регистру
console.log(normalizedBrand); */

/*// - этот же пример, но иначе

let brand = prompt("Давай бренд");
brand = brand.toLowerCase();
console.log(brand); */

/*// * slice() - обращение к любому символу строки

let brand = "SamSUnG";
console.log(brand[4]); // строка индексируется - в [] вставляют индекс начиная с 0
console.log(brand.slice(3).toLowerCase()); // slice - метод отрезает по индекс включительно начиная с 1, и потом вызываем еще один метод toLowerCase

brand = brand[0] + brand.slice(1).toLowerCase(); // ченнинг - цепочка вызовов
console.log(brand); */

/*// * includes() - метод, поиск в строке

const blacklistedWord1 = "спам";
const blacklistedWord2 = "распродажа";

const string1 = "Привет я принц, это не спам, предлагаю миллион";
const string2 = "Самая большая РАСПРОДАЖА этой недели";
const string3 = "Рекламная кампания #fatlivesmatter";

console.log(string1.includes(blacklistedWord1)); // проверяем первую строку, возвращае true (слово - спам)
console.log(string1.includes(blacklistedWord2)); // в первой строке слово (спам) не найдено

console.log(string2.includes(blacklistedWord1)); // false
console.log(string2.includes(blacklistedWord2)); // false - потому что верхний регистр
console.log(string2.toLowerCase().includes(blacklistedWord2)); // - тогда применяем метод toLowerCase, а потом includes - и имеем true
const normalizedString2 = string2.toLowerCase(); // - или нормализуем строку2 и потом includes
console.log(normalizedString2.includes(blacklistedWord2)); // - в итоге true

console.log(string3.includes(blacklistedWord1)); // false
console.log(string3.includes(blacklistedWord2)); // false */

/*// * > < === - операторы сравнения и присвоения

console.log(15 > 10); // true
console.log(15 <= 3); // false
console.log(10 > 5); // > - оператор, 10 и 5 - операнды
console.log("10" > 5); // true, не смотря на то, что "10" - строка (происходит приобразование типа)
// - строка приводится к числу. Буквально --v. В операции сравнения (операнд справа и операнд слева приводится к числу)
console.log(Number("10")); // --^ оперант справа и оперант слева приводится к строке (численное приобразование)
console.log(true > 5); // false, так как в приобразовании true приводится к 1
// -
const isEqual = 5 == "5"; // true - тоже равны
console.log(isEqual); // = - оператор присвоения, а > < - операторы сравнения
// - правильно использовать оператор строгого равенства - ===
const isEqual = 1 === "1"; // - теперь они не равны (всегда использовать только ===)
console.log(isEqual); 
// -
const isEqual = 1 !== true; // ! - означает - НЕ равно
console.log(isEqual); */

// * || - оператор or
// console.log(0 || 0); // || - оператор (или (or)) - одно из значений должно быть true - тогда выдает true */
// console.log(false || 0 || 7 || null || 10); // || - запинается на первой правде и выдает это значение. Если не одно не выполняется, то возвращается последнее значение

/*// * ! - логичесное (не) - оператор отрицания (not)
console.log(4 !== 5); // - 4 не равно 5 - выдает true
console.log(!true); // - получается не true = false
console.log(!0); // - принцип - сначала приводится к булю, а потом происходит инверсия */

/*// * && (означае - и (and)) - логический оператор (возвращает true или false)
// Ложные значения: 0, NaN, null, undefined, пустая строка "" или " ", false. Все остальные приводятся к true

console.log(5 && 6 && 7 && "hello"); // - если все условия истина - то будет true и выдается последнее значение
console.log(false && "hello"); // логическое (и) - && запинается на лжи (false) - выдает false
console.log(0 && "hello"); // && пытается приобразовать 0 к булю (0 - false) - по этому выдает false */

/* Задание: Напиши скрипт который проверяет вхождение числа в отрезок обозначеный x1 и x2.
 *
 * - До x1
 * - После x2
 * - От x1 до x2
 * - До x1 или после x2
 * - -----x1--------x2--------
 */

// - Решение

/*const x1 = 10;
const x2 = 30;
const number = 50;

console.log(`Число ${number} попадает в отрезок до ${x1}? `, number < x1); // - выдает false
console.log(`Число ${number} попадает в отрезок после ${x2}? `, number > x2); // - выдает true

const res = number > x1 && number < x2; // используем логич оператор && - (и)
console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}? `, res); // - выдает false - должно быть оба true

const res2 = number < x1 || number > x2; // используем лог опер || - (или)
console.log(`Число ${number} меньше ${x1} или больше ${x2}? `, res2); // - выдает false - должно быть хотябы одно true */

/* Задание: Напиши скрипт который проверяет возмодность открыть чат с пользователем.
 * Для этого пользователь должен быть:
 * - Другом
 * - Онлайн
 * - без режима Не беспокоить
 
// Решение

const isFriend = true; // - можно
const isOnline = true; // - можно
const isDnd = false; // - нельзя (если будет тут true то оперетор && запинается)

const canOpenChat = isOnline && isFriend && !isDnd; // - он должен быть Другом и Онлайн и НЕ Dnd
console.log("Можно открыть чат? ", canOpenChat); */

/* Задение: Напишите скрипт проверки подписки пользователя при доступе к контенту
 * - Есть три типа подписки: free, pro, и vip.
 * - Получить доступ могут только прользователи pro и vip


const sub = "pro";

const canAccessContent = sub === "pro" || sub === "vip";
console.log("Есть доступ к контедту? ", canAccessContent); */

/*// * if else - операторы логического ветвления (не линейный код)

// - Пример

const salary = 1501;

if (salary <= 500) {
  // - if else if - используется когда много условий, но должно выполниться только одно
  console.log("Уровень 1");
} else if (salary > 500 && salary <= 1500) {
  console.log("Уровень 2");
} else if (salary > 500 || salary < 3000) {
  console.log("Уровень 3");
} else {
  // - в конце можно писать просто else без конечных условий (типа - ...всё что потом)
  console.log("Уровень 4");
} */

/*// * ? : - Тернарный оператор (только если два варианта выбора (или или))
// - используется исключительно для записи (по условию) значения в переменную
// --v - пример без тернарного оператора

// const balance = 1000;
// let message;

// if (balance >= 0) {
//   message = "Поозитивный баланс";
// } else {
//   message = "Негативный баланс";
// }

// console.log(message);

// Пример с тернарным оператором --v
// const message = условие ? выражение1 : выражение2 // - если условие приводится к true то 
// вычисляется выражение1 и возвращается на это место (в переменную), если false то выражение2

const balance = 1000;
const message = balance >= 0 ? "Позитивный баланс" : "Негативный баланс"; // - тернарный оператор использовать в простых случаях записи значений в переменную
console.log(message); 
const b = 10;
if (true) {
  const a = 5;
  console.log(a); // переменная (а) нутри {} вызывается только внутри скобок
}
console.log(b);
console.log(a); // - выдает - переменная (а) не обявлена
// - Переменные боъявленные через const или let подчиняются блочной области видимости - глобальной
// - скобки {} создают новую блочную область видимости, отличную от глобальной
// - работает по принципу матрешки - то что внутри не видно снаружи
// - В разных областях видимости могут быть переменные с одинаковыми именами */

// * switch - инструкция
// Пример без свитча --v

/* Задание: Напиши скрипт выбора стоимости отеля по кол-ву звезд.
 * 1 - 20$, 2- 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Если в переменной stars что-то кроме чисел 1-5, выведи строку "Такого кол-ва звезд нет"
 */

// const stars = 0;
// let price;

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log("Такого кол-ва звезд нет");
// }

// * switch - используется когда одна переменная сравнивается с разными значениями
// Свитч используется только когда есть строго равенство. Когда есть больше/меньше - использовать if else
// --v Пример со свитчем

// - в скобках () условие, а в скобках {} тело инструкции. В () ставится переменное значение
// - которое хотите сравнивать(stars), а тотом объявляем кейсы - case (случаи), потом имя переменной и значение с новой строки
// Каждый кейс должен заканчивваться оператором инструкции break - (прерывание) - прервет поиск
// Если не один из кейсов не выполнился - ставить default: и с новой строки console.log(). После этого break ставить не нужно

/*const stars = 0;
let price;

switch (stars) {
  case 1:
    price = 20;
    break;

  case 2:
    price = 30;
    break;

  case 3:
    price = 50;
    break;

  case 4:
    price = 70;
    break;

  case 5:
    price = 120;
    break;

  default:
    console.log("Такого кол-ва звезд нет");
}
console.log("$" + price); */

// Задание: Напиши скрипт выбора стоимости отеля по кол-ву звезд.
//  * 1,2 - 20$, 3,4 - 30$, 5 - 120$

// Решение без свитча

// const stars = 4;
// let price;

// if (stars === 1 || stars === 2) {
//   price = 20;
// } else if (stars === 3 || stars === 4) {
//   price = 30;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log("Такого кол-ва звезд нет");
// }

// console.log("$" + price);

// Решение со свитчем - (обёединение кейсов (группирование) по принципу логического оператора || (или))

// const stars = 3;
// let price;

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;

//   case 3:
//   case 4:
//     price = 30;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log("Такого кол-ва звезд нет");
// }
// console.log("$" + price);

/* Задание: Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции
 * - "Вы сможете забрать товар завтра с 12:00 в нашем офисе"
 * - "Курьер доставит заказ завтра с 9:00 до 18:00"
 * - "Посылка будет отправлена сегодня"
 * - "Вам перезвонит менеджер"
 */

//  Алгоритм

// 1. сделать переменную
// 2. сделать switch 1 2 3
// 3. в каждом кейсе записать в message строку
// 4. сделать лог message

// Решение

// const option = 5;
// let message = "";

// switch (option) {
//   case 1:
//     message = "Вы сможете забрать товар завтра с 12:00 в нашем офисе";
//     break;

//   case 2:
//     message = "Курьер доставит заказ завтра с 9:00 до 18:00";
//     break;

//   case 3:
//     message = "Посылка будет отправлена сегодня";
//     break;

//   case 4:
//     message = "Вам перезвонит менеджер";
//     break;

//   default:
//     // console.log("Вам перезвонит менеджер"); // --v или можно написать message
//     message = "Вам перезвонит менеджер";
// }

// console.log(message);

// * for - цикл - синхронная конструкция. Пока цикл счетает, код ниже него не выполняется

// Пример (i - произвольное название от слова итератор)

// for (инициализация; условие; пост - выражение) {
//   // тело цикла
// }

// - условие проверяется перед каждой новой итерацией, если
// - если приводится это выражение к false - цикл прекращается и управление передается дальше за цикл
// - <= - означает - больше и присвоение, += - плюс один и присвоение
// - i += 3 тоже самое что i = i + 3
// - чтобы повесить вкладку браузера - в услувии должно быть все время true

// for (let i = 45; i <= 50; i += 1) {
//   console.log(i);
// }
// console.log("тело цикла");

// - Посчитать вниз --v

// for (let i = 10; i >= 0; i -= 1) {
//   console.log(i);
// }
// console.log("тело цикла");

// * Pre-increment и Post-increment - это ГАДОСТь - НЕ использовать

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// i++ - увеличивает на 1 (тольуо на 1), но после выражения присваивания

// Пример

// let a = 10;
// const b = a++;

// console.log(a); // - 11
// console.log(b); // - 10

// ++i - увеличивает на 1, но увеличение происходит до выражения, а потом ее уваличение записывается в переменную

// let a = 10;
// const b = ++a;

// console.log(a); // - 11
// console.log(b); // - 11

// Задание:
// Напиши скрипт подсчитывающия общую сумму зарплат работников
// Кол-во работников хранится в переменной employees.
// Зарплата каждого работника это случайное число от 500 до 1000
// Записать сумму в переменную totalSalary и вывести в консоль

// Алгоритм

// // 1. сделать вары
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 3;
// let totalSalary = 0;

// // 2. перебрать работников в цикле
// for (let i = 0; i < employees; i += 1) {
//   // 3. сгенерить случайную зп
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary
//   );
//   console.log(`Зп работника ${i} - ${salary}`);
//   // 4. прибавить к тоталу
//   totalSalary += salary;
// }
// // 5. лог
// console.log("totalSalary: ", totalSalary);

// Задание:
// Напиши скрипт который подсчитывает сумму всех чисел,
// которые входят в диапаазон чисел в переменных от min до max.
// Например, если min=0 и max=5, то диапазон 0-5, и в нем два четных числа - 2 и 4, их сумма 6.

// Алгоритм

// // 1. вары
// const min = 6;
// const max = 13;
// let total = 0;

// // 2. for от min до max с шагом в 1
// for (let i = min; i <= max; i += 1) {
//   // console.log(i);
//   // 3. Проверяем остаток от деления
//   if (i % 2 === 0) {
//     // проверяем по приципу остатка деления (0 - четное, 1 - не четное)
//     console.log("четное: ", i);
//     // 4. пишем в сумму
//     total += i;
//   }
// }
// console.log("total:", total);

// --v другой способ решения - усовершенствованый алгоритм

// // 1. вары
// const min = 6;
// const max = 13;
// let total = 0;

// // 2. for от min до max с шагом в 1
// for (let i = min; i <= max; i += 1) {
//   // 3. Проверяем остаток от деления
//   if (i % 2 !== 0) {
//     // логика от обратного
//     console.log("не четное:", i);
//     continue; // - continue - директива - говорит - иди не следующую итерацию
//     // это правильная логика - сначала проверяем плохой кейс (уходим - continue) - если кейс
//     // плохой не выполнился - идет выполнение следующего кода
//   }
//   // 4. пишем в сумму
//   console.log("четное:", i);
//   total += i;
// }
// console.log("total:", total);

/* Задание:
 * Напиши скрипт обработки покупки в магазине
 * - Баланс пользователя хранится в переменной balance
 * - Сумма покупки хранится в переменной payment
 *
 * - Перед проверкой вывести сообщение:
 * "Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных стредств на счету"
 *
 * - Если сумма покупки не превышает баланс:
 *   - Вычесть из баланса сумму покупки
 *   - Вывести сообщение "На счету осталось [число] кредитов"
 * - Если сумма покупки превышает баланс:
 *   - Вывести сообщение "На счету недостаточно средств для проведения операции!"
 * - В конце вывести сообщение "Операция завершина"
 */

// Решение

// 1. вары
// let balance = 10000;
// const payment = 2000;

// console.log(
//   `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных стредств на счету`
// );

// if (balance >= payment) {
//   console.log("ok");

//   balance -= payment;
//   console.log("Все хорошо, снимаем деньги... Спасибо за покупку");
//   console.log(`На счету осталось ${balance} кредитов`);
// } else {
//   console.log("На счету недостаточно средств для проведения операции!");
// }
// console.log("Операция завершина");

/* Задание:
 * Напиши скрипт подсчета суммы покупки со скидкой в зависимости
 * от потраченной суммы за все время (партнерская программа)
 *
 * - Общая сумма потраченного хранится в переменной totalSpent
 * - Сумма текущего платежа хранится в переменной payment
 * - Скидка хранится в переменной discount
 *
 * - Если потрачено от [100 до 1000) - бронзовый парнер, скидка 2%
 * - Если потрачено от [1000 до 5000) - серебряный парнер, скидка 5%
 * - Если потрачено больше [5000 - золотой парнер, скидка 10%
 * - Если потрачено менее 100) - не партнер, скидка 0%
 *
 * - В результате вывести сообщение
 * "Оформляем заказ на сумму [сумма] со скидкой [скидка]%" */

// Процент в математике обозначается так - 100% - 1, 20% - 0.2, 5% - 0.05
// Когда стоят такие скобки [100 - 200) - это означает [ - включает, ) - не включает

//  Решение

// const totalSpent = 90;
// let payment = 500;
// let discount = 0;
// if (totalSpent < 100) {
//   console.log("не партнер, скидка 0%");
// } else if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log("бронзовый парнер, скидка 2%");
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   console.log("серебряный парнер, скидка 5%");
//   discount = 0.05;
// } else {
//   console.log("золотой парнер, скидка 10%");
//   discount = 0.1;
// }
// console.log(
//   `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`
// );

// Решение 2
// Оба варианта правильные

// const totalSpent = 90;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log("бронзовый парнер, скидка 2%");
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   console.log("серебряный парнер, скидка 5%");
//   discount = 0.05;
// } else if (totalSpent >= 5000) {
//   console.log("золотой парнер, скидка 10%");
//   discount = 0.1;
// } else {
//   console.log("не партнер, скидка 0%");
// }
// console.log(
//   `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`
// );

// Решение 3 (с дополнением)

// let totalSpent = 5000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log("бронзовый парнер, скидка 2%");
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   console.log("серебряный парнер, скидка 5%");
//   discount = 0.05;
// } else if (totalSpent >= 5000) {
//   console.log("золотой парнер, скидка 10%");
//   discount = 0.1;
// } else {
//   console.log("не партнер, скидка 0%");
// }

// payment -= payment * discount; // - вычисление суммы покупки со скидкой

// console.log(
//   `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`
// );

// totalSpent += payment; // - добавляем сумму покупки к общей сумме

// console.log(`Общая сумма потраченного в магазине: ${totalSpent}`);

// * querySelector - получаем ссылку на кнопку из разметки HTML
// - document - объект который хранит ссылку на весь HTML документ
// - querySelector() - метод. В () передаем аргумент - CSS селектор нашего элемента

const btnAdd = document.querySelector("button[data-add]"); // получение доступа к элементу c селектором атрибута data-add
const resetBtn = document.querySelector("button[data-reset]");
console.log(btnAdd); // - выводит элемент
const valueInput = document.querySelector("input[data-value]");
const outputEl = document.querySelector(".js-output span"); // - вывод суммы в HTML - в спан

// * .textContent
console.log(btnAdd.textContent); // - выводит текстовый контент элемента
btnAdd.textContent = "qweqweqwe"; // - изменяем текст. конт. элемента с помощью JS

// * .addEventListener - метод - слушатель события
// - в () передается два аргумента. Первый - тип события (как строка) - "click", а второе - функция.
// - в {} функции пишем код, который будет выполняться при клике - получаем "click hehehehe"

let total = 0;

btnAdd.addEventListener("click", function () {
  console.log("click hehehehe");

  // - приобразовываем полученное значение в число и записываем в переменную
  const value = Number(valueInput.value); // .value - значение - получаем значение во время клика
  console.log(value); // - выводит полученное число

  total += value; // - сумируем кажное полученное число
  outputEl.textContent = total;
  valueInput.value = ""; // - очищаем значение в инпуте после каждого клика
});

resetBtn.addEventListener("click", function () {
  total = 0;
  outputEl.textContent = total;
});
