/*
 *
 * {}
 * 
 * new Object()
 *
 */

/* ======================================================
// ** new Object(), {}

// Жека фрилансер по жизни

------------------------------------------------------ */
// Синтаксис
const userInfoLiteral = {}; 
const userInfoConstructor = new Object(); 

// Свойства
const userInfo = {
   key: "value",
   'second key': 52,
};

console.log(userInfo);
console.log(userInfo.key);
console.log(userInfo['second key']);

// === 02.

// Конкатенация ключа
const firstWord = "second";
const userInfo_02 = {
   key: "value",
   [firstWord + " key"]: 52,
};

console.log(userInfo['second key']);

// Квадратные скобки помогают обратиться к ключу
const name = "key";
console.log(userInfo_02[name]); // value

// === 03.

const userInfo_03 = {
   5: "value",
};

console.log(userInfo_03[5]); // value
console.log(userInfo_03["5"]); // value

// === 04.

// Symbol свайства не показываются в циклах
const id = Symbol('id');
const userInfo_04 = {
   key: "value",
   [id]: "id-value",
};

console.log(userInfo_04); // {key: "value", Symbol(id): "id-value"}
console.log(userInfo_04[id]); // id-value

// === 05.

// Объект в обекте
const userInfo_05 = {
   key: "value",
   id: {
      'one': 1,
      'two': 2,
   },
};

console.log(userInfo_05); // {key: "value", Symbol(id): {…}}
console.log(userInfo_05.id); // {id-1: 1, id-2: 2}
console.log(userInfo_05.id.two); // 2

// === 06.

function createUserId(key, id) {
   return {
      key: key,
      id: id,
   };
};

const user = createUserId("value", { 'one': 1, 'two': 2 });

console.log(user); // {key: "value", id: {…}}
console.log(user.key); // value
console.log(user.id.two); // 2