import products from "./007-products.js";

console.table(products)

// делает разметку карточки
// функция принимает объект карточки
const createProductCard = product => {

   // создает див
   const containerRef = document.createElement("div")
   containerRef.classList.add('product-card');

   // создает h2
   const titleRef = document.createElement("h2")
   titleRef.textContent = product.name;

   const inStockClass = product.available
      ? "product-card__name--available"
      : "product-card__name--not-available";
   
   titleRef.classList.add("product-card__name", inStockClass);

   // создает p
   const descrRef = document.createElement("p");
   descrRef.textContent = product.description;

   // создает цену
   const priceRef = document.createElement("p");
   priceRef.textContent = `${product.price} грн`;

   // добавляет в элементы в контейнер
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