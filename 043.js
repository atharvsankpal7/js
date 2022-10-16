// let a = document.getElementById("headingofthediv");
// a.innerHTML = a.innerHTML + "<span> This is also a heading</span>";
// let div = document.createElement("div");
// div.innerHTML = "<div>This is a div which is created by the javascript</div>";
// a.appendChild(div);
let c = document.getElementById("thisisdiv");
let b = document.createElement("div");
b.innerHTML = "<h1>This is a div</h1>";
// c.prepend(b);
// c.before(b);
// c.append(b);
// c.after(b);

let d = document.createElement("div");
d.innerHTML = "<h3>This is a second div</h3>";
// c.insertAdjacentElement('afterbegin',d)
// c.insertAdjacentElement('afterend',d)
// c.insertAdjacentElement('beforebegin',d)
c.insertAdjacentElement("afterend", d);
c.insertAdjacentHTML("afterend", "<h3>This is a third div</h3>");

c.className = "red";
c.className = "yellow";
console.log(c.classList.contains("red"));
c.classList.toggle("red"); //removes if present adds if absent
c.classList.remove("red"); //removes if present
c.classList.add("black"); //removes if present
