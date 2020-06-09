const express = require('express')
const app = express()
const path = require("path")
const exphbs = require('hbs');
const bodyParser = require('body-parser');

require('dotenv').config();

const publicStaticDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../views')
const partialsPath = path.join(__dirname, '../views/partials')


app.set('view engine', 'exphbs',);
app.set('views', viewsPath);
exphbs.registerPartials(partialsPath);
app.use(express.static(publicStaticDirPath))

const weatherData = require('./utils/data')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send("hello")
})

app.get('/weather', (req, res) => {
    const city = req.query.city
    if(!city) {
        return res.send({
            error: "Must Enter City in Search Text Box"
        })
    }
    weatherData(city, (err,{temperature, description, cityName}) => {
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
    mongoose = require('mongoose')
    const mongo_uri = process.env.MONGODB_URI
    mongoose.connect(mongo_uri)
    console.log(`listening on localhost:${port}`)
});

module.exports = app;