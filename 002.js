var a = 2;
var a = 5;
let b = 10;
// let b = 4; //This will throw an error since let cannot be redeclared it can only be updated
const author = "Atharv";//const needs to be initialised when declared
// author = "Arpita";//This is will throw an erroe since const cannot be redeclared nor be updated
console.log(a);

console.log(b);
{
    var a = 50;
    console.log(a);
    let b = 100;
    console.log(b);
}
console.log(a);
console.log(b);
