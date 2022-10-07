//I made this without taking help of internet cheers!
const prompt = require("prompt-sync")();
let a = Math.floor(Math.random() * 100 + 1); //Have to take look at this but the logic is mine.
let b,
    c = 0;
while (a != b) {
    b = prompt("Guess the number -->");
    c++;
    a < b ? console.log("The number is shorter than your guess"): console.log("The number is larger than your guess");
    if (c == 10) {
        console.log("You took all of your guess, you loose");
        break;
    }
}
if (a == b) {
    console.log("You scored", 100 - c);
}
