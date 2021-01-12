/*
 *
 * {}
 * 
 * new Object()
 *
 */

// /* ======================================================
// ** Жека фрилансер по жизни

// Синтаксис
const userInfoLiteral = {}; 
const userInfoConstructor = new Object(); 

// Свойства
const userInfo = {
   key: "value",
   'second key': 52,
};

console.log("01--", userInfo);
console.log("01--", userInfo.key);
console.log("01--", userInfo['second key']);

// === 02.

// Конкатенация ключа
const firstWord = "second";
const userInfo_02 = {
   key: "value",
   [firstWord + " key"]: 52,
};

console.log("02--", userInfo['second key']);

// Квадратные скобки помогают обратиться к ключу
const name = "key";
console.log("02--", userInfo_02[name]); // value

// === 03.

const userInfo_03 = {
   5: "value",
};

console.log("03--", userInfo_03[5]); // value
console.log("03--", userInfo_03["5"]); // value

// === 04.

// Symbol свайства не показываются в циклах
const id = Symbol('id');
const userInfo_04 = {
   key: "value",
   [id]: "id-value",
};

console.log("04--", userInfo_04); // {key: "value", Symbol(id): "id-value"}
console.log("04--", userInfo_04[id]); // id-value

// === 05.

// Объект в обекте
const userInfo_05 = {
   key: "value",
   id: {
      one: 1,
      two: 2,
   },
};

console.log("05--", userInfo_05); // {key: "value", Symbol(id): {…}}
console.log("05--", userInfo_05.id); // {id-1: 1, id-2: 2}
console.log("05--", userInfo_05.id.two); // 2

// === 06.

// Передаем значения свойств через функцию
function createUserId(key, id) {
   return {
      key,
      id,
   };
};

const user = createUserId("value", { 'one': 1, 'two': 2 });

console.log("06--", user); // {key: "value", id: {…}}
console.log("06--", user.key); // value
console.log("06--", user.id.two); // 2

// === 07.

// Добавление свойств
const userInfo_07 = {
   key: "value",
};

userInfo_07.ege = 26;
userInfo_07['second key'] = 52;
userInfo_07.id = {
   one: 1,
   two: 2,
};

console.log("07--", userInfo_07); // Object
console.log("07--", userInfo_07['second key']); // 52
console.log("07--", userInfo_07.id.two); // 2

// === 08.

// Удаление свойств
const userInfo_08 = {
   key: "value",
   'second key': 52,
   id: {
      one: 1,
      two: 2,
   },
};

delete userInfo_08.id.two;
delete userInfo_08['second key'];

console.log("08--", userInfo_08); // {key: "value", id: {one: 1}}

// === 09.

// Изменение значения свойств
const userInfo_09 = {
   id: {
      one: 1,
      two: 2,
   },
};

userInfo_09.id.two = '02';

console.log("09--", userInfo_09.id); // {one: 1, two: "02"}

// === 010.

// Копирование обектов
// При коппировании копируется только ссылка
// объект не дублируеется и оригинал может изменяться
const userInfo_10 = {
   id: {
      one: 1,
      two: 2,
   },
};

const userInfo_10_2 = userInfo_10;
userInfo_10_2.id.two = '002'

console.log("010--", userInfo_10.id); // {one: 1, two: "002"}
console.log("010--", userInfo_10_2.id); // {one: 1, two: "002"}

// === 11.

// Дублирование объектов (Object.assign)

// дублируем, добавляем новое свойство и меняем значение имеющегося
// Синтаксис - Object.assign(куда(объект), что(свойство 1), что(свойство 2), ...);
// В отличии от копирования объекты разные
const userInfo_11 = {
   key: "value",
   'second key': 52,
};

console.log("011--", userInfo_11.id);
const userInfo_11_2 = Object.assign({111: 222}, userInfo_11);
console.log("011--", userInfo_11_2.id);

userInfo_11_2["second key"] = 11;

console.log("011--", userInfo_11); // {key: "value", second key: 52}
console.log("011--", userInfo_11_2); // {111: 222, key: "value", second key: 11}

// === 12.

// Проверка на наличие свойства
const userInfo_12 = {
   key: "value",
   'second key': 52,
};

if (userInfo_12.key) {
   console.log("012--", "key"); // key
};

if (!userInfo_12.key2) {
   console.log("012--", "Ключа key2 нет"); // Ключа key2 нет
};

// === 13.

// Проверка наличия свойства опциональной цепочкой
// Используем ? чтобы небыло в консоли ошибки, а был undefined
const userInfo_13 = {
   // id: {
   //    one: 1,
   //    two: 2,
   // },
};

console.log("013--", userInfo_13?.id?.two);

// === 14.

// Проверяем наличие чвойства при помощи оператора in
// Использовать когда значение свойства указано undefined
const userInfo_14 = {
   id: {
      one: 1,
      two: 2,
      three: undefined,
   },
};

if ('two' in userInfo_14.id) {
   console.log("014--", "two =", userInfo_14.id.two); // two = 2
};

if ('three' in userInfo_14.id) {
   console.log("014--", userInfo_14.id.three); // undefined
}

// === 15.

// for...in
const userInfo_15 = {
   key: "value",
   id: {
      one: 1,
      two: 2,
   },
};

// перебираем обект userInfo_15
for (let item in userInfo_15) {
   console.log("015--", item); // value, id
   console.log("015--", userInfo_15[item]); // {one: 1, two: 2}
};

// перебираем обект id внутри объекта userInfo_15
for (let item in userInfo_15.id) {
   console.log("015--", item); // one, two
   console.log("015--", userInfo_15.id[item]); // 2
};

// === 16.

// Методы объекта 
const userInfo_16 = {
   key: "value",
   id: {
      one: 1,
      two: 2,
   },

   showUserInfo() {
      console.log("016--", `${this.key}, ${this.id.one}, ${this.id.two}`); // value, 1, 2
   },
};

userInfo_16.showUserInfo(); // value, 1, 2

// === 17.

// Изменяем имя переменной объекта и обнуляем старое имя
let userInfo_17 = {
   key: "value",
   id: {
      one: 1,
      two: 2,
   },

   showUserInfo() {
      console.log("017--", `${this.key}, ${this.id.one}, ${this.id.two}`); // value, 1, 2
   },
};

userInfo_17.showUserInfo(); // value, 1, 2

const userInfo_17_2 = userInfo_17;
userInfo_17 = null;
userInfo_17_2.showUserInfo() // value, 1, 2

console.log("017--", userInfo_17); // null
console.log("017--", userInfo_17_2); // {key: "value", id: {…}, showUserInfo: ƒ}

// === 18.

// Функция конструктор создает объекты
function UserInfo_18(key) {

   // this = {}; создает пустой объект

   this.key = key;
   this['second key'] = 52;

   // return this; Возвращает объект
};

console.log("018--", new UserInfo_18("value-1")); // UserInfo_18 {key: "value-1", second key: 52}
console.log("018--", new UserInfo_18("value-2")); // UserInfo_18 {key: "value-2", second key: 52}

// ------------------------------------------------------ */