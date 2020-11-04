##### Resources > Open Book Shelf

---

# Introduction to Programming with JavaScript

## Preparations

### Runtime Environments

**runtime environment:** 

* An execution environment that lets an application program access system resources (i.e. networking infrastructure, RAM, sensors, and the GPU) and provides the tools the application needs to operate. 
* The runtime environment turns an application from a set of instructions into something that performs actual work.  
* In the JavaScript world, there are two major runtime environments you are likely to encounter: the browser and Node.js. You may also encounter a number of less common environments.   

**Application Programming Interface (API):** 

* Describes the scheme and format that a programmer can use to securely access resources, with the operating system acting as an intermediary.
* A runtime environment typically adds another layer of abstraction on top of the operating system's API to make these resources available with a higher-level (i.e., more accessible) API.
* The compiler/interpreter and the operating system's APIs together make up a runtime environment. In other words, they provide the tools that an application needs to run.
* The APIs needed for one runtime environment can differ from those needed in another environment.

#### Major JS Runtime Environments: Browser

The web browser was the original JavaScript runtime environment, and it's still the most dominant.  

JavaScript in the browser has two main purposes: 

1) to programmatically alter web pages based on user actions:

* To perform this task, the programmer needs an API through which they can manipulate the structure and appearance of the HTML page.

2) to exchange messages with a server over a network:

* For this task, the programmer needs an API that lets them use the operating system's ability to send and receive messages over a network.

Almost every browser provides a way to accomplish these tasks, though there are some compatibility issues between browsers. The DOM (Document Object Model) API lets you manipulate the structure and apperance of a web page, while the XHR (XMLHttpRequest) interface and the Fetch API let you communicate with a server.  

#### Major JS Runtime Environments: Node.js

As mentioned in the previous chapter, Node.js is a runtime environment that turns JavaScript into a general-purpose programming language that can run applications on almost any system. The creators of Node.js took the open-source Chrome V8 JavaScript engine and added APIs and tools required for desktop and server computing.  

A general-purpose programming environment, like Node.js, needs the following minimal capabilities:

* The ability to read and write disk files (disk I/O);
* The ability to read and write via the terminal (standard I/O);
* The ability to send and receive messages over a network (network I/O);
* The ability to interact with a database.

Node.js has APIs and pacakages for all these tasks and more. It also provides an interactive REPL (read-evaluate-print loop) where you can execute JavaScript commands and get instant results. Like any useful runtime environment, Node.js provides tools for debugging and inspecting programs at runtime. Unfortunately, the debugging and inspecting tools are somewhat difficult to use directly; instead, you generally have to use a browser, and Google Chrome in particular.  

### Stylish JavaScript

Here's a short list of recommended guidelines:

* Set your text editor to use space characters--not tabs--for indentation. The editor should also insert spaces if you press the "tab" key on your keyboard.

* Set your text editor to use 2 spaces for indentation and when converting tab characters to spaces.

* Try to limit lines to 80 characters. This limit isn't a univeral preference, but it helps readability. Not all developers have massive screens or good eyesight.

* JavaScript uses the character sequence `//` to mark the beginning of a comment. The comment runs through the end of the line. You can also use `/*` and `*/` for multiline comments if comments that you want to have in the middle of a line. Programmers use comments to leave notes for other programmers or themselves at a later point in time; however, don't overdo your comments. Let your code do the talking instead.  

* Use **camelCase** formatting for variable and function names. Such names begin with a lowercase letter. If the name contains multiple words, each subsequent word should begin with an uppercase letter:

  ```javascript
  let answerToUltimateQuestion = 42; // initializing a variable
  function fourScoreAndSevenYearsAgo() { // defining a function 
  			// do something
  }
  ```

* Some function names--constructor functions--can use PascalCase names. For instance:

  ```javascript
  function DomesticCat(name) { // defining a function
    // do something  
  }
  ```

* Use uppercase names with underscores to represent const values: values that don't change,

  ```javascript
  const INTEREST_RATE = 0.0525;
  const FOUR = 'four';
  ```

* All names--variables and constants as well as functions--should use the alphabetic and numeric characters only. The first character must be alphabetic. Constants may use underscores with the name, but should not use consecutive underscores nor may they begin or end with an underscore.

* When writing a code block with curly braces, write the opening brace on the same line as the function name or conditional expression. Use a single space between the function name and the opening brace:

  ```javascript
  // bad
  function test(){
    // do something
  }
  
  // bad
  function test()
  {
    // do something
  }
  
  // good
  function test() {
    // do something
  }
  ```

* Use spaces between operators and operands to make your code less cluttered and easier to read:

  ```javascript
  // bad
  let sum=x+5;
  
  // good
  let sum = x + 5;
  ```

* Use semicolons to terminate each logical line of code unless the line ends with `{`, `}`, or `:`. See the next section for details.

###### On Semicolons

When you read JavaScript documentation, books, and articles, most show code that uses semicolons (`;`) to terminate most statements, so code ends up looking like this:

```javascript
let x = 3;
let y = 5;

if (x === y) {
  console.log("x is equal to y");
} else {
  console.log("x is not equal to y");
}
```

As you can see, most lines end with a semicolon; there are exceptions like blank lines and lines that end with `{` or `}` and a few other situations. Most JavaScript developers use this style. You should, too, at least while you're at Launch School. At first, it's a bit tricky trying to decide whether you need a semicolon, but JavaScript is forgiving. The style becomes so automatic after a short period that you may find yourself typing semicolons everywhere you write something.  

A few sources omit the semicolons entirely:

```javascript
let x = 3
let y = 5

if (x === y) {
  console.log("x is equal to y")
} else {
  console.log("x is not equal to y")
}
```

A little-known fact is that JavaScript automatically, but invisibly, inserts semicolons where it needs them. Thus, you can omit semicolons from most code. Some experienced developers take advantage of this mechanism and use (and promote) a no-semicolons-ever style. However, the style requires care: the insertion mechanism makes mistakes when it sees your code differently than you intended. That can be tricky to diagnose when it inserts a semicolon where you don't expect or want one. Thus, we discourage using the no-semicolons style in our courses.  

The main reason we mention this at all is that we use two different styles to display JavaScript code in this book: traditional and REPL style. Since the REPL style omits semicolons, it's worth knowing why we can do that.  

