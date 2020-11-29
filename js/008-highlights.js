
/* ===========================================
** all

- Метод остановки всплытия (на объекте события)
event.stopPropagation();

- Находим картинку внутри секции (Intersection Observer)
const img = entry.target.querySelector("img");

- Находим id внутри секции (Intersection Observer)
const currentId = entry.target.dataset.id;

- Создаем динамический id (Intersection Observer)
const currentMenuItem = document.querySelector(`li[data-id="${currentId}"]`, );

- Пересекающая вьюпорт секция
entry.isIntersecting

------------------------------------------- */

/* ===========================================
** data-атрибуты (в теге img)

- Достучаться к картинке внутри секции
const img = document.querySelector(".section[data-id="section-5"] img");
console.log(img.dataset); // доступ ко всем значениям dataset
console.log(img.dataset.url); // доступ к url картинки
img.src = img.dataset.url // присваиваем картинке url из dataset

- Деструктуризация для артибутов картинок
const { url, username } = img.dataset;
img.src = url;
console.log(url);
console.log(username);

- Присвоение нового значения в имеющийся data-атрибут
img.dataset.username = "Bobby";
console.log(img.dataset.username);

------------------------------------------- */

/* ===========================================
** lazy loading (атрибут тега img)

- Пример
<img data-src="cats.jpg" alt="…" loading="lazy" class="lazyload">

- Атрибут для ленивой загрузки (добавить в верстку в тег)
loading="lazy"

- Полифил для lazy loading
<script>
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    // Dynamically import the LazySizes library
    const script = document.createElement('script');
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
    document.body.appendChild(script);
  }
</script>

------------------------------------------- */

/* ===========================================
** Разное

event.target - ссылка на исходный элемент, на котором произошло событие
event.currentTarget - текущий элемент, до которого дошло всплытие, на нём сейчас выполняется обработчик

https://lodash.com
https://lodash.com/docs/4.17.15

------------------------------------------- */

/* ===========================================
** Решение 008 Task-01

- Создаем галлерею с перелистыванием по кругу

import images from "./008-gallery-items.js"

const refs = {
  gallery: document.querySelector(".gallery"),
  modal: document.querySelector(".js-lightbox"),
  originalImg: document.querySelector(".lightbox__image"),
  backDrop: document.querySelector(".lightbox__overlay"),
  closeModalBtn: document.querySelector(".lightbox__button"),
};  

const original = refs.originalImg;
const gallery = refs.gallery;
const modal = refs.modal;
const backDrop = refs.backDrop
const close = refs.closeModalBtn
let activeIndex = 0;

gallery.addEventListener("click", onOpenModal);
close.addEventListener('click', onCloseModal);
backDrop.addEventListener("click", onBackDropClick);

// Create Gallery Item

const galleryItem = images.reduce((acc, item, index) => {
  return acc + `
  <li class="gallery__item">
    <a class="gallery__link" href="">
      <img class="gallery__image" 
      data-source="${item.original}"
      src="${item.preview}" 
      alt="${item.description}"
      data-index="${index}">
    </a>
  </li>`
  }, ``
);
gallery.insertAdjacentHTML("beforeend", galleryItem);

// Create Controls

function createControls() {
  const controls = `
  <button class="control right js-controlR">></button>
  <button class="control left js-controlL"><</button>
  `
  modal.insertAdjacentHTML("beforeend", controls);
  const controlR = document.querySelector(".js-controlR");
  const controlL = document.querySelector(".js-controlL");
  controlR.addEventListener("click", onControlRClick);
  controlL.addEventListener("click", onControlLClick);
};

createControls();

// Open Modal

function onOpenModal(event) {
  event.preventDefault();
  if (event.target.nodeName === 'IMG') {
    original.style.opacity = 1;
    modal.classList.add('is-open');
    window.addEventListener("keydown", onPressEscape);
    window.addEventListener("keydown", onPressRight);
    window.addEventListener("keydown", onPressLeft);
    activeIndex = Number(event.target.dataset.index);
    onAddImgAttributes(event);
  };
};

function onAddImgAttributes(event) {
  original.src = event.target.dataset.source;
  original.alt = event.target.alt;
  original.setAttribute("data-index", event.target.dataset.index);
};

// Click Right and Left

function onControlRClick(event) {
  if (event.target.classList[2] === "js-controlR" && activeIndex < images.length - 1) {
    original.setAttribute('data-index', activeIndex += 1);
    original.src = images[activeIndex].original;
  } else if (event.target.classList[2] === "js-controlR" && activeIndex === images.length - 1) {
    original.setAttribute('data-index', activeIndex = 0);
    original.src = images[0].original;
  };
};

function onControlLClick(event) {
  if (event.target.classList[2] === "js-controlL" && activeIndex >= 1) {
    original.setAttribute('data-index', activeIndex -= 1)
    original.src = images[activeIndex].original;
  } else if (event.target.classList[2] === "js-controlL" && activeIndex === 0) {
    original.setAttribute('data-index', activeIndex = images.length - 1)
    original.src = images[activeIndex].original;
  };
};

// Press Right and Left

function onPressRight(event) {
  if (event.code === "ArrowRight" && activeIndex < images.length - 1) {
    original.setAttribute('data-index', activeIndex += 1);
    original.src = images[activeIndex].original;
  } else if (event.code === "ArrowRight" && activeIndex === images.length - 1) {
    original.setAttribute('data-index', activeIndex = 0);
    original.src = images[0].original;
  };
};

function onPressLeft(event) {
   if (event.code === "ArrowLeft" && activeIndex >= 1) {
    original.setAttribute('data-index', activeIndex -= 1);
    original.src = images[activeIndex].original;
   } else if (event.code === "ArrowLeft" && activeIndex === 0) {
    original.setAttribute('data-index', activeIndex = images.length - 1);
    original.src = images[activeIndex].original;
  }; 
};

// Close Modal

function onCloseModal() {
  modal.classList.remove('is-open');
  original.style.opacity = 0;
  window.removeEventListener("keydown", onPressEscape);
  window.removeEventListener("keydown", onPressRight);
  window.removeEventListener("keydown", onPressLeft);
  original.src = "";
};

function onBackDropClick(event) {
  if (event.target === event.currentTarget) {
    onCloseModal();
  };
};

function onPressEscape(event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
};

------------------------------------------- */



