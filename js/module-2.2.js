// Вивести на екран таблицю множення числа 7.

let multTable = [];
for (let i = 1; i <= 10; i++) {
  multTable[i] = [];
  for (let j = 1; j <= 10; j++) {
    multTable[i].push(j * i);
  }
}
console.log(multTable.filter((el) => el.length > 0));

// Порахуйте суму чисел від 12 до 27
let sum = 0;
for (let i = 12; i <= 27; i++) {
  sum += i;
}
console.log(sum);

// Знайдіть добуток непарних числен від 3 до 9
const start = 3;
const end = 9;

function getMultOdd(from, to) {
  let mult = 1;
  for (let i = from; i <= to; i++) {
    if (i % 2) mult *= i;
  }
  return mult;
}

let res = getMultOdd(3, 9);
console.log(res);

// Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .replace(), замінити першу літеру вашого імені на символ "@" та вивести результат в консоль.
let userName = "Liubov"
userName.replace(userName[0], "@")
console.log(userName);

// Знайдіть число 49  у проміжку чисел від 1 до 100 та вийдіть з циклу.
for (let i = 1; i <= 100; i++) {
    if (i === 49) {
        console.log("I found 49!");
        break;
    }
}

// Напиши скрипт який підраховує загальну вартість покупки.
// Кількість товарів зберігається в змінній goods.
// Ціна кожного товару це випадкове число від 500 до 5000.
//  Записати суму в змінну totalPrice і вивести в консолі.

function getTotalPrice(goods) {
    let price = Math.floor(Math.random() * (500 - 50) + 50);
    return goods * price;
}
res = getTotalPrice(3)
console.log(res);