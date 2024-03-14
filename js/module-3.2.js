// Написати функцію для обрахунку суми різної кількості аргументів
const getSum = (...agrs) =>
  [...agrs].reduce((accum, current) => accum + current);
console.log(getSum(3, 4, 6));

function filterArray(numbers, value) {
  const newArr = [];
  numbers.forEach((item) => {
    return item > value && newArr.push(item);
  });
  return newArr;
}
console.log(filterArray([1, 2, 3, 4, 5, 6], 3));

const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => (totalPrice += item));

  return totalPrice;
};
const getUserEmails = (users) => {
  return users.map((user) => user.email);
};
//TODO:=========task-3=================
// Написати функцію, яка приймає масив чисел та повертає новий масив, який містить всі числа,
// які є дублікатами в початковому масиві.Якщо немає дублікатів, функція повертає порожній масив.
const arrNums = [1, 2, 2, 4, 5, 6, 2, 3, 4, 5, 6];
function checkDouble(arr) {
  const newArr = [];
  for (let item of arr) {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  }
  return newArr;
}
console.log(checkDouble(arrNums));

function getDoubleNums(arr) {
  const newArr = [];
  for (let item of arr) {
    if (arr.filter((el) => el === item).length > 1) {
      newArr.push(item);
    }
  }
  return newArr;
}

console.log(getDoubleNums(arrNums));

//TODO:=========task-5=================
// Написати функцію, яка приймає рядок і повертає кількість голосних літер у цьому рядку.
const vovels = ["а", "о", "у", "е", "и", "і", "я", "ю", "є", "ї"];
// function getVowels(str) {
//   let count = 0;
//   for (let letter of str.split("")) {
//     if (vovels.includes(letter.toLowerCase())) {
//       count += 1;
//     }
//   }
//   return count;
// }
function getVowels(str) {
  return str.split("").filter((letter) => vovels.includes(letter.toLowerCase()))
    .length;
}
console.log(getVowels("Орхідея"));

//TODO:=========task-6=================
// Перетворити рядок, що містить слова, розділені комами, в масив слів і вивести кожне слово в окремому рядку.
const str = "JavaScript, HTML, CSS, React";

const arr = str.split(",");
console.log(arr);
for (const item of arr) {
  console.log(item);
}

const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce(
  (accum, current) => accum + current.playtime / current.gamesPlayed,
  0
);
console.log(totalAveragePlaytimePerGame);
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];
const calculateTotalBalance = (users) => {
  return users.reduce((accum, current) => accum + current.balance, 0);
};
console.log(calculateTotalBalance(users));



const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    rating: 7.94,
  },
  {
    title: "Enemy of God",
    author: "Bernard Cornwell",
    rating: 8.67,
  },
];
const sortedByAuthorName = books.toSorted((first, second) =>
  (first.author).localeCompare(second.author)
);
const sortedByReversedAuthorName = books.toSorted((first, second) =>
  second.author.localeCompare(first.author)
);

const sortedByAscendingRating = books.toSorted(
  (first, second) => first.rating - second.rating
);

const sortedByDescentingRating = books.toSorted(
  (first, second) => second.rating - first.rating
);