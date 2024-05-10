const prompt = require('prompt-sync')();

let myArray = ["google", "facebook", "twitter", "youtube", "himesh-facebook"];
console.log(myArray);

let input = prompt("Enter what you want: ");

switch (input) {
    case "google":
        location.href = "https://google.com";
        break;

    case "facebook":
        location.href = "https://facebook.com";
        break;

    case "youtube":
        location.href = "https://youtube.com";
        break;

    case "twitter":
        location.href = "https://twitter.com";
        break;

    case "himesh-facebook":
        location.href = "https://www.facebook.com/himesh.hcb/";
        break;

    default:
        console.log("Invalid input. Please try again.");
        break;
}
