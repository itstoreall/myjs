/**
 * 
 * Типы сообщщений: keypress, keydown, keyup
 * Ограничения keypress
 * Свойства объекта события клавиатуры
 * 
 * - keydown используется когда при зажатой кнопке нужно 
 * включить дополнительный фунуционал, а при keyup снять его
 * - keydown срабатывает на все клавиши, включая escape и др.
 * - keypress срабатывает на нажатие клавиш которые генерят символ
 * - event.key - хранит символ который был сгенерирован при нажатии
 * - event.code - хранит физическое представление кнопки в независимости от раскладки
 * 
 */

/* 

// - Концепция

window.addEventListener("keydown", event => {
   console.log("event.key:", event.key);
   console.log("event.code:", event.code);

   // если нажать клавишу G выведет "WIN!"
   if (event.code === "KeyG") {
      console.log("WIN!")
   }
})

*/
/*

// - Пишем текс прямо в окне браузера

const outputRef = document.querySelector(".js-output");
const clearBtnRef = document.querySelector(".js-clear");

// написать текст в окне
window.addEventListener("keydown", onKeypress);

// очистить окно от текста
clearBtnRef.addEventListener("click", onClearOutput)

function onKeypress(event) {
   outputRef.textContent += event.key;
};

// очистка окна браузера от написанного текста
function onClearOutput() {
   outputRef.textContent = "";
}

*/