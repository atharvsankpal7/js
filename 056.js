// let p1 = new Promise((resolve, reject) => {
//     console.log("The promise one has been fullfilled");
//     resolve(134); //This is a return value of the promise p1
// });
// p1.then((valuep1) => {
//     console.log(valuep1);
//     console.log("The code has entered p1.then");

//     let p2 = new Promise((resolve) => {
//         resolve(1234); //This is the return value of promise p2
//         console.log("The promise two has been fullfilled");
//     }).then((valuep2) => {
//             console.log("The returned value is", valuep2);
//             reso;
//             12345;
//         })
//         .then((valuep3) => {
//             console.log(valuep3);

//         });

//     // return p2;
// }).then((value) => {
//     console.log(value);
// });

const loadscript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;
        document.body.appendChild(script);
        script.onload = () => {
            resolve(123);
        };
        script.onerror = () => {
            reject(0);
        };
    });
};

let p1 = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js");
p1.then((value) => {
    console.log("The first script has been loaded with return value", value)
    return loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js");
}).then((value) => {
    console.log("The second script has been loaded with return value", value)
}).catch((error) => {
    console.log("The error occured with value " + error);
});
