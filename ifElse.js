//if else condition Code
const prompt =require('prompt-sync')();
let age = parseInt(prompt("Enter your age:"))


if (age <= 12) {
    console.log("you are kid Now")

}
else if ( age >= 12 && age <= 19) {
    console.log("you are teen Ager")
}
 else {
    console.log("You are adult")
 }