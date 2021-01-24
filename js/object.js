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

console.log("10--", userInfo_10.id); // {one: 1, two: "002"}
console.log("10--", userInfo_10_2.id); // {one: 1, two: "002"}

// === 11.

// Дублирование объектов (Object.assign)

// дублируем, добавляем новое свойство и меняем значение имеющегося
// Синтаксис - Object.assign(куда(объект), что(свойство 1), что(свойство 2), ...);
// В отличии от копирования объекты разные
const userInfo_11 = {
   key: "value",
   'second key': 52,
};

console.log("11--", userInfo_11.id);
const userInfo_11_2 = Object.assign({111: 222}, userInfo_11);
console.log("11--", userInfo_11_2.id);

userInfo_11_2["second key"] = 11;

console.log("11--", userInfo_11); // {key: "value", second key: 52}
console.log("11--", userInfo_11_2); // {111: 222, key: "value", second key: 11}

// === 12.

// Проверка на наличие свойства
const userInfo_12 = {
   key: "value",
   'second key': 52,
};

if (userInfo_12.key) {
   console.log("12--", "key"); // key
};

if (!userInfo_12.key2) {
   console.log("12--", "Ключа key2 нет"); // Ключа key2 нет
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

console.log("13--", userInfo_13?.id?.two);

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
   console.log("14--", "two =", userInfo_14.id.two); // two = 2
};

if ('three' in userInfo_14.id) {
   console.log("14--", userInfo_14.id.three); // undefined
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
   console.log("15--", item); // value, id
   console.log("15--", userInfo_15[item]); // {one: 1, two: 2}
};

// перебираем обект id внутри объекта userInfo_15
for (let item in userInfo_15.id) {
   console.log("15--", item); // one, two
   console.log("15--", userInfo_15.id[item]); // 2
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
      console.log("16--", `${this.key}, ${this.id.one}, ${this.id.two}`); // value, 1, 2
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
      console.log("17--", `${this.key}, ${this.id.one}, ${this.id.two}`); // value, 1, 2
   },
};

userInfo_17.showUserInfo(); // value, 1, 2

const userInfo_17_2 = userInfo_17;
userInfo_17 = null;
userInfo_17_2.showUserInfo() // value, 1, 2

console.log("17--", userInfo_17); // null
console.log("17--", userInfo_17_2); // {key: "value", id: {…}, showUserInfo: ƒ}

// === 18.

// Функция конструктор создает объекты
function UserInfo_18(key) {

   // this = {}; создает пустой объект

   this.key = key;
   this['second key'] = 52;

   // return this; Возвращает объект
};

console.log("18--", new UserInfo_18("value-1")); // UserInfo_18 {key: "value-1", second key: 52}
console.log("18--", new UserInfo_18("value-2")); // UserInfo_18 {key: "value-2", second key: 52}

// === 19.

// Доступ к значению свойста методом точки и скобок
const testObj_19 = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue_19 = testObj_19.hat;  
const hatValue_19_2 = testObj_19["shirt"];

console.log("19--", hatValue_19);
console.log("19--", hatValue_19_2);

// === 20.

// Вызываем значение через присвоение ключа переменной
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16;
const player = testObj[playerNumber];

console.log("20--", player);

// === 21.

// Изменение, добавление и удаление свойств 
const myDog_21 = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
};

myDog_21.friends.push("Bobby");
myDog_21.bark = "woof";
myDog_21.name = "Happy Coder";
delete myDog_21.legs;

console.log("21--", myDog_21.friends[1]); // Bobby
console.log("21--", myDog_21); // {name: "Happy Coder", tails: 1, friends: Array(2), bark: "woof"}

// === 22.

// Возвращает результат поиска свойства через переменную
function phoneticLookup_22(val) {
   let result = "";

   const lookup = {
      alpha: "Adams",
      bravo: "Boston",
      charlie: "Chicago",
      delta: "Denver",
      echo: "Easy",
      foxtrot: "Frank",
   };

   result = lookup[val];

   return result;
}

