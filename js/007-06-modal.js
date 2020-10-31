/**
 * 
 * - Modal
 * Открыть и закрыть по кнопке
 * Закрыть по клику в бекдроп
 * Закрыть по ESC
 * 
 * - Не использовать display: none !
 * - Использовать opacity и transform
 * 
 * - event.target - хранит ссылку на элемент на котором произошло событие
 * - event.currentTarget - элемент на который повесили обработчик
 * 
 */

// /*

// - Полный код модаки

// Селекторы
const openModalBtn = document.querySelector('button[data-action="open-modal"]');
const closeModalBtn = document.querySelector('button[data-action="close-modal"]');
const backdropRef = document.querySelector(".js-backdrop");

// - открывает модалку
openModalBtn.addEventListener("click", onOpenModal)

// - закрывает через клик по кнопке
closeModalBtn.addEventListener("click", onCloseModal)

// - Закрытие через клик по бэкдропу
backdropRef.addEventListener("click", onBackdropClick)

// Колбэки
function onOpenModal() {

   // закрытие через Escape регистрируется в открытии модалки
   window.addEventListener("keydown", onPressEscape);
   
   // открытие модалки
   document.body.classList.add("show-modal");
};

function onCloseModal() {

   // при закрытии снимает слушателя закрытия через Escape
   window.removeEventListener("keydown", onPressEscape);

   // закрытие модалки
   document.body.classList.remove("show-modal");
}

function onBackdropClick(event){
   // console.log("event.target:", event.target);
   // console.log("event.currentTarget:", event.currentTarget);

   // если target === currentTarget удаляем класс с боди
   if (event.target === event.currentTarget) {
      onCloseModal();
   }
};

function onPressEscape(event) {
   if (event.code === "Escape") {
      onCloseModal();
   }
};

// */