### ⭐ JAVA SCRIPT INTERVIEW QUESTIONS ❓ :

### Table of Contents

<!-- TOC_START -->
| No. | Questions |
| --- | --------- |
| 1 | [What is Java Script](#What is Java Script) |
| 2 | [What are features of Java Script](#What are features of Java Script) |

💥1.  ### What is `Java Script` ❓

- 🎯 `Java Script` is a programming language that is primarily used for creating interactive web pages and web applications.

---

💥 2. ### What are features of `Java Script` ❓

- 🎯 Some key features of Java Script :

- 🎯It is a `client side` scripting language.

- 🎯It is `interpreted` and `dynamically` typed.

- 🎯It supports `object oriented programming`.

- 🎯It provides a rich set of build in `functions` and `libraries`.

---

💥 3. Why `Java Script` is called client side scripting language ❓

- 🎯 `Java Script` is often referred to as a `"client-side scripting language"` because it primarily runs in the user's web browser, which is considered the "client" in the `client-server architecture` of web applications.

---

💥 4. Is `Java Script` a `dynamically` typed language or a `statically` typed language ❓

- 🎯 `Java Script` is a `dynamically` typed language.

- 🎯 It means all type checks are done at run time ( When program is executing )

- 🎯 So, we can just assign anything to the variable and it works fine.

```
let a;
a = 0;
console.log(a) // Output: 0
a = "Hello"
console.log(a) // Output: "Hello"
```

---

💥 5. `Java Script` is a `compiled` or `interpreted` language ❓

- 🎯`Java Script` is a compiled language but java script is not purely interpreted language.

- 🎯`Interpreted :` Code is not being read at all and execution is started.

- 🎯`Compiled :` Code is read at least once and then only it starts execution.

---

💥 6. What are different `data types` in `Java Script` ❓

- 🎯In `Java Script` data types are categorized into 2 main types `primitive` and `non-primitive`

- 🎯`Primitive` Data Type Features :

- 🎯 `Immutable :` The actual value cannot be changed.

- 🎯 `Stored by value :` The variable holds the actual data.

- 🎯 `Comparison :` When you compare two primitive values, you compare their actual data.

---

- 🎯 `Primitive` Data Types :

- 1. 🎯 `String :` Represents a sequence of characters.

  ```
  let name = "Kapil"
  console.log(name)
  Output : Kapil
  ```

- 2. 🎯 `Number :` Represent both integer and floating point numbers.

  ```
  let age = 32
  let price = 5.05
  console.log(age,price)
  Output : 32 5.05
  ```

- 3. `🎯 Boolean :` Represents true or false values.

  ```
  let isLoggedIn = true
  let isLoggedOut = false
  console.log(isLoggedIn,isLoggedOut)
  Output : true false
  ```

- 4. 🎯 `Undefined :` A variable that has been declared but not assigned a value.

  ```
  let x
  console.log(x)
  Output : undefined
  ```

- 5.  🎯 `Null :` Represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations. It signifies that a variable has been declared but does not point to any object or value.

  ```
  let myVariable = null
  console.log(myVariable)
  Output : null
  ```

---

- 🎯 `null` vs `undefined`

- 🎯 `undefined :`

- 🎯 When a variable is declared but not initialized, or when a function does not return a value, the variable or the function’s result is undefined.

- 🎯 Accessing an object property or array element that does not exist also results in undefined.

- 🎯 It is a primitive value.

---

- 🎯 `null :`

- 🎯 It is a deliberate assignment that represents the absence of any object value.

- 🎯 It is often used to explicitly indicate that a variable or object property should have no value or no reference to any object.

- 🎯 It is also a primitive value.

- 🎯 `Conclusion  :` undefined means a variable has been declared but has not yet been assigned a value, whereas null is an assignment value, meaning that a variable has been declared and given the value of null

- 6. 🎯 `Symbol :` Introduced in ECMAScript 6, it represents a unique and immutable value.

     ```
     let sym = Symbol('description');
     console.log(sym)
     Output : Symbol(description)
     ```

---

- 🎯 `No Primitive (Reference)` Data Types :

- 🎯 `Mutable :` The contents can be altered.

- 🎯 `Stored by reference :` The variable holds a reference to the location in memory where the data is stored, not the actual data itself.

- 🎯 `Comparison :` When you compare two non-primitive values, you compare their references, not the actual data.

- 1. 🎯 `Object :` Collections of key-value pairs. Objects can represent complex data structures.

     ```
     let person = { name: "Hrithik", age: 30 };
     console.log(person)
     Output : { name: 'Hrithik', age: 30 }
     ```

- 2. 🎯 `Array :` A special type of object used for storing ordered collections of data.

     ```
     let numbers = [1, 2, 3, 4];
     console.log(numbers)
     Output :  [ 1, 2, 3, 4 ]
     ```

- 3. 🎯 `Function :` Objects that can be called to perform actions.

     ```
     function hello() {
     console.log("Hello!");
     }
     hello()
     Output :  Hello!
     ```

- 4. 🎯`Date :` Represents dates and times.

     ```

     let today = new Date();
     console.log(today)
     Output : 2024-08-20T02:56:02.904Z
     ```

---

💥 7. What is `Hoisting` in `Java Script` ❓

- 🎯 In other scripting/server side languages, `variables` or `functions` must be declared before using it.

- 🎯 In `Java Script`, variables and functions can be used before declaring it. The `Java Script` compiler moves all the declarations of variables and functions on top. so there will not be any error. This is called hoisting.

- 1. 🎯 `Variable Hoisting:` When we declare a variable using `var`, the declaration is `hoisted` to the top of its scope, but the assignment is not yet initialized.

```
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5
```

- In the above example, the declaration of `x` is `hoisted` to the top, so it exists before the `console.log(x)` statement is executed. However, since the assignment happens later, `x `is undefined at the time of the first `console.log`.

`let` and `const` also have their declarations `hoisted`, but they are not initialized until their actual declaration is reached in the code. This leads to a `temporal dead zone` where accessing the variable before its declaration results in a ReferenceError.

```
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

- 2. 🎯 `Function Hoisting :` `Function` declarations are `hoisted` entirely, meaning both the `function` name and the `function` body are moved to the top of the `scope`.

```
console.log(myFunction()); // Output: "Hello, world!"

function myFunction() {
  return "Hello, world!";
}
```

In this case, the entire function `myFunction` is `hoisted`, so it can be called before its declaration in the code.

---

💥 8. What are the various things `hoisted` in Java Script ?❓

- 🎯 The various thing that are hoisted :

```
 Function declarations: Fully hoisted.
  var - Hoisted
  Arrow functions: Not hoisted
  Anonymous Function expressions: Not hoisted
  let and const - Hoisted but not initialized. (Temporal dead zone).
  class declarations - Hoisted but not initialized.
```

---

💥 9. What are the differences `let`, `var` and `const`❓

- 🎯 `Scope :`

- 🎯 Variables declared with var are function scoped.( available through out the function where its declared ) or global scoped( if defined outside the function ).

- 🎯 Variables declared with let and const are block scoped.

- 🎯 `Reassignment :`

- 🎯 `var` and `let` can be reassigned.

- 🎯 `const` cannot be reassigned.

- 🎯 `Hoisting :`

- 🎯 `var` gets hoisted and initialized with `undefined`.

- 🎯 `let` and `const` - gets `hoisted` to the top of the scope but does not get assigned any value.`(temporal dead zone)`.

---

💥 10. What is `temporal dead zone` ❓

- 🎯 It is a specific time period in the execution of javascript code where the variables declared with let and const exists but cannot be accessed until the value is assigned.

- 🎯 Any attempt to access them result in reference errors.

- 🎯 `Example with let :`

```
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;
console.log(x); // Output: 5
```

- 🎯 The variable `x`is declared with `let`.

- 🎯 The `console.log(x)` before the declaration tries to access x while it's still in the `Temporal Dead Zone`, causing a `ReferenceError`.

- 🎯 After the declaration, `x` is initialized with the value 5, so it can be accessed normally.

- 🎯 `let` vs. `var:` Variables declared with var are `hoisted` and initialized with `undefined` immediately, so they do not have a `Temporal Dead Zone`.

- 🎯 `Example with const :`

```
console.log(y); // ReferenceError: Cannot access 'y' before initialization
const y = 10;
console.log(y); // Output: 10
```

- 🎯 Just like with `let`, trying to access `y `before its declaration causes a ReferenceError because `y` is in its `Temporal Dead Zone`.

---

💥 11. List out some key features of `ES6` ❓

- 🎯 Firstly `ES6:` ES6, or ECMAScript 2015, is the sixth edition of the ECMAScript language specification. It introduced significant features and improvements to JavaScript, making the language more powerful and easier to use.

- 🎯 `Arrow` functions.

- 🎯 `Let` and `Const` declarations.

- 🎯 `Destructuring` assignment.

- 🎯 `Default` parameters.

- 🎯 `Template literals`.

- 🎯 `Spread` and `Rest` operators.

- 🎯 `Promises`.

- 🎯 `Classes`.

- 🎯 `Modules`.

- 🎯 `Map, Set, Weakmap, Weakset`.

---

💥 12. What are `Arrow` Functions and `limitations` of `arrow` functions in Java Script ❓

- 🎯 `Arrow Functions:` `Arrow` functions in Java Script, introduced in `ES6`, . They are simple and shorter way to write functions in javascript..

- `Syntax:`

```
const functionName = (parameters) => {
  // function body
};
```

- 🎯 `Limitations of Arrow Functions:`

- 🎯 Arrow functions cannot be accessed before initialization.

- 🎯 Arrow function does not have access to arguments object.

- 🎯 Arrow function does not have their own this. Instead, they inherit this from the surrounding code at the time the function is defined.

- 🎯 Arrow functions cannot be used as constructors. Using them with the 𝙣𝙚𝙬 keyword to create instances throws a TypeError.

- 🎯 Arrow functions cannot be used as generator functions.

---

💥 13. `Arrow` functions + `this` combination ❓

- 🎯 In Java Script, this refers to the object that is executing the current function. The value of this is determined by how a function is called.

- 🎯 `this` in `Arrow` Functions :

- 🎯 `Arrow` functions, do not have their own `this` context. Instead, they `lexically bind` this.
  meaning they capture this from the surrounding scope when they are defined.

```
function Person(name) {
  this.name = name;
}
```

---

💥 14. What is `Lexical Scope` ❓

- 🎯 It can explained with an example :

```
function parent() {
  const parentName = "Indira Gandhi";

  function child() {
    const childName = "Rajiv Gandhi";

    console.log(`Child Name :${childName}`);
    console.log(`Parent Name : ${parentName}`);

    function grandChild() {
      const grandChild = "Rahul Gandhi";
      console.log(`Grand Child : ${grandChild}`);
      console.log(`Child Name :${childName}`);
      console.log(`Parent Name : ${parentName}`);
    }
    grandChild();
  }
  child();
}
parent();

Output :

Child Name :Rajiv Gandhi
Parent Name : Indira Gandhi
Grand Child : Rahul Gandhi
Child Name :Rajiv Gandhi
Parent Name : Indira Gandhi
```

- 🎯 So in the above example the function `child()` has access to the variable of function `parent()` which is `parentName`

- 🎯 The function `grandChild()` has got the access to the variables of both the function `parent()` and function `child()` so this called `lexical scope`.

---

💥 15. What’s the `spread operator` in Java Script ❓

- 🎯 `Spread` operator is used to spread or expand the elements of an iterable like array or string into individual elements.

- 🎯 `Uses :`

- 🎯 Concatenating arrays.

  ```
  let x = [1, 2];
  let y = [3, 4];

  let z = [...x, ...y];
  console.log(`Result of both by using spread operators : ${z}`);

  Output :
  Result of both by using spread operators : 1,2,3,4
  ```

- 🎯 Copying arrays or objects.

  ```
   let a = [...x];
   console.log(a);

   Output :
   [ 1, 2 ]
  ```

- 🎯 Passing array of values as individual arguments to a function.

  ```
    function spreadExample(arg1,arg2){
    console.log(arg1,arg2)
   }
   spreadExample(...a)

   Output :
    1 2
  ```

---

💥 16. What’s the `rest operator` in Java Script ❓

- 🎯 `Rest operator` is used to condense multiple elements into single array or object.

- 🎯 This is useful when we dont know how many parameters a function may receive and you want to capture all of them as an array.

```
function restExample(...input){
    let sum = 0;
    for(let i  of input){
        sum += i
    }
     console.log(sum)
}

restExample(1,2) //3
restExample(1,2,3,4,5) //15
restExample(1,2,10,30,50,60) //153
```

---

💥17. Key differences between `spread` and `rest` operator in Java Script ❓

- 🎯 `Spread Operator - Use Cases `: Arrays, Function Calls, Objects.

- 🎯 `Spread Operator - Purpose ` : Expands elements or properties.

- 🎯 `Rest Operator - Use Cases` : Function Parameters, Array/Object Destructuring.

- 🎯 `Rest Operator - Purpose ` : Collects multiple elements into an array/object.

---

💥18. What is `destructuring`❓

- 🎯 Destructuring in JavaScript is a feature introduced in ES6

- 🎯 It allows us to extract values from arrays or properties from objects into distinct variables.

- 🎯It makes code more concise and readable, particularly when dealing with large objects or arrays.

```
const user = {
 "age" : 20,
 "myName" : "Kapil"
  }

  const {age,myName} = user
  console.log(age,myName) // Output : 20, "Kapil"

const [a,b] = [1,2]
console.log(a,b) // Output: 1,2
```
