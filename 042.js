let dim = document.getElementById("divinsidemain");
console.log(dim.getAttribute("style"));
console.log(dim.hasAttribute("class"));
// dim.setAttribute("hidden" ,"true");

let joke = document.getElementById("Thisisjoke");
joke.setAttribute("class", "Thisisjoke Thisisajoketoo");

joke.removeAttribute("class", "Thisisjoke");
joke.style.backgroundColor = "darkgreen";

console.log(joke.dataset);
console.log(joke.dataset.custom1);
console.log(joke.dataset.custom2);
