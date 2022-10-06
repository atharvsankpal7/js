array = [1, 2, 3, 4, 5, 6, 7];
array.forEach((element) => {
    console.log(element + element);
});
console.log();
//for...of loop access the element of the objects/array
for (let t of array) {
    console.log(t);
}
console.log();

let obj = {
    hello: "Namaste",
    p: "P",
    q: "q",
    r: "r",
};
//for...in loop access the keys of the object for an array it's index position
for (let item in obj) {
    console.log(item);
}
