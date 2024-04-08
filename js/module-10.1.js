// Завдання "Лічильник": Створіть лічильник,
// який збільшується на одиницю кожну секунду.
//  Виводьте значення лічильника на сторінці.
const startBtn = document.querySelector(".js-start-btn");
const stopBtn = document.querySelector(".js-stop-btn");
const resetBtn = document.querySelector(".js-reset-btn");
let counterEl = document.querySelector(".js-counter");

let counter = 0;
let intervalId = null;
counterEl.textContent = counter;

const start = () => {
  if (intervalId) return;
  intervalId = setInterval(() => {
    counterEl.textContent = ++counter;
  }, 1000);
};
const stop = () => {
  clearInterval(intervalId);
  intervalId = null;
};
const reset = () => {
  stop();
  counter = 0;
  counterEl.textContent = counter;
};
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

// Завдання "Зміна кольору": Створіть блок,
// який змінює свій фоновий колір кожні 3 секунди.

const box = document.createElement("div");
box.classList.add("box10");
document.body.prepend(box);

const getRandomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red} ${green} ${blue})`;
};

const chabgeBgc = () => {
  setInterval(() => {
    box.style.backgroundColor = getRandomColor();
  }, 3000);
};
// chabgeBgc()

// Завдання "Переключення слайдів": Створіть галерею слайдів, яка автоматично перемикається на наступний слайд через певний інтервал, використовуючи setTimeout.

const imgList = document.querySelector(".js-list-img");

const imgs = [
  "https://media.istockphoto.com/id/1361394182/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B0%D0%B1%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9-%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%BE%D1%88%D0%B5%D1%80%D1%81%D1%82%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BA%D0%BE%D1%88%D0%BA%D0%B8-%D0%B2%D1%8B%D0%B3%D0%BB%D1%8F%D0%B4%D1%8F%D1%89%D0%B8%D0%B9-%D1%88%D0%BE%D0%BA%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC-%D0%B8%D0%BB%D0%B8-%D1%83%D0%B4%D0%B8%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC.jpg?s=612x612&w=0&k=20&c=yEEyxvdyb-jUxnHmr8nXSf9qQPS0WfkhBITLVIaj7OY=",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVAKx2pNfSc2Pox7mi9fsNOk4hZ_HZjEe4Ng&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfebHYZ1P_kPkHdqBptRFTAvGVo-R0xT9RAQ&s",
];

let i = 0;

const changeImg = () => {
  let liItem = `<li><img src="${imgs[i]}" alt="img"></li>`;
  imgList.innerHTML = "";
  imgList.insertAdjacentHTML("afterbegin", liItem);

  i = i + 1;
  if (i === imgs.length) {
    i = 0;
  }
};

setInterval(() => {
  changeImg();
}, 3000);

changeImg();
