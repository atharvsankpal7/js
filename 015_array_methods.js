let array = [1, 2, 3, 4, 5, 464];
console.log(typeof array);
//Following methods returns new array without changing an existing array

let a = array.toString();
console.log(a, typeof a);
console.log(typeof array);

let b = array.join("*-"); //This will make c as a string in which the elements of an array are separated by the string / character passed to it
console.log(b, typeof b);

//Following methods returns last element and changes the existing array
// let c = array.pop();//Will add a last element from array and will update the array with returning the poped element
// console.log(c, array, typeof c)

let d = array.push(45); //Will add a parametered element to array and will update the array with returning the size of array
console.log(d, typeof d);

let e = array.shift(); //removes the first element from existing array and returns the removed element
console.log(array, e);

let f = array.unshift(10); //add the parametered element to starting of an array and returns the length of new array
console.log(f);


