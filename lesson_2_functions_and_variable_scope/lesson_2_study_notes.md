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

---

## Practice Problems: Variable Scopes in JavaScript (1)

Please predict the output of the following programs, and explain why they output what they do.  

###### Problem 1

```javascript
let a = 'outer';

function testScope() {
  let a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);
```

###### My Solution

Here is what I expect the above code to output:

```
outer
inner
outer
```

The first call to log `a` to the console takes the variable `a` as its argument. `a` was first declared and initialized with the value `'outer'` on the very first line. Even though the function declaration for `testScope()` is 'hoisted' above the declaration of `a` when we run the code, this will have no effect on the value being referenced by `a`. The declaration of another variable `a` within the `testScope()` function is a completely different variable and is not associated with the `a` declared in the global scope. Since these are two different `a` variables there is nothing in the above code that would cause one to be written over with a new value.

###### LS Solution

```
outer
inner
outer
```

Line 8 is the first invocation of `console.log`; here, `a` is the global variable `a` from line 1. Line 9 calls the `testScope` function; in the function, `a` is a local variable on line 4, so line 5 logs `inner`. After `testScope` returns, the `a` on line 10 is the global variable on line 1 again; therefore, it logs `outer`.  

---

###### Problem 2

```javascript
let a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);
```

###### My Solution

Here is what I expect the above code to output:

```
inner
inner
inner
```

The variable `a` is first declared on Line 1 and initialized with the value `'outer'`. However, when the `testScope()` function is declared, beginning on Line 3, the function block contains a reassignment of `a` to the value of `'inner'`. Thus, the call to log `a` to the console on Line 8 will result in `inner` being logged to the console. This will also be the case for the invocation of `testScope()` on Line 9 and the invocation of `console.log(a)` on Line 10.  

###### LS Solution

```
outer
inner
inner
```

On line 4, `a` is the global variable from line 1. The assignment assigns `inner` to the variable. Thus, line 10 logs `inner` instead of `outer`.  

---

###### Problem 3

```javascript
let basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }
  
  console.log(basket);
  
  let shop2 = function() {
    basket = 'computer';
  };
  
  const shop3 = () => {
    let basket = 'play station';
    console.log(basket);
  };
  
  shop1();
  shop2();
  shop3();
  
  console.log(basket);
}

goShopping();
```

###### My Solution

Expected output:

```
empty
play station
computer
```

On the first line, the `basket` variable is declared and initialized with a reference to the value `'empty'`. Then, we have a declaration of the function `goShopping`. On the last line, the `goShopping()` function is invoked. When it is invoked, we then have the declaration of the function `shop1()`. It is then followed by `console.log(basket)`, which logs `empty` to the console. Then we have two function expressions, one assigned to the variable `shop2` and the other assigned to the constant `shop3`. `shop1()` is then invoked and reassigns `basket` with the value `'tv'`. Then `shop2()` is invoked and reassigns `basket` again to `'computer'`. `shop3()` is then invoked and a local variable `basket` is declared and assigned to the value of `'play station'`, which is subsequently logged to the console. Finally, `console.log(basket)` is invoked again on the last line of the `goShopping()` function, and it logs `computer` to the console since that was the last value that was assigned to the global `basket` variable.

###### LS Solution

```
empty
playstation
computer
```

The first log operation occurs on line 8; `basket` still has its original value, `empty`. The function call on line 19 changes `basket` to `tv`, and the call on line 20 changes it to `computer`. The function call on line 21 does not alter the value of the `basket` global, but defines and sets a local variable with the same name. It then logs `play station`. Upon returning from `shop3`, the local variable goes away, so line 23 logs the value of the global `basket`: `computer`.  

---

###### Problem 4

```javascript
function hello() {
  a = 'hi';
}

hello();
console.log(a);
```

###### My Solution

Expected Output:

```
undefined
ReferenceError: a is not defined
```

