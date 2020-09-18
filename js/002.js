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

// * Задача
// ** Поиск самого маленького числа в массиве

/*
 * Напишите серипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются)
 */

// // Решение с for...of

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0]; // вытянули первую монетке и обозвали ее самой маленькой (предположили)

// for (const number of numbers) {
//   // перебрали мешочек с монетками
//   if (number < smallestNumber) {
//     // сравнили - текущая монетка меньше чем та, что у нас есть?
//     smallestNumber = number; // если да, то перезаписали текущее значение
//   }
// }

// console.log("smallestNumber: ", smallestNumber); // самое маленькое число 7

// * Задача
// **

/*
 * Напишите скрипт, который объединяет все элементы мвссива в одно строковое значение.
 * Элементов может быть произвольное кол-во
 * Пусть элементы массива в строке будут разделены запятой
 * - Сначала через for
 * - Потом через join()
 */

// //  Решение с for..of

// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
// let string = "";

// for (const friend of friends) {
//   string += friend + ",";
// }
// string = string.slice(0, string.length - 1); // отрезаем последнюю запятую по методу slice, где в скобках (0 - это начальное значение, а string.lebgth - 1 - это означает отрезать 1 символ от длины строки с конца)

// console.log(string); // Должно получиться "Mango,Poly,Kiwi,Ajax"

// // Решение с join

// // Join - метод массива, вызвается на массиве и сшивает каждый эллемент в одну строку, а в скобках ("") передается разделитель

// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];

// const string = friends.join(", "); // разделитель всегда строка
// console.log(string); // Должно получиться "Mango, Poly, Kiwi, Ajax"

// * Задача
// ** Изменение регистра

/*
 * Напиши скрипт который изменяет регистр каждого символа в строке на противоположный
 * Например, если строка "JavaScript", то на выходе должно быть строка "jAVAsCRIPT"
 */

// // Решение c .split() Old School
// // .split() - метод строки который разбивает строку по разделителю

// const string = "JavaScript";
// const letters = string.split(""); // разбиваем массив посимвольно
// let invertedString = ""; // указать "", иначе будет undefinde

// console.log(letters);

// for (const letter of letters) {
//   console.log(letter); // перебрали масссив побуквенно

//   // Используем if else

//   //   if (letter === letter.toLowerCase()) {
//   //     // сравниваем каждую букву, определяем регистр
//   //     console.log("Эта буква в нижнем регистре!!! - ", letter);

//   //     invertedString += letter.toUpperCase();
//   //   } else {
//   //     console.log("Эта буква в верхнем регистре!!! - ", letter);
//   //     invertedString += letter.toLowerCase();
//   //   }

//   // Используем тернарный оператор

//   const isEqual = letter === letter.toLowerCase(); // isEqual (равны ли эти два значения?) - истользуем тернарный оператор
//   invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log("invertedString:", invertedString);

// * Задача
// ** Делаем из строки слаг (slug)

/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок состоит только из букв и пробелов
 *
 * - Нормализуем строку
 * - Разбиваем по словам
 * - Сшиваем в строку и разделяем
 */

//  Должно получиться top-10-benefits-of-React-framework

// // Решение Old School

// const title = "Top 10 benefits of React framework";
// const normalizedTitle = title.toLowerCase(); // приводим к нижнему регистру

// const words = normalizedTitle.split(" "); // разбили в массив по словам при помощи .split(" ")
// console.log(normalizedTitle);
// console.log(words);

// const slug = words.join("-"); // сшили в строку с раздиление тире при помощи .join("-")
// console.log(slug);

// // Решение с chaning (цепочки вызовов) - (абстракции)
// // Исключаем промежуточные переменные

// const title = "Top 10 benefits of React framework";

// const slug = title.toLowerCase().split(" ").join("-"); // вызываем каждый следующий метод на результате предидущего (абстракции)
// // - вызовы одут последовательно - это синхронный код
// console.log(slug);

// * Задача
// ** Два массива
// *** Concat

/*
 * Напиши скрипт который считает сумму элементов двух массивом
 */

