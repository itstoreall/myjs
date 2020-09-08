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

// Сайт меняет цвет фона при каждом заходе

// const colors = ["tomato", "teal", "orange", "dippink"];
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;