My original explanation was that since `a` was assigned to the value `'hi'` within the local scope of the `hello()` function that it would not be accessible outside that function. However, I ran the code and was surpised to get the following output:

```
hi
```

I looked at the code again and noticed that on line 2, the variable `a` is simply being assigned, but not declared.  I think that what happens here is that JavaScript interprets this as if somehow `a` has been defined elsewhere in the global scope. Thus, when it is assigned within the function declaration of `hello` and then that function is invoked on line 5, it gets assigned the value `'hi'` and is accessible within the global scope.

###### LS Solution

```
hi
```

Here, we call the `hello` function, so we assign a value of `hi` to the variable. The variable is a global variable since we don't declare it with `let`, `const`, `var`, or `function`. Thus, line 6 logs `hi`.  

Note that this is nearly identical to what happens when we explicitly declare `a` at the global level:

```javascript
let a;

function hello() {
  a = 'hi';
}

hello();
console.log(a);
```

However, there is a subtle difference: without an explicit declaration, `a` becomes a property of the global object. We discuss objects in more detail later and why this extremely subtle distinction matters. For now, though, you just need to know that `a` is available everywhere in the program.  

---

###### Problem 5

```javascript
function hello() {
  let a = 'hello';
}

hello();
console.log(a);
```

###### My Solution

Expected Output:

```
ReferenceError: a does not exist
```

Actual output:

```
ReferenceError: a is not defined
```

In this case, since we are declaring `a` within the local scope of the `hello` function, it cannot be accessed from outside that scope when we invoke `console.log(a)` on line 6.

###### LS Solution

```
Uncaught ReferenceError: a is not defined
```

Since we don't define a global variable `a`, line 6 does not find any variables named `a`; thus, it raises a `ReferenceError`.  

###### Problem 6

```javascript
console.log(a);

var a = 1;
```

###### My Solution

Expected output:

```
1
```

Even though the invocation of `console.log(a)` occurs before we declare the variable `a`, the variable declation gets 'hoisted' to the top of the code, meaning that there will be no error for trying to log the value of `a` to the console before actually declaring it and assigning it a value.

###### LS Solution

```
undefined
```

After hoisting, this program is equivalent to:

```javascript
var a;
console.log(a);
a = 1;
```

Line 2 logs `undefined` since we declared `a` but never assigned it a value.

---

###### Problem 7

```javascript
console.log(a);

let a = 1;
```

###### My Solution

Expected output:

```
Uncaught ReferenceError: a is not defined
```

Actual output:

```
ReferenceError: cannot access 'a' before initialization
```

In this case, even after hoisting, the attempt to log the value of `a` to the console leads to a `ReferenceError`. The program knows that `a` exists but it says that it is not initialized yet.

###### LS Solution

```
ReferenceError: Cannot access 'a' before initialization
```

After hoisting, JavaScript can tell that there is an `a` variable, but that variable lives in the Temporal Dead Zone; it is unset and cannot be accessed.

---

###### Problem 8

```javascript
console.log(a);

function hello() {
  a = 1;
}
```

###### My Solution

Expected Output:

```
ReferenceError: 'a' does not exist
```

In this case we are trying to log `a` to the console when `a` has not been declared. Even the assignment to the value of `1` within the block of the `hello` function declaration makes no difference here since we have not invoked the `hello` function.

###### LS Solution

```
Uncaught ReferenceError: a is not defined
```

After hoisting, this program is equivalent to:

```javascript
function hello() {
  a = 1;
}

console.log(a);
```

We define `hello`, but never call it, so we never assign a value to `a`. Since we also don't declare `a` anywhere, line 5 produces a `ReferenceError`.

---

## Practice Problems: Variable Scopes in JavaScript (2)

Please predict the output of the following programs, and explain why they output what they do.

###### Problem 1

```javascript
function say() {
  if (false) {
    var a = 'hello from inside a block';
  }
  
  console.log(a);
}

say();
```

###### My Solution

Expected output:

