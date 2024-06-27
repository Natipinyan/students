
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

        if( dataExport[i].kita !==  "יג 1")
            cls1(dataExport,i);
        if( dataExport[i].kita !==  "יג 2")
            cls2(dataExport,i);
        if( dataExport[i].kita !==  "יג 3")
            cls3(dataExport,i);
        if( dataExport[i].kita !==  "יג 4")
            cls4(dataExport,i);
        if( dataExport[i].kita !==  "יג 5")
            cls5(dataExport,i);
        if( dataExport[i].kita !==  "יג 6")
            cls6(dataExport,i);
        if( dataExport[i].kita !==  "יג 7")
            cls7(dataExport,i);
        if( dataExport[i].kita !==  "יג 8")
            cls8(dataExport,i);
        if( dataExport[i].kita !==  "יג 9")
            cls9(dataExport,i);

    }
}

function cls2(dataExport,index){
    if(dataExport[index].paameyMatch === 1 && classArry2[1] < classArry[2]/2){
        doClass(1,dataExport,classArry2,index);
    }else if(dataExport[index].paameyMatch === 1 && !(classArry2[1] < classArry[2]/2)) {
        doClass(2,dataExport,classArry2,index);
    }else if(dataExport[index].paameyMatch === 0 && classArry2[2] < classArry[2]/2){
        doClass(2,dataExport,classArry2,index);
    }else{
        doClass(1,dataExport,classArry2,index);
    }
}

function cls3(dataExport,index){
    if(dataExport[index].paameyMatch === 1 && classArry3[1] < classArry[3]/2){
        doClass(1,dataExport,classArry3,index);
    }else if(dataExport[index].paameyMatch === 1 && !(classArry3[1] < classArry[3]/2)) {
        doClass(2,dataExport,classArry3,index);
    }else if(dataExport[index].paameyMatch === 0 && classArry3[2] < classArry[3]/2){
        doClass(2,dataExport,classArry3,index);
    }else{
        doClass(1,dataExport,classArry3,index);
    }
}

function cls4(dataExport,index){
    if(dataExport[index].paameyMatch === 1 && classArry4[1] < classArry[4]/2){
        doClass(1,dataExport,classArry4,index);
    }else if(dataExport[index].paameyMatch === 1 && !(classArry4[1] < classArry[4]/2)) {
        doClass(2,dataExport,classArry4,index);
    }else if(dataExport[index].paameyMatch === 0 && classArry4[2] < classArry[4]/2){
        doClass(2,dataExport,classArry4,index);
    }else{
        doClass(1,dataExport,classArry4,index);
    }
}

function cls7(dataExport,index){
    if(dataExport[index].paameyMatch === 1 && classArry7[1] < classArry[7]/2){
        doClass(1,dataExport,classArry7,index);
    }else if(dataExport[index].paameyMatch === 1 && !(classArry7[1] < classArry[7]/2)) {
        doClass(2,dataExport,classArry7,index);
    }else if(dataExport[index].paameyMatch === 0 && classArry7[2] < classArry[7]/2){
        doClass(2,dataExport,classArry7,index);
    }else{
        doClass(1,dataExport,classArry7,index);
    }
}

function cls8(dataExport,index){
    if(dataExport[index].paameyMatch === 1 && classArry8[1] < classArry[8]/2){
        doClass(1,dataExport,classArry8,index);
    }else if(dataExport[index].paameyMatch === 1 && !(classArry8[1] < classArry[8]/2)) {
        doClass(2,dataExport,classArry8,index);
    }else if(dataExport[index].paameyMatch === 0 && classArry8[2] < classArry[8]/2){
        doClass(2,dataExport,classArry8,index);
    }else{
        doClass(1,dataExport,classArry8,index);
    }
}

function cls1(dataExport,index){
    if(classArry1[1] > classArry[1]/2){
        dataExport[index].grup = 2;
        classArry1[2]+=1;
    }else{
        dataExport[index].grup = 1;
        classArry1[1]+=1;
    }

}

function cls5(dataExport,index){
    if(classArry5[1] > classArry[5]/2){
        dataExport[index].grup = 2;
        classArry5[2]+=1;
    }else{
        dataExport[index].grup = 1;
        classArry5[1]+=1;
    }
}

function cls6(dataExport,index){
    if(classArry6[1] > classArry[6]/2){
        dataExport[index].grup = 2;
        classArry6[2]+=1;
    }else{
        dataExport[index].grup = 1;
        classArry6[1]+=1;
    }

}

function cls9(dataExport,index){
    if(classArry9[1] > classArry[9]/2){
        dataExport[index].grup = 2;
        classArry9[2]+=1;
    }else{
        dataExport[index].grup = 1;
        classArry9[1]+=1;
    }

}





function doClass(pos,dataExport,classArryVal,index){
    dataExport[index].grup = pos;
    classArryVal[pos]+=1;
}

module.exports = {
  calcGroup:calcGroup
};