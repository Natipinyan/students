const multer = require('multer');
const path = require("path");
const xlsx = require("xlsx");
const data = {};

// הגדרת המחלקה האחראית על איפוס והגדרת המסלול
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'filesApp/');
    },

    filename: function (req, file, cb) {
        cb(null, file.fieldname + Date + path.extname(file.originalname));
    }
});



const upload = multer({ storage: storage });

function printValue(req,res,next){

    const workbook = xlsx.readFile('filesApp/fileavi.xlsx');

    workbook.SheetNames.forEach(sheetName => {
        const worksheet = workbook.Sheets[sheetName];
        data[sheetName] = xlsx.utils.sheet_to_json(worksheet);
    });

    Object.keys(data).forEach(sheetName => {
        console.log(`שורה ראשונה מגליון ${sheetName}:`, data[sheetName][1]);
    });

    next();
}


module.exports = {
    upload:upload,
    printValue:printValue
};
