##### JS211 Assessment: Fundamentals of JavaScript for Programmers

---

## Study Guide

### Assignments and Comparison

###### Assignment

There is a subtle difference in terminology surrounding the `=` token. When used in a declaration, the `=` is just a syntactic token that tells JavaScript that you're going to supply an initial value for the variable. However, in an assignment, the `=` is called the **assignment operator**.  

###### Variable Assignment and Initializers

Once a variable is declared, you can use the `=` operator to assign a value to it:  

```javascript
let number;

number = 3;  // variable `number` is assigned with value 3
```

You can also combine the variable declaration with an **initializer**:  

```javascript
let myVariable = 'Hello, World';
var otherVariable = 23;
let anotherVariable = true;
const FOO = 42;
```

Initializers look a lot like an assignment, but are distinct terminology. An assignment is a standalone expression that gives a variable a new value; an initializer is the expression to the right of the `=` in a variable declaration.  

Take note that a variable that is declared but not initialized or assigned a value will have the value `undefined`.   

```javascript
let foo;
foo;			// undefined
```

Once declared, you can not assign a new value to a constant. Therefore you must initialize the contstant when you declare it:  

```javascript
const BAR; // Uncaught SyntaxError: Missing initializer in const declaration
```

```javascript
const FOO = 3;
FOO = 4; // Uncaught TypeError: Assignment to constant variable.
```

###### Expressions

Put simply, an expression is any valid code that resolves to a value.  

Examples of expressions:

```javascript
'hello'; 		// a single string is an expression
10 + 13;		// arithmetic operations are expressions
sum = 10;		// assignments are expressions
```

The most common expression types are:  

* Arithmetic: these are expressions that evaluate to a number (i.e. `10 + 13`)
* String: these are expressions that evaluate to a character string (i.e. `'Hello' + ', World'`)
* Logical: these are expressions that evaluate to `true` or `false` (i.e. `10 > 9`)

###### Statements

Unlike expressions, statements in JavaScript don't necessarily resolve to useful values. Instead, they control the execution of the program. For example, variable assignments are expressions, but variable declarations are statements:  

```javascript
let a; 								// a statement to declare variables
let b;
let c;
let b = (a = 1);			// this works, because assignments are expressions too
let c = (let a = 1);	// this gives an error, since a statement can't be used
											// as part of an expression
```

There are other types of statements, such as `if ... else ...` and `switch` for branching logic (conditionals), `while` and `for` for looping, etc. We'll learn more about those in the next topics.  Just remember that statements help to "do something", instead of giving you a value to use.  

Statements always evaluate as `undefined`. They differ from expressions in that you cannot use a statement as part of another expression. For instance, this code isn't valid:

```javascript
> 5 * let foo
SyntaxError: Unexpected identifier

> console.log(let bar)
SyntaxError: missing ) after argument list
```

Some statements include expressions as part of their syntax. For example, the `let` statement can include an initializer to set the initial value of the variable:

```javascript
> let foo = 42
= undefined
```

In the `let` statement, the code to the right of the `=` statement is an expression. That expression happents to be part of the `let` statement, but it is still an expression in its own right.  

###### Comparisons

Let's look at the comparison operators in some more depth so you can build more complicated conditional statements. One thing to remember is that comparison operators return a boolean value: `true` or `false`. We'll play with them in `node` to see how they work.  

The expressions or values an operatur uses are its **operands**. In comparisons, the expressions to the left and right of the operator are the operands.  

`===` : the **strict equality operator**, also known as the **identity operator**, returns `true` when the operands have the same type _and_ value, `false` otherwise.  

`!==` : the **strict inequality operator** returns `false` when the operands have the same type and value, `true` otherwise.  

`==` : the **non-strict equality operator**, also known as the **loose equality operator**, is similar to `===`. However, when the operands have different types, `==` coerces one of the operands to the other operand's type before it compares them.  The result is `true` when the final values are the same, `false` otherwise.  

`!=` : the **non-strict inequality operator**, also known as the **loose inequality operator**, is similar to `!==`. However, when the operands have different types, `!=` coerces one of the operands to the other operand's type before it compares them. The result is `false` when the final values are the same, `true` otherwise.  

###### Return Value of a Comparison

The `&&` and `||` logical operators, as you'll recall, use short-circuit evaluation. These operators work with truthy and falsy values too, and they can also return truthy values instead of boolean values. When using `&&` and `||`, the return value is always the value of the operand evaluated last:  

```javascript
> 3 && 'foo' // last evaluated operand is 'foo'
= 'foo'

> 'foo' && 3 // last evaluated operand is 3
= 3

> 0 && 'foo' // last evaluated operand is 0
= 0

> 'foo' && 0 // last evaluated operand is 0
= 0
```

```javascript
3 || 'foo' // last evaluated operand is 3
= 3
> 'foo' || 3 // last evaluated operand is 'foo'
= 'foo'

> 0 || 'foo' // last evaluated operand is 'foo'
= 'foo'

> 'foo' || 0 // last evaluated operand is 'foo'
= 'foo'

> '' || 0   // last evaluated operand is 0
= 0
```

###### Operator Precedence

JavaScript has a set of **precedence** rules it uses to evaluate expressions that use multiple operators and sub-expressions. The following is a list of the comparison operations from the highest precedence (top) to lowest (bottom).  

- `<=`, `<`, `>`, `>=` - Comparison
- `===`, `!==`, `==`, `!=` - Equality
- `&&` - Logical AND
- `||` - Logical OR

###### Logical Short Circuit Evaluation in Expressions

When an expression contains the logical And (`&&`) or logical Or (`||`) operators, JavaScript evaluates them using "short-circuit" rules:  

* For an expression like `a || b`, if `a` is `true`, the result is always `true`. Since it does not need to evaluate `b` to make this determination, JavaScript short circuits the evaluation an returns `true` without evaluating `b`.  
* As with `a && b`, JavaScript short circuits the evaluation if `a` is `false`, and returns `false` without evaluating `b`.  

```javascript
let a = true;
let b = false;

a || (b = true);	// b is still false after this, because (b = true) is never evaluated
b && (a = 1);			// a is still true after this, because (a = 1) is never evaluated
```







---

### Variable Scope (especially how variables interact with function definitions and blocks)

###### Definition

A variable's **scope** determines where it is available in a program. The location where you declare a variable determines its scope.

###### `let` and `const`

In JavaScript, variables declared with the `let` or `const` keywords have **block** scope. A block is a related set of JavaScript statements and expressions between a pair of opening and closing curly braces. 

###### blocks

A block is a related set of JavaScript statements and expressions between a pair of opening and closing curly braces.  

Not everything between curly braces is technically a block. For instance, the braces that surround an object literal do not define a block. Technically, the braces that surround a function body don't define a block either, though it is convenient to think of function bodies as blocks. While there are similiarties between blocks, function bodies, and, to a lesser degree, object literals, the term _block_ usually refers to executable code between braces, including function bodies:

```javascript
{
  // this is a block
  let foo = 42;
  console.log(foo);
}

if (answer === 'yes') {
  // this is a block
  console.log('yes');
} else {
  // so is this
  console.log('nope');
}

while (answer !== 'no') {
  // this is a block
  doSomething();
}

function foo {
  // not technically a block. However, we can treat is as a block.
  let foo = 42;               // foo has block scope
  console.log(foo);
}

let foo = {
  // this is not a block
  bar: 42,
};
```

In general, blocks appear in `if...else`, `while`, `do...while`, `for`, `switch`, and `try...catch` statements, or by themselves (as in the first example above).  

As mentioned above, function bodies are not technically blocks. However, they look and behave so much like blocks that many developers do not distinguish between the two. In this book and the curriculum, we'll usually treat function bodies as blocks. When we want to differentiate them or exclude function bodies from the discussion, we'll refer to **non-function blocks**.

Example of what makes `let` a block-scoped variable:

```javascript
if (1 === 1) {
  let a = 'foo';
}

console.log(a); // ReferenceError: a is not defined
```

The error tells you that `a` isn't available on line 5. In other words, it isn't in scope outside of the `if` block.  

If, on the other hand, you declare the variable outside the `if` block, the variable is available within the block as well as after the block ends.  

```javascript
let a = 'foo';
if (1 === 1) {
  a = 'bar';
}

console.log(a);		// => 'bar'
```

As we can see, this code prints the string `"bar"` since `a` is accessible inside the block. Thus, we can reassign it to a different value inside the block. In other words, this `a` has a broader scope than the `a` variable in the previous example.  

Constants declared with `const` have the same scope as variables declared with `let`.  

###### undeclared variables

Be sure to always declare your variables and constants with `let` and `const`. JavaScript is a forgiving language, and one of the ways it demonstrates that occurs when you fail to declare a variable or constant. You can create them willy-nilly merely by assigning a variable to a value:

```javascript
p = 'foo';
```

That looks harmless, but JavaScript has some bizarre rules when working with undeclared variables. The most notable rule is that all undeclared variables have global scope: they ignore block and function scope entirely. If your program uses that same variable name in a different scope without declaring it, there's a good chance that it will step on the original variable by changing its content. You don't want that to happen: it's typically difficult to debug, and sometimes fixing it breaks other code.

###### `var`

There's a third type of variable declaration that uses the `var` keyword and doesn't use block-scoping.

###### global vs. local variables

In JavaScript, there are two types of variables based on where they're accessible: **global** variables and **local** variables. Global variables are available throughout a program, while local variables are confined to a function. They keyword you use to declare a variable and the location where you declare it combine to determine whether the variable is global or local. Ignoring `var` for now, we'll focus on `let` and `const` instead. Where you delcare a `let` or `const` variable determines whether the variable is global or local.  

###### Global Variables

As the name suggests, global variables have a global scope, which means that they are available everywhere within a program. You can read and reassign them at any time. Any variable declared inside a function or block is a local variable -- everything else is a global variable.  

Global variables can be useful in some scenarios, e.g., application-wide configuration. However, most developers discourage their use since they often lead to bugs. In general, you should limit the scope of your variables as much as possible; smaller variable scopes limit the risk that an outer scope might misuse the variable.  

###### Local Variables

As the name suggests, local variables in JavaScript have a local scope, meaning that you can't access them outside the function that declares them. As with global variables, where you declare a local variable determines its scope.  

Local variables are short-lived; they go away when the function that corresponds to their scope stops running. When we invoke the function, we start a new scope. If the code within that scope declares a new variable, that variable belongs to the scope. When the last bit of code in that scope finishes running, the scope goes away, as do any local variables declared within it. JavaScript repeats this process each time we invoke a function.  

###### Adding Variables to the Current Scope

These are a number of ways to create a variable in the current scope:

* Use the `let` or `const` keywords.
* Use the `var` keyword, which we'lll introduce later in this lesson.
* Define parameters for a function -- each parameter is a local variable.
* A function declaration creates a variable with the same name as the function. We'll talk about that in the next assignment.
* A class declaration also creates a variable with the same name as the class. We'll talk about class declarations in a later course.  

```javascript
function lunch() {		// A function declaration creates a new variable scope
	let food = 'taco';	// 1. Add a new variable food within the current variable scope
}

function eat(food) {	// 2. Parameters create variables during function invocation
	console.log('I am eating ' + food);
}

function drink() {		// 3. Add a new variable drink within the global variable scope
	console.log('I am drinking a glass of water');
}
```