In traditional style, we show the code as you would enter it in a file before running it. There is no special markup to show prompts, return values, or outputs. In this style, we use semicolons consistently. If we need to show some return values or outputs, we'll use comments:

```javascript
function greeting() {
  console.log('Get ready!');
}

greeting(); // => Get ready!
```

In REPL style, we show code in a way that resembles a Node REPL session or a session in your browser console. A `>` prompt precedes each statement that we expect you to type. We also precede return values with an `=` to distinguish them from console outputs that have no prefix at all. Note: **don't** type the `>` when enterinng commands and `node` doesn't display the `=`.

```javascript
> greeting()
Get ready!   // console output
= undefined  // return value of greeting();

> 2 + 2
= 4					 // return value of 2 + 2
```

Of particular note with REPL style is that we almost never use semicolons. You can type the semicolons if you want, but you don't have to. For the most part, the work you do in a REPL or console session probably won't lead to semicolon insertion issues.

---

## The Basics

### Data Types

Data types help programmers and their programs determine what they can and cannot do with a given piece of data.  

JavaScript has five so-called **primitive data types**:

* String
* Number
* Undefined
* Null
* Boolean

###### Strings

A string is a list of characters in a specific sequence. In programming, we often have to work with text data like names, messages, and descriptions. JavaScript uses strings to represent such data. You write strings with either single quotes (`'hi there'`) or double quotes (`"hi there"`) on either side of the text; note that the quotes are syntactic components, not part of the value.  

###### Numbers

The Number data type represents all kinds of numbers in JavaScript. Some programming languages have different data types for different number types, such as integers, floating-point numbers, and fixed-point (decimal) numbers. JavaScript has a single data type, `Number`, that represents all types of numbers. For the math whizzes out there, we mean real numbers.

###### Booleans

A boolean value represents an "on" or "off" state. For example, if you want to represent the state of a light switch in your application, you can use boolean values. There are two boolean values: `true` and `false`.  

Boolean values have a starring role when working with comparison operators. Comparisons check whether a value is equal to, less than, or greater than another value. They return a boolean result (`true` or `false`).

###### Undefined

In programming, we need a way to express the absence of a value. In JavaScript, we do this with the value `undefined`. When a variable is not defined, its value is given by `undefined`. We can describe `undefined` as representing the absence of a value.  

###### Null

`null` is similar to `undefined`: it represents the intentional absence of a value. Often, `null` represents emptiness or nothing. The chief difference between `null` and `undefined` is that you must use `null` explicitly if you want to use it; `undefined` can arise implicitly. These two values are so similar in their use and behaviour that some people think having both in JavaScript is a mistake. We'll explore `null` a little later. For now, you can think of it as a value that represents emptiness or nothing.

### Data Structures

The two most common data structures, or complex data types, that JavaScript programmers use are arrays and objects.

###### Arrays

JavaScript organizes information into ordered lists using arrays. They may contain strings, numbers, booleans, or any other data type. In JavaScript, array literals--representations of an array--use square brackets `[ ]` surrounding a comma-delimited list of values, otherwise known as elements.  

The most important facts to remember about arrays are:  

* The order of the elements is significant.
* Use index numbers to retrieve array elements.
* Index numbers are non-negative integers starting from `0`.

###### Objects

JavaScript objects have many use cases, but the one that interests us most now is as a dictionary-like data structure that matches keys with specific values. Other languages use different names for the same kind of structure: hash, dictionary, and associative array are the most common terms. Essentially, a JavaScript object is a collection of key-value pairs.  

You can create objects using object literals, which have zero or more key-value pairs separated by commas all embedded within curly braces (`{}`). A key-value pair associates a key and a given value. Each pair consists of a key, in the form of a string, and a value of any type. Key-value pairs in object literals use the key followed by a colon (`:`) and then the value.  

Objects are the building blocks of programming. You'll become intimately familiar with them as you learn more and more. For now, the most important thing to remember about objects is that you use keys to set or retrieve values.  

### Expressions and Return Values

**expressions**:

* Anything that JavaScript can evaluate to a value, even if that value is `undefined` or `null`.
* With only a few exceptions, almost everything you write in JavaScript is an expression.
* JavaScript expressions always evaluate to a value.

**return value**:

* The evaluated value of an expression.

Expressions do something, but they also return or evaluate to a value. The returned value may not always be what you expect. For instance, let's take a look at `console.log`:

```javascript
> console.log('Howdy')
Howdy
= undefined
```

Here, `console.log` displayed "Howdy" on the console, but then it showed the word `undefined` in a different color or dimmer brightness. That extra output is the return value of the expression, and `undefined` tells you that `console.log` returned nothing. It's important to understand that distinction.

### Statements

**statements**:

* JavaScript applications consist of statements with an appropriate syntax. A single statement may span multiple lines. Multiple statements may occur on a single line if each statement is separated by a semicolon. This isn't a keyword, but a group of keywords (MDN).

* Statements always evaluate as `undefined`. They differ from expressions in that you cannot use a statement as part of another expression.  

* They differ from expressions in that you cannot use a statement as part of another expression.

* Some statements include expressions as part of their syntax. For example, the `let` statement can include an initializer to set the initial value of the variable:

  ```javascript
  > let foo = 42
  = undefined
  ```

  In the `let` statement, the code to the right of the `=` is an expression. That expression happens to be part of the `let` statement, but it is still an expression in its own right.

* Unfortunately, the term "statement" isn't quite as well-defined as the MDN page referred to above makes out. In practice, most programmers use the term statement rather loosely: it refers to a syntactic unit of code that expresses an action for the computer to perform. All of the statements mentioned on the MDN page linked above conform to this definition, but the page doesn't list everything.

* You can use the term "statement" somewhat loosely. However, try to keep the distinction between "statements" and "expressions" in mind as it is sometimes vital. Expressions can be part of a statement, but not all statements are expressions.

---

## Variables

One of the most basic concepts of programming is that programs need to store information in memory so that it can use and manipulate that information. Variables are the means for doing that in almost all computer languages. They provide a way to label data with a descriptive name that helps us and other readers understand a program. Think of variables as containers that hold information: their purpose is to label and store data in memory so that your program can use it.

### Variables and Variable Names

