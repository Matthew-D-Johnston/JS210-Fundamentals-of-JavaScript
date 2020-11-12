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

### Functional Scopes and Lexical Scoping

A variable's scope is the part of the program that can access that variable by name. This is true in all programming languages.  Specifically, variable scoping rules describe how and where the language finds and retrieves values from previously declared variables.  

In JavaScript, every function or block creates a new variable scope. Let's examine what this means.  

#### The Global Scope

Very small JavaScript programs with no functions or blocks exist entirely within a single scope called the global scope:

```javascript
let name = 'Julian';
console.log(name);
```

Here, we declare the `name` variable on the first line. After this line runs, `name` is available from that point to the end of the program. Running this code writes `Julian` to the console log.  

#### Function Scope

Let's add a function to the picture:

```javascript
let name = 'Julian';

function greet() {
  let myName = name;
  console.log(myName);
}

greet(); 	// => Julian
```

With this code, we now have two scopes: (1) the global scope and (2) the scope from the declaration of the `greet` function. In this code, `name` and `greet` are in the global scope, while `myName` is in the **local scope** of `greet`. Within the function, we can access the `name` variable since the code within a function can access all variables in all surrounding scopes. However, `myName` is only available inside of `greet` -- variables declared inside a scope have function scope, and they cannot be accessed outside the body of the function.  

#### Block Scope

Let's add a block to the picture by using a `while` loop:  

```javascript
let name = 'Julian';				// `name` is in global scope

function greet() {					// `greet` is also in global scope
  let counter = 0;					// `counter` is in function scope
  while (counter < 3) {
    let myName = name;			// `myName` is in block scope
    console.log(myName);
    counter += 1;
  }
  
  // console.log(myName);   // would raise an error (myName is not in scope)
  console.log(counter);		  // => 3
}

greet();										// => Julian (3 times)
// console.log(myName);			// would raise an error (not in scope)
// console.log(counter);		// would raise an error (not in scope)
```

Here, we declare a `counter` variable on the first line of the `greet` function. After this line runs, `counter` is available from that point to the end of the function. Running this code writes three instances of the string `Julian` to the console log followed by the number `3`. `counter` has function scope, so it's available from its declaration down to the end of the function. However, it is not available outside of the function.  

We also have a **block scope**, introduced by the block used by the `while` loop. As with function scopes, the code inside a block scope can access any variables declared in the surrounding (outer) scope(s).  

We now have three scopes: (1) the global scope (which includes `name` and `greet`). The function scope (which includes `counter`), and (3) the block scope of the loop, which includes `myName`. Both function and block scopes are also called local scopes.  

#### Lexical Scoping

JavaScript uses _Lexical Scoping_ to determine where it looks for variables; it uses the structure of the source code to determine the variable's scope. That is, **the source code defines the scope**. This means that when you write a function in your code, it creates a scope even if the function never gets executed and has no variables of its own. At any point in a JavaScript program, there is a hierarchy of scopes from the local scope of the code up to the program's global scope.  

When JavaScript tries to find a variable, it searches this hierarchy from the bottom to the top. It stops and returns the first variable it finds with a matching name. This means that variables in a lower scope can _shadow_, or hide, a variable with the same name in a higher scope.  

Most mainstream programming languages use lexical scoping rules (also called "static scoping"). Some languages use "dynamic scoping" instead, or make dynamic scoping a choice.  

#### Adding Variables to the Current Scope

These are a number of ways to create a variable in the current scope:

* Use the `let` or `const` keywords.
* Use the `var` keyword, which we'll introduce later in this lesson.
* Define parameters for a function - each parameter is a local variable.
* A function declaration creates a variable with the same name as the function. We'll talk about that in the next assignment.
* A class declaration also creates a variable with the same name as the class. We'll talk about class declarations in a later course.  

```javascript
function lunch() {    // A function declaration creates a new variable scope
  let food = 'taco';  // 1. Add a new variable food within the current variable scope
}

function eat(food) {  // 2. Parameters create variables during function invocation
  console.log('I am eating ' + food);
}

function drink() {    // 3. Add a new variable drink within the global variable scope
  console.log('I am drinking a glass of water');
}
```

Of note in the above code is the scope of `food` variable from the parameter of the `eat` function. Given lexical scoping rules, its scope is the `eat` function because of the way the source code is written not because the function gets invoked. At runtime, this scope implies that `food` can only be accessed from within the body of the `eat` function.  

Remember these important variable scoping rules:

* Every function declaration creates a new local variable scope.
* Every block creates a new local variable scope.
* Lexical scope uses the structure of the source code to determine the variable's scope. This means that the code doesn't have to be executed for the scope to exist.
* All variables in the same or surrounding scopes are visible inside functions and blocks.

