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