Of note in the above code is the scope of `food` variable from the parameter of the `eat` function. Given lexical scoping rules, its scope is the `eat` function because of the way the source code is written not because the function gets invoked. At runtime, this scope implies that `food` can only be accessed from within the body of the `eat` function.  

###### Variable Assignment

Variable scoping rules apply to both assignment and reference equally. This code:  

```javascript
country = 'Liechtenstein';
```

checks the current scope and then each higher scope, looking for a variable with the name `country`. JavaScript sets the first `country` variable it finds to `"Liechtenstein"`.  

```javascript
let country = 'Spain';
function update() {
  country = 'Liechtenstein';
}

console.log(country);		// logs: Spain

update();
console.log(country);		// logs: Liechtenstein
```

If JavaScript can't find a matching variable, **it creates a new global variable instead**. This is rarely what you want; it can be the source of subtle bugs.  

```javascript
// no other code above
function assign() {
  let country1 = 'Liechtenstein';
  country2 = 'Spain';
}

assign();
console.log(country2);  // logs: Spain
console.log(country1);	// gets ReferenceError
// no other code below
```

In the above code, `country2` isn't declared anywhere else in the code and it is assigned a value inside the function. Since JavaScript couldn't find a matching variable, it created a new "global" variable and as such it makes it possible to log its value on line 8.  

Moreover, similar to the earlier code in the adding variables to the current scope section, `country2` is in the global scope because of the way the source code is written and not because the `assign` function was executed.  

###### Variable Shadowing

With the following code:

```javascript
let name = 'Julian';

function greet() {
  let name = 'Logan';
  console.log(name);
}
```

the variable declaration for `name` in the `greet` function shadows the outer `name` variable. Within `greet`, you can only access the inner `name`.  

```javascript
greet();  // logs: Logan
```

![Scoping diagram 3](https://dbdwvr6p7sskw.cloudfront.net/210/images/scoping_diagram3-20200720.png)

If a function definition has a parameter with the same name as a variable from an outer scope, the parameter shadows the outer variable: 

```javascript
let name = 'Julian';

function greet(name) {
  console.log(name);
}
```

When this code runs, the value of `name` inside `greet` is not dependent on the value in the outer scope. Instead, `name` receives the valued passed to `greet` in the invocation.  

```javascript
greet('Sam');		// logs: Sam
```

JavaScript throws a `ReferenceError` exception if it can't find a variable anywhere in the scope hierarchy.  

```javascript
state;		// raises error: ReferenceError: state is not defined
```

Remember these important variable scoping rules:

* Every function declaration creates a new local variable scope.
* Every block creates a new local variable scope.
* Lexical scope uses the structure of the source code to determine the variable's scope. This means that the code doesn't have to be executed for the scope to exist.
* All variables in the same or surrounding scopes are visible inside functions and blocks.  

###### Closures

The concepts of closure and scope are intimately related. Closures use the scope in effect at a function's definition point to determine what variables that function can access. What variables are in scope during a function's execution depend on the closure formed by the function's definition. It's somewhat circular reasoning, but it's impossible to separate the two.  

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) defines **closure** as "the combination of a function and the lexical environment within which that function was [defined]." You can think of closure as a function combined with all of the variables in its lexical scope, including function and class names.

Closures are created when you defined a function or method. The closure essentially _closes over_ its environment -- what's in scope. In effect, the function definition and its scope become a single entity called a closure. When the function is invoked, it has access to everything in its environment. That is, it can use any variable that was in the lexical scope where the function was defined. **Even if those variables aren't in  the lexical scope where you invoke the function, it can still access them.**  

Wait a minute. How can you use variables that aren't in scope? Doesn't scope govern what variables you can use? Yes, that's true, but it's a little imprecise. When we say that a variable is no longer in scope, we mean that it isn't in scope at the point in your program where you invoke the function. However, closure and scope are lexical concepts. Where you invoke a function is unimportant; where you define the function is. A closure includes all the variables that are in scope where you defined the function. Those variables may not be in scope when you invoke the function, but they're still available to the function.  

##### A Helpful Mental Model

Let's try to describe a more helpful mental model. When you define a function, JavaScript finds all of the variable names within the lexical scope that contains the function definition. It then takes those names and places them inside a special "envelope" object that it attaches to the function object. Each name in the envelope is a pointer to the original variable, not the value it contains.  

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

##### Examples of Closure

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

If someone asks you to provide an example of closure, this may be a somewhat risky example. Most JavaScript developers see this as a pure scoping issue. However, it really is closure at work, just in an unfamiliar context for most developers. If you use an example like this, you may be challenged on it, and will have to show that it really is a closure. If your explanation isn't accepted, you may be in a spot of trouble.

Even at Launch School, we may not accept an example that can be explained entirely with scope. Be safe and use a more complete example, such as the first example in this section. There's no way to explain the behavior in that code by relying entirely on scope. You have to bring closure into it.  

A closure is not a snapshot of the program state. As we saw a little earlier, each time you invoke a function, it sees the most recent values of the variables in its envelope. Thus, if a variable's value changes, the closure ensures that the function sees the new value, not the old one. Thus, `incrementCounter` increments the `counter` variable from `1` to `2` during its second invocation.  

In most programs, you would probably return the `incrementCounter` function from another function:  

```javascript
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

Note that `counter` is now a private variable in the sense that we can not access it directly. The only way to determine its value is to call the function that `makeCounter` returns, but that also increments the variable. This form of data protection is a big reason why returning a function from another function is so powerful.  

It's important to remember that closure definitions are purely lexical. Closures are based on your program's structure, not by what happens when you execute it. Even if you never call a particular function, that function forms a closure with its surrounding scope.  

##### Partial Function Application

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

console.log(addFive(3)); // 8
console.log(addFive(55)); // 60
console.log(addTen(3)); // 13
console.log(addTen(55)); // 65
```

In this program, the `makeAdder` function creates and returns a new function that, in turn, calls and returns the return value of calling `add` with two arguments. What's interesting here is that we define the first number when we call `makeAdder`. We don't supply the second number until later when we call the function that `makeAdder` returns.  

A function such as `makeAdder` is said to use **partial function application**. It applies some of the function's arguments (the `add` function's `first` argument here) when called, and supplies the remaining arguments when you call the returned function.  Partial function application refers to the creation of a function that can call a second function with fewer arguments than the second function expects. The created function supplies the remaining arguments.  

The partial function technique is most useful when you need to pass a function to another function that won't call the passed function with enough arguments. It lets you create a function that fills in the gaps by supplying the missing elements. For instance, suppose you have a function that downloads an arbitrary file from the Internet. The download may fail, so the function also expects a callback function that it can call when an error occurs:  

```javascript
function download(locationOfFile, errorHandler) {
  // try to download teh file
  if (gotError) {
    errorHandler(reasonCode);
  }
}

function errorDetected(url, reason) {
  // handle the error
}

download("https://example.com/foo.txt", /* ??? */);
```

Our error handling function, `errorDetected`, takes two arguments, but `download` only passes one argument to the error handler.  Suppose the `download` function is part of a 3rd party library that you can't modify. You can turn to partial function application to get around the single-argument limitation:

```javascript
function makeErrorHandlerFor(locationOfFile) {
  return function(reason) {
    errorDetected(locationOfFile, reason);
  };
}

let url = "https://example.com/foo.txt";
download(url, makeErrorHandlerFor(url));
```

The `download` method now calls the partial function returned by `makeErrorHandlerFor`, and `errorDetected` gets both arguments it needs.  

In this simple example, partial function application may be overkill. However, if you need to use `errorDetected` in several different locations, partial function application can save you a lot of time and effort. You don't have to create an error handler function for each situation.  

Rather than creating a `makeErrorHandlerFor` function, you can use `bind` to perform partial function application. In most cases, `bind` is all you need.  

```javascript
let url = "https://example.com/foo.txt";
download(url, errorDetected.bind(null, url));
```

We'll meet up again with partial function application in a later course.  

##### What are Closures Good For?

We've seen several examples in this assignment, including callbacks, partial function application, and creating private data. In addition, here are some other things made possible by closures: we'll meet most (but not all) of these later in the curriculum:

- Currying (a special form of partial function application)
- Emulating private methods
- Creating functions that can only be executed once
- Memoization (avoiding repetitive resource-intensive operations)
- Iterators and generators
- The module pattern (putting code and data into modules)
- Asynchronous operations











---

### Function Scope

In JavaScript, every function or block creates a new variable scope. Let's examine what this means.  

###### The Global Scope

Very small JavaScript programs with no functions or blocks exist entirely within a single sclope called the global scope:  

```javascript
let name = 'Julian';
console.log(name);
```

Here, we declare the `name` variable on the first line. After this line runs, `name` is available from that point to the end of the program. Running this code writes `Julian` to the console log.  

###### Function Scope

Let's add a function to the picture:

```javascript
let name = 'Julian';

function greet() {
  let myName = name;
  console.log(myName);
}

greet();		// => Julian
```

With this code, we now have two scopes:  (1) the global scope and (2) the scope from the declaration of the `greet` function. In this code, `name` and `greet` are in the global scope, while `myName` is in the **local scope** of `greet`. Within the function, we can access the `name` variable since the code within a function can access all variables in all surrounding scopes. However, `myName` is only available inside of `greet` -- variables declared inside a scope have function scope, and they cannot be accessed outside the body of the function.  

You can think of variable scopes visually; function scopes nest inside each other. The code within an inner scope can access any variables in the same scope or **any surrounding scope**.  

