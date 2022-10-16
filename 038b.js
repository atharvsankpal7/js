let div = document.getElementById("container");
let span = div.querySelectorAll(".span");
for (let i = 0; i < 6; i++) {
    span[i].style.color = "darkgreen";
}

div.firstElementChild.style.color = "red";
div.lastElementChild.style.color = "red";
