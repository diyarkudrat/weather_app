const fetchWeather = '/weather';

const weatherForm = document.querySelector('form');
const searchInput = document.querySelector('input');

const weatherIcon = document.querySelector('.weatherIcon');
const weatherCondition = document.querySelector('.weatherCondition');
const tempElement = document.querySelector('.temperature span');
const locationElement = document.querySelector('.place');
const dateElement = document.querySelector('.date');


const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
dateElement.textContent = new Date().getDate() + ", " + monthNames[new Date().getMonth()]

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    locationElement.textContent = 'Loading...';
    tempElement.textContent = '';
    weatherCondition.textContent = '';
    const weatherApi = fetchWeather + "?city=" + searchInput.value
    fetch(weatherApi).then(res => {
        res.json().then(data => {
            if(data.err) {
                locationElement.textContent = data.err;
                tempElement.textContent = '';
                weatherCondition.textContent = '';
            } else {
                locationElement.textContent = data.cityName;
                fahrenheit = Math.ceil((data.temperature - 273.5) * 9/5 + 32)
                tempElement.textContent =  fahrenheit + String.fromCharCode(176) + 'F';
                weatherCondition.textContent = data.description.toUpperCase();
            }
        })
    })
})
