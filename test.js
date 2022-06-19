
var myCar0={
    maxSpeed:210,
    Driver:"Petya",
    drive:function(speed, time){
        console.log(speed*time);},
    logDriver:function(){
        console.log("Driver name is "+ this.Driver);
    }
    }

    myCar0.logDriver()


    
    console.log(myCar0.maxSpeed);
    myCar0.drive(120, 3)

    console.log(this)
