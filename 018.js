let array = [1, 2, 3, 4, 5, 6];
let array3 = array.splice(2, 2, 13, 12);
//The argument to the splice is in the formate splice(index position , no of existing elements to be deleted after that index, agrument1 that has to added,agrument2 that has to added,agrumentn that has to added)
console.log(array); //Modified array
console.log(array3); //This values has been deleted

let array2 = [10321, 10322, 10323, 10324, 10325, 10326];
let array4 = array2.slice(2, 4); //It does not update existing array it returns the modified array 
console.log(array4, array2);
