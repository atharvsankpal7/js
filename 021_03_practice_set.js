let arr = [1, 2, 3, 4, 5, 10, 20, 30, 50, 55, 454, 45720, 546456];
let arr2 = arr.filter((a) => {
    return a % 10 == 0;
});
console.log(arr2);
