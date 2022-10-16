let container = document.getElementById("divcontainer");
console.log(container.matches("container"));
let span = document.getElementById("Span");
console.log(span.closest(".navbar"));
console.log(span.closest("#navbar"));
let navbar=document.getElementById("navbar");
console.log(navbar.contains(container));
