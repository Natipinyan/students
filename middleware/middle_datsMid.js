function writeToFile(req,res,next){
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
}

module.exports = {
    writeToFile:writeToFile
};
