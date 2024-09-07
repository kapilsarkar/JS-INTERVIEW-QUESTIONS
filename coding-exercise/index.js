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

function restExample(...input){
    let sum = 0;
    for(let i  of input){
        sum += i
    }
     console.log(sum)
}

restExample(1,2)
restExample(1,2,3,4,5)
restExample(1,2,10,30,50,60)


