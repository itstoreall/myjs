// const age = 10;
// const totalPrice = 200.74;
// const userName = "Chelsy";
// const message = "Добро пожаловать";
// const isOpen = true;
// const shouldConfirm = false;

// const type = typeof "bububu";
// console.log(message, age, type);

// ==========

// Alert

// console.log("До");
// alert("iggigihih");
// console.log("После");

// Confirm

// const message = "Подписка";
// const shouldRenew = confirm("message");
// console.log(shouldRenew);

// Prompt

// const quantity = prompt("Введите кол-во");
// console.log(quantity);
// console.log(typeof quantity);

// let quantity = prompt("Введите кол-во"); // Возвращает только строку
// quantity = Number(quantity); // Выражение присваиваия числа
// console.log(quantity);
// console.log(typeof quantity);

// ParseInt

// let elementWidth = "50.6px";
// const result = Number.parseInt(elementWidth); // Останавливается на первом НЕ-числе (от 0-9)
// console.log(result);

// Записываем в него же полученное значение

// let elementWidth = "50px";
// elementWidth = Number.parseInt(elementWidth);
// console.log("Element Width: ", elementWidth);

// ParseFloat

// let elementHeight = "200.74px";
// elementHeight = Number.parseFloat(elementHeight); // То же самое, но включает точку в поиск
// console.log(elementHeight);

// toFixed

// const salary = 1300.486768;
// console.log(salary.toFixed()); // Отсекает после точки (но выдает, как строку)
// console.log(salary);

// let salary = 1300.486768;
// salary = salary.toFixed(2); // Заменяем на новое значение ((2) - кол-во симв после точки)
// salary = Number(salary); // Приобразовали в число
// console.log(salary);
// console.log(typeof salary);

// Матрешки (упрощение --^)

// let salary = 1300.486768;
// salary = Number(salary.toFixed(2));
// console.log(salary);

// Матрешки (упрощение прямо в console --^)

// let salary = 1300.486768;
// console.log(Number(salary.toFixed(2)));
