const prompt =require('prompt-sync')();

let num1 = parseFloat(prompt("Enter one Number:"));//2
let num2 = prompt("Enter your Name:");//3
let num3 = undefined;
 num3 = num1;
 num1 = num2;
 num2 = num3;
//   console.log(num1, num2)
  console.log(typeof num1, typeof  num2 )