// Напишіть функцію, яка отримує масив чисел і повертає проміс,
//який виконується, якщо всі числа в масиві є парними.Якщо ж принаймні одне число непарне,
//проміс повинен бути відхилено з повідомленням "Є непарні числа".

const getOddEven = (arr) => {
    const promise = new Promise((res, rej) => {
      arr.every((elem) => elem % 2 === 0) ? res("Even") : rej("Not all are even");
    });
  return promise
};
const promise = getOddEven([2, 4, 6, 8, 4, 5]);
promise.then((res) => console.log(res)).catch((err) => console.log(err));

// Promise.resolve("Success").then(
//   function (value) {
//     console.log(value); // "Success"
//   },
//   function (value) {
//     // не будет вызвана
//   }
// );

