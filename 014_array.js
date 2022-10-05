let array = [134, 62, 56, 23458, 5456, "hello bro", null];
array[8] = 43131;
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
console.log();
console.log(array.length);

array[9] = 55;
array[0] = 0001;
console.log(array[0]); //arrays are mutable
console.log(typeof array); //array is also an object
console.log(array[7]); //When the element of array is not initiated it will show as undefined
console.log(array[9]);
console.log(array.length);
