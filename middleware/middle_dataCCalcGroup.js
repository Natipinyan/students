let classArry1 = [0,0,0];
let classArry2 = [0,0,0];
let classArry3 = [0,0,0];
let classArry4 = [0,0,0];
let classArry5 = [0,0,0];
let classArry6 = [0,0,0];
let classArry7 = [0,0,0];
let classArry8 = [0,0,0];
let classArry9 = [0,0,0];

function  calcGroup(dataExport){
    for(let i=0;i<dataExport.length;i++){
        if(dataExport[i].endRoute !== "נדחה"){
            if(dataExport[i].kita === "יג 2"){
                classeswithPaamey(dataExport,i,classArry2,2);
            }
            if(dataExport[i].kita === "יג 3"){
                classeswithPaamey(dataExport,i,classArry3,3);
            }
            if(dataExport[i].kita === "יג 4"){
                classeswithPaamey(dataExport,i,classArry4,4);
            }
            if(dataExport[i].kita === "יג 7"){
                classeswithPaamey(dataExport,i,classArry7,7);
            }
            if(dataExport[i].kita === "יג 8"){
                classeswithPaamey(dataExport,i,classArry8,8);
            }
            if(dataExport[i].kita === "יג 1"){
                classesWithOutPaamey(dataExport,i,classArry1,1);
            }
            if(dataExport[i].kita === "יג 5"){
                classesWithOutPaamey(dataExport,i,classArry5,5);
            }
            if(dataExport[i].kita === "יג 6"){
                classesWithOutPaamey(dataExport,i,classArry6,6);
            }
            if(dataExport[i].kita === "יג 9"){
                classesWithOutPaamey(dataExport,i,classArry9,9);
            }
        }
    }
}

function classeswithPaamey(dataExport,index,classArryVal,pos){
    if(dataExport[index].paameyMatch === 1 && classArryVal[1] < classArry[pos]/2){
        groupExercisePaamey(dataExport,index,classArryVal,1);
    }else if(dataExport[index].paameyMatch === 1 && !(classArryVal[1] < classArry[pos]/2)){
        groupExercisePaamey(dataExport,index,classArryVal,2);
    }else if(dataExport[index].paameyMatch === 0 && classArryVal[2] < classArry[pos]/2){
        groupExercisePaamey(dataExport,index,classArryVal,2);
    }else if(dataExport[index].paameyMatch === 0 && !(classArryVal[2] < classArry[pos]/2)){
        groupExercisePaamey(dataExport,index,classArryVal,1);
    }
}

function groupExercisePaamey(dataExport,index,classArryVal,pos){
    dataExport[index].grup = "קבוצה " + pos.toString();
    classArryVal[pos]++;
}

function classesWithOutPaamey(dataExport,index,classArryVal,pos){
    if(classArryVal[1] >= classArry[pos]/2){
        dataExport[index].grup = "קבוצה " + "2";
        classArryVal[2]+=1;
    }else{
        dataExport[index].grup = "קבוצה " + "1";
        classArryVal[1]+=1;
    }
}

module.exports = {
  calcGroup:calcGroup
};