![Scoping diagram 1](http://dbdwvr6p7sskw.cloudfront.net/210/images/scoping_diagram1-20200720.png)

This works no matter how deeply nested a function is. For instance, in the following code, `say` can access the `name` variable even though `say` is nested inside `greet`, and `greet` is nested in the outermost scope.  

```javascript
let name = 'Julian';

function greet() {
  function say() {
    console.log(name);
  }
  
  say();
}
```

 It behaves identically to the version without a `say` function:

```javascript
greet();			// logs: Julian
```

![Scoping diagram 2](https://dbdwvr6p7sskw.cloudfront.net/210/images/scoping_diagram2-20200720.png)

###### Block Scope

Let's add a block to the picture by using a `while` loop:

```javascript
let name = 'Julian';							// 'name' is in global scope

function greet() {								// `greet` is also in global scope
  let counter = 0;								// `counter` is in function scope
  while (counter < 3) {
    let myName = name;						// `myName` is in block scope
    console.log(myName);
    counter += 1;
  }
  
  // console.log(myName);					// would raise an error (myName not in scope)
  console.log(counter);						// => 3
}

greet();													// => Julian (3 times)
// console.log(myName);						// would raise an error (not in scope)
// console.log(counter);					// would raise an error (not in scope)
```

Here, we declare a `counter` variable on the first line of the `greet` function. After this line runs, `counter` is available from that point to the end of the function. Running this code writes three instances of the string `Julian` to the console log followed by the number `3`. `counter` has function scope, so it's available from its declaration down to the end of the function. However, it is not available outside of the function.  

We also have a **block scope**, introduced by the block used by the `while` loop. As with function scopes, the code inside a block scope can access any variables declared in the surrounding (outer) scope(s).  

We now have three scopes: (1) the global scope (which includes `name` and `greet`); (2) the function scope (which includes `counter`), and (3) the block scope of the loop, which includes `myName`. Both function and block scopes are also called local scopes.  

###### Lexical Scoping

JavaScript uses _Lexical Scoping_ to determine where it looks for variables; it uses the structure of the source code to determine the variable's scope. That is, **the source code defines the scope**. This means that when you write a function in your code, it creates a scope even if the function never gets executed and has no variables of its own. At any point in a JavaScript program, there is a hierarchy of scopes from the local scope of the code up to the program's global scope.  

When JavaScript tries to find a variable, it searches this hierarchy from the bottom to the top. It stops and returns the first variable it finds with a matching name. This means that variables in a lower scope can _shadow_, or hide, a variable with the same name in a higher scope.  

Most mainstream programming languages use lexical scoping rules (also called "static scoping"). Some languages use "dynamic scoping" instead, or make dynamic scoping a choice. We won't get into dynamic scoping here.  



---

### Hoisting

JavaScript engines operate in two main phases: a **creation phase** and an **execution phase**. The execution phase is when the program runs code line-by-line. That's what most people mean when they talk about a program's execution. However, before the execution phase begins, the creation phase does some preliminary work. One of those work items is to find all of the variable, function, and class _declarations_. It effectively moves these declarations to the top of their respective function or block: function-scoped declarations get moved to the top of the function, and block-scoped declarations get moved to the top of the block. This process is called **hoisting**.  

The effect of this process is that all the declarations get hoisted -- raised, lifted, moved -- to the top of their defined scope. That's why the following code works:

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

At the top level of a program -- outside of any funciton -- function scope refers to the entire file. Some people use the term **global scope** to refer to function scope at the top level, but that's a bit of a misnomer, especially in Node.js. A better term is module scope. We'll use the term function scope unless we need to be more specific.  

Since hoisting occurs in the same way in both global and function scopes, we can sometimes use global code to illustrate how hoisting works. Thus, we can rewrite the before-hoisting example as:  

```javascript
function go() {
  console.log(getName());
  
  function getName() {
    return "Pete";
  }
}

go();
```

Here, `getName` gets hoisted to the top of the `go` function, so we have no problem calling `getName` at the beginning of the function code. Note, though, that `getName` is not available outside of `go`. We'll get an error in this code:  

```javascript
function go() {
  function getName() {
    return "Pete";
  }
}

go();
console.log(getName());
```

It's important to realize that JavaScript doesn't change the program; it merely executes the program in a manner that acts as though it was changed.  

###### The Temporal Dead Zone

Variables declared with the `let`, `const`, and `var` statements are also hoisted. There is one major difference between `var` and the other two:  

* When a `var` variable is hoisted, JavaScript gives it an initial value of `undefined`.
* When `let` and `const` variables are hoisted, they are not given an initial value at all. Instead, they are left in an "unset" state; that is, they are "not defined". Don't say "undefined", though -- that's confusing.

If you try to access the value assigned to a `var` variable before the original `var` declaration gets executed, JavaScript will return a value of `undefined`.   

```javascript
console.log(bar);		// undefined
var bar = 3;
console.log(bar);   // 3
```

If you try to access a `let` or `const` variable, you'll get an error:

```javascript
console.log(foo);  // Uncaught ReferenceError: Cannot access 'foo' before initialization
let foo;
```

Such unset variables are said to be in the **Temporal Dead Zone**, or the **TDZ**.  

It's interesting to note that the error message differs if you don't declare `foo` at all:

```javascript
console.log(foo); // Uncaught ReferenceError: foo is not defined
```

This demonstrates that JavaScript is aware of the `foo` variable in the first snippet and recognizes that it hasn't been set to a value yet. In the second snippet, it can tell that `foo` hasn't been declared at all, so the error message is different.  

###### Hoisting for Function Declarations

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

console.log(hello());			// logs "hello world"
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

Though JavaScript functions have function scope, function hoisting has undefined behaviour when the function is nested inside a non-function block. You can declare functions inside functions and methods, but you may run into problems if you try to define them inside other blocks, such as `if` and `while` statements.  

Consider the following code:  

```javascript
function foo() {
  if (true) {
    function bar() {
      console.log("bar");
    }
  } else {
    function qux() {
      console.log("qux");
    }
  }
  
  console.log(bar);
  bar();
  
  console.log(qux);
  qux();
}

foo();
```

What do you think happens here? Take a moment to think about it.  

Most JavaScript impelementations produce the following output when they execute that code:  

```
[Function: bar]
bar
undefined
TypeError: qux is not a function
```

You can tell from the output that both `bar` and `qux` were hoisted to the top of the function, but the definition of `qux` was not. Thus, we can log the value of `qux` on line 15. However, the value is `undefined`, so we can't call the function. In effect, we have a Temporal Dead Zone with a function declaration.  

That behaviour makes a certain amount of sense. However, it isn't standardized. Some JavaScript implementations may output this instead:

```
[Function: bar]
bar
[Function: qux]
qux
```

Still other implementations may output:

```
undefined
TypeError: bar is not a function
```

You may even get a syntax error with some implementations.  

Since you can get different behaviours with the same code, you shouldn't try to nest function declarations inside non-function blocks.  

###### Hoisting for Function Expressions

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

console.log(hello());			// raises "Uncaught TypeError: hello is not a function"

hello = function () {
  return 'hello world';
};
```

###### Hoisting Variable and Function Declarations

When both a variable and a function declaration exist, you can assume that the function declaration is hoisted first; that is, the function declarations are hoisted above the variable declarations. Given the following code block:  

```javascript
bar();						// logs undefined
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

Given the hoisted code, the key thing to watch out for is the value that is logged. For this particular scenario, since `bar` uses a variable that is in the global scope, the timing of the assignment becomes relevant. It is easy to make a mistake and think that since `bar` was declared below the assignment of `'hello'` to `foo` (see code before hoisting) that when `bar` is invoked the value logged will be `'hello'` already. However, because of the hoisting rules for variable and function declaration `foo` is still undefined when `bar` is invoked.  

Furthermore, if the same name is used for a variable and a function:  

```javascript
bar();							// logs "world"
var bar = 'hello';

function bar() {
  console.log('world');
}
```

```javascript
var bar = 'hello';
bar();							// raises "Uncaught TypeError: bar is not a function"

function bar() {
  console.log('world');
}
```

You will notice how a slight change in code results in a significant change in the outcome. Let's look at the hoisted version of the two code snippets: 

##### snippet1 

```javascript
function bar() {
  console.log('world');
}

bar();
bar = 'hello';
```

##### snippet2

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
function foo() {};	// Uncaught SyntaxError: Identifier 'foo' has already been declared
```

```javascript
function foo() {};
let foo = 3; 	// Uncaught SyntaxError: Identifier 'foo' has already been declared
```

###### Best Practice to Avoid Confusion

Hoisting can introduce confusion and subtle bugs if you don't pay careful attention. However, if you follow these two simple rules, you'll avoid many headaches:  

* Whenever possible, use `let` and `const` instead of `var`: avoid the confusion and subtle behaviours that can occur with `var`. 
* If you must use `var`, declare all of the variables at the top of the scope:  

```javascript
function foo() {
  var a = 1;
  var b = 'hello';
  var c;
  
  ...
}
```

- If you can use `let` and `const`, declare them as close to their first usage as possible:

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

- Declare functions before calling them:

```javascript
function foo() {
  return 'hello';
}

foo();
```

###### Hoisting Isn't Real

WHAT!!!? After all that, we're going to tell you that hoisting isn't real? Yup.

Hoisting is really just a mental model that almost all JavaScript developers used to explain how scope works in the language. There is no actual process that happens in JavaScript that is called hoisting. Until fairly recently, it wasn't even mentioned in the ECMAScript standards, and even now, it's barely mentioned in passing. What's more, the mental model of hoisting is not perfect -- there are edge cases that aren't properly explaining entirely by hoisting.

The behavior that we try to explain with hoisting is merely a consequence of how JavaScript runs programs in two phases. The creation phase prepares your code for execution. Each time it encounters a variable, function, or class declaration, it adds that identifier to the current scope. If the identifier is at the global level, it gets added to the global scope. If it's in a function, class, or block, it gets added to the scope for that function, class, or block. Thus, at the end of the creation phase, JavaScript knows all of the identifiers in your program and what scopes each one belongs to.

When the execution phase occurs, JavaScript no longer cares about declarations. It does care about initialization and function/class definitions, but not the declarations themselves. The identifiers are already known, and their scope is already known. JavaScript merely needs to look up identifiers as needed.

Consider this code:

```javascript
boo();

function boo() {
  console.log("Boo!");
}
```

During the creation phase, JavaScript only encounters one declaration: the `boo` function on line 3. It puts the name `boo` in the global scope. During the execution phase, the first thing that happens is that JavaScript encounters `boo()` on line 1. Since line 1 is in the global scope, JavaScript looks to the global scope for an identifier named `boo`. That name exists since it was found during the creation phase. Therefore, JavaScript only needs to call the `boo` function.

The interesting thing there is that nothing got hoisted! The only thing that happened is that the creation phase noticed that `boo` belonged to the global scope, so it recorded an appropriate entry. Nothing got moved around in your code.

Now, let's see what happens when there's a conflict between a function declaration and a variable declaration using `let`. Recall that you can't have two declarations with the same name if one of those names is declared by `let`. Given this information, what do you think happens if you run this code?

```javascript
let foo = "hello";

function foo() {
  console.log("hello");
}
```

If you said that the `foo` function on lines 3-5 was hoisted above the variable declaration on line 1, you might expect that the code on line 1 would raise a `SyntaxError` error complaining that the identifier `foo` already exists. That's a natural response since you've learned that function declarations get hoisted above variable declarations.

That's not what happens, though. Syntax errors usually occur during the creation phase -- before "hoisting" has an effect on the code. Since processing occurs from the top down during the creation phase, the first identifier found is the `foo` variable on line 1. When the creation phase reaches the function declaration on lines 3-5, JavaScript already knows about the `foo` identifier, so it complains that `foo` has already been declared. The error occurs on line 3, not line 1.

Let's reverse those declarations:

```javascript
function foo() {
  console.log("hello");
}

let foo = "hello";
```

This time, the `foo` function is seen first during the creation phase, so the error doesn't occur until JavaScript reaches line 5.

Because of subtle discrepancies like this, some people find it easier to think about the creation phase rather than hoisting. In some ways, hoisting is easier to understand, but the hoisting model has some issues as seen above. Nevertheless, the concept of hoisting is still a valuable and useful mental model. Don't be afraid to use it to explain how a program works. Just be clear that nothing in JavaScript is rearranging your code.

---

### Primitive Values, Types and Type Conversions/Coercions

###### Primitive Values

Many of the data types we've seen so far are _primitive types_: that is, JavaScript represents them directly at the lowest level of the language implementation.  

All JavaScript primitives are immutable. You cannot change them once you create them. Primitive values, especially strings, may appear to change during the lifetime of a JavaScript program. However, this is merely an illusion. JavaScript doesn't actually change the values. Instead, it assigns wholly new values to variables that used to contain different values. This means that you should remember to assign an expression to change the value in a variable; no function, method, or other operation will modify it for you. If you don't assign the new value to the desired variable, JavaScript won't do it for you.  

```javascript
a = 'hello';
a.toUpperCase();	// the "hello" string is not mutated, but a new "HELLO" string is returned
a;								// still "hello"
```

All other JavaScript language constructs, including arrays and functions, are JavaScript Objects. Objects are mutable, which means you can modify them without losing their identity. We'll talk more about this in the next lesson.  

###### Data Types

JavaScript has the following so-called **primitive data types:**

* String
* Number
* Undefined
* Null
* Boolean
* Symbols (ES6) -- not discussed in this course
* Big Integers (ES9) -- not discussed in this course

Every type that is not a primitive type is an **object type**.  

JavaScript has one compounded data type:

* Object

###### Undefined

In programming, we need a way to express the absence of a value. In JavaScript, we do this with the value `undefined`. When a variable is not defined, its value is given by `undefined`. We can describe `undefined` as representing the absence of a value. We can also explicitly use the literal `undefined`.  

###### Null

`null` is similar to `undefined`: it represents the intentional absence of a value. Often, `null` represents emptiness or nothing. The chief difference between `null` and `undefined` is that you must use `null` explicitly if you want to use it; `undefined` can arise implicitly. Think of it as a value that represents emptiness or nothing.  

If you check the data type of `null` using `typeof` it will return `'object'`. This is a mistake. `null` should instead be thought of as a primitive value.

###### Implicit Type Coercion

Example:

```javascript
> '1' + 2
= '12'
```

JavaScript concatenates the two values as though they were both strings. First, it converts--**coerces**-- the number `2` to a string; it then concatenates the result to the string `'1'`. We call this behaviour **implicit type coercion**. When using `+`, if either operand is a string and the other is not, JavaScript coerces the non-string operand to a string; thus, the result is always another string.

###### Explicit Type Coercion

The difference between explicit and implicit coercion is that explicit coercion lets you decide what you want to do, whereas implicit coercion lets the engine choose.  

Examples:

The `Number` function coerces a string to a number:

```javascript
> Number('1')
= 1
```

The `String` function can coerce numbers into strings.

```javascript
> String(20)
= '20'
```

###### Explicit Primitive Type Coercions

We sometimes want to convert primitive JavaScript values into values of different types. For example, we may want to convert the string `345` into the number `345`. We call such operations **coercions** or **conversions**. However, you may recall that JavaScript primitives are immutable values: JavaScript doesn't actually convert values. Instead, it returns a new value of the proper type.  

##### Converting Strings to Numbers

We can use the `Number` function to turn strings that contain a numeric value into a number:

```javascript
Number('1');					// 1
```

If the string cannot be converted to a number, `Number` returns `NaN`:  

```javascript
Number('abc123');				// NaN
```

The `parseInt` and `parseFloat` global functions turn strings to numbers, with each only handling numeric values in an integer or floating-point format:  

```javascript
parseInt('123', 10);				// 123
parseInt('123.12', 10);			// 123, will only return whole numbers
parseInt('123.12');					// 123
parseFloat('123.12');				// 123.12, can handle floating point values
```

Note that `parseInt` takes an optional `radix` argument. This represents the base in mathematical numeral systems. It is recommended to always specify this parameter to avoid reader confusion and to have more predictable behaviour.  

##### Converting Numbers to Strings

You can use the `String` function to turn numbers into strings:

```javascript
String(123);				// "123"
String(1.23);				// "1.23"
```

You can also call the `toString` method on numbers:  

```javascript
(123).toString();				// "123"
(123.12).toString();		// "123.12"
```

Finally, you can convert a number to a string with the `+` operator to "add" it to a string:

```javascript
123 + '';						// "123"
'' + 123.12;				// "123.12"
```

However, this code does not make its intent clear so you should avoid using code like this.  

##### Booleans to Strings

To turn boolean values (`true` and `false`) into strings, you can use the `String` function:  

```javascript
String(true);				// "true"
String(false);			// "false"
```

Alternatively, you can call the `toString` method on the boolean values:  

```javascript
true.toString();				// "true"
false.toString(); 			// "false"
```

##### Primitives to Booleans?

There is no direct coercion of strings to booleans. Therefore, if you have a string representation of a boolean, you can just compare it with `'true'` to determine whether that string is `'true'` or `'false'`:  

```javascript
let a = 'true';
let b = 'false';
a === 'true';					// true
b === 'true';					// false
```

##### `Boolean`

You can also use the `Boolean` function to convert any value into a boolean value based on the truthy and falsy rules in JavaScript:  

```javascript
Boolean(null);           // false
Boolean(NaN);            // false
Boolean(0);              // false
Boolean('');             // false
Boolean(false);          // false
Boolean(undefined);      // false
Boolean('abc');          // other values will be true
Boolean(123);            // true
Boolean('true');         // including the string 'true'
Boolean('false');        // but also including the string 'false'!
```

The double `!` operator provides a simpler way to coerce a truthy or falsy value to its boolean equivalent. The `!` operator returns the opposite of the value's boolean equivalent, so a double `!` returns the value's boolean equivalent:  

```javascript
!!(null);                // false
!!(NaN);                 // false
!!(0);                   // false
!!('');                  // false
!!(false);               // false
!!(undefined);           // false

!!('abc');               // true
!!(123);                 // true
!!('true');              // true
!!('false');             // this is also true! All non-empty strings are truthy in JavaScript
```

###### Implicit Primitive Type Coercions

Let's look at some examples to see what we mean by implicit type coercion:

```javascript
1 + true				// true is coerced to the number 1, so the result is 2
'4' + 3					// 3 is coerced to the string '3', so the result is '43'
false == 0			// false is coerced to the number 0, so the result is true
```

In other programming languages, the above expressions will produce errors or exceptions, but JavaScript tries to make sense of the expression. If necessary, it converts values to types that it can operate on. This may seem convenient, but in reality, the flexibility makes bugs likelier. They can go undetected for a long time, and often only become evident in a totally different part of the program. This can make JavaScript debugging challenging.  

##### The Plus (+) Operator

The unary plus operator converts a value into a number, following the same rules as the `Number` function:  

```javascript
+('123')        // 123
+(true)         // 1
+(false)        // 0
+('')           // 0
+(' ')          // 0
+('\n')         // 0
+(null)         // 0
+(undefined)    // NaN
+('a')          // NaN
+('1a')         // NaN
```

The binary plus operator (with two operands) means either addition for numbers or concatenation for strings. When `+` is used with mixed operands that include a string, JavaScript converts the other operand to a string as well:  

```javascript
'123' + 123			// "123123" -- if a string is present, coerce for string concatenation
123 + '123'			// "123123"
null + 'a'			// "nulla" -- null is coerced to string
'' + true				// "true"
```

When both operands are a combination of numbers, booleans, `null`s, or `undefined`s, they are converted to numbers and added together:  

```javascript
1 + true				// 2
1 + false				// 1
true + false`		// 1
null + false		// 0
null + null 		// 0
1 + undefined		// NaN
```

In the last example above, `undefined` gets coerced to `NaN`. While `NaN` means "not a number", JavaScript still considers it to be a number. The result of `1 + NaN` is thus, `NaN`.  

##### Other Arithmetic Operators

The other arithmetic operators, `-`, `*`, `/`, `%`, are only defined for numbers, so JavaScript convets both operands to numbers:  

```javascript
1 - true                // 0
'123' * 3               // 369 -- the string is coerced to a number
'8' - '1'               // 7
-'42'                   // -42
null - 42               // -42
false / true            // 0
true / false            // Infinity
'5' % 2                 // 1
```



###### Data Structures

The two most common data structurs, complex data types, that JavaScript programmers use are arrays and objects.  

##### Arrays

The most important facts to remember about arrays are:

* The order of the elements is significant.
* Use index numbers to retrieve array elements.
* Index numers are non-negative integers starting from `0`.

##### Objects

A dictionary-like data structure that matches keys with specific values. The most important thing to remember about objects is that you use keys to set or retrieve values.  

###### Number

JavaScript uses Double Precision Floats, so the largest number that can be precisely stored is 9,007,199,254,740,991 (`Number.MAX_SAFE_INTEGER`). However, the maximum numeric value that can be represented is 1.7976931348623157e+308 (`Number.MAX_VALUE`). Any number greater than this is represented as `Infinity`.  

Numbers support the basic arithmetic operations you might expect, including addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).  

JavaScript uses a floating point system to represent all numbers. This is unlike other programming languages that have distinct data types to represent integer, float, double, real, or decimal values.  

Floating point values cannot precisely represent values because of how the computer represents them. This is not specific to JavaScript. It is true for all programming languages that store numbers in this manner. A common issue that arises from the use of floating point numbers is that there seems to be slight discrepancies or rounding errors when looking at results. For example:  

```javascript
0.1 + 0.2; 			// returns 0.30000000000000004, not 0.3!
```

The best practice here is avoid fractional numbers as much as you can. Instead, use an integer number of the smallest relevant units. For example, if you're working with financial numbers, represent the amount in cents. If you're working with time duration, use seconds instead of hours.  

There are a few special number values:

* `Infinity`: when you need a number that is greater than any other number.
* `-Infinity`: when you need a number that is less than any other number.
* `NaN`: means "not a number." You will see `NaN` when a math function encounters an error.  

```javascript
2 / 0;					// Infinity
Math.sqrt(-1);	// NaN
```

###### Boolean

The boolean data type represents the truth-values of logic. There are only two possible boolean values: `true` and `false`. The result of a comparison operation, for example, is a boolean value:

```javascript
2 > 1;					// true
0 === 0;				// true
1 > 3;					// false
```

###### String

A `String` is a sequence of characters and is the data type used to represent text within a JavaScript program. Here are some examples of Strings:  

```javascript
'Hello, world'
"Hello, world"
'asdac ca,!'
'c'
'45'
''
'©2016 Flambé, Inc.'
```

JavaScript Strings have no size limit and can contain any amount of text.  

You can use either single or double quote marks for strings. Unlike most programming languages, there is no function distinction between single and double-quoted Strings.  

A common string operation is concatenation, which joins one string to another. Concatenation uses the `+` operator:  

```javascript
'Hello' + ', World'; 		// "Hello, World"
```







---

### Object Properties and Mutation

Mutation is a concern when dealing with arrays and objects, but not with primitive values like numbers, strings, and booleans. Primitive values are **immutable**. That means their values never change: operations on immutable values always return new values. Operations on **mutable** values (arrays and objects) may or may not return a new value and may or may not mutate data.  

How do you know which methods mutate the caller and which don't? It's useful to know that all primitive values are immutable, so this question never arises when dealing with them. However, there's no way to tell whether a function mutates an array or object. You have to use the documentation or memorize it through repetition.  

JavaScript is both a pass-by-value and pass-by-reference language. It uses pass-by-value when dealing with primitive values and pass-by-reference with objects and arrays.  

###### What are Objects?

Objects store a collection of **key-value pairs**: each item in the collection has a name that we call the **key** and an associated **value**. Contrast this with arrays, which associate values with ordered indexes. Other languages have similar key-value data structures, but they may use different names like dictionaries, associative arrays, maps, and hashes.  Some developers may even use these terms regarding JavaScript objects, but it's better to use the correct name: objects.  

An object's keys are strings, but the values can be any type, including other objects. We can create an object using **object literal** syntax:  

```javascript
let person = {
  name: 		'Jane',
  age: 			37,
  hobbies:  ['photography', 'geneaology'],
}
```

The comma that follows the last pair is optional.  

You can also write that on a single ine, which is handy in `node`:

```
> let person = { name: 'Jane', age: 37, hobbies: ['photography', 'geneaology'] }
```

Though the keys are strings, we typically omit the quotes when the key consists entirely of alphanumeric characters and underscores. The values of each pair can be any type.  

Key-value pairs are also called **properties** in JavaScript. We can also use "property" to refer to the key name; the meaning is typically clear from context. For instance, we can talk about the `name` property for the `person` object without mentioning the value.  

If a variable declared with `const` is initialized with an object, you can't change what object that variable refers to. You can, however, modify that object's properties and property values:  

```javascript
> const MyObj = { foo: "bar", qux: "xyz" }
> MyObj.qux = "hey there"
> MyObj.pi = 3.1415,
> MyObj
= { foo: 'bar', qux: 'hey there', pi: 3.1415 }

> MyObj = {} // Uncaught TypeError: Assignment to constant variable.
```

As with arrays, this behavior can be confusing, and it occurs because of the same "variables are pointers" concept that we'll discuss in the next chapter. Essentially, a `const` declaration prohibits changing what thing the `const` points to, but it does not prohibit changing the content of that thing. Thus, we can change a property in a `const` object, but we can't change which object the `const` points to.  

You can use `Object.freeze` with objects to freeze the property values of an object, just like you can with arrays:  

```javascript
> const MyObj = Object.freeze({ foo: "bar", qux: "xyz" })
> MyObj.qux = "hey there"
> MyObj
= { foo: 'bar', qux: 'xyz' }
```

As with arrays, `Object.freeze` only works one level deep in the object. If your object contains nested arrays or other objects, the values inside them can still be changed unless they are also frozen.  

###### Objects vs. Primitives

You may remember that JavaScript has two categories of data types: primitives and objects. The primitive types are strings, numbers, booleans, `null`, and `undefined`, bigints, and symbols. Primitive types are teh simplest, most basic types in JavaScript.  

Objects include, but aren't limited to, the following types:

* Simple Objects
* Arrays
* Dates
* Functions

Objects are complex values composed of primitive values or other objects. For example, an array object (remember: arrays are objects) has a `length` property that contains a number: a primitive value. Objects are usually (but not always) mutable: you can add, remove, and change their various component values.  

Primitive values are always immutable; they don't have parts that one can change. Such values are said to be **atomic**; they're indivisible. If a variable contains a primitive value, all you can do to that variable is use it in an expression or reassign it: give it an entirely new value. All operations on primitive values evaluate as new values. Even something like `0 + 0` evaluates to a new value of `0`.  

```javascript
> let number = 20
> let newNumber = number + 1
> newNumber
= 21

> number
= 20

> let object = { a: 1, b: 2, c: 3 }
> object.c = object.c + 1

> object
= { a: 1, b: 2, c: 4 }
```

The above example illustrates the difference between an immutable primitive value and a mutable object. The `+` operation on line 2 returns a new value (`21`), and assigns it to `newNumber`; the original value of `number` (`20`), remains unchanged. In contrast, writing a new value to the `object`'s `c` property on line 10 changes the object's value. Note, however, that the `c` property has an entirely new number in it, precisely like what happened on line 2.  

##### What Things Aren't Objects or Primitives?

Objects and primitive values are the data and functions that you use in your program. Anything that isn't data or a function is neither a primitive value nor an object. That includes:

* variables and other identifiers such as function names
* statements such as `if`, `return`, `try`, `while`, and `break`
* keywords such as `new`, `function`, `let`, `const`, and `class`
* comments
* anything else that is neither data nor a function

Note that variables and other identifiers have or reference objects or primitive values, but the names, by themselves, are not.  







---

### Differences between Loose and Strict Equality

JavaScript provides non-strict equality operators, `==` and `!=`, and strict equality operators, `===` and `!==`. The strict operators never perform type coercions. The non-strict operators have a set of rules for coercing types before performing the comparison.  

###### Strict equality operators

With the strict equality operators, the two operands are only equal if they are both the same type and have the same value:  

```javascript
1 === 1							// true
1 === '1'						// false
0 === false					// false
'' === undefined		// false
'' === 0						// false
true === 1					// false
'true' === true			// false
```

###### Non-strict equality operators

The non-strict equality operators work exactly the same as the strict equality operators when both operands are the same type. However, when the operands are different types, JavaScript implicitly coerces them to the same type before comparing them, using the following rules.  

When one operand is a string and the other is a number, the string is converted to a number:  

```javascript
'42' == 42						// true
42 == '42'						// true
42 == 'a'							// false -- becomes: 42 == NaN
0 == ''								// true -- becomes: 0 == 0
0 == '\n'							// true -- becomes: 0 == 0
```

When one operand is a boolean, it is converted to a number:

```javascript
42 == true						// false -- becomes: 42 == 1
0 == false						// true -- becomes: 0 == 0
'0' == false					// true -- becomes: '0' == 0, then: 0 == 0 (two conversions)
'' == false						// true -- becomes: '' == 0, then: 0 == 0
true == '1'						// true
true == 'true'				// false -- becomes: 1 == 'true', then: 1 == NaN
```

When one operand is `null` and the other is `undefined`, the non-strict operator always returns `true`. If both operands are `null` or both are `undefined`, the return value is `true`. Comparing `null` or `undefined` to all other values returns `false`:  

```javascript
null == undefined					// true
undefined == null					// true
null == null 							// true
undefined == undefined		// true
undefined == false				// false
null == false							// false
undefined == ''						// false
undefined == null					// false -- strict comparison
```

When one of the operands is `NaN`, the comparison always returns `false`:  

```javascript
NaN == 0							// false
NaN == NaN						// false
NaN === NaN						// false -- even with the strict operator
NaN != NaN						// true -- NaN is the only JavaScript value not equal to itself
```

The `!=` and `!==` operators follow the same rules as above, except the result of the comparison is inverted (i.e., `true` becomes `false`).  

###### Relational Operators

The relational operators, `<`, `>`, `<=`, and `>=` are defined for numbers (numeric comparison) and strings (lexicographic order). There are no strict versions of these operators. When both operands are strings, JavaScript compares them lexicographically. Otherwise, JavaScript converts both operands to numbers before comparing them.  

```javascript
11 > '9'							// true -- '9' is coerced to 9
'11' > 9							// true -- '11' is coerced to 11
123 > 'a'							// false -- 'a' is coerced to NaN; any comparison with NaN is false
123 <= 'a'						// also false
true > null						// true -- becomes > 0
true > false					// true -- also becomes 1 > 0
null <= false					// true -- becomes 0 <= 0
undefined >= 1				// false -- becomes NaN >= 1
```

###### Best Practices

Understanding JavaScript's implicit type coercions is important when you're debugging code. When you write your programs, though, it's best to:

* **Always** use explicit type coercions (covered in the previous topic)
* **Always use strict equality operators** (`===` and `!==`).

This is true even when you think you "understand the rules." This part of JavaScript is opaque and not well understood. Clearly show your intentions and be explicit. These best practices will save you and future developers much grief.  



---

### Passing an Argument into a Function may or may not permanently change the value that a variable contains or points to



---

### Working with Strings, Arrays, and Objects

#### In particular, be thoroughly familiar with the basic Array iteration methods (`forEach`, `map`, `filter`, and `find`) and how to use Object methods to access the keys and values in an Object as an Array.  

###### Strings

##### Character Access

Strings act like a collection of characters. To access a character in a string, we can use the `String.prototype.charAt` method on the string. The argument is an index value for the character we want to access:  

```javascript
'hello'.charAt(1);	// "e"
```

We can also use **bracket notation** to perform the same operation:  

```javascript
'hello'[1];				// "e"
```

In some programming languages, such as Ruby, bracket notation is a method. In JavaScript, it is actually an operator.  

##### String Length

Strings also have a `length` property to tell you the number of characters that are in the string:  

```javascript
'hello'.length			// 5
```

##### Working with Long Strings

With long literal strings, readability is an issue when writing the string out in preparation for assignment to a variable. You can use concatenation to write the string in chunks, and make your code easier to read:

```javascript
let lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
             'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ' +
             'enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
             'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ' +
             'in reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
             'nulla pariatur. Excepteur sint occaecat cupidatat non proident, ' +
             'sunt in culpa qui officia deserunt mollit anim id est laborum.';
```

Alternatively, you can place a `\` at the end of each line; this tells JavaScript to ignore the following newline, and concatenate the next line to the current string. Be careful, though: if there are any spaces or tabs after the `\`, JavaScript will treat them as literal spaces or tabs, and include them in the string. It will also fail to find the closing quote mark, and issue a syntax error. You also need to be careful of spaces and tabs at the beginning of the line after the `\`; those spaces and tabs are part of the string's content.  

The following example assigns the same string as the previous example to `lipsum`:  

```javascript
let lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut \
enim ad minim veniam, quis nostrud exercitation ullamco laboris \
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor \
in reprehenderit in voluptate velit esse cillum dolore eu fugiat \
nulla pariatur. Excepteur sint occaecat cupidatat non proident, \
sunt in culpa qui officia deserunt mollit anim id est laborum.';
```



###### Arrays

An array is an ordered list of **elements**; each element has a value of any type. You can define an array by placing a list of values between brackets (`[]`):

```javascript
> let myArray = [2, 'Pete', 2.99, 'another string']
```

This example demonstrates that arrays are **heterogenous**; `myArray` has both number and string values. Arrays can have anything in them, including objects and even other arrays.  

Each element in an array has a unique index number that gives the position of the element in the array. Thus, we can say that arrays are **indexed lists** as well as ordered lists.  

##### Some Array Oddities

- **Arrays are objects**: One side effect of this is that the `typeof` operator doesn't return `'array'` when applied to an array, rather `'object'`. If you really need to detect whether a variable references an array, you need to use `Array.isArray` instead.  

- If you change an array's `length` property to a new, larger value, the array expands to the new size. The new elements **do not get initialized**, which leads to some strange behaviour. In general, JavaScript treats the unset array elements as missing, but the `length` property includes the unset elements.

- You can create array "elements" with indexes that use negative or non-integer values, or even non-numeric values:

  ```javascript
  > arr = [1, 2, 3]
  = [ 1, 2, 3 ]
  
  > arr[-3] = 4
  = 4
  
  > arr
  = [ 1, 2, 3, '-3': 4 ]
  
  > arr[3.1415] = 'pi'
  = [ 1, 2, 3, '-3': 4, '3.1415': 'pi' ]
  
  > arr["cat"] = 'Fluffy'
  = 'Fluffy'
  
  > arr
  = [ 1, 2, 3, '-3': 4, '3.1415': 'pi', cat: 'Fluffy' ]
  ```

  These "elements" aren't true elements; they are properites on the array object, which we'll discuss later. Only index values (0, 1, 2, 3, and so on) count toward the length of the array.

- Since arrays are objects, you can use the `Object.keys` method to return an array's keys -- its index values -- as an array of strings. Even negative, non-integer, and non-numeric indexes are included.  

  One quirk of this method is that it treats unset values in arrays differently from those that merely have a value of `undefined`. Unset values are set to `undefined` by JavaScript as an after effect of calling another method, while explicit `undefined` are ones that are purposely set in an array.  

  ```javascript
  > let a = new Array(3);
  > a
  = [ <3 empty items> ]
  
  > a[0] === undefined;
  = true
  
  > let b = [];
  > b.length = 3;
  > b
  = [ <3 empty items> ]
  
  > b[0] === undefined;
  = true
  
  > let c = [undefined, undefined, undefined]
  > c
  = [ undefined, undefined, undefined ]
  
  > c[0] === undefined;
  = true
  ```

  While the `length` property of Array includes `undefined` in the count regardless of how it got set, `Object.keys` only counts those that were set explicitly.

  ```javascript
  > let aKeys = Object.keys(a)
  > a.length
  = 3
  > aKeys.length;
  = 0
  
  > let bKeys = Object.keys(b)
  > b.length
  = 3
  > bKeys.length;
  = 0
  
  > let cKeys = Object.keys(c)
  > c.length
  = 3
  > cKeys.length;
  = 3
  ```

##### Array Equality

```javascript
> [1, 2, 3] === [1, 2, 3]
= false
```

However,

```javascript
> let a = [1, 2, 3]
> let b = a
> a === b
= true
```

JavaScript treats two arrays as equal only when they are the same array: they must occupy the same spot in memory. This rule holds for JavaScript objects in general; objects must be the same object. For this reason, the second example returns `true` while the first one returns `false`. Assigning `a` to `b` makes `b` refer to the  same array as `a`; it doesn't create a new array.  



###### `forEach()`

Example:

```javascript
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names.forEach(function(name) {
  console.log(name);
})
```

The most glaring item in need of explanation above is that we seem to be passing a function definition as an argument to `forEach`. Think about that. How in the world could that be valid, or even useful?  

If you study this code long enough, you may recognize that the function definition is, in fact, a function expression: we talked about them back in the _Functions_ chapter. This function expression doesn't have a name: it's an **anonymous function**.  

One feature of JavaScript that sets it apart from most other languages is that it has first-class functions. That means that functions are values: you can assign them to variables, pass them around as arguments to other functions, and even use them as return values in other functions. In our example, we're passing the anonymous function as an argument to `forEach`. That explains why the code is valid.  

When you pass a function as an argument to another function, that other function can call the function represented by the argument.  That's what `forEach` does, and it's why this code is useful. As its name suggests, `forEach` loops through each element in an array, in sequence, starting with the first element. For each name, `forEach` invokes the anonymous function with the name as an argument. The anonymous function can do whatever it needs to do with the argument. In this case, it merely logs the name.  

To use `forEach`, you need a **callback** function that you pass to `forEach` as an argument. A callback function is a function that you pass to another function as an argument. The called function invokes the callback function when it runs. The `forEach` method invokes its callback once for each element, passing it the element's value as an argument.  `forEach` always returns undefined.  

A callback is a function that you pass to another function as an argument. The called function subsequently invokes the callback function at certain times while it runs.  

```javascript
let array = [1, 2, 3];
array.forEach(function(num)) {
  console.log(num);	// on first iteration => 1
										// on second iteration => 2
										// on third iteration =>
}); // returns `undefined`
```

This code invokes the callback function once for each element in the array. `forEach`, during each iteration, invokes the callback with the element's value as an argument. The callback then logs it to the console. In the end, `forEach` returns `undefined`.  

###### `map()`

`forEach` works well when you want to use the value of an array's elements. Suppose, though, that you want to create a new array whose values depend on the original contents of the array.  

```javascript
> let numbers = [1, 2, 3, 4]
> let squares = numbers.map(num => num * num);
> squares
= [1, 4, 9, 16]

