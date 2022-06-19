var myArray=new Array()
myArray[0]=8
myArray[1]="Hallo"

var myCar=new Object();
myCar.maxSpeed=200;
myCar.Driver="Vasya"
console.log(myCar.Driver)



myCar.Drive= function(){
    console.log("Now driving");
};


myCar.Drive();
var myCar0={
    maxSpeed:210,
     Driver:"Petya",
      drive:function(speed, time){console.log(speed*time);}
    }

    console.log(myCar0.maxSpeed);
    myCar0.drive(120, 3)
