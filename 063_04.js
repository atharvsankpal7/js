// async function hello() {
//     let p1 = new Promise((resolve, reject) => {
//         console.log("The promise one has triggered");
//         setTimeout(() => {
//             console.log("This is setTimeout one");
//             resolve(1);
//         }, 1000);
//     });
//     let p2 = new Promise((resolve, reject) => {
//         console.log("The promise two has triggered");
//         setTimeout(() => {
//             console.log("This is setTimeout two");
//             resolve(2);
//         }, 2000);
//     });
//     let p3 = new Promise((resolve, reject) => {
//         console.log("The promise three has triggered");
//         setTimeout(() => {
//             console.log("This is setTimeout three");
//             resolve(3);
//         }, 3000);
//     });
//     let a = await p1;
//     let b = await p2;
//     let c = await p3;
//     return [a, b, c];
// }
// async function code() {
//     let a = await hello();
//     // let a =  hello();
//     console.log(a);
// }
// code();

let p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 2000);
    });
};
let p2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 1000);
    });
};
let p3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3);
        }, 4000);
    });
};

let run = async () => {
    console.time();
    //We are calling the functions that's why paranthesis is important
    // let a1 = p1();
    // let a2 = p2();
    // let a3 = p3();
    // let a = await Promise.all([a1, a2, a3]);
    let a = await Promise.all([p1(), p2(), p3()]);
    console.log(a);
    console.timeEnd();
};
run();
