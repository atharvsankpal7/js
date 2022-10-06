let array = [1, 712, 963, 14, 385, 256, 167, 78, 29];
array.sort(); //It will sort the numbers in the alphabetical manner
console.log(array);

compare = (a, b) => {
    return a - b;
};
let array2 = [1, 123, 64, 7, 25, 8, 54, 745, 255];
array2.sort(compare);
console.log(array2);

array2.reverse();//just name explains everything
console.log(array2);
