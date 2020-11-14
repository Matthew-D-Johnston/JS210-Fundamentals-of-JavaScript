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

---

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

---

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

---

### Function Declarations and Function Expressions

#### Function Declarations

Let's examine a function declaration:

```javascript
function hello() {
  return 'hello world!';
}

console.log(typeof hello);		// function
```

A function declaration (sometimes called a "function statement") defines a variable (in this case, `hello`) whose type is `function`. It does not require assignment to a variable. The value of the function variable is the function itself. This "functional variable" obeys general scoping rules, and we can use it exactly like other JavaScript variables.  

Function declarations are similar to variable declarations. Just as variable declarations must start with `let` or `const`, function declarations must start with `function`.  

It is important to realize that a function declaration not only creates a function, but also creates a variable. We previously learned that we can create variables and constants in the current scope with the `let` and `const` keywords, we can also create variables by naming the arguments to a function via its parameters. A function declaration gives us a fourth way: a function declaration declares a variable with the same name as the function, and then assigns the function to that variable. Thus, for every function declaration, a variable is initialized.  

#### Function Expressions

A function expression defines a function as part of a larger expression syntax (typically a variable assignment).  

```javascript
const hello = function () {		// We can also use let instead of const
  return 'hello';
}

console.log(typeof hello);		// function
console.log(hello());					// hello
```

In this code, we define an anonymous function (one without a name) and assign it to the variable `hello`. We then use the variable to invoke the function.  

#### Named Function Expressions

We can also name function expressions, like this:

```javascript
let hello = function foo() {
  console.log(typeof foo);		// function
};

hello();

foo();
```

