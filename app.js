const express = require('express')
const app = express()
const path = require("path")
const exphbs = require('hbs');

require('dotenv').config();

const publicStaticDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../views')
const partialsPath = path.join(__dirname, '../views/partials')


app.set('view engine', 'exphbs',);
app.set('views', viewsPath);
exphbs.registerPartials(partialsPath);
app.use(express.static(publicStaticDirPath))

app.get('/', (req, res) => {
    res.send("hello")
})

app.get('/weather', (req, res) => {
    const city = req.query.city
    weatherData(city, (result) => {
        console.log(result)
    })
})

app.get('*', (req, res) => {
    res.send("Page Not Found")
})

const weatherData = require('./utils/data')

port = process.env.PORT

app.listen(port, () => {
    mongoose = require('mongoose')
    const mongo_uri = process.env.MONGODB_URI
    mongoose.connect(mongo_uri)
    console.log(`listening on localhost:${port}`)
});

module.exports = app;