```
ReferenceError: a does not exist
```

Here, we invoke the `say()` function that was declared above the invocation. Within the definition of the function we have an `if` conditional statement, but which should never run because its condition is `false`. Thus, the `a` variable never gets declared and the attempt to log its value to the console should run some sort of `ReferenceError`.

###### LS Solution

```
undefined
```

The scope of variables declared with `var` is function-level, not block-level. Therefore, after hoisting, this code becomes:

```javascript
function say() {
  var a;
  if (false) {
    a = 'hello from inside a block';
  }
  
  console.log(a);
}
```

Since we declare but never assign `a`, line 7 logs `undefined`.

---

###### Problem 2

```javascript
function say() {
  if (false) {
    let a = 'hello from inside a block';
  }
  
  console.log(a);
}

say();
```

###### My Solution

Expected output

```
ReferenceError: a is not defined
```

This time, because the variable declaration was done with a `let` rather than a `var`, I believe we will run into a ReferenceError. However, I expect the specific error to be one where `a` is not defined or initialized rather than not existing. I think that JavaScript knows `a` exists but it just doesn't get initialized.

###### LS Solution

```
ReferenceError: a is not defined
```

The scope of variables declared with `let` is block-level, not function-level. Therefore, the variable `a` is only available inside the `if` clause on line 3.  

---

###### Problem 3

```javascript
function hello() {
  a = 'hello';
  console.log(a);
  
  if (false) {
    var a = 'hello again';
  }
}

hello();
console.log(a);
```

###### My Solution

Expected output:

```
hello
hello
```

The first `hello` that is logged to the console comes from the invocation of the `hello()` function on the second last line. The variable `a` is assigned the string value `'hello'` in the function definition and on the next line there is a call to log that value to the console. That is the first `hello` comes from. The second one only occurs because we've invoked the `hello()` function, which assigns the string value `'hello'` to the variable `a`. Because the assignment does not occur in a variable declaration statement, JavaScript interprets the code as if `a` was declared in the global scope. Thus, the call to log the value of `a` to the console outside the scope of the function precludes the possibility of an error being thrown.

###### LS Solution

```
hello
Uncaught ReferenceError: a is not defined
```

After hoisting:

```javascript
function hello() {
  var a;
  a = 'hello';
  
  console.log(a);
  
  if (false) {
    a = 'hello again';
  }
}

hello();
console.log(a);
```

`a`'s scope is the body of `hello`. Since there is no global variable named `a`, line 13 raises an error.

---

###### Problem 4

```javascript
function hello() {
  a = 'hello';
  console.log(a);
  
  if (false) {
    let a = 'hello again';
  }
}

hello();
console.log(a);
```

###### My Solution

Expected output:

```
hello
ReferenceError: a is undefined
```

This is similar to the previous problem. `a` is not scoped at the global level, meaning that the last call to log its value to the console should return an error.

###### LS Solution

```
hello
hello
```

Inside the `if` statement, `a`'s scope is confined to line 6. Since `a` on line 2 is not declared, it is treated as a global variable. Thus, both lines 3 and 11 output `hello`.

---

###### Problem 5

```javascript
var a = 'hello';

for (var index = 0; index < 5; index += 1) {
  var a = index;
}

console.log(a);
```

###### My Solution

Expected output:

```javascript
hello
```

This output is due to the fact that we declare the variable `a` on the first line with the string value `'hello'`. The declaration of another variable `a` within the block of the `for` loop is a completely separate variable that is scoped at the level of the block and thus does not reassign the value of the `a` variable that is scoped at the global level.

###### LS Solution

```
4
```

JavaScript hoists the variable declaration on line 4 to the top of the global scope. Since a global variable named `a` exists, the hoist has no direct effect on operation. Inside the loop, `a` gets assigned five times; at the end of the loop, it has a value of 4. Thus, line 7 logs `4`.

---

###### Problem 6

