const prompt = require("prompt-sync")();

let s = "hello";
let a = "bro";
console.log(s[0]);
let sentence = `He said to me "${s} how are you my ${a}"`;
console.log(sentence);

let string = "hello'bro"; //Escape sequence character \' will be treated as a single character
console.log(string);
console.log(string.length);

let string2 = "namaste\rbro"; //\r will replace the first n characters with the characters present after the Escape sequence character
console.log(string2);
//\n will print the remaning content in the new line
// \t will add tab between the characters

let string3 = "aTharv"; //The cannot be changed one it is created every time we use a function for the string it will return the new string which can be either assinged to the another undefined string or can be printed
console.log(string3.toUpperCase());
console.log(string3.toLowerCase());
console.log(string3.replace("aTh", "hel"));
console.log(string3.concat("hello"));
console.log(string3.concat(string3 + "hello"));

let string4 = "   hell naw   ";
console.log(string4.trim());

let string5 = "namaste";
console.log(string5.slice(2));
console.log(string5.slice(2, 5)); //slice(from,till(this character is not included))