> squares = numbers.map(num => num * num);
= [1, 4, 9, 16]
```

###### `filter()`

The `filter` method is another array iteration method. It returns a new array that includes all elements from the calling array for which the callback returns a truthy value. That's a mouthful. Some code should help clarify what `filter` does:  

```javascript
> let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2]
> numbers.filter(num => num > 4)
= [5, 6, 7, 8, 9, 10]

> numbers
= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2]
```

`filter` iterates over the elements of the array. During each iteration, it invokes the callback function, using the value of the current element as an argument. If the callback returns a truthy value, `filter` appends the element's value to a new array. Otherwise, it ignores the element's value and does nothing.  When `filter` finishes iterating, it returns the array of _selected_ elements: the elements for which the callback returned a truthy value. In our example, `filter` selects all of the elements with a value greater than 4.  

`filter` doesn't mutate the caller.  

###### `find()`

The `find()` method returns the value of the first element in the provided array that satisfies the provided testing function. If no value satisfies the testing function, `undefined` is returned.

```javascript
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
```

##### Some other important Array methods to be aware of:

* `push`
* `pop`
* `unshift`
* `shift`
* `indexOf`
* `lastIndexOf`
* `slice`
* `splice`
* `concat`

##### Arrays and Arithmetic Operators

The arithmetic operators convert arrays to strings before performing the operation. After the conversion, the operation works in the same way as described in the Implicit Primitive Type Coercions lesson. For example, let's see what happens when you try to use `+` with an array:  

```javascript
let initials = ['A', 'H', 'E'];
initials + 'B';										// "A,H,EB"
initials;													// [ "A", "H", "E" ]
```

Arithmetic operators, when used on arrays, behave in un-useful ways.

##### Arrays and Comparison Operators

Now, comparing two arrays should be useful, right? Let's try:

```javascript
let friends = ['Bob', 'Josie', 'Sam'];
let enemies = ['Bob', 'Josie', 'Sam'];
friends == enemies;											// false
friends === enemies;										// false
[] == [];																// false
[] === [];															// false
```

Uh-oh! Neither equality (`==`) nor strict equality (`===`) considers arrays with the same values to be equal. How can that be?  

The two arrays are unequal since they are different arrays. They happen to contain the same values, but the arrays themselves are different objects. If we modify the first value in `friends` to `'Susan'`, the first value in `enemies` remains unchanged. Thus, the two arrays are different arrays, and the equality operators act accordingly. By analogy, take two sheets of paper. They look identical when blank, but they are not the same thing. You can write on one, but the other won't be affected.  

The equality operators check whether the two arrays are the _same array_--they don't care if the arrays contain the _same content_. Strictly speaking, arrays are only equal when they are the same object.  

We can see this in action by comparing an array with itself:  

```javascript
let friends = ['Bob', 'Josie', 'Sam'];
friends == friends;											// true
friends === friends; 										// true
```

If you assign the same array to another variable, JavaScript still recognizes them as the same array, and returns `true`:  

```javascript
let friends = ['Bob', 'Josie', 'Sam'];
let roommates = friends;
friends == roommates;											// true
friends === roommates;										// true
```

When an array is compared with a non-array using the non-strict equality operator, JavaScript implicitly coerces the array into a string before performing the comparison. For example:  

```javascript
[] == '0';               // false -- becomes '' == '0'
[] == 0;                 // true -- becomes '' == 0, then 0 == 0
[] == false;             // true -- becomes '' == false, then 0 == 0
[] == ![];               // true -- same as above
[null] == '';            // true -- becomes '' == ''
[undefined] == false;    // true -- becomes '' == ''
[false] == false;        // false -- becomes 'false' == 0, then NaN == 0
```

The relational comparison operators, `>`, `>=`, `<`, and `<=`, are useless with arrays and objects. They return `true` or `false` in unexpected ways. Don't use them with arrays or objects.  



###### Objects

Here is an object definition:

```javascript
let person = {
  name: 		'Jane',
  age: 			37,
  hobbies:  ['photography', 'geneaology'],
}
```

We can access a specific value in an object in two ways: 1) dot notation and 2) bracket notation:

```javascript
> person.name									// dot notation
= 'Jane'

