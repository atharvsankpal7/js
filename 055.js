console.log("The code has started");
let p = new Promise((resolve, reject) => {
    // console.log("The code has entered the promise");
    setTimeout(() => {
        console.log("The timeout has ended");
        resolve("The promise resolved");
        reject("The promise has been rejected");
    }, 5000);
});
console.log(p);

let interval = setInterval(() => {
    console.log(p);
}, 1000);
setTimeout(() => {
    clearInterval(interval);
}, 10000);
