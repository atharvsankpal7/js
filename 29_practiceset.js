
let run = true;
let yo = (age) => {
  return age > 17 ? true : false;
};

while (run) {
  let age = prompt("Enter the age of person -->");
  age = Number.parseInt(age);
  if (yo(age)) {
    alert("The person can drive");
  } if (age < 0) {
    console.error("The person cannot drive");
    break;
  }
  if (age > 0 && age < 18) {
    alert("The person cannot drive");
  }
  run = confirm("Do you want to verify again?")
}
