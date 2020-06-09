const request = require('request');
const params = require('../config');

const weatherData = (city, callback) => {
    const url = params.weatherMap.URL + encodeURIComponent(city) + '&appid=' + params.weatherMap.SECRET_KEY;
    // console.log(url)
    request({url, json:true}, (err, {body}) => {
        // console.log(body)
        if(err) {
            callback("Can't fetch data", undefined)
        } else {
            callback(undefined, {
                temperature: body.main.temp,
                description: body.weather[0].description,
                cityName: body.name
            })
        }
    })
}

module.exports = weatherData;