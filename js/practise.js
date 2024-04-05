//Задача з click: Створіть кнопку, яка змінює колір свого тексту при кожному кліку.
// const getRandomColor = () => {
//   const red = Math.floor(Math.random() * 255);
//   const green = Math.floor(Math.random() * 255);
//   const blue = Math.floor(Math.random() * 255);
//   return `rgb(${red} ${green} ${blue})`;
// };
// let res = getRandomColor();
// const btn = document.createElement("button");
// btn.textContent = "Click me";
// btn.style.border = "none";
// btn.style.backgroundColor = "transparent";

// document.body.prepend(btn);

// btn.addEventListener("click", () => {
//   const newColor = getRandomColor();
//   btn.style.backgroundColor = newColor;
// });
// Задача з dblclick: Створіть елемент, який зникає або змінює свою видимість при подвійному кліку на ньому.
// const dblBtn = document.createElement("button");

// dblBtn.textContent = "DOUBLE";
//document.body.prepend(dblBtn);
// dblBtn.addEventListener("dblclick", (e) => {
//   dblBtn.classList.toggle("hide");
//   console.log(e);
// });
// Задача з contextmenu: Створіть контекстне меню, яке вибуває при натисканні правою кнопкою миші на певний елемент.
// const menuStr = `<ul class="context-list visually-hidden">
//       <li>link 1</li>
//       <li>link 2</li>
//       <li>link 3</li>
//     </ul>`;

//document.body.insertAdjacentHTML("afterbegin", menuStr);

// const menu = document.querySelector(".context-list");

// document.oncontextmenu = (e) => {
//   e.preventDefault();
//   menu.classList.add("visually-hidden");
// };
// document.addEventListener("contextmenu", (e) => {
//   menu.style.top = `${e.pageY - 10}px`;
//   menu.style.left = `${e.clientX}px`;
//   menu.classList.remove("visually-hidden");
// });
//document.addEventListener("mousedown", (e) => {
//   menu.classList.add("visually-hidden");
// });
// Задача з submit: Створіть форму з кнопкою "Submit". При поданні форми виведіть введені дані в консоль.
// const formStr = `<form id="login-form">
//       <input type="text" name="user">
//       <input type="email" name="email">
//       <input type="password" name="password">
// <button type="submit">Send</button>
//     </form>`;
//document.body.insertAdjacentHTML("afterbegin", formStr);

// const form = document.querySelector("#login-form");
// const onFormSubmit = (e) => {
//   e.preventDefault();

//   const { user, email, password } = form.elements;
//   const data = {
//     [user.name]: user.value,
//     [email.name]: email.value,
//     [password.name]: password.value,
//   };
//   console.log(data);
//   return data;
// };
// form.addEventListener("submit", onFormSubmit);

// Задача з change: Створіть розкривний список або перемикач. Коли користувач змінює вибір, виведіть нове значення у консоль.

// Задача з scroll: Створіть елемент з великою кількістю тексту, який можна прокручувати. Виведіть поточне положення прокрутки у консоль при прокручуванні.
// const onDocScroll = (e) => {
//   if (window.scrollY > 1500) {
//     alert("Hello");
//     document.removeEventListener("scroll", onDocScroll);
//   }
// };
//document.addEventListener("scroll", onDocScroll);

// Задача з load: Завантажте зображення або інші ресурси на веб-сторінку. Виведіть повідомлення у консоль після завершення завантаження сторінки або ресурсу.
// const loadBtn = document.querySelector("#uploadButton");

// const img = document.querySelector("#img-load");
// const onLoadBtnClick = (e) => {
//   console.log("Img loaded", e);
// };
//*img.addEventListener("load", onLoadBtnClick)

// Задача з mousemove: Напишіть скрипт, який виводить координати миші на екрані при русі мишою.

//*document.addEventListener("mousemove", e=>console.log(e.clientX, e.clientY))

// Задача з mouseover і mouseout: Створіть блок елементів HTML, кожен з яких має властивість background-color. При наведенні миші на блок, його фоновий колір має змінюватись, а при відведенні миші - знову змінюватись на початковий.

// const boxChangeColor = document.createElement("div");
// boxChangeColor.style.width = "100px";
// boxChangeColor.style.height = "100px";
// boxChangeColor.style.backgroundColor = "green";
// boxChangeColor.style.transition = "backgroundColor 400ms linear";
// document.body.prepend(boxChangeColor);
// boxChangeColor.addEventListener("mouseover", () => {
//   boxChangeColor.style.backgroundColor = "yellow";
// });
// boxChangeColor.addEventListener("mouseout", () => {
//   boxChangeColor.style.backgroundColor = "green";
// });
// Задача з keydown: Напишіть програму, яка зчитує натискання клавіші та виводить її код.
//document.addEventListener("keydown", e=>console.log(e.code))

