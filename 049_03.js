let a = function () {
    window.open("https://www.keybr.com/", "_blank");
};
let b = function () {
    window.open("https://github.com/ossu/data-science", "_blank");
};
let c = function () {
    window.open("https://cplusplus.com/", "_blank");
};
let d = function () {
    window.location = ("https://weworkremotely.com/");
    win.focus();//used to open the link in new tab
};
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
one.addEventListener("click", a);
two.addEventListener("click", b);
three.addEventListener("click", c);
four.addEventListener("click", d);
