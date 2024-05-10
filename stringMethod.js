const prompt =require('prompt-sync')();
let name = "Himesh chanchal bhatttarai"
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())

//user dekhi leko input lai k gari uper la lower case banaune 
let user_input = prompt("Enter Any sentence")
let Case = prompt('Which case Lower for: press "L", Upper for "U" ')

if(Case ==="U" ){
    console.log(user_input.toUpperCase())
}
else if (Case === "L"){
    console.log(user_input.toLowerCase())
}
else{
    console.log("Please input in proper way")
}