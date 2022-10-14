console.log(document.body.firstChild);
console.log(document.body.lastChild);
// console.log(document.body.childNodes);//This is a collection not array
let a = Array.from(document.body.childNodes);
console.log(a);//This is a array