// // Решение Old School
// // Перебираем два массива по очереди (самый плохой вариант)

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// for (let i = 0; i < array1.length; i += 1) {
//   total += array1[i];
//   console.log(total);
// }

// for (let i = 0; i < array2.length; i += 1) {
//   total += array2[i];
//   console.log(array2[i]);
// }

// console.log("Total: ", total);

// // Решение с .concat()
// // Из двух массивов делаем один

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2); // сшиваем два массива методом .concat()
// // в concat можно передавать любое кол-во массивов .concat(array2, [1, 2, 3], [90, 70, 45])
// for (const number of numbers) {
//   total += number;
// }

// console.log(total);

// * Задача
// *** Splice (деструктивный метод)

/*
 * Работаем с коллекцией карточек в Trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

// const cards = [
//   "Карточка-1",
//   "Карточка-2",
//   "Карточка-3",
//   "Карточка-4",
//   "Карточка-5",
// ];

// console.table(cards);

/*
 * Удаление [по индексу], метод indeOf()
 */

// // Решение с splice()

// const cardToRemove = "Карточка-3";
// const index = cards.indexOf(cardToRemove); // метод indexOf позволяет найти индекс элемента в массиве. Если элемента нету он вернет -1
// console.log(index); // выводим индекс элемента
// cards.splice(index, 1); // метод splice() удаляет элемент массива. В скобках (индекс с какого удалять, и кол-во элементов)

// console.table(cards);

/*
 * Добавление карточки [по индексу]
 */

// //  Решение с splice

// const cardToInsert = "Карточка-6";

// cards.splice(4, 0, cardToInsert); // расшифровка в скобках (4 - в четвертый индекс, 0 - ничего не удаляй, а поставь cardToInsert)

// console.table(cards);

/*
 * Добавление произвольных элементов [по индексу]
 */

// //  Решение с splice

// const cardToInsert = "Карточка-6";

// cards.splice(1, 0, 5, 10, 20); // расшифровка в скобках (1 - в первый индекс, 0 - ничего не удаляй, но поставь три элемента: 5, 10, 20)
// cards.splice(7, 0, 6); // добавляем в элемент в другое место массива

// console.table(cards);

/*
 * Обновление [по индексу]
 */

// //  Решение с splice

// const cardToUpdate = "Карточка-4";
// const index = cards.indexOf(cardToUpdate); // находим индекс карточки-4
// console.log(index);

// cards.splice(index, 1, "eee"); // удаляем карточку и заменяем на "еее"
// console.table(cards);

/*
 * function
 * обзывается глаголом
 * Функции выполняются так как они стоят в коде. Это называется синхронный код
 *
 * вызывается функция ниже по коду, сначала обявляется, а потом вызывается
 *
 * вызвать имя_функции и () - add();
 * const add = function (a, b) - a, b - параметры (объявляются при создании функции)
 *
 * add(5, 3) - 5, 3 - аргумены - передаем при вызове функции и присваеваются в параметры
 *
 * Одна функция делает только одну вещь
 *
 */

/*

// Основы функций

const add = function (x, y) {
  // x, y - параметры функции
  console.log(x);
  console.log(y);
  console.log("Выполняется тело функции");

  return x + y; // функция возвращает результат сложения x + y
};

const r1 = add(5, 3); // в переменную r записывается результат вызова функции add
console.log("r1: ", r1);

const r2 = add(10, 15);
console.log("r2: ", r2);

*/
// /*

/*
 * Return
 * Если не поставить return, функция вернет на свое место undefined
 * Когда интерпретатор встречает return, он прекращает выполнение функции
 * Похоже на break, только break в цикле, а return останавливает функцию
 *
 */

/*

const fn = function (value) {
  console.log(1);
  console.log(2);

  if (value < 50) {
    return "Меньше чем 50"; // если значение < то return возвращает "Меньше чем 50" и сдедующая строка в коде не выполница
  }

  return "Больше чем 50";
};

console.log("Результат", fn(10));
console.log("Результат", fn(1080));

*/

/*
 * Стек вызовов
 * Stack trace и поиск ошибок
 *
 */

