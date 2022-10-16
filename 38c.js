let a = document.getElementById("ulinsidenav");

Array.from(a.getElementsByTagName("li")).forEach(element => {
   element.style.backgroundColor="palegoldenrod"; 
});

a.getElementsByTagName("li")[0].style.color = "darkgreen";
a.getElementsByTagName("li")[1].style.color = "navy";
a.getElementsByTagName("li")[2].style.color = "darkred";
a.getElementsByTagName("li")[3].style.color = "darkviolet";