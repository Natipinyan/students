let maxClassSize = 20;

global.classArry = [0,0,0,0,0,0,0,0,0,0];
function calcDataClass(dataExport){
    for(let i = 0;i<dataExport.length;i++){
        if(dataExport[i].endRoute!== "נדחה"){
            if( dataExport[i].endRoute ===  "שחק אלקטרוניקה" ||
                dataExport[i].endRoute ===   "שחק מכטרוניקה" ||
                dataExport[i].endRoute ===       "שחק תקשוב" ||
                dataExport[i].endRoute ===  "שחק אלקטרוניקה פעמי כנרת" ||
                dataExport[i].endRoute ===   "שחק מכטרוניקה פעמי כנרת" ||
                dataExport[i].endRoute ===  "שחק תקשוב פעמי כנרת"){
                classShahak(dataExport,i);
            }else if(
                dataExport[i].endRoute ===                    "מרום אלקטרוניקה" ||
                dataExport[i].endRoute ===             "מרום מיישם סייבר/תקשוב" ||
                dataExport[i].endRoute ===          "מרום אלקטרוניקה פעמי כנרת" ||
                dataExport[i].endRoute ===   "מרום מיישם סייבר/תקשוב פעמי כנרת" ){
                classMarom(dataExport,i);
            }
        }
    }
}
//לסדר כמויות שאם זה יותר גבוה ממקסימום כיתה להציג הודעת שגיאה
function classShahak(dataExport,index){
    if( dataExport[index].endRoute ===   "שחק מכטרוניקה פעמי כנרת" ||
        dataExport[index].endRoute ===   "שחק מכטרוניקה" ){
        dataExport[index].kita = "יג 2";
        classArry[2]+=1;
    }
    if( dataExport[index].endRoute ===   "שחק אלקטרוניקה פעמי כנרת" ||
        dataExport[index].endRoute ===   "שחק אלקטרוניקה" ){
        dataExport[index].kita = "יג 3";
        classArry[3]+=1;
    }
    if(dataExport[index].endRoute ===  "שחק תקשוב פעמי כנרת"){
        dataExport[index].kita = "יג 4";
        classArry[4]+=1;
    }
    if(dataExport[index].endRoute ===  "שחק תקשוב"){
        if(classArry[5]===maxClassSize){
            dataExport[index].kita = "יג 4";
            classArry[4]+=1;
        }else{
            dataExport[index].kita = "יג 5";
            classArry[5]+=1;
        }
    }
}

function classMarom(dataExport,index){
    if(dataExport[index].endRoute === "מרום אלקטרוניקה" && dataExport[index].MahtUnits === 3){
        if(classArry[1]===maxClassSize){
            dataExport[index].kita = "יג 6";
            classArry[6]+=1;
        }else{
        dataExport[index].kita = "יג 1";
        classArry[1]+=1;
        }
    }

    if(dataExport[index].endRoute === "מרום אלקטרוניקה" || dataExport[index].endRoute === "מרום אלקטרוניקה פעמי כנרת"){
        if(dataExport[index].MahtUnits === 4 || dataExport[index].MahtUnits === 5)
            dataExport[index].kita = "יג 7";
            classArry[7]+=1;
    }

    if(dataExport[index].endRoute ===   "מרום מיישם סייבר/תקשוב פעמי כנרת"){
        dataExport[index].kita = "יג 8";
        classArry[8]+=1;
    }

    if(dataExport[index].endRoute ===   "מרום מיישם סייבר/תקשוב"){
        if(classArry[9]===maxClassSize){
            dataExport[index].kita = "יג 8";
            classArry[8]+=1;
        }else{
            dataExport[index].kita = "יג 9";
            classArry[9]+=1;
        }
    }
}



module.exports = {
    calcDataClass:calcDataClass
};