const prompt = require("prompt-sync")();
let age = prompt("Enter your age -->");
console.log("You can" + (age < 18 ? "not drive" : " drive"));
    