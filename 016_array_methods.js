let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array.length);
delete array[0]; //This will delete the parametered item without changing the length of array
console.log(array, array.length);

let array2 = [11, 12, 13, 14, 15, 16];
let array4 = [134, 6352, 2526, 773];
let array3 = array.concat(array2, array4); //This will join the given array(s) in the sequential manner without changing the existing arrays
console.log(array3);
