const user = {
  first: "Poly",
  last: "Covalsky",
  contacts: {
    phone: 123456789,
    email: "poly@newUser.com",
  },
};

const newUser = structuredClone(user);
newUser.age = 25;
newUser.contacts.phone = "000";

// console.log(user, newUser);
// console.assert(user !== newUser);

// console.log(user.contacts === newUser.contacts);

// for (const key in user.contacts) {
//   console.log(user.contacts[key], key);
// }

// Присвоїти змінній apartment об'єкт, який описує квартиру з наступними характеристиками:
//imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
//descr - опис, значення "Spacious apartment in the city center";
//rating - рейтинг, значення 4;
//price - ціна, значення 2153;
//tags - метаінформація, масив ["premium", "promoted", "top"].

//Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника.Додай йому наступні властивості:
//name - ім'я власника, значення "Henry";
//phone - телефон, значення "982-126-1588";
//email - пошта, значення "henry.carter@aptmail.com"

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// apartment.owner = {
//   ownerName: "Henry",
//   phone: "982-126-1588",
//   email: "henry.carter@aptmail.com",
// };
// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
const aptRating = "rating";
const aptDescr = "descr";
const aptPrice = "price";
const aptTags = "tags";
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  [aptDescr]: "Spacious apartment in the city center",
  [aptRating]: 4,
  [aptPrice]: 2153,
  [aptTags]: ["premium", "promoted", "top"],
};
// console.log(apartment);

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.
// ownerName - ім'я власника;
// ownerPhone - телефон власника;
// ownerEmail - пошта власника;
// numberOfTags - кількість елементів масиву у властивості tags;
// firstTag - перший елемент масиву у властивості tags;
// lastTag - останній елемент масиву у властивості tags.
// const { owner:{ownerName, phone, email}, tags } = apartment;
// const numberTags = tags.length;
// const first = tags[0];
// const last = tags[tags.length-1]
// console.log(numberTags, first, last);
// console.log(ownerName);

// TODO:=========================================
// *  Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment, використовуючи синтаксис «квадратних дужок».

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.

//Доповни код, оновивши значення властивостей об'єкта apartment:
// ціну у властивості price на 5000;
// рейтинг квартири у властивості rating на 4.7;
// ім'я власника у вкладеній властивості name на "Henry Sibola";
// масив тегів у властивості tags, додавши в кінець рядок "trusted".
// Додай об'єкту apartment кілька нових властивостей:

// area - площа в квадратних метрах, число 60;
// rooms - кількість кімнат, число 3;
// location - місце розташування квартири, об'єкт з наступними
//вкладеними властивостями;
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".

// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance".
//  Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок,
//  та метод "withdraw", який дозволяє знімати гроші з рахунку.
//  Методи повинні спрацьовувати при натисканні на кнопки “поповнити рахунок”
// та отримати ‘готівку’ відповідно.Після проведення операції виводити повідомлення про залишок на рахунку.

const bankAccount = {
  ownerName: "Name",
  accountNumber: 123,
  balance: 100,
  deposit(sum) {
    this.balance += sum;
    return this.balance;
  },
  cash(sum) {
    if (this.balance < sum) {
      return "Not money!";
    }
    this.balance -= sum;
    return this.balance;
  },
};
console.log(bankAccount.deposit(100));
console.log(bankAccount.cash(1000));

/*
Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки*/

const btn = document.getElementById("btn");
const weather = {
  temperature: "",
  humidity: 40,
  windSpeed: 10,
  isCold() {
    const res = document.getElementById("res");
    this.temperature = Number(document.getElementById("temper").value);
    document.getElementById("temper").value = "";
    return Number(this.temperature) < 0
      ? (res.innerText = "Cold")
      : (res.innerText = `Warm ${this.temperature}`);
  },
};
btn.addEventListener("click", weather.isCold);
