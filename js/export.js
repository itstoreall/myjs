// Export (Modules)

// Variables
export let one = 1;

let two = 2;
let three = 3;

export { two, three };

let four = 4;
let five = 5;
   
// Class
export class Person {
   constructor(name) {
      this.name = name
   };
};

class User {
   constructor(name) {
      this.name = name
   };
};

// Function
export function seyHello() {
   console.log("Hello!");
};

function showName() {
   console.log("Bobby");
};

export { User, showName };

// Rename
export { four as fourly, five as fively };
   
// default export
export default class secondPerson {
   constructor(name) {
   this.name = name
   };
};
   
// =================

export const foo = "It's foo";

export let buz = 'bar'
setTimeout(() => buz = 'baz', 500);

const item_01 = "Hi";
const item_02 = "my";
const item_03 = "friend";
export { item_01, item_02, item_03 };

const apiObject = {
  foo: "It's",
  bar: 'api object'
}

export { apiObject };

export const expFunc = () => console.log("exp-func");