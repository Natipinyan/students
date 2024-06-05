const multer = require('multer');
const path = require("path");
const xlsx = require("xlsx");
const excel = require('excel4node');
const data = {};

// הגדרת המחלקה האחראית על איפוס והגדרת המסלול
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'filesAppBC/');
    },

    filename: function (req, file, cb) {
        const  now = new Date();
        const formattedDateTime = now.toLocaleString('he-IL', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).replace(/[\/\s:]/g, '-').replace('-', '_').replace(':', '_').replace(',', '');

        const FileName = 'dataBC_' + formattedDateTime + '.xlsx';
        global.modifiedFilename = `${FileName}`; // יצירת שם חדש לקובץ עם התאריך והשעה בפורמט המבוקש

        cb(null, modifiedFilename); // החזרת שם הקובץ המודרך
    }

});

const upload = multer({ storage: storage });

module.exports = {
    upload:upload
};