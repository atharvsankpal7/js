//onload and .then will work on same time in this perticular case only
const loadscript = (src) => {
    let p1 = new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            console.log(`The script ${script.src} has been loaded`);
            console.log(new Date().getMilliseconds());
            resolve(1234);
        };
        // setTimeout(() => {
        //     console.log(1);
        //     resolve(123);
        // }, 1200);//if this is uncommented please comment line number nine
        document.body.appendChild(script);
    }).then(() => {
        console.log(new Date().getMilliseconds());
    });
    return p1;
};
console.log(new Date().getMilliseconds());
loadscript(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
);
