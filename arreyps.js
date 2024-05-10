const prompt =require('prompt-sync')();
//take input from the user and and store in the exeting arrey
let myArrye = ["Apple","Banana","guva","graphes","Pineapple","watermelon"]
let user_input = prompt("Enter any fruit name you like Most:")
console.log(myArrye.length)
console.log(myArrye)
 myArrye.push(user_input)
console.log(myArrye.length)
console.log(myArrye)