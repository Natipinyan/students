const fs = require('fs');
const express = require('express');
const path = require('path');
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

router.delete('/delete/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    let filePath = path.join(PROCESSED_FILES_DIR, fileName);

    if (!path.extname(fileName)) {
        filePath = path.join(PROCESSED_FILES_DIR, `${fileName}.xlsx`);
    }

    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('Error deleting file:', err);
            return res.status(500).send('Error deleting file');
        }
        res.send('File deleted successfully');
    });
});



