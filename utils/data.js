const request = require('request');
const params = require('../config');

const weatherData = (city, callback) => {
    const url = params.weatherMap.URL + encodeURIComponent(city) + '&appid=' + params.weatherMap.SECRET_KEY
    console.log(url);
    request({url, json:true}, (err, {body}) => {
        console.log(body);
        if(err) {
            callback("Can't fetch data", undefined)
        } else {
            callback(undefined, {
                abc: true
            })
        }
    })
}

module.exports = weatherData;