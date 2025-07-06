const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

app.get("/", (req, res) => {
    res.send(`myHome Page`);
});

app.get("/home", (req, res) => {
    res.send(`second myHome`);
});


const router = require('../roote/roote');
app.use(`api/vi/table`, router);
const POST = process.env.PostEn || 3001;
app.listen(POST, () => {
console.log(`express app listening at http://localhost:${POST}`);
});

mongoose.connect(process.env.M_G)   
    .then(() => {
        console.log(`db connected...`);
    }) .catch((e) => {
        console.log(`not connected`,e);
    });