A variable is simply a named area of a program's memory space where the program can store data. Typically, variables can be changed. That is, we can make a variable point to a different area of memory that has a different value.  

###### Variable Naming

Variable names are often referred to by the broader term, **identifiers**. In JavaScript, identifiers refer to several things:

* Variable names declared by `let` and `var`
* Constant names declared by `const`
* Property names of objects
* Function names
* Function parameters
* Class names

The term _variable name_ includes all of these identifiers, except property names of objects. However, property names of the **global object** are usually included when discussing variable names. We'll use this inclusive form of variable name, but will be specific when there are important differences.  

###### What Else is a Variable?

JavaScript has a bunch of other things that involve storing data in a named area of memory. The list looks a lot like the list of identifiers:

* Variables declared with `let` and `var`
* Constants declared with `const`
* Properties of the global object
* Function names
* Function parameters
* Class names

The most significant difference in this list compared to the list of identifiers is that not all object properties are variables; only those on the global object.  

When JavaScript developers talk about variables or variable names, they often use these more inclusive meanings -- for most purposes, all of these concepts act like variables, and they all have names that can be used in situations that call for variable names. There are differences, though. We'll use the term variables in this inclusive manner, but will be specific when there are important differences.  

### Declaring and Assigning Variables

A variable declaration is a statement that asks the JavaScript engine to reserve space for a variable with a particular name and **initializes** it with a value.  JavaScript supplies several ways to declare variables, but the preferred way in modern JavaScript use the `let` keyword:  

```javascript
> let firstName
= undefined
```

### Declaring Constants

The `const` keyword is similar to `let`, but it lets you declare and initialize **constant** identifiers:

```javascript
> const firstName = 'Mitchell'
= undefined

> firstName
= Mitchell
```

Once you initialize a constant, you can't give it another value.  

Constants store values that remain the same throughout the execution of a program, a block within the program, or a function.  

A standard convention when naming constants is to use all uppercase letters and digits in the name; if the name contains multiple words, use underscores to separate the words.  

### Variable Scope

A variable's **scope** determines where it is available in a program. The location where you declare a variable determines its scope. In JavaScript, variables declared with the `let` or `const` keywords have **block** scope. A block is a related set of JavaScript statements and expressions between a pair of opening and closing curly braces. We'll use an `if` statement to illustrate since they typically use at least one block:  

```javascript
if (expression) {	// block starts at {
  doSomething();	// block body
}									// block ends here
```

This code uses the basic syntax of an `if` statement: we'll learn more in the "Flow Control" chapter. For now, all you need to know is that JavaScript evaluates the expression between the parentheses (`()`). If it's true, JavaScript executes the code inside the block. Otherwise, it skips to the code that follows the block. Here, we run `doSomething()` when `expression` evaluates as true.  

Constants declared with `const` have the same scope as variables declared with `let`.  

### A Common Gotcha

Be sure to always declare your variables and constants with `let` and `const`. JavaScript is a forgiving language, and one of the ways it demonstrates that occurs when you fail to declare a variable or constant. You can create them willy-nilly merely by assigning a variable to a value:  

```javascript
p = 'foo';
```

That looks harmless, but JavaScript has some bizarre rules when working with undeclared variables. The most notable rule is that all undeclared variables have global scope: they ignore block and function scope entirely. If your program uses that same variable name in a different scope without declaring it, there's a good chance that it will step on the original variable by changing its content. You don't want that to happen: it's typically difficult to debug, and sometimes fixing it breaks other code.  

---

## Functions

Most languages have a feature called procedures that let you extract bits of code and run them as separate units. In JavaScript, we call these procedures **functions**.  

### Using Functions

Before you can use a function, you must first define it with the reserved keyword, `function`. After the word `function`, you write the function's name followed by a pair of parentheses (`()`). After the closing parenthesis, the code you want to associate with the function -- the **function body** -- gets placed between curly braces (`{}`).  

Functions are called by typing their name and providing some optional values that we call **arguments**. In `say.js`, the function definition includes `(words)` after the function name. This syntax tells us that we should supply (**pass**) a single argument to the function when we call it. Arguments let you pass data from outside the function's scope into the function so it can access the data. If the function definition doesn't need access to outside data, you don't need any arguments.  

In the definition of a function, the names between parentheses are called **parameters**. The arguments are the values of those parameters.  

Function names and parameters are both considered variable names in JavaScript. Parameters, in particular, are **local variables**; they are only defined locally, within the body of the function.  

Note that a parameter's scope is the function definition; you can't use it outside of the function.  

Programmers often talk about function **invocation** and **invoking** functions. The terms are synonymous with "call" and "calling." You _invoke a function_ or write a _function invocation_. We use these terms as well.  

The local variable names between parenthesis (`()`) are properly called **parameters**, not arguments. Arguments are the values you pass into the function for each of those parameters. The parameter values inside the function are also called arguments. You can think of parameters as placeholders, while arguments refer to the values that get stored in the placeholders.  

### Return Values

All of the functions we've written so far display text on the console. They can do much more. One common use case is to perform an operation and **return** a result to the call location for later use. We do that with **return values** and the `return` statement.  

All JavaScript function calls evaluate to a value. By default, that value is `undefined`. However, when you use a `return` statement, you can return a specific value from a function.  

JavaScript uses the `return` statement to return a value to the code that called the function: the **caller**. If you don't specify a value, it returns `undefined`. Either way, the `return` statement causes the function to stop running and returns control to the caller.  

Functions that always return a boolean value, i.e., `true` or `false`, are called **predicates**. You will almost certainly encounter this term in future readings and videos, so commit it to memory.  

### Variable Scope

Let's take a few minutes to discuss the crucial concept of variable scope. In JavaScript, there are two types of variables based on where they're accessible: **global** variables and **local** variables. Global variables are available throughout a program, while local variables are confinded to a function. The keyword you use to declare a variable and the location where you declare it combine to determine whether the variable is global or local. We'll focus on where you declare variables; the `let` and `const` keywords both work as described below.  

###### Global Variables

As the name suggests, global variables have a global scope, which means that they are available everywhere within a program. You can read and reassign them at any time. Any variable declared inside a function or block is a local variable -- everything else is a global variable.  

