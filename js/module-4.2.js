// Створіть об'єкт "прямокутник" з властивостями "довжина" та "ширина".
//Напишіть метод "calculateArea", який буде обчислювати площу прямокутника на основі його довжини
//та ширини.

const rectangle = {
  width: 10,
  heigth: 5,
  getSquare() {
    return this.width * this.heigth;
  },
};
console.log(rectangle.getSquare());

//Створіть масив об'єктів "студентів" з властивостями "ім'я", "прізвище" та "середній бал".
// Напишіть функцію "findTopStudent", яка буде повертати об'єкт студента з найвищим середнім балом

const students = [
  {
    firstName: "Ivan",
    lastName: "Ivanov",
    averageRange: 100,
  },
  {
    firstName: "Illya",
    lastName: "Leo",
    averageRange: 100,
  },
  {
    firstName: "Illya",
    lastName: "Leo",
    averageRange: 101,
  },
  {
    firstName: "Kate",
    lastName: "Tern",
    averageRange: 86,
  },
  {
    firstName: "Alex",
    lastName: "Roppert",
    averageRange: 76,
  },
  {
    firstName: "Soff",
    lastName: "Dickens",
    averageRange: 86,
  },
];

// function findTopStudent(students) {
//   let ranges = [];
//   for (const student of students) {
//     ranges.push(student.averageRange);
//   }
//  return students.filter((stud) => stud.averageRange === Math.max(...ranges));

// }
function findTopStudent(students) {
  let maxRange = students[0].averageRange;
  let topSTudents = [];
  for (const student of students) {
    if (student.averageRange > maxRange) {
      maxRange = student.averageRange;
      topSTudents = [student];
    } else if (student.averageRange === maxRange) {
      topSTudents.push(student);
    }
  }
  return topSTudents;
}
console.log(findTopStudent(students));

// Створіть об’єкт "user", який буде мати властивості "name", "email", "password".
//  метод "login", який буде перевіряти правильність введеного email та password.
// Використайте інпути для запису значень властивостей в об’єкт

// const btn = document.getElementById("check-btn");

// const user = {
//     firstName: "",
//     surName: "",
//     login() {
//         let firstName = document.getElementById("input-name").value;
//         let surName = document.getElementById("input-surname").value;
//         let res = document.getElementById("res-checking");
//         res.innerText = "";
//         console.log(firstName, surName);
//     return this.firstName === "ivan" && this.surName === "ivanov"
//       ? (res.innerText = "Success!")
//       : (res.innerText = "Wrong!");
//   },
// };
// btn.addEventListener("click", user.login);

// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей на сторінку.

const movie = {
  title: "Movie",
  director: "Gay Richy",
  yesar: 2022,
  rating: 9.2,

  getHigherRating() {
    return (this.rating > 8).toString();
  },
};
console.log(movie.getHigherRating());

const movies = [
  { title: "Movie1", director: "Gay Richy", yesar: 2022, rating: 9.9 },
  { title: "Movie2", director: "Gay Richy", yesar: 2022, rating: 8.2 },
  { title: "Movie3", director: "Gay Richy", yesar: 2022, rating: 9.8 },
];

function findBestMovie(movies) {
    return movies.toSorted((a,b)=>b.rating-a.rating)[0]
}
console.log(findBestMovie(movies));

// Створіть масив об'єктів "книг" з властивостями "назва", "автор" та "рік видання". Напишіть функцію "findBooksByAuthor",
//яка буде повертати масив книг відповідного автора.
// const books = [
//   { title: "Війна і мир", author: "Лев Толстой", year: 1869 },
//   {
//     title: "Преступление и наказание",
//     author: "Федор Достоевский",
//     year: 1866,
//   },
//   {
//     title: "Гаррі Поттер і філософський камінь",
//     author: "Джоан Роулінг",
//     year: 1997,
//   },
//   { title: "Мастер и Маргарита", author: "Михаил Булгаков", year: 1967 },
//   { title: "1984", author: "Джордж Оруелл", year: 1949 },
//   { title: "test book", author: "Михаил Булгаков", year: 1987 },
// ];

class Car {
  static #maxPrice = 50000;
static checkPrice(price){
    return price > Car.#maxPrice ? "Error! Price exceeds the maximum" : "Success! Price is within acceptable limits"
};
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
