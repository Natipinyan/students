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


router.delete('/:folder/:filename', (req, res) => {
    const folder = req.params.folder;
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '../', folder, filename);

    console.log(`Attempting to delete file: ${filePath}`);

    fs.unlink(filePath, err => {
        if (err) {
            console.error(`Error deleting file: ${err.message}`);
            return res.status(500).json({ success: false, message: 'Failed to delete file' });
        }
        res.json({ success: true, message: 'File deleted' });
    });
});