```javascript
let a = 'hello';

for (let index = 0; index < 5; index += 1) {
  let a = index;
}

console.log(a);
```

###### My Solution

Expected output:

```
hello
```

Okay, this one I'm going to use my response for the last problem. I think the two different declarations of `a` using `let` instead of `var` means there are two separate `a` variables, one scoped at the global level and the other at the level of the `for` loop block. If this is wrong, then this illustrates something fundamentally different about the scoping rules for function blocks versus other types of blocks.

###### LS Solution

```
hello
```

In this code, we have two different `a` variables: one in the outer scope, and one in the inner scope. The declaration on line 4 creates and initializes the inner-scoped variable. On line 7, we output the value of the `a` variable declared on line 1. That variable still has the value `hello`, so line 7 outputs `hello`.  

---

###### Problem 7

```javascript
let a = 1;

function foo() {
  a = 2;
  let bar = function() {
    a = 3;
    return 4;
  };
  
  return bar();
}

console.log(foo());
console.log(a);
```

###### My Solution

Expected output:

```
4
3
```

The value that is logged to the console is the value returned by the invocation of the `foo()` function. The `foo()` function returns the value returned by the nested `bar()` function, whose return value is `4`.  The next value that is logged to the console is the value that is assigned to the variable `a`. `a` is first declared and assigned a value of `1`. However, within the definition of the `foo()` function, it is first reassigned a value of `2`. It is then reassigned the value of `3` within the definition of the `bar()` function. Since the `foo()` function gets invoked, which in turn invokes the `bar()` function, those reassignment instructions get executed. Thus, the value assigned to the variable `a` after the reassignments are executed is `3`.

###### LS Solution

```
4
3
```

The `foo` function returns the return value of the `bar` function, which is 4. During this process, the code changes the global variable twice. Thus, the final value is 3.  

---

###### Problem 8

```javascript
var a = 'global';

function checkScope() {
  var a = 'local';
  const nested = function() {
    var a = 'nested';
    let superNested = () => {
      a = 'superNested';
      return a;
    };
    
    return superNested();
  };
  
  return nested();
}

console.log(checkScope());
console.log(a);
```

###### My Solution

Expected output:

```
superNested
superNested
```

Invoking the `checkScope()` function returns the string value `'superNested'` and ultimately leads to the reassignment of the globally scoped variable `a ` to that same string value.

###### LS Solution

```
superNested
global
```

With super-nested functions, you must chase through the functions starting with the function invocations. Here, we start with line 18, the first function invocation. From there, line 4 goes to line 5, line 5 to line 15, and so on through lines 6, 7, 12, 8, and 9.  Line 9 obviously returns `'superNested'`, so line 12 must return `'superNested'` too. This takes us back to line 15 which also returns `'superNested'`. Finally, line 18 receives the final return value (`'superNested'`) and logs it. During this entire process, we never modify the global `a`, so it still has the value `global`.  

---

###### Problem 9

```javascript
let a = 'outer';
let b = 'outer';

console.log(a);
console.log(b);
setScope(a);
console.log(a);
console.log(b);

function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}
```

###### My Solution

Expected output

```
outer
outer
outer
inner
```

The first two values logged to the console are straightforward: we simply log the values that we assigned to the variables `a` and `b` when we declared them on the first two lines. The we invoke the `setScope()` function with the variable `a` as an argument. The value referenced by `a` gets assigned to the local `foo` variable; thus, `foo` originally references the string value `'outer'`. However, it is immediately reassigned to the string value `'inner'`. But this has no effect on the global variable `a`; `a` still references `'outer'`. `b`, on the other hand, is reassgined to the string value `'inner'` within the function definition, which is why when we log its value to the console again, it now logs `inner` instead of `outer`.

###### LS Solution

```
outer
outer
outer
inner
```

Function arguments become local variables in the function, so assigning to an argument has no effect on the original argument.

---

###### Problem 10

