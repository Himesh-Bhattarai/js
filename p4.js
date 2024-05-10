const prompt =require('prompt-sync')();
let arrey =["car","vido","hello","hi"]
 let userInp = prompt("Enter any word:")
 let uppercase = userInp.toUpperCase()
 arrey.push(uppercase) 
    console.log(arrey)