Global variables can be useful in some scenarios, e.g., application-wide configuration. However, most developers discourage their use since they often lead to bugs. In general, you should limit the scope of your variables as much as possible; smaller variable scopes limit the risk that an outer scope might misuse the variable.  

###### Local Variables

As the name suggests, local variables in JavaScript have a local scope, meaning that you can't access them outside the function that declares them. As with global variables, where you declare a local variable determines its scope.  

Parameters have local scope within a function.  

That brings us to another important property of local variables. Local variables are short-lived; they go away when the function that corresponds to their scope stops running. When we invoke the function, we start a new scope. If the code within that scope declares a new variable, that variable belongs to the scope. When the last bit of code in that scope finishes running, the scope goes away, as do any local variables declared within it. JavaScript repeats this process each time we invoke a function.  

Another way to scope variables locally is to use block-scoping. We've already discussed it in the _Variables_ chapter, and we'll expand on it in the next. For now, block scoping occurs when you use `let` or `const` inside a block and confines the variable's scope to that block.  

Variable scoping is a crucial topic in programming. A solid grasp of the concept is essential to fluency with any programming language.  

### Functions vs. Methods

Method invocation occurs when you prepend a variable name or value followed by a period (`.`) to a function invocation, e.g. `'xyzzy'.toUpperCase()`. We call such functions **methods**. We cover this topic in more detail in the Core Curriculum. For now, think of the previous code as the method `toUpperCase` as returning a modified version of the string `'xyzzy'`.  

It's unfortunate, but there is no easy way to determine whether you need to use a function or method call for any given function. You must read the documentation or study the source code.  

### Mutating the Caller

Sometimes a method permanently alters the object that invokes the method: it **mutates the caller**.  

Non-mutating methods like `toUpperCase()` often return a new value or object, but leave the caller unchanged.  

One non-obvious point here is that mutation is a concern when dealing with arrays and objects, but not with primitive values like numbers, strings, and booleans. Primitive values are **immutable**. That means their values never change: operations on immutable values always return new values.  Operations on **mutable** values (arrays and objects) may or may not return a new value and may or may not mutate data.  

How do you know which methods mutate the caller and which don't? It's useful to know that all primitive values are immutable, so this question never arises when dealing with them.  However, there's no way to tell whether a function mutates an array or object.  You have to use the documentation or memorize it through repetition.  

If you have experience programming in other languages and wonder whether JavaScript is a pass-by-value or pass-by-reference language, JavaScript is both! It uses pass-by-value when dealing with primitive values and pass-by-reference with objects and arrays.  

### Function Composition

In a process called **function composition**, JavaScript lets us use a function call as an argument to another function.  

### Three Ways to Define a Function

In JavaScript, we call a function definition that looks like a **function declaration**. A notable property of function declarations is that you can call the function before you declare it.  

Let's see an example of invoking a function before declaring it:

```javascript
greetPeople();

function greetPeople() {
  console.log("Good Morning");
}
```

Add the above code to a `.js` file and run it with node. You'll see that it works without raising any errors.  

Let's see another way to define a function called a **function expression**.  

```javascript
let greetPeople = function() {
  console.log("Good Morning");
}

greetPeople();
```

That might look a little strange, but it's JavaScript that you'll see often. Most of it looks like a standard function declaration. However, since we're saving it to a variable, it's a function expression instead. Function expressions have one key difference from a function declaration: you cannot invoke a function expression before it appears in your program.  

Our example declares a variable named `greetPeople` and assigns it to the function expression after the `=` sign. We can do that since JavaScript functions are first-class functions. The key feature of first-class functions is that you can treat them like any other value. You can assign them to variables, pass them as arguments to other functions, and return them from a function call. This behavior's implications are far-reaching; we'll see why that is when we talk about Array methods.  

Any function definition that doesn't have the word `function` at the very beginning of a statement is a function expression. Even wrapping what looks like a function declaration in parentheses creates a function expression:  

```javascript
// This is a function expression, not a declaration

(function greetPeople() {
  console.log("Good Morning");
})
```

There's a third kind of function in JavaScript called an arrow function. Syntactically, arrow functions look radically different from function declarations and expressions. Let's look at one:  

```javascript
let greetPeople = () => console.log("Good Morning!");
greetPeople();
```

Wow! That's quite a departure from the functions we've seen so far. Arrow functions are similar to function expressions, but they use a different syntax. The differences are not merely syntactic, however. We'll discuss them in more detail in the Core Curriculum.  

### The Call Stack

One important aspect of functions that all programmers need to understand is the concept of the **call stack**, or more casually, the **stack**.  

The call stack helps JavaScript keep track of what function is executing as well as where execution should resume when the function returns. To do that, it works like a stack of books: if you have a stack of books, you can put a new book on the top or remove the topmost book from the stack. In much the same way, the call stack puts information about the current function on the top of the stack, then removes that information when the function returns.  

Let's assume that we have the following code:

```javascript
function first() {
  console.log("first function");
}

function second () {
  first();
  console.log("second function");
}

second();
console.log("main function");
```

When this program starts running, the call stack initially has one item -- called a **stack frame** -- that represents the global (top-level) portion of the program. The initial stack frame is sometimes called the `main` function. JavaScript uses this frame to keep track of what part of the main program it is currently working on.

| Call Stack |
| :--------: |
|     -      |
|     -      |
|     -      |
|    main    |

When program execution reaches the function invocation on line 10, it first updates the `main` stack frame with the current program location. JavaScript will use this location later to determine where execution should resume when `second` finishes running.

After setting the location in the current stack frame, JavaScript creates a new stack frame for the `second` function and places it on the top of the call stack: we say that the new frame is **pushed** onto the stack. Our call stack now looks like this:

|  Call Stack   |
| :-----------: |
|       -       |
|       -       |
|    second     |
| main: line 10 |

Note that the frame for the `second` function is now *stacked* on top of the `main` frame. While the `second` frame is still on the stack, `main` remains stuck beneath it, inaccessible. At the same time, the `main` function becomes dormant and the `second` function becomes active.

The `second` function calls the `first` function on line 6. That action causes JavaScript to update the `second` frame so that JavaScript will know where to resume execution later. It then creates a new stack frame for the `first` function and pushes it to the call stack.

|   Call Stack   |
| :------------: |
|       -        |
|     first      |
| second: line 6 |
| main: line 10  |

