const multer = require("multer");
module.exports = router;
/**
 * @swagger
 * tags:
 *   name: File Upload
 *   description: API for uploading files
 */

/**
 * @swagger
 * /addFile:
 *   get:
 *     summary: מציג את טופס העלאת הקבצים
 *     tags: [File Upload]
 *     responses:
 *       200:
 *         description: דף טופס העלאת קבצים הוצג בהצלחה
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 */
router.get("/",(req, res) => {
    res.render("AddFile", {pageTitle:"upload page"});
});

/**
 * @swagger
 * /addFile/upload:
 *   post:
 *     summary: מעלה קובץ
 *     tags: [File Upload]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: הקובץ הועלה בהצלחה
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *       400:
 *         description: שגיאה בהעלאת הקובץ
 */
router.post('/upload', [middleup.upload.single('file'),middlmake.makeFile], (req, res) => {
    res.render("UploadSuccess",{pageTitle:"upload Success page"});
});


