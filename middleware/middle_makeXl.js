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
    const dataout = [
        { name: objects[3].name, age:objects[3].age, id: objects[3].id ,kita:'1'},
        { name: objects[2].name, age:objects[2].age, id: objects[2].id , kita:'2'},
        { name: objects[1].name, age:objects[1].age, id: objects[1].id,kita:'3'}
    ];

    const workbookout = new excel.Workbook();
    const worksheet = workbookout.addWorksheet('נתונים');

    worksheet.cell(1, 1).string('שם');
    worksheet.cell(1, 2).string('גיל');
    worksheet.cell(1, 3).string('תעודת זהות');
    worksheet.cell(1, 4).string('כיתה');

    dataout.forEach((item, index) => {
        worksheet.cell(index + 2, 1).string(item.name);
        worksheet.cell(index + 2, 2).number(item.age);
        worksheet.cell(index + 2, 3).string(item.id);
        worksheet.cell(index + 2, 4).string(item.kita);

    });

    workbookout.write('נתונים.xlsx', (err, stats) => {
        if (err) {
            console.error(err);
        }
    });

    next();
}


module.exports = {
    printValue:makeFile
};