Once the `first` function begins executing, it invokes the `console.log` method. All JavaScript functions and methods, including the built-in ones like `console.log`, share the same call stack. Therefore, we need to record our current location and then push a new frame to the stack:

|   Call Stack   |
| :------------: |
|  console.log   |
| first: line 2  |
| second: line 6 |
| main: line 10  |

Chances are, `console.log` also has several internal function calls. However, we will ignore them and just assume that `console.log` does all its work without any additional function calls. Instead, it just logs the message `first function` to the console, then immediately returns.

When `console.log` returns, JavaScript removes -- **pops** -- the top frame from the call stack. That's the frame for `console.log` in this example. That leaves the previous stack frame exposed. JavaScript uses this frame to determine where execution should resume. In this case, execution resumes immediately after line 2.

|   Call Stack   |
| :------------: |
|       -        |
| first: line 2  |
| second: line 6 |
| main: line 10  |

Eventually, the `first` function will return. When that happens, the `first` frame gets popped from the stack. That exposes the stack frame for `second`, and that, in turn, tells JavaScript that it should resume execution on line 6.

|   Call Stack   |
| :------------: |
|       -        |
|       -        |
| second: line 6 |
| main: line 10  |

When `second` finishes executing, the stack frame for `second` gets popped from the call stack, exposing the stack frame for `main`. The `main` frame tells JavaScript to resume execution on line 10.

|  Call Stack   |
| :-----------: |
|       -       |
|       -       |
|       -       |
| main: line 10 |

Eventually, the `main` function has no more code to run. When this happens, the `main` frame gets popped from the stack, and the program ends.

| Call Stack |
| :--------: |
|     -      |
|     -      |
|     -      |
|     -      |

The call stack has a limited size that varies based on the JavaScript implementation. That size is usually sufficient for more than 10000 stack entries. If the stack runs out of room, you will see a `RangeError` exception together with a message that mentions the stack.

---

## Flow Control

### Conditionals

A conditional is a fork (or multiple forks) in the road. Your data arrives at a conditional, which then tells the data where to go. The simplest conditionals use a combination of `if` statements with comparison and logical operators (`<`, `>`, `<=`, `>=`, `==`, `===`, `!=`, `!==`, `&&`, `||`) to direct traffic. They use the keywords `if` and `else`.  

### Comparisons

One thing to remember is that comparison operators return a boolean value: `true` or `false`.  

The expressions or values that an operator uses are its **operands**. In comparisons, the expressions to the left and right of the operator are the operands.  

- `===`

  The **strict equality operator**, also known as the **identity operator**, returns `true` when the operands have the same type _and_ value, `false` otherwise.

- `!==`

  The **strict inequality operator** returns `false` when the operands have the same type and value, `true` otherwise. Note that `!==` is the inverse of `===`: when `===` returns `true`, `!==` returns false, and vice versa.

- `==`

  The **non-strict equality operator**, also known as the **loose equality operator**, is similar to `===`. However, when the operands have different types, `==` coerces one of the operands to the other operand's type before it compares them. The result is `true` when the final values are the same, `false` otherwise. The coercion behavior can lead to unexpected results. For instance, when we compare the number `5` to the string `5` using `==`, we get `true`; with `===`, we get `false`.

- `!=`

  The **non-strict inequality operator**, also known as the **loose inequality operator**, is similar to `!==`. However, when the operands have different types, `!=` coerces one of the operands to the other operand's type before it compares them. The result is `false` when the final values are the same, `true` otherwise.  

  The rules that govern which operand `==` and `!=` coerces to the other are complex and difficult to remember. Avoid these operators when you can. For instance, you can use explicit coercion and `===` in most cases.  

- `<`

  The **less than operator** returns `true` when the value of the left operand has a value that is less than the value of the right operand, `false` otherwise.  

  The examples with strings are especially tricky! When comparing strings, the comparison is character-by-character. Ruby moves from left-to-right in the strings looking for the first character that is different from its counterpart in the other string. Once it finds a character that differs, it compares that character with its counterpart, and makes a decision based on that. If both strings are equal up to the length of the shorter string as in the next to last example, then the shorter string is considered less than the longer string.  

  If you use `<` with two different types, some sort of coercion will take place.

- `>`

  The **greater than operator** returns `true` when the value of the left operand has a value that is greater than the value of the right operand, `false` otherwise.  

  As with `<`, the `>` operator can be used to compare strings, and can even be used with mixed types (but with sometimes bizarre results).

- `<=`

  The **less than or equal to operator** returns `true` when the value of the left operand has a value that is less than _or equal to_ the value of the right operand, `false` otherwise. Note that `=<` is not a valid comparison operator.  

- `>=`

  The **greater than or equal to operator** returns `true` when the value of the left operand has a value that is greater than _or equal to_ the value of the right operand, `false` otherwise. Note that `=>` is not a valid comparison operator.  

### Logical Operators

You're beginning to get a descent grasp of baic conditional flow. Let's take a few minutes to see how we can combine multiple conditions to create more specific and complex scenarios. The `&&`, `||`, and `!` **logical operators** provide the ability to combine conditions:  

* `&&`

  The **and operator** returns `true` when both operands are `true` and `false` when either operand is `false`.

* `||`

  The **or operator** returns `true` when either operand is `true` and `false` when both operands are `false`.

* `!`

  The **not operator** returns `true` when its operand is `false` and returns `false` when the operand is `true`. That is, it negates its operand. Note that, unlike most operators, `!` takes a single operand; the operand appears to the right of the operator (e.g. `!true` returns `false` and `!false` returns `true`).

### Short Circuits

The `&&` and `||` operators both use a mechanism called **short circuit evaluation** to evaluate their operands.  Consider these two expressions:

```javascript
> isRed(item) && isPortable(item)
> isGreen(item) || hasWheels(item)
```

The first expression returns `true` when `item` is both red and portable. If either condition is `false`, then the overall result **must** be `false`. Thus, if the program determines that `item` is not red, it doesn't have to check whether it is portable. JavaScript short-circuits the entire expression by terminating evaluation as soon as it determines that `item` isn't red. It doesn't need to call `isPortable()` since it already knows that the entire expression must be `false`.  

