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
