const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

mongoose.connect(process.env.M_G)
        .then(()=>{
            console.log("db successfuly connected...")
        }) 
        .catch((err)=>{
            console.log("db error due to...",err)
        });

app.get('/', (req, res) => {
res.send(`app start`);
// res.status(201);
});

const tableRouter=require('../routes/routes')
app.use("/api/v1/tables",tableRouter);

const POST = process.env.POSTd || 3001 ;
app.listen(POST, () => {
    console.log(`my code is http://localhost:${POST}`)
});


