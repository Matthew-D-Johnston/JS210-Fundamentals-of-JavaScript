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



---

### Passing an Argument into a Function may or may not permanently change the value that a variable contains or points to



---

### Working with Strings, Arrays, and Objects

#### In particular, be thoroughly familiar with the basic Array iteration methods (`forEach`, `map`, `filter`, and `find`) and how to use Object methods to access the keys and values in an Object as an Array.  

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

One feature of JavaScript that sets it apart from most other languages is that it has first-class functions. That means that functions are values: you can assign them to variables, pass them around as arguments to other functions, and even use them as return values in other functions.

---

### Side-effects



---

### Naming Conventions (legal vs. idiomatic)



---

### Pure Functions and Side Effects



