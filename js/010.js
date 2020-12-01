/*
 * 
 * JSON
 * 
 */

/*

// Имеем оъект

const book = {
   name: "Охота на фазана",
   autor: "Марта Кэтра",
   genre: "детектив",
   pageCount: 724,
   publish: "ООО Астраль",
};

console.log(book);

// Приобразование к строке
// JSON.stringify(book)

const string = JSON.stringify(book);
console.log(string);

// Приобразование в объект
// JSON.parse(string)

const parsed = JSON.parse(string);
console.log(parsed);

*/

/*
 * 
 * Web Storage API (window.localStorage)
 * 
 * localStorage — хранилище, которое охватывает 
 * несколько окон и сохранятеся после текущего 
 * сеанса. В частности, веб-приложения могут 
 * сохранить пользовательские данные, такие 
 * как настройки профиля или содержимое 
 * корзины товаров на стороне клиента.
 * Позволяет хранить данные без истечения 
 * срока действия в формате пар ключ:значение 
 * на компьютере пользователя и читать их, 
 * когда пользователь снова 
 * вернется на страницу.
 * 
 * sessionStorage 
 * — используется для добавления данных в хранилище 
 * сеансов, и данные этого хранилища будут доступны 
 * для любой страницы с того же сайта, открытого в 
 * этом окне, т.е. сессии, и как только окно будет 
 * закрыто, сеанс будет завершен, а хранилище 
 * сеансов очищено.
 * 
 */

/* 

// Сохранить данные
// localStorage.setItem(key, value)

// имеем обж
const settings = {
   theme: "dark",
   fontSize: 14,
}

// приобразовуем в json строку и добавляем в localStorage
localStorage.setItem("settings", JSON.stringify(settings));

*/
/*

// Причитать данные
// localStorage.getItem(key)

// получаем строку
const savedSettings = localStorage.getItem("settings");

// получаем распарсиный обж
const parsedSettings = JSON.parse(savedSettings);

console.log(parsedSettings); // {theme: "dark", fontSize: 14}
console.log(parsedSettings.theme); // dark
console.log(parsedSettings.fontSize); // 14

*/
/*

// Удаление пары
// localStorage.removeItem(key)

// Для того чтобы удалить пару, необходимо 
// вызвать метод и передать ему ключ.

const femoveSettings = localStorage.removeItem("settings");

// Полная очистка хранилища
// localStorage.clear()

const clearAll = localStorage.clear();

*/
/*

// Feedback

const refs = {
   form: document.querySelector(".js-feedback-form"),
   textarea: document.querySelector('.js-feedback-form textarea')
};

populateMessage();

refs.form.addEventListener("submit", handleFormSubmit);
refs.textarea.addEventListener("input", handleTextareaInput);

// Submit
function handleFormSubmit(event) {
   event.preventDefault();
   
   // удаляем пару из локалсторэдж
   localStorage.removeItem("feedback-message");

   // очищаем текстэриа
   event.currentTarget.reset();
};

// Textarea
function handleTextareaInput(event) {
   const message = event.currentTarget.value;

   // Текст из текстэрия записать в localStorage
   localStorage.setItem("feedback-message", message)
};

function populateMessage() {
   const saveMessage = localStorage.getItem('feedback-message');

   // Если в localStorage есть текст, показываем его в тексэрия
   if (saveMessage) {
      refs.textarea.value = saveMessage;
   };
};

*/

/**
 * 
 * Шаблонизация
 * 
 */

 /*

// Вариант 1.
// Используем innerHTML
// Недостаток - при коздам изменении он пересоздает
// весь html заново - это плохо

const tech = ["html", "css", "js", "react"];

// 1. Берем ссылку на галлерею
const galleryRef = document.querySelector('.js-gallery');

// 2. Создаем html конструкцию (без шаблонной строки)
const element = '<li><a href="">Hello</a></li>';

// 3. Парсим в галлерею
galleryRef.innerHTML = element;

*/
/*

// Вариант 2.
// Используем insertAdjacentHTML
// Этот метод добавляет в нужное место на трогая всю разметку

// 'beforebegin' - перед element
// 'afterbegin' - внутрь element, в самое начало контента
// 'beforeend' - внутрь element, в самый конец контента
// 'afterend' - после element

const tech = ["html", "css", "js", "react"];

// 1. Берем ссылку на галлерею
const galleryRef = document.querySelector('.js-gallery');

// 2. Создаем html конструкцию (без шаблонной строки)
const element = '<li><a href="">Hello</a></li>';

// 3. Парсим в галлерею
galleryRef.insertAdjacentHTML("beforeend", element);

*/
/*

// Вариант 2.1. 
// Добавляем разметку в галлерею

const tech = ["html", "css", "js", "react"];

const galleryRef = document.querySelector('.js-gallery');

// 1. Проходимся по массиву мэпом и чейним джойн
// получаем одну большую строку
const markup = tech.map(el => `<li><a href="">${el}</a></li>`).join('');

// 2. Передаем в элемент строку и рендерится разметка
galleryRef.insertAdjacentHTML("beforeend", markup);

*/
/*

// Шаблонизатор Handlebars (без webpack - OldSchool)
// https://handlebarsjs.com
// Добавляем CDN в head перед стилями --v
// https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.min.js
// Добавляем в html разметку Templating Gallery
// trim обрезает пробелы вокруг элемента

const tech = ["html", "css", "js", "react"];

const html = document.querySelector('#list-item').innerHTML.trim();
console.log(html);

const template = Handlebars.compile(html);

const markup = template({
   items: ["html", "css", "js", "react"],
});

console.log(markup);

const galleryRef = document.querySelector('.js-gallery');

galleryRef.insertAdjacentHTML("beforeend", markup);

*/