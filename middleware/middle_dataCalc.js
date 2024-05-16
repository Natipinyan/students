function  dataCalc(dataExport){
    for(let i = 0;i<dataExport.length;i++){
        if(dataExport[i].maslulKineret === "מרום")
            dataMarom(dataExport,i);
        if(dataExport[i].maslulKineret === "שחק")
            dataShachak(dataExport,i);
    }
}
function  dataMarom(dataExport,index){
    if(dataExport[index].paamey === "כן" && dataExport[index].gradeBagrut > 70) {
        if (dataExport[index].maslulBagrut === "כן") {
            if ((dataExport[index].MahtUnits === 5 && dataExport[index].gradeMaht > 70) || (dataExport[index].MahtUnits === 4 && dataExport[index].gradeMaht > 80)) {
                if ((dataExport[index].engUnits === 4 && dataExport[index].gradeEng > 70) || (dataExport[index].engUnits === 5 && dataExport[index].gradeEng > 65)) {
                    dataExport[index].paameyMatch = "מתאים למרום פעמי כנרת";
                    if(!(dataExport[index].fiveFisic === "כן" && dataExport[index].gradeFisic > 70)){
                        dataExport[index].pammeyMechina = "כן";
                    }
                }
            }
        }
    }
}
function  dataShachak(dataExport,index){
    if(dataExport[index].paamey === "כן" && dataExport[index].gradeDipTeck > 55){
        if ((dataExport[index].MahtUnits === 5 && dataExport[index].gradeMaht > 70) || (dataExport[index].MahtUnits === 4 && dataExport[index].gradeMaht > 80)) {
            console.log(index);
            if ((dataExport[index].engUnits === 4 && dataExport[index].gradeEng > 70) || (dataExport[index].engUnits === 5 && dataExport[index].gradeEng > 65)) {
                dataExport[index].paameyMatch = "מתאים לשחק פעמי כנרת";
                if(!(dataExport[index].fiveFisic === "כן" && dataExport[index].gradeFisic > 70)){
                    dataExport[index].pammeyMechina = "כן";
                }
            }
        }
    }
}

module.exports = {
    dataCalc:dataCalc
};