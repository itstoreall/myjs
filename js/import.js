import { two as second, three as third } from './export.js';
import { fourly, fively } from './export.js';
import * as numbers from './export.js';
import secondPerson from './export.js';

console.log(numbers.one, second, third, fourly, fively); // 1 2 3 4 5

const sP = new secondPerson("Peter");
console.log(sP); // secondPerson {name: "Peter"}

console.log(numbers.foo); // bar

console.log(numbers.buz); // bar
setTimeout(() => console.log(numbers.buz), 2000); // buz

console.log(numbers.item_03);

console.log(numbers.apiObject.foo, numbers.apiObject.bar);

console.log(numbers.expFunc()); // undefined (при этом вызывается exp-func - export.js:67)
