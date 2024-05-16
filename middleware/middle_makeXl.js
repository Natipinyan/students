const xlsx = require("xlsx");
const excel = require("excel4node");

function makeFile(req,res,next){

    const workbook = xlsx.readFile(`filesApp/${modifiedFilename}`);

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


    workbookout.write('נתונים.xlsx', (err, stats) => {
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