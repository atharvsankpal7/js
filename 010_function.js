// There are 2 types of declaring function
const greet = () => {
    console.log("Function greet has been invoked");
    return "Hello";
};
console.log(greet());

// function avg(p, q) {
//     return (p + q) / 2;
// }
const avg = (p, q) => {
    return (p + q) / 2;
};
console.log(avg(2, 3));
