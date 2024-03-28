//Задача з click: Створіть кнопку, яка змінює колір свого тексту при кожному кліку.
const getRandomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red} ${green} ${blue})`;
};
let res = getRandomColor();
const btn = document.createElement("button");
btn.textContent = "Click me";
btn.style.border = "none";
btn.style.backgroundColor = "transparent";

document.body.prepend(btn);

btn.addEventListener("click", () => {
  const newColor = getRandomColor();
  btn.style.backgroundColor = newColor;
});
// Задача з dblclick: Створіть елемент, який зникає або змінює свою видимість при подвійному кліку на ньому.
const dblBtn = document.createElement("button");

dblBtn.textContent = "DOUBLE";
document.body.prepend(dblBtn);
dblBtn.addEventListener("dblclick", (e) => {
  dblBtn.classList.toggle("hide");
  console.log(e);
});
// Задача з contextmenu: Створіть контекстне меню, яке вибуває при натисканні правою кнопкою миші на певний елемент.
const menuStr = `<ul class="context-list visually-hidden">
      <li>link 1</li>
      <li>link 2</li>
      <li>link 3</li>
    </ul>`;

document.body.insertAdjacentHTML("afterbegin", menuStr);

const menu = document.querySelector(".context-list");

document.oncontextmenu = (e) => {
  e.preventDefault();
  menu.classList.add("visually-hidden");
};
document.addEventListener("contextmenu", (e) => {
  menu.style.top = `${e.pageY - 10}px`;
  menu.style.left = `${e.clientX}px`;
  menu.classList.remove("visually-hidden");
});
document.addEventListener("mousedown", (e) => {
  menu.classList.add("visually-hidden");
});
// Задача з submit: Створіть форму з кнопкою "Submit". При поданні форми виведіть введені дані в консоль.

// Задача з change: Створіть розкривний список або перемикач. Коли користувач змінює вибір, виведіть нове значення у консоль.

// Задача з resize: Створіть блок, який автоматично змінює свій розмір при зміні розміру вікна браузера.

// Задача з scroll: Створіть елемент з великою кількістю тексту, який можна прокручувати. Виведіть поточне положення прокрутки у консоль при прокручуванні.

// Задача з load: Завантажте зображення або інші ресурси на веб-сторінку. Виведіть повідомлення у консоль після завершення завантаження сторінки або ресурсу.

// Задача з mousemove: Напишіть скрипт, який виводить координати миші на екрані при русі мишою.

// Задача з mouseover і mouseout: Створіть блок елементів HTML, кожен з яких має властивість background-color. При наведенні миші на блок, його фоновий колір має змінюватись, а при відведенні миші - знову змінюватись на початковий.

// Задача з keydown: Напишіть програму, яка зчитує натискання клавіші та виводить її код.

// Комбінована задача: Створіть малюнок або область на веб-сторінці. При натисканні на клавішу стрілки вгору, змінюйте позицію малюнка чи області вгору; при натисканні на стрілку вниз - вниз; стрілку вліво - вліво; стрілку вправо - вправо.

// Задача з mouseover та mousemove: Створіть елемент на веб-сторінці, наприклад, круг. Коли користувач наводить мишу на цей елемент, він має рухатися разом із мишею, тобто змінювати своє положення, слідуючи за курсором миші.

// Задача з keydown: Створіть простий текстовий редактор, де користувач може вводити текст з клавіатури. Використовуйте keydown для обробки натискання клавіш. Наприклад, натиснення клавіші "Enter" може вивести вміст введеного тексту в консоль.

// Задача з mouseout: Створіть випливаюче вікно або меню, яке з'являється, коли користувач наводить мишу на певний елемент, але зникає, коли вона залишає цей елемент.