> person['age']								// bracket notation
= 37
```

With dot notation, we place a dot (`.`) and a key name after the variable that references the object. With bracket notation, we write the key as a quoted string and put it inside square brackets. Most developers prefer dot notation when they can use it. However, if you have a variable that contains a key's name, you must use bracket notation:  

```javascript
> let key = 'name'
> person[key]
```

Let's add some more key-value pairs to the `person` object:  

```javascript
> person.height = '5 ft'
= '5 ft'

> person['gender'] = 'female'
= 'female'

> person
= { name: 'Jane', age: 37, hobbies: ['photography', 'geneaology'], height: '5 ft', gender: 'female' }
```

In this example, we use both dot notation and bracket notation to add two new key-value pairs to the `person` object.  

If you want to remove something from an existing object, you can use the `delete` keyword:  

```javascript
> delete person.age
= true

> delete person['gender']
= true

> delete person['hobbies']
= true

> person
= { name: 'Jane', height: '5 ft' }
```

##### Iterating over Objects

**The for/in loop**

The `for/in` loop behaves similarly to an ordinary `for` loop. The syntax and semantics are easier to understand since you don't need an initializer, ending condition, or increment clause. Instead, the loop iterates over all the keys in the object. In each iteration, it assigns the key to a variable which you then use to access the object's values. As always, seeing a concept in action is helpful:

```javascript
let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};

