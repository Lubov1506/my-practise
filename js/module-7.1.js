//Створити заголовок з текстом 'Привіт, це перший мій створений елемент!' та додати до нього клас “title”, заздалегідь створений в style.css.
// Додати заголовок на сторінку

const title = document.createElement("h1");

title.classList.add("title");

title.textContent = "Привіт, це перший мій створений елемент!";
title.style.color = "green";
const body = document.querySelector("body");
//document.body.prepend(title);

//Створити статтю (наприклад рецепт млинців), де є заголовок, зображення, опис (текст), посилання та кнопка зі всіма обов’язковими атрибутими.
//     (можна використати абсолютний або відносний шлях до зображення) та додати
// їх на сторінку.
//Застилити на свій смак та наповнити контентом.

const linkRecipe =
  "https://klopotenko.com/zustrichaemo-maslyanu-abo-yak-prigotuvatu-mlunci/";
const urlRecipe =
  "https://images.unian.net/photos/2020_09/thumb_files/400_0_1599769599-6966.jpg?r=678372";
const recipe = document.createElement("article");
recipe.innerHTML = `<article>
      <h2>Pancake recipe</h2>
      <img
        src="${urlRecipe}"
        alt="Pancakes"
      />
      <a href="${linkRecipe}">Recipe ...</a>
      <button type="button">Button</button>
    </article>`;
body.append(recipe);
// body.insertAdjacentHTML('beforeend', recipe)
// body.innerHTML = recipe;
