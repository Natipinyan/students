function writeToFile(req,res,next){
    global.dataExport = [];
    importData(dataExport);
    middleDataCalcRoute.dataCalcRoute(dataExport);
    middleDataCalcClass.calcDataClass(dataExport);
    middleDataCalcGroup.calcGroup(dataExport);
    CreatingColumnNames();
    emptyVal(dataExport);
    dataExpXl(dataExport);
    AddData(dataExport);
}
async function AddData(dataExport,res){
    let Query = "INSERT into students_info ";
    Query+="(name,phoneNumber,tz,mail,address,gender,maslulKineret,maslulBagrut,maslulDipTeck,gradeBagrut," +
        "gradeDipTeck,compUnits,gradeComp,engUnits,gradeEng,hebUnits,gradeHeb,MahtUnits,gradeMaht,fiveFisic,gradeFisic,paamey,friends,endRoute,paameyMatch,pammeyMechina,kita,grup)";
    Query+= " VALUES ";
    for(let i = 0 ; i<dataExport.length; i++){
        let name =           dataExport[i].name;
        let phoneNumber =    dataExport[i].phoneNumber;
        let id =             dataExport[i].id;
        let mail =           dataExport[i].mail;
        let address =        dataExport[i].address;
        let gender =         dataExport[i].gender;
        let maslulKineret=   dataExport[i].maslulKineret;
        let maslulBagrut =   dataExport[i].maslulBagrut;
        let maslulDipTeck =  dataExport[i].maslulDipTeck;
        let gradeBagrut =    dataExport[i].gradeBagrut;
        let gradeDipTeck =   dataExport[i].gradeDipTeck;
        let compUnits =      dataExport[i].compUnits;
        let gradeComp =      dataExport[i].gradeComp;
        let engUnits =       dataExport[i].engUnits;
        let gradeEng =       dataExport[i].gradeEng;
        let hebUnits =       dataExport[i].hebUnits;
        let gradeHeb =       dataExport[i].gradeHeb;
        let MahtUnits=       dataExport[i].MahtUnits;
        let gradeMaht=       dataExport[i].gradeMaht;
        let fiveFisic =      dataExport[i].fiveFisic;
        let gradeFisic =     dataExport[i].gradeFisic;
        let paamey =         dataExport[i].paamey;
        let friends =        dataExport[i].friends;
        let endRoute =       dataExport[i].endRoute;
        let paameyMatch=     dataExport[i].paameyMatch;
        let pammeyMechina=   dataExport[i].pammeyMechina;
        let kita =    dataExport[i].kita;
        let grup =    dataExport[i].grup;
        Query+=`('${name}','${phoneNumber}','${id}','${mail}','${address}',
        '${gender}','${maslulKineret}','${maslulBagrut}','${maslulDipTeck}',
        '${gradeBagrut}','${gradeDipTeck}','${compUnits}','${gradeComp}',
        '${engUnits}','${gradeEng}','${hebUnits}','${gradeHeb}','${MahtUnits}',
        '${gradeMaht}','${fiveFisic}','${gradeFisic}','${paamey}','${friends}',
        '${endRoute}','${paameyMatch}','${pammeyMechina}','${kita}','${grup}'),`;
    }
    Query = Query.slice(0,-1);
    //console.log("adding user",Query);
    db_pool.query(Query, function (err, rows, fields) {
        if (err) {
            console.log("err");
        }else{
            console.log("regSuccessful");
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
            gradeBagrut:objects[i].gradeBagrut,
            gradeDipTeck:objects[i].gradeDipTeck,
            compUnits:objects[i].compUnits,
            gradeComp:objects[i].gradeComp,
            engUnits:objects[i].engUnits,
            gradeEng:objects[i].gradeEng,
            hebUnits:objects[i].hebUnits,
            gradeHeb:objects[i].gradeHeb,
            MahtUnits:objects[i].MahtUnits,
            gradeMaht:objects[i].gradeMaht,
            fiveFisic:objects[i].fiveFisic,
            gradeFisic:objects[i].gradeFisic,
            paamey:objects[i].paamey,
            friends:objects[i].friends,
            endRoute:" ",
            paameyMatch: 0,
            pammeyMechina:0,
            kita:"",
            grup:"",
        });
    }
}
function CreatingColumnNames(){
    worksheet.cell (1, 1).string('שם');
    worksheet.cell (1, 2).string("מספר טלפון");
    worksheet.cell (1, 3).string("תעודת זהות");
    worksheet.cell (1, 4).string('מייל');
    worksheet.cell (1, 5).string('כתובת מגורים בזמן לימודים');
    worksheet.cell (1, 6).string('מגדר');
    worksheet.cell (1, 7).string('מסלול לימודים שנקבע לך מהמכללה ');
    worksheet.cell (1, 8).string('מסלול בגרות בסיום י"ב');
    worksheet.cell (1, 9).string('מסלול תעודה טכנולוגית בסיום י"ב של מינימום 7 יחידות במגמה');
    worksheet.cell(1, 10).string('ציון מוערך בבגרות');
    worksheet.cell(1, 11).string('ציון מוערך בתעודה טכנולוגית');
    worksheet.cell(1, 12).string('יחידות מחשבים');
    worksheet.cell(1, 13).string('ציון מוערך');
    worksheet.cell(1, 14).string('יחידות אנגלית');
    worksheet.cell(1, 15).string('ציון מוערך');
    worksheet.cell(1, 16).string('לפחות יחידה אחת בעברית');
    worksheet.cell(1, 17).string('ציון מוערך');
    worksheet.cell(1, 18).string('כמה יחידות מתמטיקה עשית');
    worksheet.cell(1, 19).string('ציון ממוצע');
    worksheet.cell(1, 20).string('האם עשית 5 יחידות בפיזיקה');
    worksheet.cell(1, 21).string('ציון מוערך');
    worksheet.cell(1, 22).string('האם את מעוניין בפעמי כנרת (בין  י"ג ל י"ד, יידרש ציון  פסיכומטרי  מינימום 590 )');
    worksheet.cell(1, 23).string('חברים שחשוב לך להיות איתם בכיתה (בתנאי שאתם מאותו המסלול ) במידה ואין יש להשאיר ריק ');
    worksheet.cell(1, 23).string('מסלול לימודים סופי ');
    worksheet.cell(1, 24).string('האם מתאים לפעמי כנרת ');
    worksheet.cell(1, 25).string('האם צריך מכינה ');
    worksheet.cell(1, 26).string('כיתת שיבוץ');
    worksheet.cell(1, 27).string('תת קבוצה');
}
function dataExpXl(dataExport){
    dataExport.forEach((item, index) => {
        worksheet.cell(index +2,  1).string(item.name);
        worksheet.cell(index +2,  2).number(item.phoneNumber);
        worksheet.cell(index +2,  3).number(item.id);
        worksheet.cell(index +2,  4).string(item.mail);
        worksheet.cell(index +2,  5).string(item.address);
        worksheet.cell(index +2,  6).string(item.gender);
        worksheet.cell(index +2,  7).string(item.maslulKineret);
        worksheet.cell(index +2,  8).string(item.maslulBagrut);
        worksheet.cell(index +2,  9).string(item.maslulDipTeck);
        worksheet.cell(index +2, 10).number(item.gradeBagrut);
        worksheet.cell(index +2, 11).number(item.gradeDipTeck);
        worksheet.cell(index +2, 12).number(item.compUnits);
        worksheet.cell(index +2, 13).number(item.gradeComp);
        worksheet.cell(index +2, 14).number(item.engUnits);
        worksheet.cell(index +2, 15).number(item.gradeEng);
        worksheet.cell(index +2, 16).string(item.hebUnits);
        worksheet.cell(index +2, 17).number(item.gradeHeb);
        worksheet.cell(index +2, 18).number(item.MahtUnits);
        worksheet.cell(index +2, 19).number(item.gradeMaht);
        worksheet.cell(index +2, 20).string(item.fiveFisic);
        worksheet.cell(index +2, 21).number(item.gradeFisic);
        worksheet.cell(index +2, 22).string(item.paamey);
        worksheet.cell(index +2, 23).string(item.friends);
        worksheet.cell(index +2, 23).string(item.endRoute);
        worksheet.cell(index +2, 24).string(item.paameyMatch === 1 ? "כן" : "לא");
        worksheet.cell(index +2, 25).string(item.pammeyMechina === 1 ? "כן" : "לא");
        worksheet.cell(index +2, 26).string(item.kita);
        worksheet.cell(index +2, 27).string(item.grup);
    });
}
function emptyVal(dataExport) {
    for (let obj of dataExport){
        if (!obj.name || obj.name === ' ') {obj.name = ' ';}
        if (!obj.phoneNumber || obj.phoneNumber === ' ') {obj.phoneNumber = 0;}
        if (!obj.id || obj.id === ' ') {obj.id = 0;}
        if (!obj.mail || obj.mail === ' ') {obj.mail = ' ';}
        if (!obj.address || obj.address === ' ') {obj.address = ' ';}
        if (!obj.gender || obj.gender === ' ') {obj.gender = ' ';}
        if (!obj.maslulKineret || obj.maslulKineret === ' ') {obj.maslulKineret = ' ';}
        if (!obj.maslulBagrut || obj.maslulBagrut === ' ') {obj.maslulBagrut = ' ';}
        if (!obj.maslulDipTeck || obj.maslulDipTeck === ' ') {obj.maslulDipTeck = ' ';}
        if (!obj.gradeBagrut || obj.gradeBagrut === ' ') {obj.gradeBagrut = 0;}
        if (!obj.gradeDipTeck || obj.gradeDipTeck === ' ') {obj.gradeDipTeck = 0;}
        if (!obj.compUnits || obj.compUnits === ' ') {obj.compUnits = 0;}
        if (!obj.gradeComp || obj.gradeComp === ' ') {obj.gradeComp = 0;}
        if (!obj.engUnits || obj.engUnits === ' ') {obj.engUnits = 0;}
        if (!obj.gradeEng || obj.gradeEng === ' ') {obj.gradeEng = 0;}
        if (!obj.hebUnits || obj.hebUnits === ' ') {obj.hebUnits = ' ';}
        if (!obj.gradeHeb || obj.gradeHeb === ' ') {obj.gradeHeb = 0;}
        if (!obj.MahtUnits || obj.MahtUnits === ' ') {obj.MahtUnits = 0;}
        if (!obj.gradeMaht || obj.gradeMaht === ' ') {obj.gradeMaht = 0;}
        if (!obj.fiveFisic || obj.fiveFisic === ' ') {obj.fiveFisic =  ' ';}
        if (!obj.gradeFisic || obj.gradeFisic === ' ') {obj.gradeFisic = 0;}
        if (!obj.paamey || obj.paamey === ' ') {obj.paamey = ' ';}
        if (!obj.friends || obj.friends === ' ') {obj.friends = ' ';}
    }
}

module.exports = {
    writeToFile:writeToFile,
};
