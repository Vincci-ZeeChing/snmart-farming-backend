const express = require('express')
const soilSensorData = require("./soilSensorData");
const surroundingSensorData = require("./surroundingSensorData");


const app = express()

app.get('/',(req, res)=>{
    console.log('user hit the resource')
    res.status(200).send('Home Page')
})

app.get('/soilSensors', (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.json(soilSensorData);
});

app.get('/surroundingSensors', (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.json(surroundingSensorData);
});

app.all('*',(req, res)=>{
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000....')
})
