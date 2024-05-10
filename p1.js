//Program to find the Age lies between 10 to 20;
const prompt =require('prompt-sync')();
const age = parseInt(prompt("Enter Your Age: "));
if(age >= 10 &&  age <=20){
    console.log("Your Age lies On 10 to 20.")
}
else{
    console.log("Your age is Not lies Between 10 tp 20.")
}

