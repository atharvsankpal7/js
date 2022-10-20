// This is asynchronous program

// const prompt = require("prompt-sync")();
// let a = prompt("Enter your age");
// let b = prompt("Enter your gender ");
// let c = prompt("Enter your age ");
// a =Number.parseInt(a)//
// c =Number.parseInt(c)
// console.log(a, b, c);

//This is synchronous program

// console.log("start");
// setTimeout(function () {
//     console.log("The function has ran");
// }, 1000);
// console.log("end");

function loadscript(source, callback_function) {
    let script = document.createElement("script");
    script.src = source;
    
    document.body.appendChild(script);
    callback_function();
}
loadscript(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
    hello
);
loadscript(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
    bye
);
function hello() {
    console.log("hello");
}
function bye() {
    console.log("bye");
}
