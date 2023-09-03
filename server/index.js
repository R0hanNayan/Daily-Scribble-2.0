const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) =>{
    res.send("Hello");
});

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})