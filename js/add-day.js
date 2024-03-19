// Припустимо, є два масиви об'єктів:
// Необхідно створити новий масив об'єктів, що буде містити всі об'єкти з обох масивів, але без дублів.
// Тобто об'єкти з однаковим значенням ключа "id" повинні бути об'єднані в один об'єкт.

const catsFirst = [
  { id: 1, nick: "Barsik", age: 1 },
  { id: 2, nick: "Alisa", age: 3 },
  { id: 3, nick: "Mursik", age: 5 },
  { id: 4, nick: "Keks", age: 1 },
];
const catsSecond = [
  { id: 7, nick: "Barsik", age: 2 },
  { id: 8, nick: "Alisa", age: 4 },
  { id: 9, nick: "Mursik", age: 1 },
  { id: 4, nick: "Keks", age: 1 },
];
const allCats = [...catsFirst, ...catsSecond];
console.log(allCats);

function deleteDoubles(cats) {
  const newArr = [cats[0]];

  for (let i = 1; i < cats.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < newArr.length; j++) {
      if (
        cats[i].id === newArr[j].id &&
        cats[i].nick === newArr[j].nick &&
        cats[i].age === newArr[j].age
      ) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      newArr.push(cats[i]);
    }
  }

  return newArr;
}
console.log(deleteDoubles(allCats));

/*
 * Працюємо з кошиком продуктів
 * - Метод splice() - міняє масив
 * - Видалити
 * - Додати
 * - Оновити
 */

const product = ["🍎", "🍇", "🍋", "🍓"];

const products = [
  { prodName: "🍎", price: 5, quantity: 1 },
  { prodName: "🍇", price: 15, quantity: 8 },
  { prodName: "🍋", price: 25, quantity: 10 },
  { prodName: "🍓", price: 10, quantity: 5 },
];

function showProducts(products) {
  let prodList = [];
  for (const prod of products) {
    prodList.push(`${prod.prodName} - ${prod.quantity}`);
  }

  return `In basket are these products: ${prodList.join(",")}.`;
}
console.log(showProducts(products));

function addProduct(prodName, price, quantity) {
  products.push({ prodName, price, quantity });
}
addProduct("🍇", 5, 4);

console.log(showProducts(products));

function removeProduct(prodName) {
    
}