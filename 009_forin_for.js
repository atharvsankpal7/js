const prompt = require("prompt-sync")();
let obj = {
    a: 55,
    b: 123,
    c: "String",
    d: null,
};
for (let x in obj) {
    console.log("The element in object obj", x, "is holding", obj[x]); //Here obj.x will not work since it will try to find item named x in obj
}
for (let x of "Atharv") {
    console.log(x);
}