/*

const fnA = function () {
  console.log("Выполняется функция А");

  fnB();
};

const fnB = function () {
  console.log("Выполняется функция B");

  fnC();
};

const fnC = function () {
  console.log("Выполняется функция C");
};

// console.log("Лог перед вызовом функции А");
fnA();
// console.log("Лог после вызова функции А");

// console.log("Лог перед вызовом функции B");
// fnB();
// console.log("Лог после вызова функции B");

// console.log("Лог перед вызовом функции C");
// fnC();
// console.log("Лог после вызова функции C");

*/

/*
 * Поиск ошибок
 * Ошибка всегда в самой верхней функции на стеке
 */

/*

const fnA = function () {
  console.log("Выполняется функция А");

  fnB();
};

const fnB = function () {
  console.log("Выполняется функция B");

  fnC();
};

const fnC = function () {
  console.log("Выполняется функция C");

  console.log(value); // находит это value которое не объявдено
};

// console.log("Лог перед вызовом функции А");
fnA();
// console.log("Лог после вызова функции А");

// console.log("Лог перед вызовом функции B");
// fnB();
// console.log("Лог после вызова функции B");

// console.log("Лог перед вызовом функции C");
// fnC();
// console.log("Лог после вызова функции C");

*/

/*
 * Задача
 *
 * Напиши функцию calvulatedTotalPrice(item)
 * которая принимает массив цен (чисел) и возвращает их сумму
 *
 * Делаем код (функцию) который можно переиспользовать
 *
 */

/*

// const cart = [54, 28, 105, 78, 92, 17, 120, 12, 25, 98];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log("Total: ", total);

*/
/*

const calculateTotalPrice = function (items) {
  console.log("items инутри функции: ", items); // выводит аргементы переданные дри вызове функции

  let total = 0; // локальная переменная для хранения значения до возврата

  for (const item of items) {
    total += item;
  }

  return total; // возвращает значение во внешний код и выходит
};

const r1 = calculateTotalPrice([1, 2, 3]);
const r2 = calculateTotalPrice([5, 10, 15, 20]);
const r3 = calculateTotalPrice([100, 200, 300]);

console.log(`Общая сумма покупок: ${r1}`); // 6
console.log(`Общая сумма покупок: ${r2}`); // 50
console.log(`Общая сумма покупок: ${r3}`); // 600

*/

/*
 * Напиши функцию logItems(items) для перебора и логирования массива
 * Делаем функцию без возврата, просто не указываем return
 *
 */

/*

const logItems = function (items) {
  for (const item of items) {
    console.log(item);
  }
};

logItems(["Mango", "Kiwi", "Poly", "Ajax"]);
logItems([1, 2, 3, 4, 5]);
logItems(["клавиатура", "наушники", "часы"]);

*/

/*
 * Наптши функцию для поиска логина
 * - Если логина нет, вывести сообщение "Пользователь [логин] ненайден"
 * - Если нашли логин, вывести сообщение, "Пользователь [логин] найден"
 */

/*

const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];

// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден`
//   : `Пользователь ${loginToFind} не найден`;

// console.log(message);

const findLogin = function (allLogins, loginToFind) {
  for (const login of allLogins) {
    if (login === loginToFind) {
      return `Пользователь ${loginToFind} найден`;
    }
  }

  return `Пользователь ${loginToFind} не найден`;
};

console.log(findLogin(logins, "avocod3r"));
console.log(findLogin(logins, "k1widab3st"));
console.log(findLogin(logins, "jam4l"));
console.log(findLogin(logins, "poly1scute"));

*/

/*
 * Тоже самое но с тернарным оператором
 */

/*

const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];

// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден`
//   : `Пользователь ${loginToFind} не найден`;

// console.log(message);

const findLogin = function (allLogins, loginToFind) {
  return allLogins.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден`
    : `Пользователь ${loginToFind} не найден`;
};

console.log(findLogin(logins, "avocod3r"));
console.log(findLogin(logins, "k1widab3st"));
console.log(findLogin(logins, "jam4l"));
console.log(findLogin(logins, "poly1scute"));

*/

/*
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве
 * при условии что числа уникальные (не повторяются)
 *
 */