However, the name is only available inside the function (i.e. it can only be used from within the function's local scope). Though most function expressions use anonymous functions, named function expressions are useful for debugging. The debugger can show the function's name in the call stack, providing a valuable clue. Named function expressions can also be useful for recursive functions.  

Named function expressions can look very similar to function declarations, but there is an easy way to differentiate between the two: if a _statement_ begins with the `function` keyword, then it is a function declaration; otherwise, it is a function expression. In the following code, we can see that even a minor change (adding parentheses) is enough to turn a function declaration into a function expression:  

```javascript
function foo() {
  console.log('function declaration');
}

(function bar() {
  console.log('function expression');
});

foo(); 		// function declaration
bar();		// Uncaught ReferenceError: bar is not defined
```

A function defined using a function declaration must always have a name (it cannot be an anonymous function). In addition to creating a named function, a function declaration also creates a variable with the same name as that function's name. For example, the following two function definitions both define a named function and a variable with the same name as that function.  

```javascript
let foo = function foo() {
  return 'a named function expression assigned to a variable';
};

function bar() {
  return 'a function declaration';
}
```

#### Arrow Functions

One of the most popurlar additions to ES6 JavaScript is a special type of function called an arrow function. At this point, you can think of arrow functions as a shorthand way to write a function expression.  

Consider the following function expression:  

```javascript
const multiply = function(a, b) {
  return a * b;
};
```

Using the arrow function syntax, we can rewrite this definition as:

```javascript
const multiply = (a, b) => {
  return a * b;
};
```

All we've done so far is eliminate the `function` keyword, and insert an arrow (`=>`) between the parameter list and the opening brace. That's not a huge improvement, and you might even say that this shorthand is a detriment to readability. However, we can make two more small modifications to an arrow funciton when its body only has one line. First, we can eliminate the braces and write the entire function on a single line:  

```javascript
const multiply = (a, b) => return a * b;
```

If you have a bunch of short functions like the `multiply` function, this shorthand is beginning to seem interesting. What's more, we can also eliminate the `return` keyword in this situation:  

```javascript
const multiply = (a, b) => a * b;
```

Arrow functions are most often used as **callback functions**. For instance, suppose we have the following code:  

```javascript
[1, 2, 3].map(function (element) {
  return 2 * element;
}); // returns [2, 4, 6]
```

In this case, the function passed to `map` is our callback function. We can simplify this somewhat verbose code by replacing the callback with an arrow function:  

```javascript
[1, 2, 3].map((element) => 2 * element); // returns [2, 4, 6]
```

When writing an arrow function that only has one parameter, you can omit the parentheses from the parameter list:

```javascript
[1, 2, 3].map(element => 2 * element); // returns [2, 4, 6]
```

---

## Hoisting

### What is Hoisting?

JavaScript engines operate in two main phases: a **creation phase** and an **execution phase**. The execution phase is when the program runs code line-by-line. That's what most people mean when they talk about a program's execution. However, before the execution phase begins, the creation phase does some preliminary work. One of those work items is to find all of the variable, function, and class _declarations_. It effectively moves these declarations to the top of their respective function or block: function-scoped declarations get moved to the top of the function, and block-scoped declarations get moved to the top of the block. This process is called **hoisting**.  

The result of this process is that all the declarations get hoisted -- raised, lifted, moved -- to the top of their defined scope. That's why the following code works:  

```javascript
console.log(getName());

function getName() {
  return "Pete";
}
```

During the creation phase, JavaScript sees the `getName` function declaration and hoists it to the top of the program. Hence, the above code effectively gets rearranged as follows:  

```javascript
function getName() {
  return "Pete";
}

console.log(getName());
```

---

### The Temporal Dead Zone

Variables declared with the `let`, `const`, and `var` statements are also hoisted. There is one major difference between `var` and the other two:  

* When a `var` variable is hoisted, JavaScript gives it an initial value of `undefined`.  
* When `let` and `const` variables are hoisted, they are not given an initial value at all. Instead, they are left in an "unset" state; that is, they are "not defined". Don't say "undefined", though – that's confusing.

If you try to access the value assigned to a `var` variable before the original `var` declaration gets executed, JavaScript will return a value of `undefined`.  

```javascript
console.log(bar); // undefined
var bar = 3;
console.log(bar); // 3
```

If you try to access a `let` or `const` variable, you'll get an error:  

```javascript
console.log(foo); // Uncaught ReferenceError: Cannot access 'foo' before initialization
let foo;
```

It's interesting to note that the error message differs if you don't declare `foo` at all:

```javascript
console.log(foo); // Uncaught ReferenceError: foo is not defined
```

This demonstrates that JavaScript is aware of the `foo` variable in the first snippet and recognizes that it hasn't been set to a value yet. In the second snippet, it can tell that `foo` hasn't been declared at all, so the error message is different.  

---

### Hoisting for Function Declarations

JavaScript also hoists function declarations to the top of the scope; it hoists the entire function declaration, including the body:  

```javascript
console.log(hello());

function hello() {
  return 'hello world';
}
```

is equivalent to:

```javascript
function hello() {
  return 'hello world';
}

console.log(hellow());			// logs "hello world"
```

Function declarations have function scope. That's another way of saying that hoisting also occurs with nested functions:  

```javascript
function foo() {
  return bar();
  
  function bar() {
    return 42;
  }
}
```

Even though `bar` is declared at the end of `foo`, we can still call `bar` at the beginning of the function. That's because hoisting makes the `bar` declaration available throughout `foo`.  

Though JavaScript functions have function scope, function hoisting has undefined behavior when the function is nested inside a non-function block. You can declare functions inside functions and methods, but you may run into problems if you try to define them inside other blocks, such as `if` and `while` statements.  

Since you can get different behaviors with the same code, you shouldn't try to nest function declarations inside non-function blocks.  

---

### Hoisting for Function Expressions

Function expressions often involve assigning a function to a declared variable; since such expressions are just variable declarations, they obey the hoisting rules for variable declarations.  

```javascript
console.log(hello());

var hello = function () {
  return 'hello world';
};
```

is equivalent to:

```javascript
var hello;

console.log(hello());		// raises "Uncaught TypeError: hello is not a function"

hello = function () {
  return 'hello world';
}
```

---

### Hoisting Variable and Function Declarations

When both a variable and a function declaration exist, you can assume that the function declaration is hoisted first; that is, the function declarations are hoisted above the variable declarations. Given the following code block:

```javascript
bar();								// logs undefined
var foo = 'hello';

function bar() {
  console.log(foo);
}
```

the equivalent hoisted code will look like this:

```javascript
function bar() {
  console.log(foo);
}

var foo;

bar();					// logs undefined
foo = 'hello';
```

Given the hoisted code, the key thing to watch out for is the value that is logged. For this particular scenario, since `bar` uses a variable that is in the global scope, the timing of the assignment becomes relevant. It is easy to make a mistake and think that since `bar` was declared below the assignment of `'hello'` to `foo` (see code before hoisting) that when `bar` is invoked the value logged will be `hello` already. However, because of the hoisting rules for variable and function declaration `foo` is still undefined when `bar` is invoked.  

Furthermore, if the same name is used for a variable and a function:  

###### snippet 1

```javascript
bar();						// logs "world"
var bar = 'hello';

function bar() {
  console.log('world');
}
```

###### snippet 2

```javascript
var bar = 'hello';
bar();							// raises "Uncaught TypeError: bar is not a function"

function bar() {
  console.log('world');
}
```

You will notice how a slight change in code results in a significant change in the outcome. Let's look at the hoisted version of the two code snippets:  

###### snippet 1

```javascript
function bar() {
  console.log('world');
}

bar();
bar = 'hello';
```

###### snippet 2

```javascript
function bar() {
  console.log('world');
}

bar = 'hello';
bar();
```

Since function declarations are hoisted first, the variable declaration of the same name becomes redundant (notice that there is no longer a `var bar` in the code snippets). Since the variable declaration is redundant, what remains is the reassignment. Being a reassignment, this becomes a problem for snippet2, since `bar` will no longer be of type `function`, and therefore results in an error when we try to invoke `bar`.  

You can't declare a `let` or `const` variable and a function with the same name:

```javascript
let foo = 3;
function foo() {}; // Uncaught SyntaxError: Identifier 'foo' has already been declared
```

```javascript
function foo() {};
let foo = 3; // Uncaught SyntaxError: Identifier 'foo' has already been declared
```

---

### Best Practice to Avoid Confusion

Hoisting can introduce confusion and subtle bugs if you don't pay careful attention. However, if you followe these two simple rules, you'll avoid many headaches:  

* Whenever possible, use `let` and `const` instead of `var`: avoid the confusion and subtle behaviors that can occur with `var`.
* If you must use `var`, declare all of the variables at the top of the scope:  

```javascript
function foo() {
  var a = 1;
  var b = 'hello';
  var c;
  
  ...
}
```

* If you can use `let` and `const`, declare them as close to their first usage as possible:

```javascript
function foo(bar) {
  console.log("Hello world!");
  
  let result;
  if (bar) {
    let squaredBar = bar * bar;
    result = squaredBar + bar;
  } else {
    result = "bar hasn't been set";
  }
  
  return result;
}

console.log(foo(3));						// 12
console.log(foo(undefined));		// bar hasn't been set
```

* Declare functions before calling them:

```javascript
function foo() {
  return 'hello';
}

foo();
```

---

### Hoisting Isn't Real

What!!!? After all that, we're going to tell you that hoisting isn't real? Yup.  

Hoisting is really just a mental model that almost all JavaScript developers used to explain how scope works in the language. There is no actual process that happens in JavaScript that is called hoisting. Until fairly recently, it wasn't even mentioned in the ECMAScript standards, and even now, it's barely mentioned in passing. 

The behavior that we try to explain with hoisting is merely a consequence of how JavaScript runs programs in two phases. The creation phase prepares your code for execution. Each time it encounters a variable, function, or class declaration, it adds that identifier to the current scope. If the identifier is at the global level, it gets added to the global scope. If it's in a function, class, or block, it gets added to the scope for that function, class, or block. Thus, at the end of the creation phase, JavaScript knows all of the identifiers in your program and what scopes each one belongs to.  

When the execution phase occurs, JavaScript no longer cares about declarations. It does care about initialization and function/class definitions, but not the declarations themselves. The identifiers are already known, and their scope is already known. JavaScript merely needs to look up identifiers as needed.  



