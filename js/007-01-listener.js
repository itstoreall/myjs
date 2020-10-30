/**
 * 
 * События. Создание и удаление слушателей
 * Ссылочная идентичность колбеков
 * Объект события
 * 
 * event.target - ссылка на элемент на котором произошло событие
 * 
 */

/*

//  - Концепция

// targetBtnRef.addEventListener("click", () => {
//    console.log(Date.now())
// })

// - Слушатель событий

// подключаемся к классу из разметки
const targetBtnRef = document.querySelector(".js-target-btn");
const addListenerBtnRef = document.querySelector(".js-add-listener");
const removeListenerBtnRef = document.querySelector(".js-remove-listener");

// вешаем слушатель

// колбек которую будут добавлять и удалать
const doStuffOnClick = () => {
   console.log("click!!!");
}

// при клике на эту кнопку вешает слушатель на целевую кнопку
addListenerBtnRef.addEventListener("click", () => {
   targetBtnRef.addEventListener("click", doStuffOnClick)
})

// при клике на эту кнопку вешает слушатель на целевую кнопку
removeListenerBtnRef.addEventListener("click", () => {
   targetBtnRef.removeEventListener("click", doStuffOnClick)
})

*/
/*

// - Объект события

// это служебный объект, создается браузером
// хранит служебные свойства для каждого типа событий

const targetBtnRef = document.querySelector(".js-target-btn");
const addListenerBtnRef = document.querySelector(".js-add-listener");
const removeListenerBtnRef = document.querySelector(".js-remove-listener");

// в каждый колбек в addEventListener будет приходить 
// объект события (по умолчанию)

targetBtnRef.addEventListener("click", (event) => {
   console.dir(event.target);
});

*/