```javascript
let total = 50;
let increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total);
incrementBy(10);
console.log(total);
console.log(increment);
```

###### My Solution

Expected output:

```
50
60
15
```

The first value logged to the console is just the value assigned to the `total` variable when we declared it on the first line. That value is `50`. Then we invoke the `incrementBy()` function with the argument `10`. This increment's the `total` global variable by `10`, making the new value `60`. That is the value that we then log to the console. Finally, we log the value associated with the variable `increment` to the console. That value is still `15`.

###### LS Solution

```
50
60
15
```

Though our parameter has the same name as the variable declared on line 2, it is not the same variable. Function parameters are locally scoped variables, even when they have the same names as variables defined in the outer scope.

---

###### Problem 11

```javascript
let a = 'outer';

console.log(a);
setScope();
console.log(a);

var setScope = function () {
  a = 'inner';
};
```

###### My Solution

Expected output:

```
outer
inner
```

The first value logged to the console is just the value we assigned to the `a` variable when we declared it on the first line. Then we call the `setScope` function, which reassigns the global `a` variable to the string value `'inner'`. Thus, when we log the value of `a` to the console, it now logs `inner` instead of `outer`.

###### LS Solution

```
outer
Uncaught TypeError: setScope is not a function(...)
```

With hoisting, the above code is equivalent to:

```javascript
var setScope;

let a = 'outer';

console.log(a);
setScope();
console.log(a);

setScope = function () {
  a = 'inner';
};
```

Line 6 tries to call `setScope` as a function. However, `setScope` is just a declared global variable whose value is `undefined`. Note that unlike function declarations, with function expressions using `var`, the name of the function is hoisted, but not the function body.

----

## Closures

Closures let a function access a variable that was in scope at the function's definition point even when that variable is no longer in scope. You may not realize it, but you've been using closures from the time you invoked your first function.  

### What to Focus On

You should focus on the following:

- What is a closure?
- What is in a closure?
- When is a closure created?
- What is the relationship between closures and scope?
- What do we mean when we say that closures are defined lexically?
- What is partial function application?

### Closures

The concepts of closure and scope are intimately related. Closures use the scope in effect at a function's definition point to determine what variables that function can access. What variables are in scope during a function's execution depend on the closure formed by the function's definition. It's somewhat circular reasoning, but it's impossible to separate the two.  

MDN defines **closure** as "the combination of a function and the lexical environment within which that function was [defined]." You can think of closure as a function combined with all of the variables in its lexical scope, including function and class names.  

Note that the MDN definition of closure uses the term "declared" where we say "defined". Since closure occurs with both declarations and expressions, that term is wrong. Please use our modified version of the quote.  

Closures are created when you define a function or method. The closure essentially _closes over_ its environment -- what's in scope. In effect, the function definition and its scope become a single entity called a closure. When the function is invoked, it has access to everything in its environment. That is, it can use any variable that was in the lexical scope where the function was defined. **Even if those variables aren't in the lexical scope where you invoke the function, it can still access them.**  

Wait a minute. How can you use variables that aren't in scope? Doesn't scope govern what variables you can use? Yes, that's true, but it's a little imprecise. When we say that a variable is no longer in scope, we mean that it isn't in scope at the point in your program where you invoke the function. However, closure and scope are lexical concepts. Where you invoke a function is unimportant; where you define the function is. A closure includes all the variables that are in scope where you defined the function. Those variables may not be in scope when you invoke the function, but they're still available to the function.  

In practice, some JavaScript engines optimize closure to only include variable names that the function needs. If it doesn't use a particular variable name, that name isn't included in the closure. You may run into this when using a debugger. Google Chrome's Devtools debugger, for instance, lets you see what's in the closure by looking at the "Closure" item in the "Scope" pane -- it contains a list of variables in the closure for the current function. You can also see this in the Node debugger in a more confusing way: you can't access an identifier in the outer scope unless the current function uses that name.  

###### A Helpful Mental Model

