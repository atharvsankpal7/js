// async function hello() {
//     let p1 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("The p1 has been resolved");
//             resolve(123);
//         }, 2000);
//     });

//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("The p2 has been resolved");
//             resolve(12345);
//         }, 7000);
//     });

//     let a = await p1;
//     let b = await p2;
//     return [a, b];
// }

// let a = hello();
// setTimeout(() => {
//     console.log(a);
// }, 8000);
// async function harry() {
//     let delhiWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("27 Deg")
//         }, 2000)
//     })

    let bangaloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 Deg")
        }, 5000)
    })

    // delhiWeather.then(alert)
    // bangaloreWeather.then(alert)
    console.log("Fetching Delhi Weather Please wait ...")
    let delhiW = await delhiWeather
    console.log("Fetched Delhi Weather: " + delhiW)
    console.log("Fetching Bangalore Weather Please wait ...")
    let bangaloreW = await bangaloreWeather
    console.log("Fetched Bangalore Weather: " + bangaloreW)
    return [delhiW, bangaloreW]

}
async function cherry() {
    console.log("Hey I am cherry and I am waiting ")
}

// const main1 = async () => {
//     console.log("Welcome to weather control room")
//     let a = await harry()
//     let b = await cherry()

// }
// main1()
harry().then((v) => {
    console.log(v)
});
cherry();








