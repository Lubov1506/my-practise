// Створіть клас Rectangle, що містить властивості width та height. Додайте метод getArea(), який повертає площу прямокутника.
// const rectangle1 = new Rectangle(10, 5);
// console.log(rectangle1.getArea()); // 50

class Rectangle {
  #width;
  #height;
  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }
  get width() {
    return this.#width;
  }
  set width(newWidth) {
    this.#width = newWidth;
  }
  get height() {
    return this.#height;
  }
  set height(newHeight) {
    this.#height = newHeight;
  }
}
const rect = new Rectangle(10, 5);
console.log(rect.width);
rect.width = 9;
// console.log(rect.width);

//Створіть клас Person, що містить властивості firstName та lastName. Додайте метод getFullName(), який повертає повне ім'я у форматі "firstName lastName".
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const person1 = new Person("John", "Doe");
//console.log(person1.getFullName()); // John Doe

// Створіть клас Calculator, який буде мати наступні методи: add(), subtract(), multiply(), divide(). Кожен метод приймає два аргументи - числа, які необхідно обробити. Результатом кожного методу має бути результат відповідної математичної операції.

class Calculator {
  add(firstNum, secondNum) {
    return firstNum + secondNum;
  }
  subtract(firstNum, secondNum) {
    return firstNum - secondNum;
  }
  multiply(firstNum, secondNum) {
    return firstNum * secondNum;
  }
  divide(firstNum, secondNum) {
    return secondNum === 0 ? "На нуль ділити не можна" : firstNum / secondNum;
  }
}
// const calculator = new Calculator();
// console.log(calculator.add(2, 3)); // 5
// console.log(calculator.subtract(5, 2)); // 3
// console.log(calculator.multiply(2, 4)); // 8
// console.log(calculator.divide(10, 2)); // 5
// console.log(calculator.divide(10, 0)); // На нуль ділити не можна

class CalculatorUniversal {
  add() {
    return [...arguments].reduce((acc, current) => acc + current, 0);
  }
  subtract() {
    return [...arguments].reduce((acc, current) => acc - current);
  }
  multiply(...args) {
    return args.reduce((acc, current) => acc * current, 1);
  }
  divide(...args) {
    return args.some((arg, idx) => arg === 0 && idx !== 0)
      ? "На нуль ділити не можна"
      : args.reduce((acc, current) => acc / current);
  }
}

// const calculator = new CalculatorUniversal();
// console.log(calculator.add(2, 3, 70)); // 5
// console.log(calculator.subtract(20, 3, 12)); // 5
// console.log(calculator.multiply(2, 3, 7)); // 5
// console.log(calculator.divide(0, 1, 0)); // 5

//Створіть клас Shape, який має властивість color і метод draw. Створіть клас Circle, який наслідується від Shape і має властивість radius та перезаписує метод draw для відображення кола. Створіть об'єкт myCircle класу Circle з радіусом 5 і коліром "red".

const box = document.querySelector(".box");
box.style.display = "flex";
box.style.gap = "20px";
box.style.flexWrap = "wrap";

class Shape {
  constructor(color, width, height) {
    this.color = color;
    this.width = width;
    this.height = height;
  }
  draw() {
    console.log(`Drawing a circle with color ${this.color}`);
    const shape = document.createElement("div");
    shape.style.width = `${this.width}px`;
    shape.style.height = `${this.height}px`;
    shape.style.backgroundColor = `${this.color}`;
    shape.style.flexShrink = "0";

    box.append(shape);
  }
}
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  draw() {
    console.log(`Drawing a circle with radius ${this.radius}`);
    const circle = document.createElement("div");
    circle.style.width = `${this.radius * 2}px`;
    circle.style.height = `${this.radius * 2}px`;
    circle.style.backgroundColor = `${this.color}`;
    circle.style.borderRadius = `50%`;
    circle.style.flexShrink = "0";
    box.append(circle);
  }
}

// const shape = new Shape("yellow", 500, 100);
// shape.draw();
// const myCircle = new Circle("red", 100);
// myCircle.draw(); // Drawing a circle with radius 5
// console.log(myCircle.color); // "red"

//Створіть клас Book, який буде мати властивості title (назва книги), author (автор книги) та price (вартість книги). Створіть клас Bookstore, який буде мати властивість books (масив з об'єктів типу Book). Створіть методи для додавання книги у книжковий магазин (addBook(book)), видалення книги з книжкового магазину (removeBook(book)) та виведення всіх книг з книжкового магазину (listBooks()).
// Приклад використання:

class Book {
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }
}
class Bookstore {
  constructor() {
    this.books = [];
  }
  listBooks() {
    return this.books;
  }
  addBook(book) {
    this.books.push(book);
  }
  removeBook(bookTitle) {
    return this.books.filter((book) => book.title !== bookTitle);
    }
    addBooks(...books) {
        this.books = [...this.books, ...books]
    }
}
const myBookstore = new Bookstore();

const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 10);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 12);
const book3 = new Book("1984", "George Orwell", 8);

console.log(book1, book2, book3);
// myBookstore.addBook(book1);
// myBookstore.addBook(book2);
// myBookstore.addBook(book3);
console.log(myBookstore.listBooks());

myBookstore.listBooks(); // виведе всі книги у книжковому магазині

const filtered = myBookstore.removeBook("The Catcher in the Rye");
console.log(filtered);
myBookstore.listBooks(); // виведе всі книги у книжковому магазині (без book2)
myBookstore.addBooks(book1, book2, book3)
console.log(myBookstore.listBooks());
