const express = require('express')
const app = express()

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const city = 'Clayton'
const url = `api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=29a1bb60ec502a9a3f85a501a5521fa3`


require('dotenv').config();

app.get('/', (req, res) => {
    res.send("hello")
})

app.get('/weather', (req, res) => {
    res.send('weather endpoint')
})

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