Similarly, the second expression returns `true` when `item` is either green or has wheels. When either condition is `true`, the overall result **must** be `true`. Thus, if the program determines that `item` is green, it doesn't have to check whether it has wheels. Again, JavaScript short-circuits the entire expression once it determines that `item` is green. The entire expression must be `true`.  

### Truthiness

Notice that every `if` statement has an expression that evaluates as true or false. However, the expression doesn't have to be one of the boolean values, `true` and `false`. JavaScript can coerce any value to a boolean value, and that's what it does in conditional contexts like the `if` statement. Thus, you can use any expression in a conditional statement. We often say that the expression **evaluates as** or **evaluates to** true or false.  

When coercing a value to a boolean, JavaScript treats the following values as false:  

* `false`
* The number `0`. This includes all 3 variations of zero in JavaScript:
  * `0`: The ordinary zero value.
  * `-0`: A negative zero. That's mathematical nonsense, but a real thing in JavaScript.
  * `0n`: The `BigInt` version of zero.
* An empty string (`''`)
* `undefined`
* `null`
* `NaN`

Everything else evaluates to `true`.  

###### Operator Precedence

JavaScript has a set of **precedence** rules it uses to evaluate expressions that use multiple operators and sub-expressions. The following is a list of the comparison operations from the highest precedence (top) to lowest (bottom).

* `<=`, `<`,  `>`,  `>=` - Comparison
* `==`, `!=` - Equality
* `&&` - Logical AND
* `||` - Logical OR

With the precedence list in hand, we can look at the following expression and determine how to evaluate it:

```javascript
if (x || y && z) {
  // do something
}
```

For the moment, let's ignore the fact tha both `||` and `&&` are short-circuit operators. The program first evaluates the `y && z` sub-expression `&&` has higher precedence than `||`. It then takes the result of that evaluation and evaluates `x || result`.  

### The Ternary Operator

The **ternary operator** is a quick and easy way to write a short, concise, and simple if/else conditional. It uses a combination of the `?` and `:` symbols and takes 3 operands (hence, the name "ternary"):

```javascript
> 1 == 1 ? 'this is true' : 'this is not true'
= 'this is true'

> 1 == 0 ? "this is true" : "this is not true"
= 'this is not true'
```

The chief advantage that the ternary operator has over an `if/else` statement is that the entire structure is an expression; `if/else` is a statement, so it doesn't have a return value. What that means is that we can treat the ternary expression as a value: we can assign it to a variable, pass it as an argument, and so on.  

```javascript
> let message = true ? 'this is true' : 'this is not true'
= undefined

> message
= 'this is true'

> console.log(false ? 'this is true' : 'this is not true')
this is not true
= undefined
```

You can't do that with an `if/else` statement.  

### Switch Statement

A `switch` statement is similar to an `if` statement, but it has a different interface. It compares a single value against multiple values for strict equality (as with the `===` operator), whereas `if` can test multiple expressions with any condition.  

`switch` statements use the reserved words `switch`, `case`, `default`, and `break`. It's often easier to show rather than tell, and that's certainly the case with the `switch` statement. First, create a file named `switch.js` with this content:  

```javascript
let a = 5;

switch (a) {
  case 5:
    console.log('a is 5');
    break;
  case 6:
    console.log('a is 6');
    break;
  default:
    console.log('a is neither 5, nor 6');
    break;
}

// logs "a is 5" to the console
```

---

## Loops and Iterating

JavaScript loops have several forms, but the main looping structures use a looping keyword, a condition, and a block. These loops execute the loop's body (the block) for as long as the condition remains truthy. We use the term **one iteration** to describe executing the loop body once. JavaScript also has two other loop mechanisms: array abstractions and recursion. We'll see all of these mechanisms in this chapter.  

### while Loops

A `while` loop uses the `while` keyword followed by a conditional expression in parentheses and a block. The loop executes the block again and again for as long as the conditional expression remains truthy. In most programs, that loop should ultimately stop repeating. That means the block must do something that tells JavaScript when the loop should stop; that is, it needs to arrange for the conditional expression to become falsy. Otherwise, the loop is an **infinite loop** that never stops repeating.  

**increment operator** (`++`): increments its operand by `1`; that is, it adds `1` to the existing value.  

**decrement operator** (`--`): decrements a variable's value by `1`; that is, it subtracts `1` from the value.  

There are two forms of `++`: one that comes before the variable name (the pre-increment operator), and one that comes after (the post-increment operator). Both increment the variable, but they differ in what gets returned by the expression. The pre-increment form returns the new value of the variable, while the post-increment form returns the previous value of the variable.  

```javascript
> let a = 1;
> ++a;
= 2

> a
= 2

> a++
= 2

> a
= 3
```

There are corresponding pre-decrement and post-decrement operators (e.g., `--a` and `a--`) that work in a similar way.  

**Note**: There's a growing sentiment among some developers that the increment and decrement operators are harmful. It's easy to mistype them in ways that can lead to strange bugs, especially if you're not mindful of the return values. They recommend using the `+=` and `-=` operators instead; it's only a few characters more to type.

###### Looping Over Arrays With while

One of the most common uses of loops in programming is to **iterate** over the elements of an array and perform some action on each element. By iterate, we mean that we process each element one at a time, in sequence from the first to the last element.  

###### do/while Loop

A **do/while loop** differs visibly from a `while` loop, but its behavior is almost identical. The crucial difference is that `do/while` always executes the code in the block at least once. A `while` loop can't make that guarantee since the initial condition may be falsy; if it is, the loop body doesn't run. In a `do/while` loop, the conditional check occurs at the end of the loop instead of the beginning which allows it to run the code at least once, even if the condition is falsy when the loop begins.  

Let's write some code that illustrates how `do/while` works. We'll ask the user whether he wants to repeat an action, and then repeat the question if he enters `y`.  

```javascript
let answer;
do {
  answer = prompt("Do you want to do that again?");
} while (answer === 'y');
```

### for Loops

`for` loops have the same purpose as `while` loops, but they use a condensed syntax that works well when iterating over arrays and other sequences. A `for` loop combines variable initialization, a loop condition, and the variable increment/decrement expression all on the same line:  

```javascript
for (initialization; condition; increment) {
  // loop body
}
```

This structure behaves almost the same as:

