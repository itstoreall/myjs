/*
 *
 * Capture - погружение, начинается на виндов,
 * проходит через все узлы-предки
 *
 * Target phase - уведомляет узел о том, что
 * событие дошло до целевого элемента
 *
 * Bubbling phase - событие всплывает через
 * все узлы-предки, до виндов
 *
 */

/**
 *
 * Всплыие события
 *
 * event.target - (свойство) целевой элемент
 * на котором произошло событие (например клик)
 *
 * event.currentTarget - ссылка на тот элемент,
 * на котором мы словили событие (элемент на
 * который повесили обраюотчик)
 *
 */

/*

// - Концепция target и currentTarget

const refs = {
   parent: document.querySelector("#parent"),
   child: document.querySelector("#child"),
   innerChild: document.querySelector("#inner-child")
};

const parentClickHandler = event => {
   console.log("PARENT click handler");
   console.log("target:", event.target);
   console.log("currentTarget:", event.currentTarget);
};

const childClickHandler = event => {
   console.log("CHILD click handler");
   console.log("target:", event.target);
   console.log("currentTarget:", event.currentTarget);
};

const innerChildClickHandler = event => {
   // event.stopPropagation(); // Метод остановки всплытия (на объекте события)
   console.log("INNER CHILD click handler");
   console.log("target:", event.target);
   console.log("currentTarget:", event.currentTarget);
};

refs.parent.addEventListener("click", parentClickHandler);
refs.child.addEventListener("click", childClickHandler);
refs.innerChild.addEventListener("click", innerChildClickHandler);

*/
/*

/**
 *
 * Делегирование событий (event delegation)
 *
 * Это средство оптимизации интерфейса - важнейший приём разработки
 * - Ставим один обработчик на их общего предка
 *
 */

/*

// - Вешаем класс active на все, но только нужные элементы

// Объект ссылок
const refs = {
   tags: document.querySelector(".js-tags"),
};

// Вешаем слушатель
refs.tags.addEventListener("click", onTagsClick);

// Функция клика
function onTagsClick(event) {

   // Показать имя элемента по которому кликнули
   console.log(event.target.nodeName);

   // Если кликнули не по кнопке
   if (event.target.nodeName === "BUTTON") {

   // Добавляем класс active при клике
   const tagBtn = event.target;
      tagBtn.classList.add("active");
   };
};

*/
/*

// - Вешаем класс active только на один нужный элемент

const refs = {
   tags: document.querySelector(".js-tags"),
};

refs.tags.addEventListener("click", onTagsClick);

function onTagsClick(event) {
   if (event.target.nodeName !== "BUTTON") {
      console.log("Это не кнопка");
   };

   // Ищем в ul элемент с классом active
   const currentActiveTag = event.currentTarget.querySelector('.active');

   // Если currentTarget === true, тогда снимаем класс
   if (currentActiveTag) {
      currentActiveTag.classList.remove("active");
   }

   // и добавляем на кликнутый элемент
   const nextActiveTag = event.target;
   nextActiveTag.classList.add("active")
};

*/
/*

// - При клике вешаем класс только если это кнопка
// и снимаем класс с нажатой ранее.
// - Готовый код (объединил два предидущих)

const refs = {
   tags: document.querySelector(".js-tags"),
};

refs.tags.addEventListener("click", onTagsClick);


function onTagsClick(event) {
   console.log(event.target.nodeName);
   const currentActiveTag = event.currentTarget.querySelector('.active')
   const tagBtn = event.target;

   if (event.target.nodeName === "BUTTON") {
      tagBtn.classList.add("active");

      if (currentActiveTag) {
      currentActiveTag.classList.remove("active");
      };
   };
};

*/
/*

// - При клике получаем значение кнопки dataset.value

const refs = {
   tags: document.querySelector(".js-tags"),

   // добавляем ссылку на элемент p в который будем выводить значение dataset.value
   activeTagOutput: document.querySelector(".js-active-tag"),
};

refs.tags.addEventListener("click", onTagsClick);

function onTagsClick(event) {
   const currentActiveTag = event.currentTarget.querySelector('.active')
   const tagBtn = event.target;

   if (event.target.nodeName === "BUTTON") {
      tagBtn.classList.add("active");

      // Получаем текущее значние (dataset.value)
      refs.activeTagOutput.textContent = console.log(tagBtn.dataset.value);

      if (currentActiveTag) {
         currentActiveTag.classList.remove("active");
      };
   };
};

*/
/*

// - Готовый код из всех выше изложенных

const refs = {
   tags: document.querySelector(".js-tags"),
   activeTagOutput: document.querySelector(".js-active-tag"),
};

refs.tags.addEventListener("click", onTagsClick);

// Функция отвечает за обработку клика и следит за тем
// чтобы мы кликнули туда куда нужно

function onTagsClick(event) {
  if (event.target.nodeName !== "BUTTON") {
     console.log("Это не кнопка");
     return;
   }; 

   const nextActiveTag = event.target;
   const activeTagValue = nextActiveTag.dataset.value;

   // во время клика сетится активный тег
   setActiveTag(nextActiveTag);

   // и апдейтится аутпут
   updateOutput(activeTagValue);
};

// Эта функция получает ссылку на активный тег nextActiveTag и
// снимает класс с предидущего и добавляет к который кликнули
function setActiveTag(nextActiveTag) {
   const currentActiveTag = refs.tags.querySelector('.active')

   if (currentActiveTag) {
      currentActiveTag.classList.remove("active")
   };

   nextActiveTag.classList.add("active");
};

// Функция получает и выводи значение dataset.value
function updateOutput(value) {
   refs.activeTagOutput.textContent = value;
};

*/
/*

JS - синхронный язык 
(все действия выпол. последователтно) 

Throttle

Прием throttle обеспечивает контроль над 
количеством раз, которое функция может 
быть вызвана в течение промежутка времени. 
То есть позволяет выполнять функцию не 
чаще чем один раз в N миллисекунд, 
гарантируя ее регулярное выполнение.

Используют на скроле или на кнопке

_.throttle(func, [wait=0], [options={}])

Debounce

Прием debounce гарантирует, что функция не 
будет вызывана снова, пока не пройдет 
определенное количество времени без ее 
вызова. То есть позволяет выполнить функцию, 
только если прошло N миллисекунд без ее 
вызова, группируя множественные вызовы в один

Используют если нужен живой поиск

*/

