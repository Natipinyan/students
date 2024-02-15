const express = require('express');
const app = express();
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


let db_M = require('./database');
global.db_pool = db_M.pool;

const path = require("path");
const {json} = require("express");
app.use(express.static(path.join(__dirname)));

const port = 7070;

app.set("view engine","ejs");




app.listen(port,() =>{
    console.log(`now listening to port http://localhost:${port}/addFile`)
})



const addFile_rtr =require('./routers/AddFile_R');
app.use('/addFile',addFile_rtr);