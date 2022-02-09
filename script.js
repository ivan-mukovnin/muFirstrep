const title = "Проект";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 198;
const rollback = 51;
const fullPrice = 10000;
const adaptive = true;



console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);


let myPrice = "Стоимость верстки экранов " + screenPrice + " руб " + "Стоимость разработки сайта " + fullPrice + " руб";
console.log(myPrice);

console.log(screens.length);

let myScreens = screens.toLowerCase();


console.log(myScreens.split());


let myFullPrice = fullPrice * (rollback / 100);

console.log(myFullPrice);