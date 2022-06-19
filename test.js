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