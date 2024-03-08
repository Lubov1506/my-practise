// Використовуючи конструкцію if..else, напишіть код,
// що запитує: ‘Яка “офіційна” назва JavaScript ?’ Якщо відвідувач вводить “ECMAScript”, виведіть “Правильно!”,
//  в іншому випадку — виведіть: “Ви не знаєте ? ECMAScript!”

// const test = prompt("Type official JS name")

// function checkJSName(testName) {
//     return testName.toLowerCase() === "ecmascript" ? "Right!" : "Do you not know? ECMAScript!"
// }
// let res = checkJSName(test);
// console.log(res);

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastIndex = apartment.tags.length - 1;
const lastTag = apartment.tags[lastIndex];
console.log(lastTag);
// Написати скрипт, який перевіряє чи введене число через prompt потрапляє в діапазон від 55 до 99 включно.
// Якщо так, вивести в консоль "Число потрапляє в діапазон".
// Якщо ні, вивести в консоль "Число не потрапляє в діапазон".

// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “неможливо виконати умову”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.

const first = "Maria";
const last = "Ivanova";
function checkLetters(name, surname) {
  return name.length > 4 && surname.length > 5
    ? name.length + surname.length
    : "неможливо виконати умову";
}
let res = checkLetters(first, last);
console.log(res);

