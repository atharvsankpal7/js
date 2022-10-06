//All of the following functions do not change the original array and returns the new array each-time.
let arr = [1, 2, 3, 4, 5];
//map function run through each individual of the array and when the argument value is passed to it, it can change elements of the array and return it without changing the existing array.
//The map function takes 3 parameters as array.map(value,index,array_that_has_to_be_returned)
let a = arr.map((value) => {
    return value + 1;
});
console.log(a);

//We have to pass index as argument to use it in the defination of the method
let b = arr.map((value, index) => {
    return value + index;
});
console.log(b);

//This will return a new array which will hold boolean values for the returned condition
let b1 = arr.map((value) => {
    return value < 3;
});
console.log(b1);

let c = arr.map((This_is_value, This_is_index, This_is_array) => {
    console.log(This_is_value, This_is_index, This_is_array);
    return This_is_value + This_is_index;
});
console.log(c);

//This will return the array which returns true for the condition.
let d = arr.filter((a) => {
    return a < 3;
});
console.log(d);


const reduce_fun = (a1,a2,) => {//We can use the function as variable inside javascript
    return a1+a2;
};
let e = arr.reduce(reduce_fun);//It will reduce the array to a single element by performing the actions given to it on the all of the elements inside the array
console.log(e);
