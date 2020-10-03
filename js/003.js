/*
 * Объекты
 * Это структура данных, позволяет хранить в одной переменной описательные характеристики одной сущности
 * Литерал объекта - {}
 */

/*

const hotel = {}; // {} - Литерал объекта

console.log({}); // {} - Литерал объекта

const hotel = { name: "Sunset resort" }; // { name: "Sunset resort" } - свойство, name: - ключ или имя свойства (ключ - это всегда строка), "Sunset resort" - значение

const hotel = { name: "Sunset resort", stars: 5 }; // через запятую можно добавлять другие свойства

*/
/*

// * Доступ к свойствам объекта

const hotel = {
  name: "Sunset resort",
  stars: 5,
  capasity: 200,
};

console.log(hotel);

- Способ 1.

console.log(hotel.name, hotel.stars, hotel.capasity); // посли точки пишем имя значения, выв Sunset resort 5 200

*/
/*

// - Способ 2.

const hotel = {
  name: "Sunset resort",
  stars: 5,
  capasity: 200,
};

const key = "stars";

console.log(hotel[key]); // ставим [] и в скобках имя переменной

*/
/*

// - Перезаписать свойство

const hotel = {
  name: "Sunset resort",
  stars: 5,
  capasity: 200,
};

hotel.stars = 3; // после точки пишем имя свойства = 3
console.log(hotel); // выв {name: "Sunset resort", stars: 3, capasity: 200}

*/
/*

// - Добавить свойство заранее

const hotel = {
  name: "Sunset resort",
  stars: 5,
  capasity: 200,
};

hotel.guests = [];
console.log(hotel); // в объете создастся пустой масив. Выв {name: "Sunset resort", stars: 5, capasity: 200, guests: Array(0)}

*/

/*
 * Ссылочны тип {} === {}
 *
 * Объект как и массив копируется по ссылк (передает указатель на ячейку памяти)
 *
 */

/*

const a = { x: 1, y: 2 };
const b = a;

console.log(b === a); // выв true

*/

/*
 * Секрет
 *
 * В JS нет массивов - и массив и функция это объеты
 *
 */

/*

// Массив это подвид объекта

const arr = ["a", "b", "c"];

console.log(arr); // выы (3) ["a", "b", "c"]

arr.hello = ";)";

console.log(arr); // выв (3) ["a", "b", "c", hello: ";)"]

*/
/*

// Тоже самое с функцией

const fn = function () {}; // объявляем функцию

fn.hello = "xD";

console.log(fn.hello); // выв xD

*/

/*
 * Методы обекта и this при обращении к свойствам в методах
 *
 * Объкты хранят не только данные, но и методы работы с этими данными
 * Чтобы обратиться к свойству объекта внутри метода объекта используем this.имя_свойства
 * This - это ссылка на весь обект hotel
 *
 */

/*

// * This

// - Синтаксис Old School

const hotel = {
  name: "Sunset resort",
  stars: 5,
  capasity: 200,
  updateName: function (newName) {
    this.name = newName; // называется - контекст вызова c. Внутри метода объета обращаться к свойству оъета через this, а потом имя свойства (this.name)
  },
};

console.log(hotel); // изначальный объект выв {name: "Sunset resort", stars: 5, capasity: 200, updateName: ƒ}

hotel.updateName("Lagoon"); // меняем свойство updateName выв {name: "Lagoon", stars: 5, capasity: 200, updateName: ƒ}

console.log(hotel);

*/
/*

// * This

// - Метод объекта Modern

const hotel = {
  name: "Sunset resort",
  stars: 5,
  capasity: 200,
  updateName(newName) {
    // убираем : function - это новый синтаксис (писать именно так)
    console.log("this:", this);

    this.name = newName;
  },
};

hotel.updateName("Lagoon"); // меняем свойство updateName выв {name: "Lagoon", stars: 5, capasity: 200, updateName: ƒ}

console.log(hotel);

*/
/*

// * This

// - Вызываем в одном методе объекта другой метод объекта

const hotel = {
  name: "Sunset resort",
  stars: 5,
  capasity: 200,
  updateName(newName) {
    console.log("this:", this);

    this.someMethod(); // для вызова метода пишем внутри другого объекта this.someMethod();

    this.name = newName;
  },
  someMethod() {
    console.log("Hello from someMethod");
  },
};

// hotel.updateName("Lagoon");

// console.log(hotel);

 */
/*

// На дно :)

const objA = {
  x: 1,
  objB: {
    y: 5,
  },
};

console.log(objA); // получаем ссылку на весь объект выв {x: 1, objB: {…}}
console.log(objA.x); // выв 1
console.log(objA.objB.y); // выв 5

*/

/*
 * Передор через for...in и Object.keys[values]entries
 *
 */

