/*
 *
 * - Разница в производительности 
 *
 * map против reduce
 * 
 */

/*

// - Код проверки

const array = new Array(100);

console.time("map");
array.map(el => el);
console.timeEnd("map");

console.time("dirty reduce");
array.reduce((acc, el) => acc.push(el), []);
console.timeEnd("dirty reduce");

console.time("dirty reduce");
array.reduce((acc, el) => [...acc, el], []);
console.timeEnd("dirty reduce");

*/

/*
 *
 * - Object.entries()
 * 
 * масссив ключей и значений
 *
 */

/*

// - Получаем массив имен ключей у которых значение true

const options = {
  yellow: true,
  blue: false,
  teal: false,
  orange: true,
  rosered: true,
  violet: false,
}

// получаем массив ключей со значениями

const entries = Object.entries(options);

console.table(entries);

// получаем свойства, значения которых true
// под индексом 0 стоит имя ключа,
// под индексом 1 стоит значение

const selectedOptions = entries.filter(entry => entry[1])

console.table(selectedOptions) // получаем 3 массива со значением true

// получаем имена улючей отфильтрованного массива

const colors = selectedOptions.map(option => option[0]);

console.log(colors) // (3) ["yellow", "orange", "rosered"]

*/
/*

// - Рефакторинг этого же кода 

const options = {
  yellow: true,
  blue: false,
  teal: false,
  orange: true,
  rosered: true,
  violet: false,
}

const colors = Object.entries(options).filter(entry => entry[1]).map(option => option[0]);

console.log(colors) // (3) ["yellow", "orange", "rosered"]

*/
/*

// - Деструктуризация этого же кода 

const options = {
  yellow: true,
  blue: false,
  teal: false,
  orange: true,
  rosered: true,
  violet: false,
}

// меняем entry на селект 

const colors = Object.entries(options).filter(([key, selected]) => selected).map(option => option[0]);

console.log(colors) // (3) ["yellow", "orange", "rosered"]

*/
