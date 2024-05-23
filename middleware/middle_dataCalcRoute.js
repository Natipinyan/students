function  dataCalcRoute(dataExport){
    for(let i = 0;i<dataExport.length;i++){
        if(dataExport[i].maslulKineret === "מרום") {
            if (CheckMaromPaamey(dataExport, i)) {
                do_marom_paamey(dataExport, i);
            }else if (CheckMarom) {
                do_marom(dataExport, i);
            }else{
                dataExport[i].endRoute = "נדחה";
            }
        }

        if(dataExport[i].maslulKineret === "שחק"){
            if (CheckShachakPaamey(dataExport, i)) {
                do_Shachak_paamey(dataExport, i);
            }else if (CheckShachak) {
                do_Shachak(dataExport, i);
            }else{
                dataExport[i].endRoute = "נדחה";
            }
        }
    }
}

function  CheckShachakPaamey(dataExport,index){
    if(dataExport[index].paamey === "כן" && dataExport[index].maslulDipTeck === "כן" && dataExport[index].gradeDipTeck > 55){
        if ((dataExport[index].MahtUnits === 5 && dataExport[index].gradeMaht > 70) || (dataExport[index].MahtUnits === 4 && dataExport[index].gradeMaht > 80)) {
            console.log(index);
            if ((dataExport[index].engUnits === 4 && dataExport[index].gradeEng > 70) || (dataExport[index].engUnits === 5 && dataExport[index].gradeEng > 65)) {
                return true;
            }
        }
    }
    return false;
}
function  do_Shachak_paamey(dataExport,index){
    dataExport[index].paameyMatch = 1;
    dataExport[index].endRoute = "שחק פעמי כנרת";
    if(!(dataExport[index].fiveFisic === "כן" && dataExport[index].gradeFisic > 70)){
        dataExport[index].pammeyMechina = 1;
    }
}
function CheckShachak(dataExport,index){
    if(dataExport[index].maslulDipTeck === "כן" && dataExport[index].gradeDipTeck > 55){
        if(dataExport[index].MahtUnits >= 3 && dataExport[index].gradeMaht > 55){
            if(dataExport[index].engUnits >= 3 && dataExport[index].gradeEng > 55){
                if(dataExport[index].hebUnits >= 1 && dataExport[index].gradeHeb > 55)
                    return true;
            }
        }
    }
    return false;
}
function do_Shachak(dataExport,index){
    dataExport[index].endRoute = "שחק";}
function  CheckMaromPaamey(dataExport,index){
    if(dataExport[index].paamey === "כן" && dataExport[index].gradeBagrut > 70) {
        if (dataExport[index].maslulBagrut === "כן") {
            if ((dataExport[index].MahtUnits === 5 && dataExport[index].gradeMaht > 70) || (dataExport[index].MahtUnits === 4 && dataExport[index].gradeMaht > 80)) {
                if ((dataExport[index].engUnits === 4 && dataExport[index].gradeEng > 70) || (dataExport[index].engUnits === 5 && dataExport[index].gradeEng > 65)) {
                    return true;
                }
            }
        }
    }
    return false;
}
function  do_marom_paamey(dataExport,index){
    dataExport[index].paameyMatch = 1;
    CyberOrEleckMaromPaamey(dataExport,index);
    if(!(dataExport[index].fiveFisic === "כן" && dataExport[index].gradeFisic > 70)) {
        dataExport[index].pammeyMechina = 1;
    }
}
function CyberOrEleckMaromPaamey(dataExport,index){
    if(dataExport[index].compUnits === 5 && dataExport[index].gradeComp > 55){
        dataExport[index].endRoute = "מרום מיישם סייבר/תקשוב פעמי כנרת";
    }else{
        dataExport[index].endRoute = "מרום אלקטרוניקה פעמי כנרת";
    }
}
function CheckMarom(dataExport,index){
    if(dataExport[index].maslulBagrut === "כן"){
        if(dataExport[index].MahtUnits >= 3 && dataExport[index].gradeMaht > 55){
            if(dataExport[index].engUnits >= 3 && dataExport[index].gradeEng > 55){
                if(dataExport[index].hebUnits >= 1 && dataExport[index].gradeHeb > 55)
                    return true;
            }
        }
    }
    return false;
}
function  do_marom(dataExport,index){
    CyberOrEleckMarom(dataExport,index);
}
function CyberOrEleckMarom(dataExport,index){
    if(dataExport[index].compUnits === 5 && dataExport[index].gradeComp > 55){
        dataExport[index].endRoute = "מרום מיישם סייבר/תקשוב";
    }else{
        dataExport[index].endRoute = "מרום אלקטרוניקה";
    }
}

module.exports = {
    dataCalcRoute:dataCalcRoute
};