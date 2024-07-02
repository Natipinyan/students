const fs = require('fs');
const PROCESSED_FILES_DIR = path.join(__dirname, '../filesApp');
const PROCESSED_FILES_DIR_BC = path.join(__dirname, '../filesAppBC');
module.exports = router;

router.use('/filesApp', express.static(PROCESSED_FILES_DIR));
router.use('/filesAppBC', express.static(PROCESSED_FILES_DIR_BC));

router.get('/filesAppList', (req, res) => {
    fs.readdir(PROCESSED_FILES_DIR, (err, files) => {
        res.render('filesAppList', { files });
    });
});

router.get('/filesAppListBC', (req, res) => {
    fs.readdir(PROCESSED_FILES_DIR_BC, (err, files) => {
        res.render('filesAppListBC', { files });
    });
});