/* 

// for...in - метод Old School

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

// console.log("good" in feedback); // - in отдельно, без for возвращает true если свойство с таким ключем ("good") в объекте есть

// Вычисляет Total - сумму значений свойств

let totalFeedback = 0; // объявляем тотал

for (const key in feedback) {
  console.log(key); // получаем список ключей выв good neutral bad (в три строки по количеству итераций)
  console.log(feedback[key]); // получаем значение свойстве на каждой итерации выв 5 10 3 (в три строки по количеству итераций)

  totalFeedback += feedback[key]; // прибавляем к тоталу значение на каждой итерации
}

console.log("Total:", totalFeedback); // выв Total: 18

*/
/*

/*
 *
 * Object.keys
 *
 * Конструктор для создания обектов
 * - создает массив с ключами из объекта feedback
 * Object.keys(feedback) - keys - статический метод (метод самого конструктора), а feedback это сам объект
 *
 */

/*

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

const keys = Object.keys(feedback);

console.log(keys); // выв (3) ["good", "neutral", "bad"]
console.log(keys.length); // чтобы узнать кол-во свойств в массиве укажите keys.length выв 3

*/
/*

// * Object.keys()

// - Считаем Тотал с Object.keys()

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

const keys = Object.keys(feedback);

let totalFeedback = 0;

for (const key of keys) {
  console.log(key);
  console.log(feedback[key]);

  totalFeedback += feedback[key]; // прибавляем к тоталу значение на каждой итерации
}

console.log("Total:", totalFeedback); // выв Total: 18

*/
/*

// * Object.values()

// - Считаем Тотал с Object.values

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

const values = Object.values(feedback); // получаем массив всех значений
console.log(values); // выв (3) [5, 10, 3]

let totalFeedback = 0; // объявляем Тотал

for (const value of values) {
  console.log(value); // получаем значение на каждой итерации

  totalFeedback += value; // прибавляем к тоталу значение на каждой итерации
}

console.log("Total:", totalFeedback); // выв Total: 18

*/
/*

// Массив Массивов

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

console.log(Object.entries(feedback)); // получаем три массива и по два свойства в каждом (один их них - 0: (2) ["good", 5])

*/
/*

// * Перебор массива с объектами в цикле

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
];

console.table(friends); // выводится массив с тремя объектами (по два своиства в каждом)
console.log(friends[2]); // лог {name: "Poly", online: true}

const nameToFind = "Poly";

for (const friend of friends) {
  // friend это ссылка на объект
  console.log("1:", friend); // на каждой итерации я получаю доступ к отдельному объекту
  console.log("2:", friend.name); // лог имена на каждой итерации
  console.log("3:", friend.online); // лог online на каждой итерации
}

*/
/*

// * Находит имя друга

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
];

console.table(friends); //

const nameToFind = "Poly";

for (const friend of friends) {
  console.log(friend); //

  if (friend.name === "Poly") {
    console.log(`Нашли ${friend.name}!!!`);
    break;
  }
}

*/
/*

// * Найти друга по имени (функция)

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
];

console.table(friends); //

const nameToFind = "Poly";

const findFreandByName = function (allFriends, name) {
  for (const friend of allFriends) {
    console.log(friend);

    if (friend.name === name) {
      return `Нашли ${friend.name}!!!`;
    }
  }

  return `Не нашли 8(`;
};

console.log(findFreandByName(friends, "Poly"));
console.log(findFreandByName(friends, "Chelsy"));
console.log(findFreandByName(friends, "Kiwi"));

*/
/*

// * Получаем имена всех друзей (функция)

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
];

console.table(friends);

const getAllNames = function (allFriends) {
  const names = []; // создаю пустой массив names

  for (const friend of allFriends) {
    console.log(friend); // перебираю массив friends
    names.push(friend.name);
  }
  return names;
};

console.log(getAllNames(friends));

*/
/*

// * Получаем имена только друзей которые online (функция)

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
];

console.table(friends);

const getOnlineFriends = function (allFriends) {
  const names = []; // создаю пустой массив names

  for (const friend of allFriends) {
    console.log(friend); // перебираю массив friends

    if (friend.online) {
      // friend.online === true писать не нужно. Если значение будет true - и запушится имя друга
      // если будет false, этот if не выполнится и пойдет следующая итерация фора
      // Если нужне НЕ онлайн тогда if (!friend.online)

      names.push(friend.name); // пушим имена друзей онлайн
    }
  }
  return names;
};

console.log(getOnlineFriends(friends));

*/

