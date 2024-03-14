const express = require('express');
const multer = require("multer");
const router = express.Router();
module.exports = router;

const middleup=require("../middleware/middle_up");
const middlmake=require("../middleware/middle_makeXl");



router.get("/",(req, res) => {
    res.render("addFile", {pageTitle:"login page"});
});

router.post('/upload', [middleup.upload.single('file'),middlmake.makeFile], (req, res) => {
    res.send('הקובץ הועלה בהצלחה!');
});



