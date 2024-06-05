const xlsx = require("xlsx");
const excel = require("excel4node");
const path = require('path');


function makeFile(req,res,next){

    const workbook = xlsx.readFile(`filesAppBC/${modifiedFilename}`);

// בחר את הגליון הרלוונטי מהקובץ
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

// הגדר את העמודות הרלוונטיות
    const columns = [
        'name',
        'phoneNumber',
        'id',
        'mail',
        'address',
        'gender',
        'maslulKineret',
        'maslulBagrut',
        'maslulDipTeck',
        'gradeBagrut',
        'gradeDipTeck',
        'compUnits',
        'gradeComp',
        'engUnits',
        'gradeEng',
        'hebUnits',
        'gradeHeb',
        'MahtUnits',
        'gradeMaht',
        'fiveFisic',
        'gradeFisic',
        'paamey',
        'friends',
        'paameyMatch',
        'pammeyMechina',
        'kita',
        'grup',
   ];

// קרוא את הנתונים מהגליון ובנה את האובייקט
    const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });
    global.objects = data.map(row => {
        const obj = {};
        columns.forEach((column, index) => {
            obj[column] = row[index];
        });
        return obj;
    });


    const workbookout = new excel.Workbook();
    global.worksheet = workbookout.addWorksheet('נתונים');

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

    const FileName = 'data_' + formattedDateTime + '.xlsx';
    const directoryPath = path.join(__dirname, '..', 'filesApp');

    workbookout.write(path.join(directoryPath, FileName), (err, stats) => {
        if (err) {
            console.error(err);
        }
    });

    middldata.writeToFile();
    next();
}

module.exports = {
    makeFile:makeFile
};