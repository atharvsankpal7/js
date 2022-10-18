let dateinhtml = document.getElementById("thistellstime");

let display = () => {
    let a = new Date();
    let hour = a.getHours();
    let seconds = a.getSeconds();
    let minutes = a.getMinutes();
    let string = hour + ":" + minutes + ":" + seconds;
    dateinhtml.innerHTML = string;
};
setInterval(display, 1000);
