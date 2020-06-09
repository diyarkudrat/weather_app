
const express = require('express');
const hbs = require("hbs");
const path = require("path");
const app = express();

const weatherData = require('./utils/data');

require('dotenv').config();

const publicStaticDirPath = path.join(__dirname, './public')

const viewsPath = path.join(__dirname, './views');

const partialsPath = path.join(__dirname, './views/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicStaticDirPath));



app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather App'
    })
})

app.get('/weather', (req, res) => {
    const city = req.query.city
    if(!city) {
        return res.send({
            error: "Must Enter City in Search Text Box"
        })
    }
    weatherData(city, (err,{temperature, description, cityName} = {}) => {
        if(err) {
            return res.send({
                err
            })
        }
        console.log(temperature, description, cityName)
        res.send({
            temperature,
            description,
            cityName
        })
    })
});

app.get('*', (req, res) => {
    res.send("Page Not Found")
})


port = process.env.PORT

app.listen(port, () => {
    console.log(`listening on localhost:${port}`)
});

module.exports = app;