// https://lodash.com
// https://lodash.com/docs/4.17.15

/**
 * 
 * - mousemove
 * 
 */

/*

// Без использования Throttle

const coordsOutputRef = document.querySelector(".js-coords");
let mouseMoveCallbackCounter = 0;

window.addEventListener("mousemove", event => {
   mouseMoveCallbackCounter += 1;

   coordsOutputRef.textContent = `Кол-во вызовов callback-функции 💩 : ${mouseMoveCallbackCounter},
   X: ${event.clientX},
   Y: ${event.clientY}`;
});

*/
/*

// С использованием Throttle

const coordsOutputRef = document.querySelector(".js-coords");
let mouseMoveCallbackCounter = 0;

const throttledMousemoveCallback = _.throttle(event => {
   mouseMoveCallbackCounter += 1;

   coordsOutputRef.textContent = `Кол-во вызовов callback-функции 💩 : ${mouseMoveCallbackCounter},
   X: ${event.clientX},
   Y: ${event.clientY}`;
}, 200);

window.addEventListener("mousemove", throttledMousemoveCallback);

*/

/**
 * 
 * - input
 * 
 */

/*

// Без использования Debounce

const inputRef = document.querySelector(".js-input");
const outputRef = document.querySelector(".js-output");
let inputCallbackCounter = 0;

inputRef.addEventListener("input", event => {
   inputCallbackCounter += 1;

   outputRef.textContent = `
   Кол-во вызовов callback-функции 💩 : ${inputCallbackCounter},
   Значние: ${event.target.value}`;
});

*/
/*

// С использованием Debounce

const inputRef = document.querySelector(".js-input");
const outputRef = document.querySelector(".js-output");
let inputCallbackCounter = 0;

const debounceInputCallback = _.debounce(event => {
   inputCallbackCounter += 1;

   outputRef.textContent = `
   Кол-во вызовов callback-функции 💩 : ${inputCallbackCounter},
   Значние: ${event.target.value}`;
}, 3000);

inputRef.addEventListener("input", debounceInputCallback);

*/