for (let prop in person) {
  console.log(person[prop]);
}															// => Bob
															//    30
															//    6 ft
```

One feature—or downside, depending on how you look at it—of `for/in` is that it iterates over the properties of an object's prototypes as well:

```javascript
let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2) {
  console.log(obj2[prop]);
}					// => 3
					// 		4
					//		1
					//		2
```

The first two items output by the above code are the "own properties" of `obj2`, and those are followed by the properties of the prototype object (`obj1`).   

This behavior is undesirable when you want to limit iteration to an object's **own properties**, i.e., properties it defined for itself, not properties it inherited. We can use the `hasOwnProperty` method to get around that problem. It takes the name of a property and returns `true` if it is the name of one of the calling object's own properties, `false` if it is not.  

```javascript
let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2) {
  if (obj2.hasOwnProperty(prop)) {
    console.log(obj2[prop]);
  }
} // => 3
	//		4
```

##### Object.keys

The `Object.keys` static method returns an object's keys as an array. You can iterate over that array using any technique that works for arrays. For instance:  

```javascript
let personKeys = Object.keys(person);
console.log(personKeys);					// => ['name', 'age', 'height']
person.Keys.forEach(key => {
  console.log(person[key])
});																// => Bob
																	//		30
																	// 		6 ft
```

Note that `Object.keys` returns the object's own keys: it does not include any keys from the prototype objects.  

##### Order of Object Properties

Don't assume anything about the sequence that JavaScript uses to iterate over an object's keys. Some engines are predictable, but the JavaScript standard doesn't specify an order, so some engines take advantage of that to provide improved performance. Thus, you can't depend on the order of iteration.  

##### Object.values

This static method extracts the values from every own property in an object to an array:

```javascript
let person = { name: 'Bob', age: 30, height: '6ft' };
let personValues = Object.values(person);
console.log(personValues); // => [ 'Bob', 30, '6 ft' ]
```

Be careful: remember that you can't predict the order of the values in the returned array.  

##### Object.entries

While `Object.keys` and `Object.values` return the keys and values of an object, respectively, the `Object.entries` static method returns an array of nested arrays. Each nested array has two elements: one of the object's keys and its corresponding value:  

```javascript
let person = { name: 'Bob', age: 30, height: '6ft' };
console.log(Object.entries(person)); // => [[ 'name', 'Bob' ], [ 'age', 30 ], [ 'height', '6 ft' ]]
```

##### Object.assign

You may sometimes want to merge two or more objects, i.e., combine the key-value pairs into a single object. The `Object.assign` static method provides this functionality:  

```javascript
> let objA = { a: 'foo' }
= undefined

> let objB = { b: 'bar' }
= undefined

> Object.assign(objA, objB)
= { a: 'foo', b: 'bar' }
```

`Object.assign` mutates the first object. In the above example, the properties from the `objB` object get added to the `objA` object, altering `objA` permanently in the process:  

```javascript
> objA
= { a: 'foo', b: 'bar' }