/*
 *
 * ======== Корзина товаров=========
 *
 * Работаем с коллекцией товваров в корзине
 * - getItems() - метод получить все елементы которые в ней лежат
 * - add(products) - метод добавляет продукт в корзину
 * - remove(productName) - метод удаляет продукт из корзины
 * - clear() - метод полной очистки корзины
 * - countTotalPrice() - метод подсчета общей цены в корзине товаров
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: "🍎", price: 50 }
 * { name: "🍇", price: 70 }
 * { name: "🍋", price: 60 }
 * { name: "🍓", price: 110 }
 *
 */

/*

// * Товары в корзине
// * Добавление и Удаление туваров в корзину

// API (интерфейс) - набор данных, которые открываются разработчику, чтобы их использовать
// cart - корзина (объект)
// items - свойство в котором лежит массив (в массив добавляются товары при нажатии "Добавить в корзину")

const cart = {
  items: [],
  getItems() {
    return this.items; // возвращает ссылку на свойство items (для получения доступа во внешнем коде)
  },
  add(product) {
    product.quantity = 1; // в table добавляется quantity 1
    this.items.push(product);
  },
  remove(productName) {
    console.log(productName);

    // для удаления перебираем массив с добавленными объектами
    for (let i = 0; i < this.items.length; i += 1) {
      // сравниваем свойство name на наличие необходимого
      // обращаемся к объекту this.items, берем с таким индксом элемент [i] (это будет такой объект { name: "🍎", price: 50 }) и у этог объекта берем .name свойство
      // для лучшей читабкльности кода объявляем переменную item и присваиваем ей this.items[i]

      const item = this.items[i];

      if (productName === item.name) {
        console.log("Ншли", item.name, ", теперь удаляем"); // нашли

        // чтобы вызвать метод splice нам нужен индекс объекта
        console.log("Индекс для удаления", i); // индекс объекта

        this.items.splice(i, 1); // на текущем индексе мы один вырезаем

        break;
      }
    }
  },
};

console.table(cart.getItems()); // getItems - метод достучаться

cart.add({ name: "🍎", price: 50 }); // добавляем объект в корзину
cart.add({ name: "🍋", price: 60 });

console.table(cart.getItems()); // см объект добавлет в корзину лог [{…}]

cart.remove("🍎"); // удаляем объект из корзины
console.table(cart.getItems()); // результат удаления

*/
/*

// * Очистка корзины - метод clear()

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    product.quantity = 1;
    this.items.push(product);
  },
  remove(productName) {
    console.log(productName);

    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];

      if (productName === item.name) {
        console.log("Ншли", item.name, ", теперь удаляем");

        console.log("Индекс для удаления", i);

        this.items.splice(i, 1);

        break;
      }
    }
  },
  clear() {
    // this.items.length = 0; // <- первый способ, но так лучше не делать
    this.items = []; // <- второй вариант, лучше просто записать пустой массив []
    // как только вы записали другой массив, создается новое место в памяти, а тот массив исчезает, как будто никогда не существовало
  },
};

console.table(cart.getItems());

cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍋", price: 60 });

console.table(cart.getItems());

cart.clear(); // полностью очищаем корзину
console.table(cart.getItems()); // результат очистки

*/
/*

// * Подсчет общей цены в корзине товаров - метод countTotalPrice()

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    product.quantity = 1;
    this.items.push(product);
  },
  remove(productName) {
    console.log(productName);

    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];

      if (productName === item.name) {
        console.log("Ншли", item.name, ", теперь удаляем");

        console.log("Индекс для удаления", i);

        this.items.splice(i, 1);

        break;
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let total = 0; // объявляем переменную тотал со значением 0

    // проходимся циклом по items, у каждого из них берем price умножаем на quantity и возвращаем значение
    for (const item of this.items) {
      console.log(item); // получаем доступ к объкту item у которого есть цена за штуку - price, и количество штук в корзине - quantity
      total += item.price * item.quantity; // умножаем цену за одну штуку на кол-во в корзине и плюсуем к тоталу - лог Total: 110
    }

    return total; // возвращаем результат подсчета
  },
};

console.table(cart.getItems());

cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍋", price: 60 });

console.table(cart.getItems());

console.log("Total:", cart.countTotalPrice()); //

*/
/*

// * Добавление нескольких одинаковых товаров к корзину

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      // console.log(item); // перебрали корзину

      if (item.name === product.name) {
        console.log(item.name, "уже есть, увеличиваем кол-во!!!"); // нашли такой же продукт
        item.quantity += 1; // увеличили quantity на 1
        return;
      }
    }

    console.log(product.name, "- новый продукт, добавляем в корзину!!!");
    product.quantity = 1;
    this.items.push(product);
  },
  remove(productName) {
    console.log(productName);

    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];

      if (productName === item.name) {
        console.log("Ншли", item.name, ", теперь удаляем");

        console.log("Индекс для удаления", i);

        this.items.splice(i, 1);

        break;
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let total = 0;

    for (const item of this.items) {
      // console.log(item);
      total += item.price * item.quantity;
    }

    return total;
  },
};

console.table(cart.getItems());

cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍋", price: 60 });

console.table(cart.getItems());

console.log("Total:", cart.countTotalPrice());

*/
/*

// * Увеличиваем и уменьшаем кол-во продуктов кнопками
// - increaseQuantity(productName)
// - decreaseQuantity(productName)

const cart = {
  items: [{ name: "🍎", price: 50, quantity: 1 }],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      // console.log(item); // перебрали корзину

      if (item.name === product.name) {
        console.log(item.name, "уже есть, увеличиваем кол-во!!!"); // нашли такой же продукт
        item.quantity += 1; // увеличили quantity на 1
        return;
      }
    }

    console.log(product.name, "- новый продукт, добавляем в корзину!!!");
    product.quantity = 1;
    this.items.push(product);
  },
  remove(productName) {
    console.log(productName);

    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];

      if (productName === item.name) {
        console.log("Ншли", item.name, ", теперь удаляем");

        console.log("Индекс для удаления", i);

        this.items.splice(i, 1);

        break;
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let total = 0;

    for (const item of this.items) {
      // console.log(item);
      total += item.price * item.quantity;
    }

    return total;
  },
  increaseQuantity(productName) {
    // находим продукт в массиве и у него увеличиваем quantity
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    // находим продукт в массиве и у него уменьшаем quantity
    for (const item of this.items) {
      if (item.name === productName) {
        if (item.quantity - 1 === 0) {
          this.remove(productName);
          return;
        }

        item.quantity -= 1;
      }
    }
  },
};

console.table(cart.getItems());

cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍋", price: 60 });
console.table(cart.getItems());

cart.increaseQuantity("🍎"); // Добавляем срелочкой еще 1 продукт
console.table(cart.getItems()); // результат добавления лог quantity 3

cart.decreaseQuantity("🍋"); // Уменьшаем срелочкой на 1 продукт
console.table(cart.getItems()); // результат уменьшения лог quantity 1

cart.decreaseQuantity("🍋"); // Уменьшаем срелочкой на 1 продукт при остатке 1
console.table(cart.getItems()); // результат уменьшения - объект удаляется из массива при помощи метода remove

console.log("Total:", cart.countTotalPrice());

*/
/*

// * Корзине товаров (готовый код)

const cart = {
  items: [
    { name: "🍎", price: 50, quantity: 0 },
    { name: "🍋", price: 60, quantity: 0 },
    { name: "🍇", price: 70, quantity: 0 },
  ],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }

    product.quantity = 1;
    this.items.push(product);
  },
  remove(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];

      if (productName === item.name) {
        this.items.splice(i, 1);
        break;
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let total = 0;

    for (const item of this.items) {
      total += item.price * item.quantity;
    }

    return total;
  },
  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        if (item.quantity - 1 === 0) {
          this.remove(productName);
          return;
        }

        item.quantity -= 1;
      }
    }
  },
};

console.table(cart.getItems()); // Пустая корзина

cart.add({ name: "🍇" }); // добавили 1 объект в корзину
cart.add({ name: "🍎" }); // добавили 1 объект в корзину
cart.add({ name: "🍎" }); // добавили 1 объект в корзину
cart.add({ name: "🍎" }); // добавили 1 объект в корзину
cart.add({ name: "🍋" }); // добавили 1 объект в корзину
cart.add({ name: "🍋" }); // добавили 1 объект в корзину
cart.add({ name: "🍋" }); // добавили 1 объект в корзину
console.table(cart.getItems()); // результат добавления

cart.increaseQuantity("🍎"); // Добавляем срелочкой еще 1 продукт
cart.increaseQuantity("🍎"); // Добавляем срелочкой еще 1 продукт
console.table(cart.getItems()); // результат добавления лог quantity 3

cart.decreaseQuantity("🍋"); // Уменьшаем срелочкой на 1 продукт
cart.decreaseQuantity("🍋"); // Уменьшаем срелочкой на 1 продукт
console.table(cart.getItems()); // результат уменьшения лог quantity 1

cart.decreaseQuantity("🍋"); // Уменьшаем срелочкой на 1 продукт при остатке 1
console.table(cart.getItems()); // результат уменьшения - объект удаляется из массива при помощи метода remove

cart.remove("🍎"); // удаляем объект из корзины
console.table(cart.getItems()); // результат удаления

console.log("Total:", cart.countTotalPrice()); // Total

cart.clear();
console.log(cart.getItems()); // полностью очистили корзину

*/

