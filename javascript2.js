function findSum() {
    let firstNumber = parseInt(prompt("Enter first Number: "));
    let secondNumber = parseInt(prompt("Enter Second Number: "));

    //sum of numbers 
    let sum = firstNumber + secondNumber;

    return sum;
}

let result = findSum();

console.log("The Sum of both numbers is: " + result);

const prompt =require('prompt-sync')();
// let user_Age = parseInt(prompt("Enter your Age: "))
//3 
if(user_Age >= 18){
    console.alert("You can drive")
}
else{
    console.alert("Youe cant be even think of driving:")
}

//1
let user_Age = parseInt(prompt("Enter your Age: "))= (user_Age)=>{
    if(user_Age >= 18){
        console.alert("You can driva")
    }else{
        console.alert("you cannot able to dive")
    }
}

//2
if(userCan(user_Age)){
    alert("You can driva")
}else{
    alert("you cannot able to dive")
}

const userCan = (user_Age) =>{
   
    return  user_Age>= 18?true:false
}