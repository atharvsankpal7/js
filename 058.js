let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("This is promise one");
        resolve("promiseone");
        // reject(new Error("Error"));
    }, 1000);
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("This is promise two");
        resolve("Hello")
        // reject(new Error("Error"));
    }, 2000);
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("This is promise three");
        resolve(123);
    }, 3000);
});

// p1.then((value) => {
//     console.log(value);
// });
// p2.then((value) => {
//     console.log(value);
// });
// p3.then((value) => {
//     console.log(value);
// });

// let promise_all = Promise.all([p1, p2, p3]);
// promise_all.then((value) => {
//     console.log(value)
// })

// let all_settled = Promise.allSettled([p1, p2, p3]);
// all_settled.then((value) => {
//     console.log(value)
// })

// //This returns the first successful promise throws an error if rejected 
// let race = Promise.race([p1, p2, p3]);
// race.then((value) => {
//     console.log(value)
// })

// //This returns the first resolved promise and ignores the rejected promises
// let any = Promise.any([p1, p2, p3]);
// any.then((value) => {
//     console.log(value)
// })