/*
 * Алтернативный современный синтаксис в JS
 */

/*

// * ... Spread - операция распыление
// используется когда на базе текущего массива нужно сделать новый

// * Найти самое маленькое чисдло

const temperatures = [18, 14, 12, 21, 17, 29]; // абъявил переменную с массивом чисел 

console.log(Math.min(18, 14, 12, 21, 17, 29)); // Math.min высчитывает самое маленькое число среди чисел, но у нас массив

console.log(Math.min(temperatures)); // масси мас.мин не понимает. Он видит один елемент, начинает его сравнивать, а он еще и не число... и все сломалось

console.log(Math.min(...temperatures)); // правильно использовать spread - ... (три точки, распыление)

*/
/*

// * Сделать из массива новый массив и добавить в него элемент

const temperatures = [18, 14, 12, 21, 17, 29];

// const nextTemps = temperatures.concat([1, 2, 3]); // соединяем и добавляем при помощи .concat()
// console.log(nextTemps);

const nextTemps = [...temperatures, 1, 2, 3]; // соеденяем и добавляем при помощи ... - распыления
console.log(nextTemps);

*/
/*

// * Составляем общий масив температур за три недели

const temperatures = [18, 14, 12, 21, 17, 29];

const lastWeekTemps = [1, 2, 3];
const currentTemps = [6, 1, 8];
const nextWeekTemps = [12, 14, 8];

// const temps = lastWeekTemps.concat(currentTemps, nextWeekTemps); // делаем при помощи concat
// console.log(temps);

const temps = [
  ...lastWeekTemps,
  "xD",
  ...currentTemps,
  "hello",
  ...nextWeekTemps,
]; // далаем при помощи ... и добавляем 2 сторонних елемента
console.log(temps);

*/
/*

// * Распыление объектов

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b, { z: 5, x: 8, g: 1 }); // значения одинаковых ключей заменяются справа на лево

const c = { t: 5, ...a, ...b, ...{ z: 5, x: 8, g: 1 }, x: 100 }; // то же самое и еще два дополнительных элемента с операцией распыление

console.log(c);

*/