/*

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0];

const findSmallesNumber = function (numbers) {
  let smallestNumber = numbers[0];

  for (const number of numbers) {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }

  return smallestNumber;
};

console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4

*/

/*
 * Напиши функцию changeCase(string) которая заменяет регистр каждого символа в строке на противоположный
 * Например если строка "JavaScript"
 *
 */

/*

const changeCase = function (string) {
  const letters = string.split(""); // разбили letters побуквенно
  let invertedString = "";

  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();

    invertedString += isInLowerCase
      ? letter.toUpperCase()
      : letter.toLowerCase();
  }

  return invertedString;
};

console.log(changeCase("qweRTY"));
console.log(changeCase("mAnGo"));
console.log(changeCase("AjAx"));

*/

/*
 * Напишите функцию slugify(string) которая получает строку и возвращает URL-slag
 * Строка состоит только из букв и пробелов
 *
 */

/*

// const title = "Top 10 benefits of React framework";

// const slug1 = title.toLowerCase().split(" ").join("-");

// console.log(slug1);

const slugify = function (string) {
  return string.toLowerCase().split(" ").join("-"); // весь код функции в одной строке - абстракция

  // const normalizedString = string.toLowerCase();
  // // console.log(normalizedString); // новмализированная строка - все в нижний регистр

  // const words = normalizedString.split(" ");
  // // console.log(words); // не сшитый массив слов

  // const slug = words.join("-");
  // // console.log(slug); // готовый слаг - то что нужго вернуть

  // return slug;
};

console.log(slugify("Top 10 benefits of React framework"));
console.log(slugify("Azure Static Web Apps are Awesome"));

*/

/*
 * Псевдомассив arguments и Array.from и ...
 *
 * * arguments - классический Old School
 * * arguments - встроенная локальная переменная в функциях (кроме стрелочных)
 * * arguments - это псевдомассив, у него нету всех метадов массива
 */

/*

const fn = function () {
  console.log(arguments);

  const args = Array.from(arguments);

  console.log(args);

  // for (const arg of arguments) {
  //   console.log(arg);
  // }
};

fn(1, 2, 3);
fn(1, 2, 3, 4, 5);
fn(1, 2, 3, 4, 5, 6, 7);

*/
// /*

/* -//- Современный метод
 ** rest - специальная операция - остаток
 ** rest - в скобках функции ставим (...имя функции)
 ** в параметр (...имя) плпадают все элементы массива
 */

/*

const fn = function (...args) {
  console.log(args); // это настоящий массив из аргументов которые к нам пришли
};

fn(1, 2, 3);
fn(1, 2, 3, 4, 5);
fn(1, 2, 3, 4, 5, 6, 7);

*/
/*

// - Вариант, когда нужно перед рестом обявить произвольное кол-во других параметров
// - Логируем параметры поотдельности - ${a} ${b} ${c} и args

const fn = function (a, b, c, ...args) {
  console.log(`${a} ${b} ${c}`);
  console.log(args);
};

fn("hello", 1, 2, 3);
fn("aloha", 1, 2, 3, 4, 5);
fn("hi", 1, 2, 3, 4, 5, 6, 7);

*/

/*
 * Напиши функцию add для сложения произвольного количества аргументов (числа)
 * - Операция ... (rest)
 * Функция которая принимает произволльное кол-во чисел как аргументов
 и возвращает их общую сумму
 */

/*

const add = function (...args) {
  console.log(args);

  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
};

console.log(add(1, 2, 3));
console.log(add(1, 2, 4, 5, 6));

*/

/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное кол-во других аргументов которые будут числами
 * - Функцция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго, для которых есть аналог в оригинальном массиве
 */

/*

const filterNumbers = function (array, ...args) {
  console.log("array: ", array);
  console.log("args: ", args);
  const uniqueElements = [];

  for (const element of array) {
    console.log(args.includes(element)); // проверяем на наличие element в args

    if (args.includes(element)) {
      uniqueElements.push(element); // push - пушим в новый массмв uniqueElements
      console.log(`${element} есть везде!`);
    }
  }

  return uniqueElements;
};

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]

*/