Let's try to describe a more helpful mental model. When you define a function, JavaScript finds all of the variable names within the lexical scope that contains the function definition. It then takes those names and places them inside a special "envelope" object that it attaches to the function object. Each name in the envelope is a pointer to the original variable, not the value it contains.  

"Envelope" is not a term that you're likely to encounter elsewhere. It's just our word for how this mental model of closure works. We won't use it again after this assignment.  

The phrase "pointer to the ... variable" may seem odd. We usually think of variables as pointers to objects, not as something that we can point to. We can point to the object that a variable references, but we can't point to the variable. That's the way JavaScript is defined. However, internally, it can do anything it needs to do, including pointing to variables. In this case, it needs a pointer to the variable so that it can see any changes made to what the variable references or contains:  

```javascript
let numbers = [1, 2, 3];

function printNumbers() {
  console.log(numbers);
}

printNumbers(); // => [ 1, 2, 3 ]

numbers = [4, 5];
printNumbers(); // => [ 4, 5 ]
```

If the closure pointed to the value instead of the variable, it wouldn't be able to tell that we reassigned `numbers` on line 9. That is also true for primitive values: we need a pointer to the variable so the closure can see any changes.  

```javascript
let number = 42;

function printNumber() {
  console.log(number);
}

printNumber(); // => 42

number = 3.1415;
printNumber(); // => 3.1415
```

We'll return to this concept in a few minutes.  

When a function encounters a variable name during execution, it first looks inside its local scope for that name. If it can't find the name, it peeks inside the envelope to see whether the variable is mentioned there. If it is, JavaScript can follow the pointer and get the current value of the variable. In fact, this is how scope works in JavaScript: it first checks for local variables by a given name, then it looks to the closure if it can't find it. All that stuff about looking at outer scopes until you reach the global scope all happens during the creation phase when JavaScript is looking for identifiers (e.g., variable and function names) and determining what scope they belong to.  

What about variables that are in scope when you invoke a function? Can the function access them? If those variables were in scope at the definition point, then yes, it can. However, if those variables weren't in scope when you defined the function, then the function won't be able to access them. They're not listed in the envelope since those names aren't in scope at the function definition point. Only variables that are in scope when you define the function are available to the function.  

###### Examples of Closure

Okay, then, how can we invoke a function in a way that lets it access something that isn't in scope? Recall that, in JavaScript, functions are first-class objects. We can assign them to variables, pass them as function arguments, and use them as function return values. That means that we don't have to execute a function in the same scope in which we defined it; we can call it from a completely different part of the program. This is easiest to see with a higher-order function that returns a function object. For instance:  

```javascript
function foo() {
  let name = "Pete";
  return function() {
    console.log(name);
  };
}

let printPete = foo();
printPete(); // Pete
```

In this example, we first call `foo` and capture its return value, a function that logs the value of the `name` variable defined in the lexical scope of `foo`. At a minimum, the closure formed by the returned function's definition contains a pointer to `name` in its envelope. That pointer means that `name`'s value won't get discarded (garbage collected -- we'll meet this concept later) when `foo` is done.  

Though `name` is out of scope when `foo` finishes, the returned function has an envelope that contains a pointer to `name`. Thus, the function can still follow the pointer to the original variable, and find its current value, and that lets `printPete()` print `'Pete'`.

Functions that return functions are perhaps the most powerful feature of closure in JavaScript.  

Let's consider a simpler example of closure:  

```javascript
let counter = 0;

function incrementCounter() {
  counter += 1;
}

incrementCounter();
incrementCounter();
console.log(counter); // 2
```

At first glance, this code seems to illustrate variable scope: a function can access a variable in its surrounding scope. However, the reason why it can do that is that the function definition forms a closure that includes the variables in the outer scope. That includes `counter`, which means that `incrementCounter` can access and update the `counter` variable.  