```javascript
initialization;
while (condition) {
  // loop body
  increment;
}
```

The sole difference between the two loops is the scope of any variables declared by the initialization clause. In the `while` statement, the scope includes the code that surrounds the loop; in the `for` statement, the scope is the `for` statement and its body.  

`for` loops let you see and understand the looping logic at a single glance. The syntax also lets you move the `index` variable from the global scope into the scope of the `for` statement, and it helps make your code cleaner and more organized.  

### Controlling Loops

JavaScript uses the keywords `continue` and `break` to provide more control loops. `continue` lets you start a new iteration of the loop, while `break` lets you terminate a loop early.  

`continue`  

Let's continue working with the names program.  Suppose we want all the uppercase names in our `upperNames` array except `Naveed`. The `continue` statement can help us do that.  

When a loop encounters the `continue` keyword, it skips running the rest of the block and jumps ahead to the next iteration.  

`break`  

You sometimes want to skip all remaining iterations of a loop. For instance, when you search an array for a specific value, you probably want to stop searching once you find it. There's no reason to keep searching if you don't need any subsequent matches.  

### Array Iteration

JavaScript arrays have several methods that iterate over the elements without using any of the looping syntax we've seen, such as with the `forEach` method.  

There are several other iterating methods in JavaScript; over time, you'll probably use them all. For now, know that most JavaScript programmers prefer to use **array looping abstractions** like `forEach` to loop over arrays.  

### Recursion

**Recursive** functions are functions that call themselves. Such code doesn't look much like a loop, but there's a close relationship between loops and recursion.  The relationship is close enough that we say that recursion is another way to create loops in JavaScript.  

Every recursive function has a **baseline condition** that marks the end of the recursion and some code that recursively calls the function with a new argument. In most cases, the baseline condition returns a concrete value that gets reused as teh code "unwinds" the recursive calls. Each unwind step uses the previous return value(s) to calculate an intermediate result that gets returned in the next step.  

---

## Arrays

### What is an Array?

An array is an ordered list of **elements**; each element has a value of any type. You can define an array by placing a list of values between brackets (`[]`):  

```javascript
> let myArray = [2, 'Pete', 2.99, 'another string']
```

This example demonstrates that arrays are **heterogenous**; `myArray` has both number and string values.  Arrays can have anything in them, including objects and even other arrays.  

Each element in an array has a unique index number that gives the position of the element in the array. Thus, we can say that arrays are **indexed lists** as well as ordered lists.  

### Modifying Arrays

Arrays wouldn't be practical if we couldn't modify them. We need the ability to add, remove, and replace elements.  The `[]` operator and some array methods help us accomplish these tasks.  

### Iteration Methods

`forEach` and `map` are important methods, but they can confuse beginners. The main thing to remember is that `forEach` performs simple iteration and returns `undefined`, while `map` transforms an array's elements and returns a new array with the transformed values.  

###### Filtering Arrays with `filter`

The `filter` method is another array iteration method. It returns a new array that includes all elements from the calling array for which the callback returns a truthy value. That's a mouthful. Some code should help clarify what `filter` does:  

```javascript
> let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2 ]
> numbers.filter(num => num > 4)
= [ 5, 6, 7, 8, 9, 10 ]

> numbers
= [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2 ]
```

###### Building New Values from Arrays with `reduce`

The `reduce` method is perhaps one of the hardest to understand, yet it is also one of the most fundamental. You can build `forEach`, `map`, and `filter` with `reduce`, as well as a number of other iterative methods defined for Arrays.  

`reduce` takes two arguments: a callback function and a value that initializes something called the **accumulator**. The callback function takes two arguments as well: an element from the array, the current value of the accumulator. It returns a value that will be used as the accumulator in the next invocation of the callback. That sounds more complicated than it is, so let's take a look at two simple uses of `reduce`: 

```javascript
> let arr = [2, 3, 5, 7]
> arr.reduce((accumulator, element) => accumulator + element, 0)
= 17

> arr.reduce((accumulator, element) => accumulator * element, 1)
= 210
```

The first of the invocations computes the sum of all the values in the array, e.g., `2 + 3 + 5 + 7`. To get us started, we initialize the accumulator to 0. Thus, on the first invocation of the callback function, `accumulator` is `0` and `element` is `2`. The callback returns `2`, which becomes the new `accumulator` value when we invoke the callback again, this time with the element `3`. That invocation, in turn, returns `5`. This process continues until the final return value is `17`.  

The second invocation of `reduce` computes the product of the numbers in the array (`2 * 3 * 5 * 7`), starting out with `1` as the accumulator. (If we started with `0` as the accumulator, the final return value would be `0` since `0` times anything is `0`.)  

---

## Objects

Object Oriented Programming is a programming paradigm that centers around modeling problems as **objects** that have **behavior** (they perform actions) and **state** (they have characteristics that distinguish between different objects). JavaScript objects support this paradigm, but we won't need them in this book. For now, we'll discuss objects as complex data structures, similar to arrays.  

### What are Objects?

Objects store a colletion of **key-value pairs**: each item in the collection has a name that we call the **key** and an associated **value**. Contrast this with arrays, which we associate values with ordered indexes. Other languages have similar key-value data structures, but they may use different names like dictionaries, associative arrays, maps, and hashes. Some developers may even use these terms regarding JavaScript objects, but it's better to use the correct name: objects.  

An object's keys are strings, but the values can be any type, including other objects. We can create an object uisng **object literal** syntax:  

```javascript
let person = {
  name: 'Jane',
  age: 37,
  hobbies: ['photography', 'genealgy'],
}
```

You can also write that on a single line, which is handy in `node`:

```javascript
> let person = { name: 'Jane', age: 37, hobbies: ['photography', 'genealogy'] }
```

We can access s specific value in an object in two ways: 1) dot notation and 2) bracket notation.  

```javascript
// dot notation
> person.name
= 'Jane'

// bracket notation
> person['age']
= 37
```

Key-value pairs are also called object **properties** in JavaScript. We can also use "property" to refer to the key name; the meaning is typically clear from context. For instance, we can talk about the `name` property for the `person` object without mentioning the value.  

### Objects vs. Primitives

You may remember that JavaScript has two categories of data types: primitive and objects. The primitive types are strings, numbers, booleans, `null`, and `undefined`. Primitive types are the simplest, most basic types in JavaScript.  

