const prompt = require("prompt-sync")();
let arr = [1, 2, 3, 4, 5, 6];
let a;
do {
    a = prompt("Enter your number -->");
    a = Number.parseInt(a);
    arr.push(a);
} while (a != 0);
arr.pop();
console.log(arr);
