const express = require('express');
const multer = require("multer");
const router = express.Router();
module.exports = router;

const middleLog=require("../middleware/middle_up");



router.get("/",(req, res) => {
    res.render("addFile", {pageTitle:"login page"});
});

router.post('/upload', [middleLog.upload.single('file'),middleLog.printValue], (req, res) => {
    res.send('הקובץ הועלה בהצלחה!');
});



