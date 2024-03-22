const book = {
  year: 1999,
  author: "Author",
};
const book1 = Object.create(book);
book1.bookName = "book1";

for (const key in book1) {
  if (Object.hasOwnProperty.call(book1, key)) {
    console.log(key);
  }
}
console.log(book1);

// Напиши функцію-конструктор Account, яка створює об'єкт з властивостями login і email. В prototype функції-конструктора добав метод getInfo(), який виводить в консоль значення полів login і email об'єкта який його викликав.

function Account({ login, email }) {
  this.login = login;
  this.email = email;
  this.getInfo = function () {
    return [this.login, this.email];
  };
}
// Account.prototype.getInfo = function(){
//     return [this.login, this.email];
// }
const newAccount = new Account({ login: "login", email: "email" });

console.log(newAccount);
console.log(newAccount.getInfo());
