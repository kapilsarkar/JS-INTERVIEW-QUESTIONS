//What is Java Script ?

//Java Script is a programming language that is primarily used for creating interactive  web pages and web applications

let x = [1, 2];
let y = [3, 4];

let z = [...x, ...y];

console.log(`Result of both by using spread operators : ${z}`);
let a = [...x];
//console.log(a)

function spreadExample(arg1, arg2) {
  console.log(arg1, arg2);
}

spreadExample(...a);
