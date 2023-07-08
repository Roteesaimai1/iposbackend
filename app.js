const express = require('express')
const app = express();
const path = require('./api')
const moment = require('moment')
const cors = require('cors')
const port = 8080
const corsset = { //set CORS เพื่ออนุญาติให้เข้าถึง API
    origin: 'http://localhost:5173', //port vue js **ipที่อนุญาติให้ใช้***
    credentials: true,
};
app.use(cors(corsset));

app.use('/api', path)

app.listen(port,() => { 
    console.log(`Server run on Port ${port}`);
    console.log(`Log: ${moment().format('MMMM Do YYYY, h:mm:ss a')}`);
})