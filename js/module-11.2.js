// Отримати список користувачів з GitHub API Опис:
// Використайте публічне API GitHub для отримання списку користувачів.Зробіть GET - запит
//  за адресою https://api.github.com/users та перегляньте отримані дані щодо користувачів.
const usersEl = document.querySelector('.users')
const BASE_URL = "https://api.github.com/users";
const fetchData = () => {
  return fetch(`${BASE_URL}`).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

fetchData().then((data) => {
    usersEl.insertAdjacentHTML("beforeend", renderCards(data))
}).catch((err) => err);


const renderCards = (users) => {
    return users.map(({ avatar_url , login}) => {
      return `<li class="user-item">
      <img src="${avatar_url}" alt="">
      <p class="user-login">${login}</p>
    </li>`;
    }).join("");
}