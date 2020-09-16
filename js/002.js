// // * Array
// // ** массивы

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.table(friends); // Выводить масивы при помощи .table

// // - индекс последнего элемента

// const lastIndex = friends.length - 1; // 3
// console.log(lastIndex);

// // - как обратиться с элементу масива

// console.log(friends[2]); // Poly (указать имя переменной и имя масива)
// // - также
// console.log(["Mango", "Kiwi", "Poly", "Ajax"][3]); // Ajax (обращение прямо на литерале)

// // - как записать в масив

// friends[1] = "qweqweqwe"; // записывает не в переменную, а в ячейку памяти (изменение сложного типа)
// console.log(friends);

// ** Примитивы и сложные типы

// - передача по значению

// let a = 10;
// let b = a;

// console.log(a); // 10
// console.log(b); // 10

// a = 20; // изменяем значение переменной

// console.log(a); // 20
// console.log(b); // 10 - осталось неизменным

// // _ передача по ссылка
// // при создании масива создается ячейка в памяти
// // также и при создании переменной a создается вторая ячейка памяти
// // переменная является указателем на масив, но прямо не связана с ним
// // при создании переменной b создается еще одна ячейка в памяти
// // далее переменная b копируе указатель (ссылку) на масив у переменной a
// // теперь в переменной а и переменной b лежит одно и то же значение

// const a = [1, 2, 3];
// const b = a;

// console.log("a", a);
// console.log("b", b);

// a[0] = 500;

// console.log(a); // при повторном логе и там и там 500
// console.log(b); // 500

// console.log(a === b); // поэтому a = b

// console.log([1, 2, 3] === [1, 2, 3]); // false - потому что это разные ячейки в памяти, разные ссылки

// // ** Переборы (итерация) массива
// // Использовать for когда нужно получить доступ к индексу (элементу масива)

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.table(friends);
// const lastIndex = friends.length - 1;

// for (let i = 0; i <= lastIndex; i += 1) {
//   // перебрали все элементы в цикле
//   console.log(i);
//   console.log(friends[i]); // friends[i] - это обращение к каждому элементу масива на итерации

//   friends[i] += "-1"; // конкатенация новых строк со строками масива
//   friends[i] += `-${i}`; // такое выражение добавляет к элементу порядковый номер (начиная с 0)
// }

// console.table(friends);

// // _ for of - как использовать
// // for(const variable of iterable)
// // for of отличается от for тем, что fo of менее декларативный, в нем меньше синтаксиса
// // Использовать в случае, когде НЕ нужен индекс или элемент масива

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];

// for (const friend of friends) {
//   console.log(friend);
// }

// * Задачи

// ** 1. Payment
// - Посчитать общую сумму покупок в корзине

// // Алгоритм №1

// const cart = [54, 28, 105, 70, 92, 17, 120];

// // 2. сделать переменую total до цикла
// let total = 0;

// // 1. перебрать масив
// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]); // перебрали и получили доступ к элементам

//   // 3. каждый элемент приплюсовать к total
//   total += cart[i];
// }
// console.log("Total: ", total); // вывели общую сумму

// // Алгоритм №2

// // Использовать for of когда НЕ нужен доступ к счетчику и НЕ нужно перезаписать элемент масива

// const cart = [54, 28, 105, 70, 92, 17, 120];

// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log("Total: ", total); // вывели общую сумму

// // ** Tax
// // - Добавить по 10% налога к каждому

// const cart = [54, 28, 105, 70, 92, 17, 120];

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1); // прибавляем 10% налога при помощи умножения с округлением (Math.round() - исключительно для округления)
// }

// console.log(cart);

// // ** Numbers
// // - Напиши скрипт который подсчитает сумму всех четных чисел в массиве

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// // Алгоритм

// // 1. переменная total

// // 2. перебрать масив
// for (let i = 0; i < numbers.length; i += 1) {
//   const number = numbers[i];
//   console.log(number); // перебрали и получили доступ к каждому числу

//   // 3. на каждой итерации проверить элемент на четность
//   if (number % 2 === 0) {
//     console.log("Четное!!!!");

//     // 4. если четный плюсуем к total
//     total += number;
//   }
// }

// console.log("Total: ", total);

// // - -//- с for of

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (const number of numbers) {
//   console.log(number); // выводим весь array

//   if (number % 2 === 0) {
//     // подсчет четных чисел. Для НЕ четных (% 2 !== 0)
//     console.log(`${number} - четное!!!`); // Выводится (8 - четное!!!)
//     total += number;
//   }
// }

// console.log("Total: ", total);

// // - -//- с continue
// // continue - код ниже в цикле не выполняется и переходит на следующую итерацию
// // решаем по логике от обратного
// // крутой скрипт

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     console.log("Эту итерацию нужно пропустить", number);
//     continue;
//   }

//   console.log(`${number} - четное!!!`);
//   total += number;
// }

// console.log("Total: ", total);

// * Задача

// ** Поиск логинов
// Напиши скрипт поиска логина
// - Если логина нет, вывести "Пользователь [логин] не найден"
// - Если нали логин, вывести "Пользователь [логин] найден"

// - Снвачала через for
// - Потом через for...of
// - Логика break
// - Метод includes() с тернарным оператором

// // Решение с for

// const logins = ["n4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
// const loginToFind = "poly1scute";
// let message = `Пользователь ${loginToFind} не найден`; // изначально устанавливаем значение (пользователь НЕ найден) - логика от обратного

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i]; // в переменную login сохранил значение logins[i]
//   console.log(login); // получил доступ к саждому
//   console.log(`${login} = ${loginToFind}: `, login === loginToFind); // сравниваем внутри цикла и выводим результат до момента нахождения

//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден`;
//     break; // обязательно прирвать в случае успеха, иначе for пойдет до конца и выдаст последний результат
//   }
// }

// console.log(message);

// // Решение c for...of

// const logins = ["n4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
// const loginToFind = "poly1scute";
// let message = `Пользователь ${loginToFind} не найден`; // изначально устанавливаем значение (пользователь НЕ найден) - логика от обратного

// for (const login of logins) {
//   console.log(login); // получил доступ к саждому
//   console.log(`${login} = ${loginToFind}: `, login === loginToFind); // сравниваем внутри цикла и выводим результат до момента нахождения

//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден`;
//     break; // обязательно прирвать в случае успеха, иначе for пойдет до конца и выдаст последний результат
//   }
// }

// console.log(message);

// // Решение с includes
// // includes - (абстракция) - метод масивов который скрывает под капотом передор, проверку на вхождение и на место вызова - logins.includes(loginToFind) возвращает true или false
// // Декларативный код
// // использовать только если нужно просто узнать есть значение в массиве или нет

// const logins = ["n4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
// const loginToFind = "poly1scute";
// // let message = `Пользователь ${loginToFind} не найден`; // изначально устанавливаем значение (пользователь НЕ найден) - логика от обратного
// // const a = 15 > 10 ? "ага" : "нет";
// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден`
//   : `Пользователь ${loginToFind} не найден`;
// console.log(message); // true
