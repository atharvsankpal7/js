const prompt = require('prompt-sync')();
let age = prompt("Enter the age of person -->")
age = Number.parseInt(age);

age > 17 ? alert("The person can drive") : console.log("The person cannot drive");

