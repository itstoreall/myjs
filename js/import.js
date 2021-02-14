import { two as second, three as third } from './export.js';
import { fourly, fively } from './export.js';
import * as numbers from './export.js';
import secondPerson from './export.js';
// import fetchedJson from './promise.js';

// console.log("fetchedJson", fetchedJson);


console.log("01--", numbers.one, second, third, fourly, fively); // 1 2 3 4 5

const sP = new secondPerson("Peter");
console.log("02--", sP); // secondPerson {name: "Peter"}

console.log("03--", numbers.foo); // bar

console.log("04--", numbers.buz); // bar
setTimeout(() => console.log(numbers.buz), 2000); // buz

console.log("05--", numbers.item_03);

console.log("06--", numbers.apiObject.foo, numbers.apiObject.bar);

console.log("07--", numbers.expFunc()); // undefined (при этом вызывается exp-func - export.js:67)

// === delete --v

// === Fetch ===
// apiService.fetchMovies().then(({ results }) => {
//    console.log(results);

//    showFilmInfo(results);
// });

// function showFilmInfo(data) {
//    const film = data[0];
//    const popularity = Math.round(film.popularity).toFixed(1);

//    console.log(film.original_name);
//    console.log(film.vote_average);
//    console.log(film.vote_count);
//    console.log(popularity);
//    console.log(film.overview);
// };