console.log("22--", phoneticLookup_22("charlie")); // Chicago

// === 23.

// Привязывает контекст объекта к функции
const dog_23 = { name: 'Poly' };

function showDogName_23() {
  console.log("23--", this.name); // Poly
}

const boundShowDogName_23 = showDogName_23.bind(dog_23);

boundShowDogName_23();

// === 24.

// Создает объект распыляя в нем другой объект, и изменяя значения
const userA_24 = {
  name: 'Mango',
  age: 5,
};

const userB_24 = {
  ...userA_24,
  age: 10,
  happy: true,
};

console.log("24--", userB_24); // {name: "Mango", age: 10, happy: true}

// === 25.

// Получает список всех ключей объекта 
const user_25 = {
   name: 'Mango',
   age: 5,
   head: 1,
};

console.log("25--", Object.keys(user_25)); // (3) ["name", "age", "head"]

// === 26.

// Доступ к подсвойствам объекта
const myStorage_26 = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents_26 = myStorage_26.car.inside["glove box"]; 

console.log("26--", gloveBoxContents_26); // maps

// === 27.

// Вешает слушателя на первую ссылку на странице и при клике показывает message
const obj_27 = {
  btn: document.links[0],
  log: function(message) {
    console.log(message);
    return this;
  },
  init: function() {
    this.btn.addEventListener('click', () => this.log('Button Clicked!'), false);
    console.log("27--", "Слушатель повесили");
  }
};

obj_27.init();

// === 28.

// Заморозка объекта (Ошибка закомментирована)
const obj_28 = {
   a: 20,
   b: 14,
};

obj_28.a = 36;
console.log("28--", obj_28);

// Object.freeze(obj_28); // Заморозка
obj_28.b = 52;
console.log("28--", obj_28.a); // Cannot assign to read only property 'b' of object '#<Object>'

// === 29.

// Краткие методы объектов
const obj_29 = {
   a() {
      console.log("29--", "a)"); // a)
   }
};

obj_29.a(); 

// === 30.

// Объекту proto присваивает второй obj в качестве прототипа
const proto_30 = { a: 10 };
const obj_30 = { b: 20 };

Object.setPrototypeOf(proto_30, obj_30);

console.log("30--", proto_30); // {a: 10} a: 10 __proto__: b: 20
console.log("30--", obj_30);

proto_30.a = 15;
proto_30.b = 35;
console.log("30--", proto_30); // {a: 15, b: 35} a: 15 b: 35 __proto__: b: 20

// === 31.

// Super - при вызове proto_31 выводит в консоль "from obj_31"
const proto_31 = {
   a: 10,
   log() {
      super.log() 
   },
};

const obj_31 = {
   b: 20,
   log() {
      console.log("31--", "from obj_31");
   },
};

Object.setPrototypeOf(proto_31, obj_31);

proto_31.log();

// === 32.

// Реструктуризация объекта
const obj_32 = {
   a: 'Hello',
   b: 'my',
   c: 'friend'
};

const { a, b, c } = obj_32;

console.log("32--", a, b, c); // Hello my friend

// === 33.

// Реструктуризующее присваивание
const a_33 = 15, b_33 = 25;
const obj_33 = { x: a_33, y: b_33 };
const { x: X, y: Y } = obj_33;

console.log("33--", obj_33); // {x: 15, y: 25}
console.log("33--", X, Y); // 15 25

// === 34.

// Реструктуризующее присваивание с уровнем вложенности свойств
const obj_34 = {
   a: [{
      one: 1,
      two: 2
   },
   {
      three: 3,
      four: 4
   }],
   b: 5
};

const { a: [{ one: first }], b: third } = obj_34;

console.log("34--", first, third); // 1 5

// === 35.

// Реструктуризующее присваивание длины строки значению свойства
const { length: le } = 'Hello';
console.log("35--", le); // 5

// 

// ------------------------------------------------------ */