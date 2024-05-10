const prompt =require('prompt-sync')();
let Age = parseInt(prompt("Enter your Age Here:"))

if(Age <= 0 ){
console.error("Your Age is Invalid")
}