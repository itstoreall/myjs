/**
 * 
 * События input и change
 * Чекбоксы и свойство checked
 * 
 * change - заменяет имя в кнопке на имя указанное в инпуте
 * input - также заменяет имя, но динамически изменяется при вводе
 * checked - выбран/не выбран - true/false
 * 
 */

/*

// получаем ссылки на элементы

const btnRef = document.querySelector(".js-button");
const inputRef = document.querySelector(".js-input");
const nameLabelRef = document.querySelector(".js-button > span");
const licenseRef = document.querySelector(".js-license");

// при фокусе инпута, в консоль выводится Получил фокус
inputRef.addEventListener("focus", () => {
   console.log("Получил фокус");
})

// при потере фокуса инпута, в консоль выводится Потерял фокус
inputRef.addEventListener("blur", () => {
   console.log("Потерял фокус");
})

// изменяет имя в кнопке на указанное в инпуте
inputRef.addEventListener("input", event => {
   nameLabelRef.textContent = event.target.value
});

// вешаем слушатель на чекбокс
licenseRef.addEventListener("change", event => {
   console.log(event)

   // если чекбокс чекнутый значит кнопка disabled и наоборот
   btnRef.disabled = !event.target.checked
})

*/
/* 

// ========== Рефакторинг кода ==========

// Ссылки

const btnRef = document.querySelector(".js-button");
const inputRef = document.querySelector(".js-input");
const nameLabelRef = document.querySelector(".js-button > span");
const licenseRef = document.querySelector(".js-license");

// Слушатели

inputRef.addEventListener("focus", handleInputFocus);
inputRef.addEventListener("blur", handleInputBlur);
inputRef.addEventListener("input", handleInputChange);
licenseRef.addEventListener("change", handleLicenseChange);

// Колбэки

function handleInputFocus(event) {
   console.log("Получил фокус!");
};

function handleInputBlur(event) {
   console.log("Потерял фокус!");
};

function handleInputChange(event) {
   nameLabelRef.textContent = event.target.value;
};

function handleLicenseChange(event) {
   btnRef.disabled = !event.target.checked
};

*/