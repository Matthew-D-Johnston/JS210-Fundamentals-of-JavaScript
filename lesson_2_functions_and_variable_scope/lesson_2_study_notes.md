##### JS210 Fundamentals of JavaScript for Programmers > Functions and Variable Scope

---

## Defining Functions

Procedures let you extract common code to one place and use the code from anywhere else in your program. In JavaScript, we use the term _functions_ to refer to procedures.  

One way to define functions is to declare them. A function declaration has the following structure:  

* The `function` keyword
* The name of the function
* A list of comma separated parameters
* A block of statements (the function body)

Here is a simple function declaration with several different calls:

```javascript
function triple(number) {
  console.log('tripling in process...');
  return number + number + number;
}

// call function with a value argument
console.log(triple(5));									// logs 15

// call function with a variable argument
let someNumber = 5;
console.log(triple(someNumber));				// logs 15

// call function and store result in a variable
let result = triple(5);
console.log(result);										// logs 15
```

**Note:** If a function does not contain an explicit `return` statement, or the `return` statement does not include a value, the function implicitly returns the value `undefined`. This is a reason why functions are said to "have returned" rather than "finished execution". When we talk about closures in a later course this distinction will become more apparent. For now, just be mindful of the disambiguation between the `return` value (explicit or implicit) of a function and the statement that a "_function that has returned or returns_".  

### Parameters vs. Arguments

Consider the following:

```javascript
function multiply(a, b) {
  return a * b;
}
```

We say that the function `multiply` takes two _parameters_, `a` and `b`. We call the actual values passed to a function during execution its arguments. In the following code, `5` and `6` are the function's arguments:  

```javascript
multiply(5, 6);				// returns 30
```

