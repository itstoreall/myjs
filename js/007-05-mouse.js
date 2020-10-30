/**
 * 
 * mouseenter и mouseleave
 * mouseover и mouseout
 * mousemove (chatty event - болтливое событие)
 * Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 * 
 * - mouseenter - это аналог ховера в css
 * mouseenter игнорирует детей
 * 
 * - mouseover чувствует детей, над ребенком срабатывает новое событие
 * 
 * - mousemove - при движении курсора все время происходят события (высчитывает координаты)
 * 
 */

/* 

// - mouseenter и mouseleave

const boxRef = document.querySelector(".js-box");

// когда на элементе boxRef произойдет событие входа мышки
boxRef.addEventListener("mouseenter", event => {
   const box = event.target;

   // добавляем в див boxRef новый класс
   box.classList.add("box--active");
});

// когда мышка уходит
boxRef.addEventListener("mouseleave", event => {
   const box = event.target;

   // удаляем с дива boxRef класс .box--active
   box.classList.remove("box--active");
});

*/
/* 

// - mouseover и mouseout

const boxRef = document.querySelector(".js-box");

// когда на элементе boxRef произойдет событие входа мышки
boxRef.addEventListener("mouseover", event => {
   const box = event.target;

   // добавляем в див boxRef новый класс
   box.classList.add("box--active");
});

// когда мышка уходит
boxRef.addEventListener("mouseout", event => {
   const box = event.target;

   // удаляем с дива boxRef класс .box--active
   box.classList.remove("box--active");
});

*/
/* 

// - mousemove

const boxRef = document.querySelector(".js-box");

boxRef.addEventListener("mouseover", event => {
   const box = event.target;
   box.classList.add("box--active");
});

boxRef.addEventListener("mouseout", event => {
   const box = event.target;
   box.classList.remove("box--active");
});

// высчитывает координаты каждого движения мышки
boxRef.addEventListener("mousemove", event => {
   console.log(event);
})

*/