const multer = require('multer');
const path = require("path");
const xlsx = require("xlsx");
const excel = require('excel4node');
const data = {};

// הגדרת המחלקה האחראית על איפוס והגדרת המסלול
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'filesApp/');
    },

    filename: function (req, file, cb) {
        const now = new Date(); // קבלת תאריך ושעה נוכחיים
        const year = now.getFullYear().toString().slice(-2); // קבלת השנה (שני ספרות)
        const month = ('0' + (now.getMonth() + 1)).slice(-2); // קבלת החודש (שני ספרות)
        const day = ('0' + now.getDate()).slice(-2); // קבלת היום (שני ספרות)
        const hours = ('0' + now.getHours()).slice(-2); // קבלת השעה (שני ספרות)
        const minutes = ('0' + now.getMinutes()).slice(-2); // קבלת הדקות (שני ספרות)
        const seconds = ('0' + now.getSeconds()).slice(-2); // קבלת השניות (שני ספרות)

        const formattedDateTime = `${year}-${month}-${day}_${hours}_${minutes}_${seconds}`; // יצירת מחרוזת בפורמט המבוקש

        const originalFilename = file.originalname; // שם הקובץ המקורי
        const extension = path.extname(originalFilename); // קבלת סיומת הקובץ המקורית
        global.modifiedFilename = `${formattedDateTime}_${originalFilename}`; // יצירת שם חדש לקובץ עם התאריך והשעה בפורמט המבוקש

        cb(null, modifiedFilename); // החזרת שם הקובץ המודרך
    }

});

const upload = multer({ storage: storage });

module.exports = {
    upload:upload
};