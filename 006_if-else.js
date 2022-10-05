const prompt = require("promptsync")();
let a = prompt("Enter your age -->");
// The user input in javascript is always string
a = Number.parseInt(a);
if (a >= 18) {
    console.log("You can drive");
} else if (a < 18 && a > 0) {
    console.log("You cannot drive");
} else if (a < 0) {
    console.log("You haven't even born yet");
}


