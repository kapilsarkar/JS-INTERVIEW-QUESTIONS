### ⭐ JAVA SCRIPT INTERVIEW QUESTIONS ❓ :

 💥1.  What is `Java script` ❓

  - 🎯 `Java Script` is a programming language that is primarily used for creating interactive  web pages and web applications.

  ---

💥 2. What are features of `Java Script` ❓

  - 🎯 Some key features of Java Script 

    - 👍It is a `client side` scripting language.

    - 👍It is `interpreted` and `dynamically` typed.

    - 👍It supports `object oriented programming`.

    - 👍It provides a rich set of build in `functions` and `libraries`.

    ---

  💥 3. Why `Java Script` is called client side scripting language ❓

  - 🎯 `Java Script` is often referred to as a `"client-side scripting language"` because it primarily runs in the user's web browser, which is considered the "client" in the `client-server architecture` of web applications.

---

  💥 4. Why `Java Script` is considered as `interpreted` and `dynamically` typed ❓

  - 🎯 `Compiled`: `Java Script` is considered compiled because modern JavaScript engines use `Just-In-Time (JIT)` compilation, converting JavaScript code to machine code at runtime, which enhances performance.

  - 🎯 `Dynamically Typed`: `Java Script` is dynamically typed because variables can hold values of any type at any time, and their types are determined at runtime, allowing for flexible and rapid development but requiring careful handling to avoid runtime errors.

  ---


  💥 5. `Java Script`  is a `compiled` or `interpreted` language ❓

  - 🎯`Java Script` is a compiled language but java script is not purely interpreted language.

    - 👍`Interpreted :` Code is not being read at all and execution is started.

    - 👍`Compiled :` Code is read at least once and then only it starts execution.

    ---


  💥 6. What are different `data types` in `Java Script` ❓  

  - 🎯In `Java Script`  data types are categorized into 2 main types `primitive` and `non-primitive`

    - 👍`Primitive` Data Type Features :

       - 👍`Immutable :` The actual value cannot be changed.

       - 👍`Stored by value :` The variable holds the actual data.

       - 👍`Comparison :` When you compare two primitive values, you compare their actual data.

       ---

    - 👍`Primitive` Data Types :

      - 1. 👍`String :` Represents a sequence of characters.


      ```
      let name = "Kapil"
      console.log(name)
      Output : Kapil 
      ```

      - 2. 👍`Number :` Represent both integer and floating point numbers.


      ```
      let age = 32
      let price = 5.05
      console.log(age,price)
      Output : 32 5.05 
      ```

      - 3. `👍Boolean :` Represents true or false values.

      
      ```
      let isLoggedIn = true
      let isLoggedOut = false
      console.log(isLoggedIn,isLoggedOut)
      Output : true false
      ```

      - 4. 👍`Undefined :` A variable that has been declared but not assigned a value.
      
      
      ```
      let x 
      console.log(x)
      Output : undefined
       ```

      - 5. 👍`Null :` Represents the intentional absence of any object value.   It is one of JavaScript's primitive values and is treated as falsy for boolean operations. It signifies that a variable has been declared but does not point to any object or value.


      ```
      let myVariable = null
      console.log(myVariable)
      Output : null
      ```
    ---
      - 👍`null` vs `undefined` 

      - 👍`undefined :`

        - 👍When a variable is declared but not initialized, or when a function does not return a value, the variable or the function’s result is undefined.

        - 👍Accessing an object property or array element that does not exist also results in undefined.

        - 👍It is a primitive value.

        ---

      - 👍`null :`

        - 👍It is a deliberate assignment that represents the absence of any object value.

        - 👍It is often used to explicitly indicate that a variable or object property should have no value or no reference to any object.

        - 👍It is also a primitive value.

        👍`Conclusion  :` undefined means a variable has been declared but has not yet been assigned a value, whereas null is an assignment value, meaning that a variable has been declared and given the value of null 


        - 6. 👍`Symbol :` Introduced in ECMAScript 6, it represents a unique and immutable value.


        ```
        let sym = Symbol('description');
        console.log(sym)
        Output : Symbol(description)
        ```

        --- 

    - 👍`No Primitive (Reference)` Data Types : 

       - 👍`Mutable :` The contents can be altered.

       - 👍`Stored by reference :` The variable holds a reference to the location in memory where the data is stored, not the actual data itself.

       - 👍`Comparison :` When you compare two non-primitive values, you compare their references, not the actual data.

      - 1. 👍`Object :` Collections of key-value pairs. Objects can represent complex data structures.


      ```
      let person = { name: "Hrithik", age: 30 };
      console.log(person)
      Output : { name: 'Hrithik', age: 30 }
      ```

      - 2. 👍`Array :` A special type of object used for storing ordered collections of data.


      ```
      let numbers = [1, 2, 3, 4];
      console.log(numbers)
      Output :  [ 1, 2, 3, 4 ]
      ```

      - 3. 👍`Function :` Objects that can be called to perform actions.


      ```
      function hello() {
      console.log("Hello!");
      }
      hello()
      Output :  Hello!
      ```

      - 4. 👍`Date :` Represents dates and times.

      ```

      let today = new Date();
      console.log(today)
      Output : 2024-08-20T02:56:02.904Z
      ```


    







      