> objB
= { b: 'bar' }
```

Note taht `objB` isn't mutated. If you need to create a new object, use an empty object as `Object.assign`'s first argument. Note that `Object.assign` can take more than two arguments:  

```javascript
> objA = { a: 'foo' }
= undefined

> objB = { b: 'bar' }
= undefined

> Object.assign({}, objA, objB)
= { a: 'foo', b: 'bar' }

> objA
= { a: 'foo' }

> objB
= { b: 'bar' }
```

This code mutates neither `objA` nor `objB` and returns an entirely new object.  



















---

### Understand that arrays are objects, and be able to determine whether you have an Array

JavaScript Arrays are really Objects (we'll talk more about Objects later on). You can see this with the `typeof` operator:  

```javascript
typeof [];				// "object"
```

If you need to determine whether a value is an Array, this can be a problem. If you find yourself in this position, use `Array.isArray` instead; it returns `true` when the argument is an Array, `false` if it is anything else:  

```javascript
Array.isArray([]);				// true
Array.isArray('array');		// false
```





---

### Variables as Pointers

A variable is simply a named area of a program's memory space where the program can store data. Typically, variables can be changed. That is, we can make a variable point to a different area of memory that has a different value.  

Developers sometimes talk about **references** instead of pointers. At Launch School, we use both terms interchangeably. You can say that a variable points to or references an object in memory, and you can also say that the pointers stored in variables are references. Some languages make a distinction between references and pointers, but JavaScript does not; feel free to use either term.  

As we've learned, JavaScript values fall into one of two broad categories: primitive values and objects. Primitive values are easier to understand, so we'll start there.  

###### Working With Primitive Values

Let's take a quick look at how primitive values and the variables assigned to them relate. Consider the following code:

```javascript
let count = 1;
count = 2;
```

This code is simple and not too difficult to understand, even if it isn't very useful. On line 1, we declare a variable named `count`, and initialize it to a value of `1`, which is a primitive value. Line 2 reassigns `count` to a new primitive value, `2`.  

What does that look like in the computer, however? For starters, every time a JavaScript program creates a new variable, JavaScript allocates a spot somewhere in its memory to hold its value. With (most) primitive values, the actual value of the variable gets stored in this allocated memory.  

Thus, for example, the `count` variable may end up at address 0x1234 in the computer's memory, and the memory at that address gets set to `1` and then `2`. The process looks like this:  

![Primitive values and variables](https://d186loudes4jlv.cloudfront.net/javascript/images/vars-with-primitive-values.png)

Every time the code on line 1 runs, JavaScript creates a brand new variable. If that code is in a function that gets called many times, you may end up with many different `count` variables, all stored in different locations in memory. JavaScript discards these variables and their values when it no longer needs them.  

Let's see what happens when we have two variables, one of which has been set to the value of the other. Try running this code in `node`:

```javascript
> let a = 5
> let b = a
> a = 8
> a
= 8

> b
= 5
```

Nothing is surprising in that code. We initialize `a` to the value `5`, then assign `b` to the value of `a`: both variables contain `5` after line 2 runs.  

Next, we reassign variable `a` to a value of `8` on line 3, and on lines 4 and 5 we see that `a` does indeed now have the value `8`. On lines 7 and 8 we see that `b`'s value did not change: it is still `5`.

That's straightforward and easy enough to understand: each variable has a value, and reassigning values does not affect any other variables that happen to have the same value. Thus, `a` and `b` are independent: changing one doesn't affect the other.  

What's crucial to understand at this point is that variables that have primitive values store those values at the memory location associated with the variable. In our example, `a` and `b` point to different memory locations. When we assign a value to either variable, the value gets stored in the appropriate memory location. If you later change one of those memory locations, it does not affect the other memory location, even if they started off with the same value. Therefore, the variables are independent when they contain primitive values.  

In reality, string values aren't stored in variables in the same way as most primitive values, but they **act** like they are. Don't worry about how they are stored -- just remember how they act.

###### Working with Objects and Non-Mutating Operations

Now that we know how variables and primitive values relate, let's see how variables and objects relate. Consider the following code:

```javascript
let obj = { a: 1 }
obj = { b: 2 };
obj.c = 3;
```

As with the first example with primitive values, this code is simple and not too difficult to understand. On line 1, we declare a variable named `obj`, and initialize it to `{ a: 1 }`, which is an object value. Line 2 reassigns `obj` to a new object, `{ b: 2 }`. Finally, on line 3, we mutate the object currently referenced by `obj` by adding a new property to the object.  

What does that look like in the computer? As we learned earlier, creating new variables causes JavaScript to allocate a spot somewhere in its memory for the value. However, with objects, JavaScript doesn't store the value of the object in the same place. Instead, it allocates additional memory for the object, and places a pointer to the object in the space allocated for the variable. Thus, we need to follow two pointers to get the value of our object from its variable name. The process looks like this:  

![Objects and variables](https://d186loudes4jlv.cloudfront.net/javascript/images/vars-with-objects.png)

In this example, `obj` is always at address 0x1248. The value at that address is a pointer to the actual object. While the pointer to the object can change, `obj` itself always has the same address. In the above table, we can see that `obj`'s address doesn't change, but its value changes to the address of the object currently assigned to the variable.  

Let's look at another example. This time, we'll use arrays. Remember that arrays in JavaScript are objects, and almost everything we say about arrays holds for objects as well.  

```javascript
> let c = [1, 2]
> let d = c
> c = [3, 4]
> c
= [ 3, 4 ]

> d
= [ 1, 2 ]
```

Again, this example holds no surprises. For the moment, though, let's ignore what happens on line 2. We can assume that variables `c` and `d` end up with the same value after line 2 runs. Reassigning `c` on line 3 creates a new array, but the code doesn't affect the value of `d`. The two variables reference different arrays.  

This code works as expected since reassignment changes the pointer value of `c` to reference the new `[3, 4]` object. Though `d` originally had the same pointer value as `c`, it was stored in a different memory location (the location of `d`). Thus, when we reassign `c`, we're not changing `d` -- it still points to the original array.  

As with primitive values, this is straightforward: each variable has a value, and reassigning values does not affect any other variables that happen to have the same value. Thus, `c` and `d` are independent variables.  

```javascript
> let e = [1, 2]
> let f = e
> e.push(3, 4)
> e
= [ 1, 2, 3, 4 ]

> f
= [ 1, 2, 3, 4 ]
```

Now, that's interesting and puzzling. We mutated the array referenced by `e`, but it also changed the array referenced by `f`! How can that happen? Therein lies the source of a lot of confusion for new programmers.  

As we saw a little earlier, objects (and arrays) aren't stored in the memory location used by the variable. Instead, that memory location points to yet another memory location. That's where the object is ultimately stored.  

The use of pointers has a curious effect when you assign a variable that references an object to another variable. Instead of copying the object, JavaScript only copies the pointer. Thus, when we initialize `f` with `e`, we're making both `e` and `f` point to the same array: `[1, 2]`. It's not just the same value, but the same array in the same location in memory. The two variables are independent, but since they point to the same array, that array is dependent on what you do to both `e` and `f`.  

With `e` and `f` pointing to the same array, line 3 uses the pointer in the `e` variable to access and mutate the array by appending `3` and `4` to its original value. Since `f` also points to that same array, both `e` and `f` reflect the updated contents of the array. Some developers call this aliasing: `e` and `f` are aliases for the same value.  

Okay, that's good. What happens if we mutate a primitive value? Oops! You can't do that: all primitive values are immutable. Two variables can have the same primitive value. However, since primitive values are stored in the memory address allocated for the variable, they can never be aliases. If you give one variable a new primitive value, it doesn't affect the other.  

###### Gotcha

If you've followed along so far, you may think that reassignment never mutates anything. As the following code demonstrates, however, that isn't always true:  

```javascript
> let g = ['a', 'b', 'c']
> let h = g
> g[1] = 'x'
> g
= [ 'a', 'x', 'c' ]

> h
= [ 'a', 'x', 'c' ]
```

Don't let this confuse you. The key thing to observe here is that we're reassigning a specific element in the array, not the array itself. This code doesn't mutate the element, but it does mutate the array. Reassignment applies to the item you're replacing, not the object or array that contains that item.  

###### Takeaway

The takeaway of this section is that JavaScript stores primitive values in variables, but it uses pointers for non-primitive values like arrays and other objects. Pointers can lead to surprising and unexpected behavior when two or more variables reference the same object in the heap. Primitive values don't have this problem.  

When using pointers, it's also important to keep in mind that some operations mutate objects, while others don't. For instance, `push` mutates an array, but `map` does not. In particular, you must understand how something like `x = [1, 2, 3]` and `x[2] = 4` differ: both are reassignments, but the second mutates `x` while the first does not.  



---

### console.log vs return



---

### Truthiness: `false` and `true` vs. falsy and truthy

###### Falsy Values

When coercing a value to a boolean, JavaScript treats the following values as false:

* `false`
* The number `0`. This includes all 3 variations of zero in JavaScript:
  - `0`: The ordinary zero value.
  - `-0`: A negative zero. That's mathematical nonsense, but a real thing in JavaScript.
  - `0n`: The `BigInt` version of zero.
* An empty string (`''`)
* `undefined`
* `null`
* `NaN`

Everything else evaluates as true.



---

### Function Definition and Function Invocation

###### Definition

One way to defined functions is to declare them. A function declaration has the following structure:

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

The `triple` function takes one parameter called `number`. It has two statements inside its block. Of particular note is the `return` statement; it specifies the value returned by the function. In all three calls (invocations), the function returns a value of 15. You can use return values immediately or save them for later use; you can even ignore them.  

###### Invocation

Programmers often talk about function **invocation** and **invoking** functions. The terms are synonymous with "call" and "calling." You _invoke_ or write a _function invocation_. We use these terms as well.  

The standard way to invoke a function is to append `()` to its name. Consider the following function:  

```javascript
function startle() {
  console.log('Yikes!');
}
```

We can call this function by appending `()` to the name:

```javascript
startle()

// logs:
Yikes!
```

Function names are nothing special in JavaScript: they are just local variables that happen to have a function as a value. Since `startle` is just a local variable, we can assign it to a new local variable and call the function using that new name:

```javascript
let suprise = startle;
surprise();

// logs:
Yikes!
```

Many functions require parameters to fulfill their purpose. As we saw earlier, when calling a functio, we call these values _arguments_, and specify them as a list of names between the parentheses.  

Consider the following function, `takeTwo`:

```javascript
function takeTwo(a, b) {
  console.log(a);
  console.log(b);
  console.log(a + b);
}
```

If we call `takeTwo` with two arguments, `1` and `2`, it logs each of the arguments and then their sum:  

```javascript
takeTwo(1, 2);

// logs:
1
2
3
```

So far, so good. But, what happens if we don't provide the same number of arguments as there are in the function's declaration? Let's try passing a single argument to `takeTwo`:

```javascript
takeTwo(1);

// logs:
1
undefined
NaN
```

A few things to note:

1. Calling a function with too few arguments _does not raise an error_.
2. Within a function, an argument that wasn't provided in the call will have the value `undefined`
3. The `NaN` result is caused by the fact that `b` is `undefined`; it isn't a direct result of the missing parameter. It is merely JavaScript's standard behaviour when a number and `undefined` are added.

```javascript
takeTwo(1, 2, 4);

