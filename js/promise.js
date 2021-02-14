/*
 *
 * Promise
 *
 */

//  Conditions
// - pending - обрабатывается
// - settled - обработан

export default fetch('https://jsonplaceholder.typicode.com/posts/')
   .then(res => res.json())
  .then(value => {value})
   .catch(() => console.log("some error..."));

/* 
const promise = new Promise((resolve, reject) => {

   throw new Error('some error...');
   setTimeout(() => {
      if (true) {
         resolve("promise complited!");
      } else {
         reject();
      }
   }, 1000);
});

// Подписка на изменения Промиса
promise
   .then(data => console.log(data))
   .catch(() => console.log('error'));
*/

/* асинхронная операция
function cookBurger(type) {
   console.log("cookBurger", type);
   return false;
 }

// обычная операция
function makeMilkshake(type) {
   console.log("makeMilkshake", type);
}

// функция заказа, которая возвращает промис
function order (type) {
   return new Promise(function(resolve, reject) {
      var burger = cookBurger(type)
      burger.ready = function (err, burger) {
         if (err) {
            return reject(Error('Error while cooking'))
         }
         return resolve(burger)
      }
   })
}

order('JakeBurger')
  .then( burger => {
    const milkshake = makeMilkshake('vanila')
    return { burger: burger, shake: milkshake }
  })
  .then( foodItems => {
    console.log('BURGER PARTY !', foodItems)
  })
  .catch( err => {
    console.log(err)
  })

  // асинхронная операция
function cookBurger(type) {
   console.log("cookBurger", type);
   return false;
 }

// обычная операция
function makeMilkshake(type) {
   console.log("makeMilkshake", type);
}
*/