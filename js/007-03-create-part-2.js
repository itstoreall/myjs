/**
 * 
 * - Карточка товара
 * 
 */

// /*

import products from "./007-products.js";

console.table(products)

// делает разметку карточки
// функция принимает объект карточки
const createProductCard = product => {

   // создает див Product Card
   const containerRef = document.createElement("div")
   containerRef.classList.add('product-card');

   // создает H2
   const titleRef = document.createElement("h2")
   titleRef.textContent = product.name;

   // при false или true меняет классы
   const inStockClass = product.available
      ? "product-card__name--available"
      : "product-card__name--not-available";
   
   // задает текущий класс ::before
   titleRef.classList.add("product-card__name", inStockClass);

   // создает p
   const descrRef = document.createElement("p");
   descrRef.textContent = product.description;

   // создает цену
   const priceRef = document.createElement("p");
   priceRef.classList.add("product-card__text")
   priceRef.textContent = `${product.price} грн`;

   // добавляет элементы в контейнер
   containerRef.append(titleRef, descrRef, priceRef);
   
   // возвращает ссылку на контейнер
   return containerRef;

};

// возвращает (массив) результат для каждого продукта
const productCards = products.map(product => createProductCard(product));
console.log(productCards);

// получает ссылку на див в html и распыляем в него все элементы (карточки)
// ...productCards - распыляет массив в отдельные аргументы

const productsListRef = document.querySelector(".js-products");
productsListRef.append(...productCards);
console.log(productsListRef)

// */