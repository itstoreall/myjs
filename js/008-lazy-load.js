/**
 * 
 * - Lazy Load
 * 
 */

/*

// - Вариант 1. (прекрасный подход, работает на 100%)
// Intersection Observer с unobserve (один на все)


const images = document.querySelectorAll(".feed img");

const io = new IntersectionObserver((entries, observer) => {
   console.log("Вызов функции")
   entries.forEach(entry => {

      // Если entry пересекает
      if (entry.isIntersecting) {
         // console.log(entry.target);

         const image = entry.target;
         const src = image.dataset.lazy;
         // // console.log(src)

         image.src = src;
         image.classList.add("appear");

         // говорим обсерверу перестать наблюдать за image
         observer.unobserve(image);
      }
   })
});

// один обсервер обслуживает весь массив картинок
images.forEach(image => io.observe(image));

*/
/*

// - Добавляем опции и рефакторим код

const images = document.querySelectorAll(".feed img");

// опции:
const options = {
   rootMargin: "100px",
};

const onEntry = (entries, observer) => {
   console.log("Вызов функции")
   entries.forEach(entry => {

      // Если entry пересекает
      if (entry.isIntersecting) {
         // console.log(entry.target);

         const image = entry.target;
         const src = image.dataset.lazy;
         // // console.log(src)

         image.src = src;
         image.classList.add("appear");

         // говорим обсерверу перестать наблюдать за image
         observer.unobserve(image);
      };
   });
};

const io = new IntersectionObserver(onEntry, options);

// один обсервер обслуживает весь массив картинок
images.forEach(image => io.observe(image));

*/
// /*

// Еще рефакторинг кода (просто оборачиваем в функцию)

const images = document.querySelectorAll(".feed img");

const lazyLoad = targets => {
   const options = {
      rootMargin: "100px",
   };
   
   const onEntry = (entries, observer) => {
      console.log("Вызов функции")
      entries.forEach(entry => {

         if (entry.isIntersecting) {
            const image = entry.target;
            const src = image.dataset.lazy;

            image.src = src;
            image.classList.add("appear");

            observer.unobserve(image);
         };
      });
   };

   const io = new IntersectionObserver(onEntry, options);

   targets.forEach(target => io.observe(target));
};

lazyLoad(images)

// */
/*


// - Вариант 2.
// Intersection Observer с disconnect (на каждый свой)
// На каждую картинку отдельный Intersection Observer

const images = document.querySelectorAll(".feed img");

const options = {
   rootMargin: "100px",
};

const lazyLoad = target => {
   const options = {
      rootMargin: "100px",
   };
   
   const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {

         // Когда entry пересекает
         if (entry.isIntersecting) {
            const image = entry.target;
            const src = image.dataset.lazy;

            image.src = src;
            image.classList.add("appear");

            // прекращаем работу обсервера
            observer.disconnect();
         }
      });
   }, options);

   io.observe(target);
};

images.forEach(image => lazyLoad(image));

*/