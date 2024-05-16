const express = require('express');
const multer = require("multer");
const router = express.Router();
module.exports = router;

global.middleup=require("../middleware/middle_up");
global.middlmake=require("../middleware/middle_makeXl");
global.middldata=require("../middleware/middle_datsMid");
global.middleDataCalc=require("../middleware/middle_dataCalc");

router.get("/",(req, res) => {
    res.render("addFile", {pageTitle:"login page"});
});

router.post('/upload', [middleup.upload.single('file'),middlmake.makeFile], (req, res) => {
    res.send('הקובץ הועלה בהצלחה!');
});



