const prompt = require("prompt-sync")();
let choicep, choicec;
let input = prompt("Enter the 1 for rock 2 for scissors and 3 for paper :");
input == 1
    ? (choicep = "rock")
    : input == 2
    ? (choicep = "scissors")
    : input == 3
    ? (choicep = "paper")
    : console.log("error");
input = Number.parseInt(input);
let computer = Math.floor(Math.random() * 3) + 1;
computer == 1
    ? (choicec = "rock")
    : computer == 2
    ? (choicec = "scissors")
    : computer == 3
    ? (choicec = "paper")
    : console.log("error");

console.log("You chose", choicep);
console.log("Computer chose", choicec);
if (choicec == choicep) {
    console.log("The match is draw");
}
if (input == 1) {
    if (computer == 2) {
        console.log("You won");
    } else if (computer == 3) {
        console.log("Computer won");
    }
}
if (input == 2) {
    if (computer == 3) {
        console.log("You won");
    } else if (computer == 1) {
        console.log("Computer won");
    }
}
if (input == 3) {
    if (computer == 1) {
        console.log("You won");
    } else if (computer == 2) {
        console.log("Computer won");
    }
}