Objects include, but aren't limited to, the following types:  

* Simple Objects
* Arrays
* Date Objects
* Functions

We learned about simple objects in the previous section; they're structures that contain multiple named values. Arrays are also objects, but they use integer indexes instead of keys. We learn about Date and Function objects in the Core Curriculum.  

Objects are complex values composed of primitive values or other objects. For example, an array object (remember: arrays **are** objects) has a `length` property that contains a number: a primitive value. The critical thing to note is that we can change parts of an object, which means that objects are mutable.  

Primitive values are immutable; they don't have parts that one can change. Such values are said to be **atomic**; they're indivisible. If a variable contains a primitive value, all you can do to that variable is use it in an expression or reassign it: give it an entirely new value. All operations on primitive values evaluate as new values. Even something like `0 + 0` evaluates to a new value of `0`.  

### Prototypes

An interesting and handy feature of JavaScript objects is that they can **inherit** from other objects. When an object `a` inherits from object `b`, we say that `b` is the prototype of `a`. The practical implication is that `a` now has access to properties defined on `b` even though it doesn't define those properties itself.  

The static method `Object.create` provides a simple way to create a new object that inherits from an existing object:

```javascript
let bob = { name: 'Bob', age: 22 };
let studentBob = Object.create(bob);
studentBob.year = 'Senior';

console.log(studentBob.name); // logs 'Bob'
```

`Object.create` creates a new object and sets the prototype for that object to the object passed in as an argument. Our example creates a new object named `studentBob` that uses `bob` as its prototype. That is, it creates an inheritance relationship from `studentBob`, the **child** object, to `bob`, the **parent** object.  

Since `studentBob` inherits from `bob`, we can use the `name` property even though `studentBob` doesn't explicitly define it. `Object.create` is one way to use inheritance in JavaScript. We learn more about it and other techniques in our JavaScript courses.  

### Objects vs. Arrays

When you need to choose between an object or an array to store some data, ask yourself a few questions:  

* Do the individual values have names or labels? If yes, use an object. If the data doesn't have a natural label, an array should suffice.  
* Does order matter? If yes, use an array.
* Do I need a _stack_ or _queue_ structure? Arrays are good at mimicking simple "last-in-first-out" stacks and "first-in-first-out" queues.  

---

## More Stuff

### Variables as Pointers

In this section, we'll examine the concepts behind variables and **pointers**. Specifically, we'll see how some variables act as pointers to a place (or address space) in memory, while others contain values.  Beware: new programmers often have trouble mastering these topics, but the material is crucial.  

Developers sometimes talk about **references**. At Launch School, we use both terms interchangeably. You can say that a variable points to or references an object in memory, and you can also say that the pointers stored in variables are references. Some languages make a distinction between references and pointers, but JavaScript does not; feel free to use either term.  

As we've learned, JavaScript values fall into one of two broad categories: primitive values and objects. Primitive values are easier to understand, so we'll start there.  

###### Working With Primitive Values

Try running this code in `node`:

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

What's crucial to understand at this point is that variables that have primitive values store those values in the variable. When you assign a new value to a variable, JavaScript changes the variable's content to the new value. That's a simple operation that doesn't affect other variables, even those with the same value.  

In reality, string values aren't stored in the variables, but they **act** like they are.  

###### Working with Objects and Non-Mutating Operations

Let's look at another example. This time, we'll use arrays. Remember that arrays in JavaScript are objects, and almost everything we say about arrays holds for objects as well.  

```javascript
> let c = [1, 2]
> let d = c
> c = [3, 4]
> c
= [3, 4]

> d
= [1, 2]
```

Again, this example holds no surprises. Reassigning `c` on line 3 creates a new array, but the code doesn't affect the value of `d`. The two variables return different arrays.  

This code works as expected since reassignment doesn't mutate the variable to the left of the assignment operator. Instead, it changes the variable in such a way that it refers to the array on the right.  

As with primitive values, this is straightforward: each variable has a value, and reassigning values does not affect any other variables that happen to have the same value. Thus, `c` and `d` can have independent values.  

That must mean that arrays and other objects get stored directly inside variables like primitive values do, right? That seems logical, and so far, we've no reason to doubt it. However, it's wrong.  

Let's see what happens with a mutating operation like the `push` method:

```javascript
> let e = [1, 2]
> let f = e
> e.push(3, 4)
> e
= [ 1, 2, 3, 4 ]

> f
= [ 1, 2, 3, 4 ]
```

Now, that's interesting and puzzling. We mutated the array given by `e`, but it also changed the array given by `f`! How could that happen if the variables contain the array values? It can't, and therein lies the concept of **pointers** or **references**.  

It's still the case that primitive values get stored directly inside variables, but the situation with objects and arrays is different. Instead, the values get stored in a region of memory known as the **heap**--you don't have to remember that term--and the variable gets to a different value, one that points to or references the real value of the heap.  

Thus, after running line 2, `e` and `f` both contain the same pointer value: it references the array value `[1, 2]`. When line 3 runs, it uses the pointer to access and mutate the array by appending `3` and `4` to its original value. Since `f` also points to that same array, both `e` and `f` reflect the updated contents of the array. Some developers call this aliasing: `e` and `f` are aliases for the same value.  

Okay, that's good. What happens if we mutate a primitive value? Oops! You can't do that: all primitive values are immutable. Two variables can have the same primitive value, but they can never be aliases for the same value. If you give one variable a new value, it doesn't affect the other.  

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

The takeaway of this section is that JavaScript stores primitive values in variables, but it uses pointers for non-primitive values like arrays and other objects. Pointers can lead to surprising and unexpected behaviour when two or more variables reference the same object in the heap. Primitive values don't have this problem.  

When using pointers, it's also important to keep in mind that some operations mutate objects, while others don't. For instance, `push` mutates an array, but `map` does not. In particular, you must understand how something like `x = [1, 2, 3]` and `x[2] = 4` differ: both are reassignments, but the second mutates `x` while the first does not.  

**Note:** The idea that JavaScript stores primitive values directly in variables is an oversimplification of how it works in the real world, but it mirrors reality well enough to serve as a mental model for almost all situations. Don't sweat the details right now.  



















