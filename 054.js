let promise = new Promise(function (resolve, reject) {
    console.log("hello this is promise");
    //The resolve and reject are need to be written inside the promise
    resolve(100);
    reject(23);
});
console.log("This is hello one");
setTimeout(function () {
    console.log("This is hello inside setTimeout");
}, 2000);
console.log("This is hello two");
console.log(promise);
