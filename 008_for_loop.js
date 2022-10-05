const prompt = require("prompt-sync")();
let a = prompt("Enter the number -->");
a = Number.parseInt(a);
let sum = 0;
for (let i = 0; i <= a; i++) {
    sum += i;
}
console.log("Sum of first " + a + " natural number is", sum);
