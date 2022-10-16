const sum = (a, b, c) => {
    console.log("I am running" , (a + b + c),);
};
console.log("The code has been updated");
let a = setTimeout(sum, 1000, 1, 2, 3);
let b = setInterval(sum, 1000, 1, 2, 3);
