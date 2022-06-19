function getAverage (a,b,c,d){
    var average = (a+b+c+d)/4;
    console.log(average)
    return average;
}



var MyResult = getAverage(7,12,10,1);

function logresult(){
    console.log("the average is " +MyResult +"inside the function");
}

logresult();