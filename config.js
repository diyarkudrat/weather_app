require('dotenv').config();

const params = {
    weatherMap: {
        URL: "https://api.openweathermap.org/data/2.5/weather?q=",
        SECRET_KEY: process.env.SECRET_KEY
    }
}

module.exports = params