let d = function () {
    console.log("you have pressed the button number two");
};
let c = function () {
    console.log("you have pressed the button number one");
};
let a = document.getElementsByTagName("button")[0];
let b = document.getElementsByTagName("button")[1];
a.addEventListener("click", c);
b.addEventListener("click", d);