// ? Комбінована задача: Створіть малюнок або область на веб-сторінці. При натисканні на клавішу стрілки вгору, змінюйте позицію малюнка чи області вгору; при натисканні на стрілку вниз - вниз; стрілку вліво - вліво; стрілку вправо - вправо.

const movingBox = document.createElement("div");
movingBox.style.width = "25px";
movingBox.style.height = "25px";
movingBox.style.borderRadius = "50%";
movingBox.style.backgroundColor = "green";
movingBox.style.position = "absolute";
movingBox.style.top = "0";
movingBox.style.left = "0";
movingBox.style.transition = "top 100ms linear, left 100ms linear";

document.body.prepend(movingBox);

const moveUp = (step) => {
  const top = parseInt(movingBox.style.top);
  if (top > 0) {
    if (top < step) {
      step = top;
    }
    movingBox.style.top = parseInt(movingBox.style.top) - step + "px";
  }
};

const moveRight = (step) => {
  const left = parseInt(movingBox.style.left);
  const boxWidth = parseInt(movingBox.style.width);
  const windowWidth = window.innerWidth;

  if (left < windowWidth - boxWidth) {
    if (windowWidth - left - boxWidth < step) {
      step = window.innerWidth - left - boxWidth;
      console.log(step);
    }
    movingBox.style.left = left + step + "px";
  }
};
const moveLeft = (step) => {
  const left = parseInt(movingBox.style.left);
  if (left > 0) {
    if (left < step) {
      step = left;
    }
    movingBox.style.left = left - step + "px";
  }
};
const moveDown = (step) => {
  const top = parseInt(movingBox.style.top);
  const windowHeight = window.innerHeight;
  const boxHeight = parseInt(movingBox.style.height);
  if (top < windowHeight - boxHeight) {
    if (windowHeight - top - boxHeight < step) {
      step = windowHeight - top - boxHeight;
    }
    movingBox.style.top = parseInt(movingBox.style.top) + step + "px";
  }
};

const onMovieBoxMove = (e) => {
  let step = 10;
  switch (e.code) {
    case "ArrowRight":
      moveRight(step);
      break;
    case "ArrowUp":
      console.log("up");
      moveUp(step);
      break;
    case "ArrowLeft":
      moveLeft(step);
      break;
    case "ArrowDown":
      moveDown(step);
      break;
  }
};
//document.addEventListener("keydown", onMovieBoxMove);

// Задача з mouseover та mousemove: Створіть елемент на веб-сторінці, наприклад, круг. Коли користувач наводить мишу на цей елемент, він має рухатися разом із мишею, тобто змінювати своє положення, слідуючи за курсором миші.
const moveCursor = () => {
  document.addEventListener("mousemove", (e) => {
    console.log(e.screenX);
    movingBox.style.top = e.clientY - movingBox.style.width / 2 + "px";
    movingBox.style.left = e.clientX + "px";
  });
};
//document.addEventListener("mousemove", moveCursor);

movingBox.addEventListener("mouseover", moveCursor);

// Задача з keydown: Створіть простий текстовий редактор, де користувач може вводити текст з клавіатури. Використовуйте keydown для обробки натискання клавіш. Наприклад, натиснення клавіші "Enter" може вивести вміст введеного тексту в консоль.

// Задача з mouseout: Створіть випливаюче вікно або меню, яке з'являється, коли користувач наводить мишу на певний елемент, але зникає, коли вона залишає цей елемент.

const musicLibrary = {
  count: 2,
  artists: [
    {
      name: "The Beatles",
      albums: [
        {
          title: "Sgt. Pepper's Lonely Hearts Club Band",
          year: 1967,
          tracks: [
            { title: "With a Little Help from My Friends", duration: "2:44" },
            { title: "Lucy in the Sky with Diamonds", duration: "3:28" },
            { title: "A Day in the Life", duration: "5:33" },
          ],
        },
        {
          title: "Abbey Road",
          year: 1969,
          tracks: [
            { title: "Come Together", duration: "4:19" },
            { title: "Something", duration: "3:01" },
            { title: "Here Comes the Sun", duration: "3:06" },
          ],
        },
      ],
    },
    {
      name: "Pink Floyd",
      albums: [
        {
          title: "The Wall",
          year: 1979,
          tracks: [
            { title: "Another Brick in the Wall, Part 2", duration: "3:59" },
            { title: "Comfortably Numb", duration: "6:23" },
            { title: "Hey You", duration: "4:40" },
          ],
        },
        {
          title: "Dark Side of the Moon",
          year: 1973,
          tracks: [
            { title: "Speak to Me/Breathe", duration: "3:58" },
            { title: "Time", duration: "7:06" },
            { title: "Money", duration: "6:22" },
          ],
        },
      ],
    },
  ],
};
const {
  count,
  artists: [firstArtist, second],
} = musicLibrary;

const { name, albums: [firstAlbum1, secondAlbum1]} = firstArtist

import calc from "./module-9.1";