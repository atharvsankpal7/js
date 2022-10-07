const prompt = require("prompt-sync")();
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//Since the number is taken as a string in input we have to convert it to the number by using code on line 5
let a = prompt("Enter your number --> ");
a = Number.parseInt(a);
arr.push(a);
console.log(arr);
