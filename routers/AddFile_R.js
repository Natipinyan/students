const multer = require("multer");
module.exports = router;

router.get("/",(req, res) => {
    res.render("AddFile", {pageTitle:"upload page"});
});

router.post('/upload', [middleup.upload.single('file'),middlmake.makeFile], (req, res) => {
    res.render("UploadSuccess",{pageTitle:"upload Success page"});
});


