let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("The promise has been resolved");
        resolve(2);
    }, 2000);
}).then(() => {
    console.log("fal;kdjfalkdjf");
    return "'a'";
});
p1.then((value) => {
    console.log("This is first .then with resolved value of", value);
    return "adsf";
})
    .then((value) => {
        console.log(value);
        return "h";
    })
    .then((value) => {
        console.log("hey", value);
    });
p1.then((value) => {
    console.log("This is second .then with resolved value of", value);
    return "something is being returned ";
}).then((value) => {
    console.log("Hello", value);
});
p1.then((value) => {
    console.log("This is third .then running", value);
});
