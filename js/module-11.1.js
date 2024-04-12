// Отримати погоду за допомогою OpenWeatherMap API Опис:
// Використайте публічне API OpenWeatherMap для отримання поточної погоди.
// Зробіть GET - запит за адресою https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY},
// де { city } - назва міста, а { API_KEY } - ваш ключ API OpenWeatherMap.
// Перегляньте отримані дані щодо погоди.

const form = document.querySelector('form')
const weatherEl = document.querySelector('.weather')
const OPEN_WEATHER_KEY = "653f420c309f296fd0acdaeaa859132d";
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

const fetchWeather = (city) => {
    const searchParams = new URLSearchParams({
      q: city,
      appid: OPEN_WEATHER_KEY
    });

    return fetch(`${BASE_URL}?${searchParams}`).then(res => {
        if (!res.ok) {
            throw new Error(res.status)
        }
        return res.json()
    })
}

const renderWeatherCard = (data) => {
    const { weather, name} = data
    return `<div>
      <img src="" alt="">
      <h2 class="city">${name}</h2 >

    </div>`;
}

const onSubmitForm = (e) => {
        e.preventDefault()
    const city = form.elements.city.value
    console.log(city);
    
    fetchWeather(city).then(data => {
        console.log(data);
        const card = renderWeatherCard(data)
        weatherEl.insertAdjacentHTML("afterbegin", card)
    })
}
    
form.addEventListener('submit', onSubmitForm)
