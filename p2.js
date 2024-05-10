//num devide hunchha ke nai
const prompt =require('prompt-sync')();
let Num = parseInt(prompt("Entre the Number: "));

if (Num % 2 == 0 && Num % 3 == 0) {
    console.log("Yes Your Number devide by  2 & 3");
}
else {
console.log('your NU,mebr is not Divide By 2 and 4 ')
}