/**
 * 
 * Intersection Observer API (class)
 * 
 * Это наблюдатель за пересечениями
 * Интерфейс предоставляет возможность 
 * наблюдать за заданными элементами и упрощает 
 * реализацию отслеживания изменения в их 
 * пересечении с заданным элементом-предком 
 * или самим окном просмотра (viewport), 
 * то есть слежения за видимостью элемента
 * API - это набор методов
 * 
 * Observer (наблюдатель, обзервер) - результат 
 * вызова класса IntersectionObserver, его 
 * экземпляр, объект с методами.
 * 
 * Root (корень, контекст) - это элемент, 
 * который ожидает пересечения элемента-цели. 
 * Основа наблюдателя. По умолчанию это окно 
 * просмотра браузера (viewport), но может 
 * использоваться любой другой элемент, 
 * если этого требует задача.
 * 
 * Target (цель) - элемент, за которым следит 
 * наблюдатель и оповещает о его вхождении в 
 * корень. Целью может быть любой элемент. 
 * Один наблюдатель может отслеживать 
 * множество различных целей.
 * 
 */

/*

// 1. 
// Создаем экземпляр IntersectionObserve()
// в скобки передпем callback функцию которая
// получит 2 аргумента. Параметры:
// - entries - это все вхождения (массив вхождений)
// - observer - это ссылка на сам экземпляр (то что он вернет)
// Когда boxRef будет пересекать root (viewport)
// будет выполняться callback
const io = new IntersectionObserver((entries, observer) => {
   entries.forEach(entry => {
      console.log(entry);

      // если обсервер пересекает выводи фразу 
      if (entry.isIntersecting) {
         console.log(`Box ${entry.target.textContent} пересекает Root`);
      }
   })
})

// Находим .js-box
const boxRef = document.querySelector(".js-box");

// в скобках ссылка на элемент за которым наблюдать 
io.observe(boxRef);

*/
/*

// 2.
// Добавляем опции rootMargin и threshold

const onEnrey = (entries, observer) => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         console.log(`Box ${entry.target.textContent} пересекает Root`);
      }
   })
}

const options = {
   rootMargin: "100px", // маржин до пересечения
   // threshold: [0, 0.25, 0.5, 0.75, 1], // процент вхождения элемента
};

const io = new IntersectionObserver(onEnrey, options)

const boxRef = document.querySelector(".js-box");

io.observe(boxRef);

*/
/*

// 3.
// Выполняем слежение только один раз и всё

const onEntrey = (entries, observer) => {
   entries.forEach(entry => {
      console.log(entry)
      
      if (entry.isIntersecting) {
         console.log(`Box ${entry.target.textContent} пересекает Root`);

         // после первого пересечения больше не следит
         observer.disconnect();
      }
   })
}

const options = {
   // rootMargin: "100px", // маржин до пересечения
   // threshold: [0, 0.25, 0.5, 0.75, 1], // процент вхождения элемента
};

const io = new IntersectionObserver(onEntrey, options)

const boxRef = document.querySelector(".js-box");

io.observe(boxRef);

*/

/**
 * 
 * - Geri
 * 
 */

// Scroll 

/*

// 1. Подключаем функцию

const refs = {
   progress: document.querySelector(".progress-008"),
   sections: document.querySelector(".sections-008"),
   sectionList: document.querySelectorAll(".section-008"),
}

// В value прогресс линии присваеваем значение sections.clientHeight
refs.progress.value = refs.sections.clientHeight;

// В max прогресс лмнии приываеваем sections.scrollHeight
refs.progress.max = refs.sections.scrollHeight;

function handleScroll(e) {
   refs.progress.value = e.target.scrollTop + refs.sections.clientHeight;

   console.log("scroll...");
}

// вешаем на див с секциями слушатель скролл
refs.sections.addEventListener("scroll", handleScroll);

*/

/**
 * В google набрать cdnjs lodash
 * Скопировать ссылку .min и вставить в хэд
 * https://cdnjs.com/libraries/lodash.js
 * 
 * В гугле набираем lodash 
 * Нажимаем на Documentation в органич. поиске
 * 
 */

/*

// 2. Debounce cdn Lodash
// - Ждет пока пользователь не закончит

const refs = {
   progress: document.querySelector(".progress-008"),
   sections: document.querySelector(".sections-008"),
   sectionList: document.querySelectorAll(".section-008"),
}

refs.progress.value = refs.sections.clientHeight;
refs.progress.max = refs.sections.scrollHeight;

function handleScroll(e) {
   refs.progress.value = e.target.scrollTop + refs.sections.clientHeight;

   console.log("scroll...");
}

refs.sections.addEventListener("scroll", _.debounce(handleScroll, 500));

*/
/*

// 3. Trottle cdn Lodash
// - Срабатывает через отределенный интервал времени

const refs = {
   progress: document.querySelector(".progress-008"),
   sections: document.querySelector(".sections-008"),
   sectionList: document.querySelectorAll(".section-008"),
}

refs.progress.value = refs.sections.clientHeight;
refs.progress.max = refs.sections.scrollHeight;

function handleScroll(e) {
   refs.progress.value = e.target.scrollTop + refs.sections.clientHeight;

   console.log("scroll...");
}

refs.sections.addEventListener("scroll", _.throttle(handleScroll, 300));

*/

