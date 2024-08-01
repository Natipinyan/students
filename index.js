global.express = require('express');
const app = express();

const {json} = require("express");
app.use(express.json());

global.path = require("path");
app.use(express.static(path.join(__dirname)));

const { swaggerUi, specs } = require('./swagger/swaggerConfig');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

let db_M = require('./database');
global.db_pool = db_M.pool;

global.router = express.Router();
global.middleup=require("./middleware/middle_up");
global.middlmake=require("./middleware/middle_makeXl");
global.middldata=require("./middleware/middle_datsMid");
global.middleDataCalcRoute=require("./middleware/middle_dataCalcRoute");
global.middleDataCalcClass = require("./middleware/middle_dataCalcClass")
global.middleDataCalcGroup = require ("./middleware/middle_dataCCalcGroup");

const port = 6060;
app.set("view engine","ejs");

app.listen(port,() =>{
    console.log(`now listening to port http://localhost:${port}/addFile`);
    console.log(`now listening to port http://localhost:${port}/DownloadFiles/filesAppList`);
    console.log(`now listening to port http://localhost:${port}/DownloadFiles/filesAppListBC`);
})

const addFile_rtr =require('./routers/AddFile_R');
app.use('/addFile',addFile_rtr);

const DownloadFiles_rtr = require('./routers/DownloadFiles_R');
app.use('/DownloadFiles', DownloadFiles_rtr);