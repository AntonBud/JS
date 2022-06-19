var myString="I'm a string\"Ninja\""
console.log(myString.length)

console.log(myString.toUpperCase())
console.log(myString.indexOf("Ninja"))
if (myString.indexOf("Ninja")=== -1){
    console.log("Ninja is not in the string")
} else{
    console.log("Ninja is here, on "+ myString.indexOf("Ninja")+" place")
}

var string1="abc";
var string2="ABC";

console.log(string1.toLowerCase === string2.toLowerCase);

var str="hallo world";
var str2=str.slice(2,9)
console.log(str,"Sliced version is ", str2)

var tags="meat, ham, chicken, pork, beef"
console.log(tags.split(","))

var myArray=[];
myArray[0]=25
myArray[1]=35
myArray[2]="hello"
myArray[3]=45

console.log(myArray)

var myArray1=[12,15,"Hallo", false]

console.log(myArray,myArray1)
console.log(myArray1.length)
