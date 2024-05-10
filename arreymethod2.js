const prompt =require('prompt-sync')();
let myArrey = ["vivo", "redmi","samsung", "apple", "nokia"]
let userInput = parseInt(prompt("Enter your Roll NO:"))
let output = myArrey.shift(userInput)
console.log(output)
