const prompt =require('prompt-sync')();

 let arreys = ["Ram", "shyam", "hari", "Gita"]
console.log(arreys)
console.log(arreys.length)
 arreys.push(prompt("WHat is your favrout fruit"))//push method
 console.log(arreys.length)
 console.log(arreys)
 
if( let user_inpute = prompt(`what is you wearest food item from" ram", "shyam", "hari", "gita", "guva" `)=== arreys){
    arreys.pop(user_inpute);
    console.log(arreys)

}
