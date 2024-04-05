function writeToFile(req,res,next){
    let dataExport = [];

    importData(dataExport);
    CreatingColumnNames();
    dataExpXl(dataExport);
    AddData(dataExport);
}

async function AddData(dataExport,res){
    let Query = "INSERT into students_info ";

    Query+="(name,phoneNumber,tz,mail,address,gender,maslulKineret,maslulBagrut,maslulDipTeck,gradeTeck," +
        "compUnits,gradeComp,engUnits,gradeEng,hebUnits,gradeHeb,fiveFisic,gradeFisic,paamey,friends)";
    Query+= " VALUES ";

    for(let i =0 ; i<dataExport.length; i++){
        let name =           dataExport[i].name;
        let phoneNumber =    dataExport[i].phoneNumber;
        let id =             dataExport[i].id;
        let mail =           dataExport[i].mail;
        let address =        dataExport[i].address;
        let gender =         dataExport[i].gender;
        let maslulKineret=   dataExport[i].maslulKineret;
        let maslulBagrut =   dataExport[i].maslulBagrut;
        let maslulDipTeck =  dataExport[i].maslulDipTeck;
        let gradeTeck =      dataExport[i].gradeTeck;
        let compUnits =      dataExport[i].compUnits;
        let gradeComp =      dataExport[i].gradeComp;
        let engUnits =       dataExport[i].engUnits;
        let gradeEng =       dataExport[i].gradeEng;
        let hebUnits =       dataExport[i].hebUnits;
        let gradeHeb =       dataExport[i].gradeHeb;
        let fiveFisic =      dataExport[i].fiveFisic;
        let gradeFisic =     dataExport[i].gradeFisic;
        let paamey =         dataExport[i].paamey;
        let friends =        dataExport[i].friends;

        Query+=`('${name}','${phoneNumber}','${id}','${mail}','${address}','${gender}','${maslulKineret}','${maslulBagrut}','${maslulDipTeck}','${gradeTeck}',
    '${compUnits}','${gradeComp}','${engUnits}','${gradeEng}','${hebUnits}','${gradeHeb}','${fiveFisic}','${gradeFisic}','${paamey}','${friends}'),`;
    }

    Query = Query.slice(0,-1);
    console.log("adding user",Query);
    db_pool.query(Query, function (err, rows, fields) {
        if (err) {
            console.log("err")
        }else{
            console.log("regSuccessful")
        }
    });
}


function importData(dataExport){
    for (let i = 1; i < objects.length; i++) {
        dataExport.push({
            name: objects[i].name,
            phoneNumber: objects[i].phoneNumber,
            id: objects[i].id,
            mail:objects[i].mail,
            address:objects[i].address,
            gender:objects[i].gender,
            maslulKineret:objects[i].maslulKineret,
            maslulBagrut:objects[i].maslulBagrut,
            maslulDipTeck:objects[i].maslulDipTeck,
            gradeTeck:objects[i].gradeTeck,
            compUnits:objects[i].compUnits,
            gradeComp:objects[i].gradeComp,
            engUnits:objects[i].engUnits,
            gradeEng:objects[i].gradeEng,
            hebUnits:objects[i].hebUnits,
            gradeHeb:objects[i].gradeHeb,
            fiveFisic:objects[i].fiveFisic,
            gradeFisic:objects[i].gradeFisic,
            paamey:objects[i].paamey,
            friends:objects[i].friends,
        });
    }
}
function CreatingColumnNames(){
    worksheet.cell(1, 1).string('שם');
    worksheet.cell(1, 2).string("מספר טלפון");
    worksheet.cell(1, 3).string("תעודת זהות");
    worksheet.cell (1, 4).string('מייל');
    worksheet.cell (1, 5).string('כתובת מגורים בזמן לימודים');
    worksheet.cell (1, 6).string('מגדר');
    worksheet.cell (1, 7).string('מסלול לימודים שנקבע לך מהמכללה ');
    worksheet.cell (1, 8).string('מסלול בגרות בסיום י"ב');
    worksheet.cell (1, 9).string('מסלול תעודה טכנולוגית בסיום י"ב של מינימום 7 יחידות במגמה');
    worksheet.cell(1, 10).string('ציון מוערך');
    worksheet.cell(1, 11).string('יחידות מחשבים');
    worksheet.cell(1, 12).string('ציון מוערך');
    worksheet.cell(1, 13).string('יחידות אנגלית');
    worksheet.cell(1, 14).string('ציון מוערך');
    worksheet.cell(1, 15).string('לפחות יחידה אחת בעברית');
    worksheet.cell(1, 16).string('ציון מוערך');
    worksheet.cell(1, 17).string('האם עשית 5 יחידות בפיזיקה');
    worksheet.cell(1, 18).string('ציון מוערך');
    worksheet.cell(1, 19).string('האם את מעוניין בפעמי כנרת (בין  י"ג ל י"ד, יידרש ציון  פסיכומטרי  מינימום 590 )');
    worksheet.cell(1, 20).string('חברים שחשוב לך להיות איתם בכיתה (בתנאי שאתם מאותו המסלול ) במידה ואין יש להשאיר ריק ');
}
function dataExpXl(dataExport){
    dataExport.forEach((item, index) => {
        worksheet.cell(index +2, 1).string(item.name);
        worksheet.cell(index +2, 2).number(item.phoneNumber);
        worksheet.cell(index +2, 3).number(item.id);
        worksheet.cell(index +2,  4).string(item.mail);
        worksheet.cell(index +2,  5).string(item.address);
        worksheet.cell(index +2,  6).string(item.gender);
        worksheet.cell(index +2,  7).string(item.maslulKineret);
        worksheet.cell(index +2,  8).string(item.maslulBagrut);
        worksheet.cell(index +2,  9).string(item.maslulDipTeck);
        worksheet.cell(index +2, 10).number(item.gradeTeck);
        worksheet.cell(index +2, 11).number(item.compUnits);
        worksheet.cell(index +2, 12).number(item.gradeComp);
        worksheet.cell(index +2, 13).number(item.engUnits);
        worksheet.cell(index +2, 14).number(item.gradeEng);
        worksheet.cell(index +2, 15).string(item.hebUnits);
        worksheet.cell(index +2, 16).number(item.gradeHeb);
        worksheet.cell(index +2, 17).string(item.fiveFisic);
        worksheet.cell(index +2, 18).number(item.gradeFisic);
        worksheet.cell(index +2, 19).string(item.paamey);
        worksheet.cell(index +2, 20).string(item.friends);
    });
}

module.exports = {
    writeToFile:writeToFile
};
