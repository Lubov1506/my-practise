// Використовуючи конструкцію if..else, напишіть код,
// що запитує: ‘Яка “офіційна” назва JavaScript ?’ Якщо відвідувач вводить “ECMAScript”, виведіть “Правильно!”,
//  в іншому випадку — виведіть: “Ви не знаєте ? ECMAScript!”

// const test = prompt("Type official JS name")

// function checkJSName(testName) {
//     return testName.toLowerCase() === "ecmascript" ? "Right!" : "Do you not know? ECMAScript!"
// }
// let res = checkJSName(test);
// console.log(res);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastIndex = apartment.tags.length - 1;
// const lastTag = apartment.tags[lastIndex];
// console.log(lastTag);
// Написати скрипт, який перевіряє чи введене число через prompt потрапляє в діапазон від 55 до 99 включно.
// Якщо так, вивести в консоль "Число потрапляє в діапазон".
// Якщо ні, вивести в консоль "Число не потрапляє в діапазон".

// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “неможливо виконати умову”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.

// const first = "Maria";
// const last = "Ivanova";
// function checkLetters(name, surname) {
//   return name.length > 4 && surname.length > 5
//     ? name.length + surname.length
//     : "неможливо виконати умову";
// }
// let res = checkLetters(first, last);
// console.log(res);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Objest.keys(apartment);

// for (let key of keys) {
//   values.push(apartment[key])
// }
// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   let prodValues = [];
//   for (let prod of products) {
//     if (prod[propName]) {
//       prodValues.push(prod[propName]);
//     }
//   }
//   return prodValues;
// }
// let res = getAllPropValues("name");
// console.log(res);

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for (let potion of this.potions) {
//       totalPrice += potion.price;
//     }
//     return totalPrice;
//   },
// };
// let res = atTheOldToad.getTotalPrice();
// console.log(res);

function getExtremeScores(scores) {
  const best = Math.max(...scores);
  const worst = Math.min(...scores);
  return { best: best, worst: worst };
}
let res = getExtremeScores([89, 64, 42, 17, 93, 51, 26]);
console.log(res);
