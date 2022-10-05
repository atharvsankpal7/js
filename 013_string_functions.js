let s = "is";
let sentence = "hello this is a sample text";
console.log(
    "The sentence",
    sentence.includes(s) ? "do" : "do not",
    "include the word"
);

//Both gives same output
/*
let s = "hello";
let sentence = "hello this is a sample text";
console.log(
    `The sentence ${
        sentence.includes(s) ? "does" : "does not"
    } include the word`
    );
    */
let w = "hello";
console.log(
    `The sentence${
        sentence.startsWith(w) ? " does " : " does not "
    }starts with ${w}`
);
let a = "text";
console.log(
    `The sentence${
        sentence.endsWith(a) ? " does" : " does not"
    } starts with ${a}`
);
console.log();

let asdf = "NamASte";
console.log(asdf.toLowerCase());

console.log();

let jk = "the roll number of Atharv is 840";
let rollnumber = Number.parseInt(
    jk.slice("the roll number of Atharv is ".length)
);
console.log(jk.slice("the roll number of Atharv is ".length));
console.log(rollnumber);
console.log(typeof rollnumber);
console.log(typeof jk.slice("the roll number of Atharv is ".length));

console.log();

let str = "thisword";
console.log(str.replace(str[3], "r"));
let str2 = str.replace(str[3], "r");
console.log(str2);