// Input

/*

// 1. Debounce cdn Lodash
// - Имитация поиска в магазине

const refs = {
   input: document.querySelector("#input"),
};

const handleInput = (e) => {
   console.log("Search:", e.target.value)
};

// Дебаунсим ввод в инпут
refs.input.addEventListener("input", _.debounce(handleInput, 400));

*/
/*

// Пишем свой Debounce

const refs = {
   progress: document.querySelector(".progress-008"),
   sections: document.querySelector(".sections-008"),
   sectionList: document.querySelectorAll(".section-008"),
}

refs.progress.value = refs.sections.clientHeight;
refs.progress.max = refs.sections.scrollHeight;

function debounce(callback, delay) {

   // Возвращает id очереди
   let debounceId

   return function (e) {

      // Отодвигаем запуск до последнего раза
      clearTimeout(debounceId);

      // Запускаем все фуекции, только позже
      debounceId = setTimeout(() => {
         callback(e);
      }, delay);
   };
};

function handleScroll(e) {
   refs.progress.value = e.target.scrollTop + refs.sections.clientHeight;

   console.log("scroll...");
}

refs.sections.addEventListener("scroll", debounce(handleScroll, 500));

*/
/*

// Пишем свой Throttle

const refs = {
   progress: document.querySelector(".progress-008"),
   sections: document.querySelector(".sections-008"),
   sectionList: document.querySelectorAll(".section-008"),
}

refs.progress.value = refs.sections.clientHeight;
refs.progress.max = refs.sections.scrollHeight;

function throttle(callback, delay) {
   let throttleId;

   return function (e) {

      // Проверяем, если в очереди есть id - значит выйти
      if (throttleId) {
         return;
      }

      throttleId = setTimeout(() => {
         callback(e);

         // Чистит id после выполнения
         throttleId = 0;

      }, delay);
   }
}

function handleScroll(e) {
   refs.progress.value = e.target.scrollTop + refs.sections.clientHeight;

   console.log("scroll...");
}

refs.sections.addEventListener("scroll", throttle(handleScroll, 500));

*/
/*

// Intersection Observer

const refs = {
   progress: document.querySelector(".progress-008"),
   sections: document.querySelector(".sections-008"),
   sectionList: document.querySelectorAll(".section-008"),
};

refs.progress.value = refs.sections.clientHeight;
refs.progress.max = refs.sections.scrollHeight;

const options = {};

const onEntry = entries => {
   entries.forEach(entry => {
      const prev = document.querySelector("li.active");
      const currentId = entry.target.dataset.id;
      const currentMenuItem = document.querySelector(
         `li[data-id="${currentId}"]`, 
      );

      if (entry.isIntersecting) {
         if (prev) {
            prev.classList.remove("active");
         }
         currentMenuItem.classList.add("active");
      };
   })
};

const sectionObserver = new IntersectionObserver(onEntry, options);
refs.sectionList.forEach(section => sectionObserver.observe(section));

*/
/*

// Загрузка картинок (Intersection Observer)

const refs = {
   progress: document.querySelector(".progress-008"),
   sections: document.querySelector(".sections-008"),
   sectionList: document.querySelectorAll(".section-008"),
};

refs.progress.value = refs.sections.clientHeight;
refs.progress.max = refs.sections.scrollHeight;

const options = {
   threshold: 0.2, // 20% вошла сеуция, только поьом сработка
};

const onEntry = entries => {
   entries.forEach(entry => {
      const prev = document.querySelector("li.active");
      const currentId = entry.target.dataset.id;
      const currentMenuItem = document.querySelector(
         `li[data-id="${currentId}"]`, 
      );

      if (entry.isIntersecting) {

         // находим картинку внутри секции
         const img = entry.target.querySelector("img");

         // берем url картинки которая входит в вьюпорт
         const { url } = img.dataset;

         img.src = url

         if (prev) {
            prev.classList.remove("active");
         }
         currentMenuItem.classList.add("active");
      };
   })
};

const sectionObserver = new IntersectionObserver(onEntry, options);
refs.sectionList.forEach(section => sectionObserver.observe(section));

*/