// logs:
1
2
3
```



---

### Function Declarations, Function Expressions, and Arrow Functions

###### Function Declaration

Example:

```javascript
function functionName(zeroOrMoreArguments...) {
  // function body
}
```

In JavaScript, we call a function definition that looks like that a **function declaration**. A notable property of function declarations is that you can call the function before you declare it. We'll learn why that is in the Core Curriculum; for now, all you need to know is that you don't have to declare functions before calling them.  

Let's examine a function declaration:

```javascript
function hello() {
  return 'hello world!';
}

console.log(typeof hello);		// function
```

A function declaration (sometimes called a "function statement") defines a variable (in this case, `hello`) whose type is `function`. It does not require assignment to a variable. The value of the function variable is the function itself. This "functional variable" obeys general scoping rules, and we can use it exactly like other JavaScript variables.  

```javascript
function outer() {
  function hello() {
    return 'hello world!';
  }
  
  return hello();
}

console.log(typeof hello);		// can't access a local scope from here

const foo = outer;						// assign the function to a constant
foo();												// we can then use it to invoke the function
```

Function declarations are similar to variable declarations. Just as variable declarations must start with `let` or `const`, function declarations must start with `function`.  

It is important to realize that a function declaration not only creates a function, but also creates a variable. We previously learned that we can create variables and constants in the current scope with the `let` and `const` keywords, we can also create variables by naming the arguments to a function via its parameters. A function declaration gives us a fourth way: a function declaration declares a variable with the same name as the function, and then assigns the function to that variable. Thus, for every function declaration, a variable is initialized.  

```javascript
let stringVar = 'string value';
let numberVar = 42;										// number value

function functionVar() {
  return 'function reference';
}

console.log(typeof stringVar);				// string
console.log(typeof numberVar);				// number
console.log(typeof functionVar);			// function

// Reassignment works as expected:
stringVar 	= functionVar;						// `stringVar` now references a function
functionVar = 'string value';					// `functionVar` now contains a string

console.log(typeof stringVar);				// function
console.log(typeof functionVar);			// string
```

In this code, we create three variables: the first two by using the `let` keyword (variable declaration), and the third by using a function declaration. Even though they were created in different ways, all three are just typical JavaScript variables. They differ primarily in regards to what value they reference or contain, though there is a subtle difference we'll discuss in a future assignment.  

###### Function Expression

Example:

```javascript
let greetPeople = function () {
  console.log("Good Morning!");
}

greetPeople();
```

That might look a little strange, but it's JavaScript that you'll see often. Most of it looks like a standard function declaration. However, since we're saving it to a variable, it's a function expression instead. **Function expressions have one key difference from a function declaration: you cannot invoke a function expression before it appears in your program.**  

Our example declares a variable named `greetPeople` and assigns it to the function expression after the `=` sign. We can do that since JavaScript functions are **first-class functions**. The key feature of first-class functions is that you can treat them like any other value. In fact, **all JavaScript functions are objects**. Thus, you can assign them to variables, pass them as arguments to other functions, and return them from a function call. The implications are far-reaching, though you won't really appreciate why that is until later in the Core Curriculum.  

Any function definition that doesn't have the word `function` at the very beginning of a statement is a function expression. Even wrapping what looks like a function declaration in parentheses creates a function expression: 

```javascript
(function greetPeople() { // this is a function expression, not a declaration
	console.log("Good Morning!");
});
```

###### More on Function Expressions

A function expression defines a function as part of a larger expression syntax (typically a variable assignment).  

```javascript
const hello = function () {		// We can also use let instead of const
	return 'hello';
};

console.log(typeof hello);		// function
console.log(hello());					// hello
```

In this code, we define an anonymous function (one without a name) and assign it to the variable `hello`. We then use the variable to invoke the function.  

```javascript
let foo = function () {
  return function () {		// function expression as return value
    return 1;
  };
};

let bar = foo();					// bar is assigned to the returned function

bar();										// 1
```

Here, the anonymous function assigned to `foo` returns another anonymous function. On line 7, we call `foo` and assign the returned function expression to the variable `bar`. We can then call `bar` to get the return value `1` of the anonymous function.  

In this section, we were explicit to refer to the anonymous function assigned to a variable. In the wild, however, many developers refer to anonymous functions by the name of the variable to which it is assigned. For instance, instead of saying the "_anonymous function assigned to `foo` returns.._", we can instead say the "_function `foo` returns.._". While at Launch School and in job interviews, use the former, more precise, wording. You can also leave out "anonymous" unless it is relevant.  

###### Named Function Expressions

We can also name function expressions, like this:  

```javascript
let hello = function foo() {
  console.log(typeof foo);		// function
};

hello();

foo();												// Uncaught ReferenceError: foo is not defined
```

However, the name is only available inside the function (i.e., it can only be used from within the function's local scope). Though most function expressions use anonymous functions, named function expressions are useful for debugging. The debugger can show the function's name in the call stack, providing a valuable clue. Named function expressions can also be useful for recursive functions.  

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

###### Arrow Function

There's a third kind of function in JavaScript called an **arrow function**. Syntactically, arrow functions look radically different from function declarations and expressions. Let's look at one:

```javascript
let greetPeople = () => console.log("Good Morning!");
greetPeople();
```

Wow! That's quite a departure from the functions we've seen so far. Arrow functions are similar to function expressions, but they use a different syntax. The differences are not merely syntactic, however. We'll discuss them in more detail in the Core Curriculum.  

For now, let's look at one interesting property of arrow functions: implicit returns. First, we'll convert the `add` function from the previous section to use arrow function syntax:  

```javascript
let add = (a, b) => a + b;
```

That's much shorter! Note the lack of a `return` statement. We can omit it in arrow functions _when and only when the function body contains a single expression_. Suppose it contains two or more expressions or statements. In that case, you must explicitly return a value if you need it, and you must also use curly braces:

```javascript
let add = (a, b) => a + b;
let getNumber = (text) => {
  let input = prompt(text);
  return Number(input);
};

let number1 = getNumber("Enter a number: ");
let number2 = getNumber("Enter another number: ");
console.log(add(number1, number2));
```

On line #2, we define an arrow function that requires one parameter. The parentheses around the parameter name are optional in this case and are often omitted.  

###### More on Arrow Functions

One of the most popular additions to ES6 JavaScript is a special type of function definition called an arrow function. At this point, you can think of arrow functions as a shorthand way to write a function expression.  

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

All we've done so far is eliminate the `function` keyword, and insert an arrow (`=>`) between the parameter list and the opening brace. That's not a huge improvement, and you might even say that this shorthand is a detriment to readability. However, we can make two more small modifications to an arrow function when its body only has one line. First, we can eliminate the braces and write the entire function on a single line:  

```javascript
const multiply = (a, b) => return a * b;
```

If you have a bunch of short functions like the `multiply` function, this shorthand is beginning to seem interesting. What's more, we can also eliminate the `return` keyword in this situation:  

```javascript
const multiply = (a, b) => a * b;
```

At first, this code may seem a bit cryptic -- it is if you aren't familiar with the arrow function syntax. However, with a little practice, it rapidly becomes comfortable and familiar.  

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

Arrow functions also have another use that makes them immensely popular: they inherit the "execution context" from the surrounding code. That probably means nothing to you right now. We'll talk about execution context in great detail in a later course.  

###### Style Notes  

We recommend this practice:

* Use arrow functions for callbacks.
* Use function declarations or function expressions for other functions, but choose one or other as your primary choice.
* If you use function expressions, named function expressions are better for debugging purposes. They also help clarify the intent of those functions.  

---

### Implicit Return Value of Function Invocations

If a function does not contain an explicit `return` statement, or the `return` statement does not include a value, the function implicitly returns the value `undefined`. This is a reason why functions are said to "have returned" rather than "finished execution". When we talk about closures in a later course this distinction will become more apparent. For now, just be mindful of the disambiguation between the `return` value (explicit or implicit) of a function and the statement that a "_function that has returned or returns_".  





---

### First-class Functions

One feature of JavaScript that sets it apart from most other languages is that it has first-class functions. That means that functions are values: you can assign them to variables, pass them around as arguments to other functions, and even use them as return values in other functions.

---

### Side-effects



---

### Naming Conventions (legal vs. idiomatic)

###### Variable Names

Variable names should usually start with a lowercase letter.  

```javascript
// Bad
let Book = 'Head-First JavaScript Programming';

// Good
let book = 'Head-First JavaScript Programming';
```

Variables with multiple words in their name use a style called camelCase. The first letter of the first word of a camelCase name must be lowercase; each subsequent word should begin with an uppercase letter. You may sometimes see people use uppercase for words in a name; this is simply a matter of taste and is not something that will affect your code in any way. However, for Launch School, please lowercase the first letter.

```javascript
// number, string, array, object
let myNumber = 26;
let myString = 'Double 13';
let myArray = [13, 13];
let myObject = {
  count: 26,
};

// function names
let addValues = function (a, b) {
  return a + b;
};

function multiplyValues(a, b) {
  return a * b;
}
```

Object properties use the same convention as well.

```javascript
let myObject = {
  myNumber: 26,
  myMethod: function () {},
};
```

###### Constant Names

Constant names should usually start with an uppercase letter.  

```javascript
// Bad
const title = 'Head-First JavaScript Programming';

// Good
const Title = 'Head-First JavaScript Programming';
```

In fact, constants usually have all letters in uppercase:  

```javascript
// Ok
const Title = 'Head-First JavaScript Programming';

// Better
const TITLE = 'Head-First JavaScript Programming';
```

Constants with multiple words in their name typically use SCREAMING_SNAKE_CASE: all letters are uppercase, and words are separated by underscores:  

```javascript
// number, string, array, object
const NUMBER_OF_LETTERS = 26;
const DECK_OF_CARDS = ["2 of Clubs", "2 of Diamonds", …, "Ace of Spades"];
```

###### Function Names  

Function names should usually use camelCase names, no matter how the function is defined:  

```javascript
function multiplyValues(a, b) {
  return a * b;
}

let addValues = function (a, b) {
  return a + b;
};

const subtractValues = (a, b) => a - b;
```

###### Idiomatic vs. Non-Idiomatic Variable Names

Variable names that follow the above naming convention are referred to as **idiomatic names**. Less commonly, you may also see variable names containing all uppercase letters with multiple words separated by underscores, such as `MY_CONSTANT`. This style of naming is sometimes called SCREAMING_SNAKE_CASE. Such names can improve readability, but they have no effect on how JavaScript treats them.  

All-caps constant names and variable names that contain acroynms are considered to be idiomatic names.  

Here are some examples of idiomatic names:  

```
cat
employee
number1
fizzBuzz
validateUserInput
tacoShack42
MINUTES_PER_HOUR
parseURL
```

On the other hand, syntactically valid names that do not follow these conventions are called **non-idiomatic names**. Here are some examples, each followed by a comment explaining why it is non-idiomatic:  

```
_cat                   // starts with an underscore
Employee               // starts with an uppercase letter
number_1               // contains an underscore
fizzBUZZ               // second word is all uppercase
validate_User_Input    // contains underscores
taco$hack42            // contains a `$`
MINUTESPERHOUR         // 'constant' - missing underscores between words
paRseURL               // contains an uppercase letter inside of a non-acronym word
```

###### 





---

### Pure Functions and Side Effects



