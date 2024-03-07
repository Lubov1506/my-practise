// За допомогою об’єкту Math виведіть в консоль найбільше і найменше значення серед заданих (2, 34, 99, 3, 22, 36, 733, 18);
const arr = [2, 34, 99, 3, 22, 36, 733, 18];

function getExtremeNums(arr) {
  const maxNum = Math.max(...arr);
  const minNum = Math.min(...arr);
  return [maxNum, minNum];
}
let res = getExtremeNums(arr);
console.log(res);

function calculateTotalPrice(order) {
  let sum = 0;
  for (let i = 0; i < order.length; i++) {
    sum += order[i];
  }
  return sum;
}
res = calculateTotalPrice([412, 371, 94, 63, 176]);
console.log(res);
let apple = "ApPLe";
console.log(apple);
apple.toLowerCase();
console.log(apple);

// Створити змінну для зберігання числа.
// Використати метод Math.sqrt() для обчислення квадратного кореня числа та вивести результат в консоль.

const num = 25;
function getSqrt(number) {
    return Math.sqrt(number)
}
res = getSqrt(num)
console.log(res);

// Вихідні дані:
// string - оригінальний рядок
// length - кількість символів з початку рядка для підрядка
// Присвой змінній substring вираз створення підрядка довжиною length символів (від початку) з рядка string.

// Змінна SAVED_PASSWORD зберігає значення попередньо збереженого пароля. Попросити в користувача ввести пароль та перевірити чи він правильний.
const SAVED_PASSWORD = "1q2w3e4r5";
function checkPassword() {
    let userPassword = prompt("Enter your password")
    if (userPassword === SAVED_PASSWORD) {
        console.log("Pass is right");
    } else {
        console.log("Wrong!!!");
    }
}

