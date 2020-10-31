/**
 * 
 * Событие submit
 * Деействия браузера по умолчанию
 * Свойство elements
 * Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 * 
 * event.preventDefault() - предотвратить дефолтное поведение браузера
 * event.target - ссылка на DOM-узел (объект со свойствами)
 * event.target.elements (свойство) - в нем все интерактивные елементы формы
 * 
 * 
 */

// /*

// - Форма
// прослушивание вешается на саму форму (не на клик или инпут)

const formRef = document.querySelector(".js-register-form");
formRef.addEventListener("submit", event => {
   event.preventDefault();

   // присваеваем ссылку на элементы формы
   const formElements = event.target.elements;

   // console.log(formElements.subscription.value); // basic

   const formRef = event.target;
   const formData = new FormData(formRef)

   // создаем пустой объект для отправки на бэкэнд
   const submittedData = {}

   // соберает все значения и нэймы инпутов
   // и запихивает в специальную структуру

   formData.forEach((value, key) => {
      console.log("value:", value);
      console.log("key:", key);

      submittedData[key] = value;
   })

   console.log(submittedData)
});

// */