/*
 *
 * Правило:
 * - слева от равно всегда rest = справа от равно всегда spread
 *
 * пример:
 * const { name, tag, location, ...restProps } = profile; - это Rest
 * const a = {...{x:1}, ...{y:3}}; - это Spread
 *
 */

/*

// Rest - операция сбор
// - использовать когда нужно собрать группу элементов в другую группу элементов

const fn = function (a, b, c, ...args) {
  console.log(args);
};

fn(1, 2, 3, 4, 5, 6, 7);

*/
/*

// * Деструктуризация объектов
// - особый синтаксис присваивания, при котором можно присвоить массив или объект сразу нескольким переменным, разбив его на части

const hotel = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
};

// Старый синтаксис

// console.log("Name:", hotel.name);
// console.log("Stars:", hotel.stars);
// console.log("Capacity:", hotel.capacity);

// Новый синтаксис

const { name, stars, capacity } = hotel; // справа то что нужно деструктуризировать, слева в скобках {} переменные по имени ключа (иначе будет undefined)

console.log("Name:", name);
console.log("Stars:", stars);
console.log("Capacity:", capacity);

*/
/*

// * Дефолтные значения
// - значения по умолчанию (указывать НЕ обязательно)

const hotel = {
  name: "Resort Hotel",
  stars: 5,
  // capacity: 100, // отсутствует свойство
};

// на место пустого значения возвращается undefined,
// - чтобы вызвращалсь хоть что то вместо undefined указывают дефолтное значение

const { name = "Hotel 1", stars = 1, capacity = 0 } = hotel; // дефолтное значение указал после =

console.log("Name:", name);
console.log("Stars:", stars);
console.log("Capacity:", capacity);

*/
/*

// * Деструктуризация внутри функции

const hotel = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
};

const showHotelInfo = function (hotelStats) {
  console.log(hotelStats);

  const { name, stars, capacity } = hotelStats; // деструктуризация

  console.log("Name:", name);
  console.log("Stars:", stars);
  console.log("Capacity:", capacity);
};

showHotelInfo(hotel);

*/
/*

// * Деструктуризация при получении аргумента

const hotel = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
};

// деструктуризация прямо в подписи функции
// можно добавлять дополнительные элементы

const showHotelInfo = function ({ name, stars, capacity }, a, b, c) {
  console.log("Name:", name);
  console.log("Stars:", stars);
  console.log("Capacity:", capacity);
  console.log("a:", a);
  console.log("b:", b);
  console.log("c:", b);
};

showHotelInfo(hotel, 1, 2, 3);

*/
/*

// * Деструктуризация с переименованием

const hotel = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
};

// для переименовании при деструктуризации к имени ключа добавляем : и новое имя
const { name: hotelName, stars, capacity } = hotel;
console.log(hotelName); // лог Resort Hotel

*/
/*

// * Глубокая деструктуризация
// - как достать до свойств stats

const profile = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
  stats: {
    folowers: 5603,
    views: 5603,
    likes: 1308,
  },
};

// - первый способ
const { name, tag, location, avatar, stats } = profile;
const { folowers, views, likes } = stats; // еще раз деструктуризирую stats
console.log(name, tag, location, avatar, stats, folowers, views, likes);

*/
/*

// - второй способ
// Это глубокая деструктуризация

const profile = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
  stats: {
    folowers: 5603,
    views: 5603,
    likes: 1308,
  },
  exemple: { a: { x: 1, y: 2 } },
};

const {
  name,
  tag,
  location,
  avatar,
  stats: { folowers, views, likes }, // ставим : и деструктуризируем
  exemple: {
    a: { x, y }, // еще более глубокая деструктуризация
  },
} = profile;

console.log(name, tag, location, avatar, folowers, views, likes);

console.log(x, y);

*/
/*

// * Деструктуризация массива
// - если объекты деструктуризиру/тся по имени переменной (ключа), то массивы дест. по очереди (поиндексно)
// - имена переменных могут быть произвольными

const rgb = [255, 100, 80];

const [red, green, blue] = rgb;

console.log(red, green, blue);

*/
/*

// * Деструктуризация только синего цвета в массиве

const rgb = [255, 100, 80, 33];

const [, , blue] = rgb; // ставим две запятые вместо цветов которые пропускаем и потом нужный цвет

console.log(blue);

*/
/*

// * Деструктуризация только некоторых свойств
// - но остальные свойства хочу собрать в локальную переменную (в объект)

const profile = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
  stats: {
    folowers: 5603,
    views: 5603,
    likes: 1308,
  },
  exemple: { a: { x: 1, y: 2 } },
};

// для этого после деструктуризируемых свойств добавляем переменную с произвольным именем ...restProps
const { name, tag, location, ...restProps } = profile;

console.log(name, tag, location);
console.log(restProps);
console.log(profile);

*/
/*

// * Где все это используется
// - Вариант без деструктуризации (шаблон)

const profile = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
  stats: {
    folowers: 5603,
    views: 5603,
    likes: 1308,
  },
};

const makeProfileMarkup = function (profile) {
  return `<div>
  <img src="${profile.avatar}" alt="user avatar">
  <p>${profile.name}<span>@${profile.tag}</span></p>
  <p>Location: ${profile.location}</p>
  <ul>
    <li>Followers: ${profile.stats.folowers}</li>
    <li>Views: ${profile.stats.views}</li>
    <li>Likes: ${profile.stats.likes}</li>
  </ul>
  </div>`;
};

const markup = makeProfileMarkup(profile);
console.log(markup);

document.body.insertAdjacentHTML("afterbegin", markup);

*/
/*

// - Вариант с деструктуризацией (шаблон)

const profile = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
  stats: {
    followers: 5603,
    views: 5603,
    likes: 1308,
  },
};

// пишем в подписи функции вместо profile - { name, tag, location, avatar, stats }
// и удаляем везде в теле фуннкции profile. Кот становится чище
const makeProfileMarkup = function ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return `<div>
  <img src="${avatar}" alt="user avatar">
  <p>${name}<span>@${tag}</span></p>
  <p>Location: ${location}</p>
  <ul>
    <li>Followers: ${followers}</li>
    <li>Views: ${views}</li>
    <li>Likes: ${likes}</li>
  </ul>
  </div>`;
};

const markup = makeProfileMarkup(profile);
console.log(markup);

document.body.insertAdjacentHTML("afterbegin", markup);

*/
/*

// А что если пользователь не указал локацию и аватар?
// - указываем дефолтные значения

const profile = {
  name: "Jacques Gluke",
  tag: "jgluke",
  // location: "Ocho Rios, Jamaica",
  location: undefined,
  // avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
  avatar: undefined,
  stats: {
    followers: 5603,
    views: 5603,
    likes: 1308,
  },
};

const makeProfileMarkup = function ({
  name,
  tag,
  location = "Planet Earth",
  avatar = "https://i.pravatar.cc/400?img=6",
  stats: { followers, views, likes },
}) {
  return `<div>
  <img src="${avatar}" alt="user avatar">
  <p>${name}<span>@${tag}</span></p>
  <p>Location: ${location}</p>
  <ul>
    <li>Followers: ${followers}</li>
    <li>Views: ${views}</li>
    <li>Likes: ${likes}</li>
  </ul>
  </div>`;
};

const markup = makeProfileMarkup(profile);
console.log(markup);

document.body.insertAdjacentHTML("afterbegin", markup);

*/

