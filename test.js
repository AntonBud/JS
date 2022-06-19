
var Car=function(maxSpeed, Driver){
    this.maxSpeed=210,
    this.Driver="Petya",
    this.drive=function(speed, time){
        console.log(speed*time);},
    this.logDriver=function(){
        console.log("Driver name is "+ this.Driver);
    }
    }

    
    var myCar0=new Car(110, "Vasya")
    var myCar1=new Car(100, "Petya")
    var myCar2=new Car(200, "Ninja")
    var myCar3=new Car(150, "Lyubchik")

    myCar0.drive(100,5)
    myCar3.logDriver()



    


    
   
