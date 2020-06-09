const fetchWeather = '/weather';

const weatherForm = document.querySelector('form');
const searchInput = document.querySelector('input');

const weatherIcon = document.querySelector('.weatherIcon');
const weatherCondition = document.querySelector('.weatherCondition');
const tempElement = document.querySelector('.temperature span');
const locationElement = document.querySelector('.place');
const dateElement = document.querySelector('.date');

dateElement.textContent = new Date().getDate()

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(searchInput.value);
})
