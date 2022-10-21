//This returns the first resolved promise and ignores the rejected promises
let any = Promise.any([p1, p2, p3]);
any.then((value) => {
    console.log(value)
})