##### JS211 Assessment: Fundamentals of JavaScript for Programmers

---

## Study Guide

### Assignments and Comparison

###### Assignment

There is a subtle difference in terminology surrounding the `=` token. When used in a declaration, the `=` is just a syntactic token that tells JavaScript that you're going to supply an initial value for the variable. However, in an assignment, the `=` is called the **assignment operator**.  

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





---

### Function Scope



---

### Hoisting



---

### Primitive Values, Types and Type Conversions/Coercions

###### Data Types

JavaScript has five so-called **primitive data types:**

* String
* Number
* Undefined
* Null
* Boolean

Every type that is not a primitive type is an **object type**.

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

###### Data Structures

The two most common data structurs, complex data types, that JavaScript programmers use are arrays and objects.  

##### Arrays

The most important facts to remember about arrays are:

* The order of the elements is significant.
* Use index numbers to retrieve array elements.
* Index numers are non-negative integers starting from `0`.

##### Objects

A dictionary-like data structure that matches keys with specific values. The most important thing to remember about objects is that you use keys to set or retrieve values.  





---

### Object Properties and Mutation

Mutation is a concern when dealing with arrays and objects, but not with primitive values like numbers, strings, and booleans. Primitive values are **immutable**. That means their values never change: operations on immutable values always return new values. Operations on **mutable** values (arrays and objects) may or may not return a new value and may or may not mutate data.  

How do you know which methods mutate the caller and which don't? It's useful to know that all primitive values are immutable, so this question never arises when dealing with them. However, there's no way to tell whether a function mutates an array or object. You have to use the documentation or memorize it through repetition.  

JavaScript is both a pass-by-value and pass-by-reference language. It uses pass-by-value when dealing with primitive values and pass-by-reference with objects and arrays.  



---

### Differences between Loose and Strict Equality



---

### Passing an Argument into a Function may or may not permanently change the value that a variable contains or points to



---

### Working with Strings, Arrays, and Objects

#### In particular, be thoroughly familiar with the basic Array iteration methods (`forEach`, `map`, `filter`, and `find`) and how to use Object methods to access the keys and values in an Object as an Array.  



---

### Understand that arrays are objects, and be able to determine whether you have an Array



---

### Variables as Pointers

A variable is simply a named area of a program's memory space where the program can store data. Typically, variables can be changed. That is, we can make a variable point to a different area of memory that has a different value.  



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



###### Invocation

Programmers often talk about function **invocation** and **invoking** functions. The terms are synonymous with "call" and "calling." You _invoke_ or write a _function invocation_. We use these terms as well.  



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





---

### Implicit Return Value of Function Invocations



---

### First-class Functions



---

### Side-effects



---

### Naming Conventions (legal vs. idiomatic)



---

### Pure Functions and Side Effects



