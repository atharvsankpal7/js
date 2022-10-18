let x = 0;
let a = function () {
    console.log("the button was click", ++x, "time");
};
let c = function () {
    console.log("the mouse has entered the buttton");
};
let b = document.getElementById("thisisbutton");
b.addEventListener("click", a);
b.addEventListener("mouseenter", c);