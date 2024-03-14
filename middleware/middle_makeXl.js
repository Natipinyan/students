const xlsx = require("xlsx");
const excel = require("excel4node");

function makeFile(req,res,next){

    const workbook = xlsx.readFile(`filesApp/${modifiedFilename}`);

// בחר את הגליון הרלוונטי מהקובץ
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

// הגדר את העמודות הרלוונטיות
    const columns = ['name', 'age', 'id']; // עבור שם, גיל ותעודת זהות

// קרוא את הנתונים מהגליון ובנה את האובייקט
    const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });
    const objects = data.map(row => {
        const obj = {};
        columns.forEach((column, index) => {
            obj[column] = row[index];
        });
        return obj;
    });
    global.dataout = [
        { name: objects[3].name, age:objects[3].age, id: objects[3].id ,kita:'1'},
        { name: objects[2].name, age:objects[2].age, id: objects[2].id , kita:'2'},
        { name: objects[1].name, age:objects[1].age, id: objects[1].id,kita:'3'}
    ];

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