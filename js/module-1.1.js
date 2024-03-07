// Вихідний код:
let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Заміни вирази зі стандартними математичними операторами на комбінований оператор присвоєння з додаванням, відніманням, множенням і діленням:
// Значення змінної a дорівнюватиме 7 - використовуй оператор +=
// Значення змінної b дорівнюватиме 6 - використовуй  оператор -=
// Значення змінної c дорівнюватиме 45 - використовуй оператор *=
// Значення змінної d дорівнюватиме 2 - використовуй оператор /=
a += 2;
b -= 4;
c *= 3;
d /= 10;
console.log(a, b, c, d);

// Обчислити бонус для працівника зарплати, якщо він працює більше 40 годин на тиждень.
// Бонус дорівнює 20 % від зарплати за додаткові години.(використати тернарний оператор)

// const salary = +prompt("Enter your salary");
// const hours = +prompt("Enter your work hours");
function getBonus(salary, hours) {
  if (hours <= 40) {
    return `You don't get bonus. Your salary - ${salary}`;
  }
  let bonus;
  if (hours > 40) {
    bonus = (salary * 20) / 100;
    let totalSalary = salary + Math.floor(bonus);
    return `You get bonus ${bonus}. Your totaly salary - ${totalSalary}`;
  }
}
let res = getBonus(1000, 41);
console.log(res);

// Напишіть скрипт, який знаходить площу прямокутника. Висота 23см, шириною 10см - всі данні повинні зберігатися в змінних.  Значення площі повинно зберігається в числовій змінній. Виведіть повідомлення для користувача з результатом.

const height = 23;
const width = 10;

const getSquare = (height, width) => height * width;
let res1 = getSquare(height, width);
console.log(res1);

// Створити змінну, яка містить рядок з вашим ім'ям та прізвищем. Використовуючи метод .length, вивести в консоль кількість символів у рядку.

const firstName = 'Liubov';
const lastName = "Parfonova";
function getFullName(name, surName) {
    return `${name} ${surName}`
}
let res2 = getFullName(firstName, lastName)
console.log(res2.length);

function checkFileExtension(fileName, ext) {
  if (fileName.endWith(ext)) {
    return "File extension matches";
  } else {
    return "File extension does not match";
  }
}

let res14 = checkFileExtension("styles.css", ".css");
console.log(res14);