A closure is not a snapshot of the program state. As we saw a little earlier, each time you invoke a function, it sees the most recent values of the variables in its envelope. Thus, if a variable's value changes, the closure ensures that the function sees the new value, not the old one. Thus, `incrementCounter` increments the `counter` variable from `1` to `2` during its second invocation.  

In most programs, you would probably return the `incrementCounter` function from another function:

```javaScript
function makeCounter() {
  let counter = 0;
  
  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2
```

Note that `counter` is now a private variable in the sense that we cannot access it directly. The only way to determine its value is to call the function that `makeCounter` returns, but that also increments the variable. This form of data protection is a big reason why returning a function from another function is so powerful.  

It's important to remember that closure definitions are purely lexical. Closures are based on your program's structure, not by what happens when you execute it. Even if you never call a particular function, that function forms a closure with its surrounding scope.  

### Partial Function Application

In the last section, we saw several ways in which closures play a part in our programs. Let's take a brief look at a more useful application of closures.  

Consider the following code:  

```javascript
function add(first, second) {
  return first + second;
}

function makeAdder(firstNumber) {
  return function(secondNumber) {
    return add(firstNumber, secondNumber);
  };
}

let addFive = makeAdder(5);
let addTen = makeAdder(10);

console.log(addFive(3));  // 8
console.log(addFive(55)); // 60
console.log(addTen(3));   // 13
console.log(addTen(55));  // 65
```

In this program, the `makeAdder` function creates and returns a new function that, in turn, calls and returns the return value of calling `add` with two arguments. What's interesting here is that we define the first number when we call `makeAdder`. We don't supply the second number until later when we call the function that `makeAdder` returns.

A function such as `makeAdder` is said to use **partial function application**. It applies some of the function's arguments (the `add` functin's `first` argument here) when called, and supplies the remaining arguments when you call the returned function. Partial function application refers to the creation of a function that can call a second function with fewer arguments than the second function expects. The created function supplies the remaining arguments.  

The partial function technique is most useful when you need to pass a function to another function that won't call the passed function with enough arguments. It lets you create a function that fills in the gaps by supplying the missing elements. For instance, suppose you have a function that downloads an arbitrary file from the Internet. The download may fail, so the function also expects a callback function that it can call when an error occurs:

```javascript
function download(locationOfFile, errorHandler) {
  // try to download the file
  if (gotError) {
    errorHandler(reasonCode);
  }
}

function errorDetected(url, reason) {
  // handle the error
}

download("https://example.com/foo.txt", /* ??? */);
```

Our error handling function, `errorDetected`, takes two arguments, but `download` only passes one argument to the error handler. Suppose the `download` function is part of a 3rd party library that you can't modify. You can turn to partial function application to get around the single-argument limitation:

```javascript
function makeErrorHandlerFor(locationOfFile) {
  return function(reason) {
    errorDetected(locationOfFile, reason);
  };
}

let url = "https://example.com/foo.txt";
download(url, makeErrorHandlerFor(url));
```

The `download` method now calls the partial function returned by `makeHandlerFor`, and `errorDetected` gets both arguments it needs.  

In this simple example, partial function application may be overkill. However, if you need to use `errorDetected` in several different locations, partial function application can save you a lot of time and effort. You don't have to create an error handler function for each situation.  

Rather than creating a `makeErrorHandlerFor` function, you can use `bind` to perform partial function application. In most cases, `bind` is all you need.

```javascript
let url = "https://example.com/foo.txt";
download(url, errorDetected.bind(null, url));
```

We'll meet up again with partial function application in a later course.  

### What are Closures Good For?

We've seen several examples in this assignment, including callbacks, partial function application, and creating private data. In addition, here are some other things made possible by closures: we'll meet most (but not all) of these later in the curriculum:

* Currying (a special form of partial function application)
* Emulating private methods
* Creating functions that can only be executed once
* Memoization (avoding repetitive resource-intensive operations)
* Iterators and generators
* The module pattern (putting code and data into modules)
* Asynchronous operations

---



