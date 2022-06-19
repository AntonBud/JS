var myDate = new Date()
console.log(myDate)

var myPastDate=new Date(1545, 11, 2)
var myFeatureDate=new Date(2030, 11, 3,10, 30, 15)
console.log(myPastDate+myFeatureDate)

var birthday = new Date (1985, 0, 5, 1, 2, 3)
var birthday0 = new Date (1985, 0, 5, 1, 2, 3)

console.log(birthday.getDate())
console.log(birthday.getFullYear())
console.log(birthday.getHours())
console.log(birthday.getMonth())

if(birthday.getFullYear === birthday0.getFullYear){
    console.log("birthdays are equal")
} else{
    console.log("birthday are not equal")
}

    


    
   
