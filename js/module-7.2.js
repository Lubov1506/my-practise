// const btn = document.querySelector(".btn");

// btn.addEventListener("click", (e) => {
//   console.log(e.target);
// });

// document.body.addEventListener("keyup", (e) => {
//   console.log(e);
// });

// Написати скрипт в якому користувач друкує на клавіатурі текст який відображається на сторінці.
//  При натисканні на кнопку “Очистити” очищувати надрукований текст.
const div = document.createElement("div");
div.innerHTML = `<input type="text" name="input">
    <button type="button">Clear</button>`;
document.body.append(div);

//Перемістити елемент з id="box" наліво, якщо користувач натискає стрілку вліво, та направо, якщо користувач натискає стрілку вправо, під час події keydown.