// =========== Geri ============

/*
 *
 * Объекты
 *
 */

// Объект (концепция)

/*

const obj = {
  name: "Bobby", // string
  eyes: "green",
  age: 15, // number
  legs: ["left", "right"], // Array
  hands: ["left", "right"],
  hair: true, // boolean
  children: {
    boys: [],
    girls: [],
  },
};

console.log(obj); // log {name: "Bobby", eyes: "green", age: 15, legs: Array(2), hands: Array(2), …}

*/

// Из базы данных чаще всего приходит массив объектов

/*

const users = [
  {
    name: "Bobby", // string
    eyes: "green",
    age: 15, // number
    legs: ["left", "right"], // Array
    hands: ["left", "right"],
    hair: true, // boolean
    children: {
      boys: [],
      girls: [],
    },
  },
  {
    name: "Chris", // string
    eyes: "green",
    age: 20, // number
    legs: ["left", "right"], // Array
    hands: ["left", "right"],
    hair: true, // boolean
    children: {
      boys: [],
      girls: [],
    },
  },
];

console.log(users); // log (2) [{…}, {…}]
console.log(users[0]); // log {name: "Bobby", eyes: "green", age: 15, legs: Array(2), hands: Array(2), …}
console.log(users[1]); // log {name: "Chris", eyes: "green", age: 15, legs: Array(2), hands: Array(2), …}

for (let i = 0; i < users.length; i += 1) {
  const user = users[i];
  console.log(user.name, user.age); // log Bobby 15 и Chris 20
}

*/
/*

// Перезаписать в объекте

const obj = {
  name: "Bobby", // string
  eyes: "green",
  age: 15, // number
  legs: ["left", "right"], // Array
  hands: ["left", "right"],
  hair: true, // boolean
  children: {
    boys: [],
    girls: [],
  },
  innerObject: {
    innerKey: 456,
  },
};

// перезаписываем значение свойства age

obj.age = 16;
console.log(obj.age); // log 16

// доступ по ключу к значению свойства

const key = "eyes";
console.log(obj["eyes"]); // log green
console.log(obj[key]); // log green

// Удаление свойств

delete obj.children;
console.log(obj); // log {name: "Bobby", eyes: "green", age: 16, legs: Array(2), hands: Array(2), …}

// Отсутствующие свойства

console.log(obj.hdfhhfophqwuh); // log undefined
console.log(obj.age + 14 + obj.hdfhhfophqwuh); // log NaN

// Доступ к свойству в свойстве

console.log(obj.innerObject.innerKey); // log 456

// Проверка на существование ключа

console.log(obj.innerObject && obj.innerObject.vdytrdvy); // log undefined

// Проверка на существование ключа прямо в коде (Оператор опциональной последователности)

console.log(obj?.innerObject?.innerKey); // log 456
console.log(obj?.innerObject); // log {innerKey: 456}
console.log(obj?.innerObject?.vdytrdvy); // log undefined

// Короткие свойства

const name = "Peter";
const human = {
  name: name,
};
console.log(human); // log {name: "Peter"}

// если ключ совпадает с именем переменной тогда можно просто написать имя

const name2 = "Peter2";
const age2 = "14";
const eyes2 = "blue";
const human2 = { name2, age2, eyes2 };
console.log(human2); // log {name2: "Peter2", age2: "14", eyes2: "blue"}

*/
/*

// Вычисляемые свойства

const getValue = (obj, key) => {
  return obj[key];
};

const cat = {
  name: "Kit-Kat",
  age: 2,
};

const dog = {
  name: "Chappy",
  age: 4,
};

console.log(cat); // log {name: "Kit-Kat", age: 2}

console.log(getValue(cat, "name")); // "Kit-Kat"
console.log(getValue(cat, "age")); // "2"

console.log(getValue(dog, "name")); // "Chappy"
console.log(getValue(dog, "age")); // "4"

*/
/*

// Добавление ключей в объект

// создаем пустой объект
const human3 = {};

// добавляем в него ключи
human3.iuhpihpuihiu = 456;
human3.name = "Chris";
human3.age = 30;

console.log(human3); // log {iuhpihpuihiu: 456, name: "Chris", age: 30}

*/
/*

// Добавление ключей в объект (динамика)

// приходит ключ динамикой
const key = "eyes";

// создаем пустой объект
const human3 = {};

// добавляем в него ключи

human3.iuhpihpuihiu = 456;
human3.name = "Chris";
human3.age = 30;
human3[key] = true;

console.log(human3); // log {iuhpihpuihiu: 456, name: "Chris", age: 30, eyes: true}

*/
/*

// Методы обекта

const human4 = {
  name: "Bobby",
  age: 15,

  // синтаксис олд-скул
  work: function () {
    console.log("I'm working"); // log I'm working
  },

  // синтаксис модерн
  wolk() {
    console.log("I'm wolking"); // log I'm wolking
  },
};

console.log(human4); // log {name: "Bobby", age: 15, work: ƒ}
human4.work();
human4.wolk();

*/
/*

// Доступ к объекту через this

const human4 = {
  name: "Bobby",
  age: 15,

  work: function () {
    console.log("I'm working");
  },

  wolk() {
    console.log("I'm wolking");
  },

  // доступ к объекту через this
  sayHello() {
    console.log(`Hello my name is ${this.name}`);
  },

  // случается день рождения
  birthdayHappened() {
    this.age += 1;
  },
};

console.log(human4);
human4.work();
human4.wolk();

// доступ к объекту через htis
console.log(human4); // log {name: "Bobby", age: 15, work: ƒ, wolk: ƒ, birthdayHappened: ƒ}

human4.birthdayHappened();
console.log(human4); // log {name: "Bobby", age: 16, work: ƒ, wolk: ƒ, birthdayHappened: ƒ}

human4.birthdayHappened();
console.log(human4); // log {name: "Bobby", age: 17, work: ƒ, wolk: ƒ, birthdayHappened: ƒ}

human4.sayHello();

// доступ к объекту через htis (меняем имя)
human4.name = "Peter";
human4.sayHello();

*/
/*

// Перебор объектов

const obj = {
  name: "Bobby", // string
  eyes: "green",
  age: 15, // number
  hair: true, // boolean
};

// получаем ключи из объекта
const keys = Object.keys(obj);
console.log(keys);

// получаем значения из объекта
const values = Object.values(obj);
console.log(values);

// получаем массив из массивов
const entries = Object.entries(obj);
console.log(entries);

*/
/*

Цикл for...in

const hotel = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
};

// Перебор ключей объекта hotel
for (const key in hotel) {
  console.log("key:", key);
}

*/
/*

// exemple

// Задача: посчитать сумму всех чисел
const obj = {
  name: "Bobby",
  eyes: "green",
  age: 15,
  hair: true,
  salary: 1000,
  sdfg: 98,
};

// получаем массив значений
const values = Object.values(obj);
console.log(values);

let sum = 0; // total 0

// вариант №1
// for (const value of values) {
//   console.log(value); // получаем каждое значение отдельно

//   // если значение равно числу
//   if (typeof value === "number") {

//     // суммируем все числа
//     sum += value;
//   }
// }

// вариант №2
for (const key in obj) {
  console.log("key:", key);
  const value = obj[key];

  // если значение равно числу
  if (typeof value === "number") {
    // суммируем все числа
    sum += value;
  }
}

console.log("sum:", sum);

*/
/*

// exemple

const phone = {
  model: "iPhone",
  battery: 100,
  isOn: false,

  // включить телефон
  turnOn() {
    this.isOn = true;
  },

  // расход батареи
  work(time) {
    this.battery -= time;
  },

  charge(time) {
    // если заряд больше 100 тогда = 100
    if (this.battery + time > 100) {
      this.battery = 100;
    } else {
      // в противном случае прибавить значение
      this.battery += time;
    }
  },
};

console.log(phone); // isOn: false

// включаем телефон
phone.turnOn();
console.log(phone); // isOn: true

// используем батарею
phone.work(80);
console.log(phone);

// phone.charge(80); // 130
// console.log(phone); // 100

phone.charge(30); // 50
console.log(phone); // 50

*/
/*

// Задача

// мы это не видим (приходит с сервера)
const obj = {
  name: "sdgf",
};

// просят дать значение по ключу (тоже не видно)
const key = "name";

// для решения мы емеем только obj и key
console.log(obj[key]); // просто используем скобки []

*/
/*

// У массивом и объектов ссылочный тип данных

// Массивы
const arr1 = [1, 1, 1];
const arr2 = arr1;

// это две разные ссылки
console.log(arr1); // log (3) [1, 1, 1]
console.log(arr2); // log (3) [1, 1, 1]

// меняем значение свойства в массиве
arr1[0] = 100000;
console.log(arr1); // log (3) [100000, 1, 1]
console.log(arr2); // leg (3) [100000, 1, 1]

// создаем копию массива (spread)
const arr3 = [...arr2];
console.log("copy:", arr3);

// Объекты
const obj1 = { name: "Bobby", age: 20 };
const obj2 = obj1;

// две разные ссылки
console.log(obj1); // log {name: "Bobby", age: 20}
console.log(obj2); // log {name: "Bobby", age: 20}

// меняем значение объекта
obj1.age = 35;
console.log(obj1); // log {name: "Bobby", age: 35}
console.log(obj2); // log {name: "Bobby", age: 35}

// создаем копию объекта (spread)
const obj3 = { ...obj2 };
console.log("copy:", obj3);

*/
