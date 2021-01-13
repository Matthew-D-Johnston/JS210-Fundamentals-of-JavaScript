##### JS210 - JavaScript Language Fundamentals

---

# Functions

## 1. Local vs Global Part 1

What will the following code log to the console and why? Don't run the code until after you have tried to answer.

```javascript
var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);
```

###### My Solution

Expected output:

```
This is global
```

1. On line 1, we declare the variable `myVar` and assign it to the string value `'This is global'`.
2. On line 3, we declare the function `someFunction()`.
3. Between the function body (lines 3 - 5), on line 4, we declare a local variable `myVar` and assign it the string value `'This is local'`. Here, we create a separate local variable from the other `myVar` global variable created on line 1.
4. On line 7, we invoke the function `someFunction()`. This does not reassign anything to our global `myVar` variable for the reason outlined in point 3.
5. On line 8, we log the value of `myVar` to the console.

###### LS Solution

Output:

```
This is global
```

JavaScript uses lexical scope. This means that it determines the scope of a variable by the structure of the program. This program declares a variable named `myVar` in two places. The first is outside of any function, giving the first `myVar` a _global_ scope. The second place is inside of `someFunction`. Functions in JavaScript create a new scope – a scope that is "_local_" to the function. This local scope is also referred to as an "inner" scope in relation to the global "outer" scope.  

On line 8, `console.log(myVar)` logs `"This is global"` because the two `myVar` variables, on lines 1 and 4, belong to different scopes. `someFunction` has its own local "inner" scope, so the `myVar` declaration within the function has no effect on the global "outer" scope.

---

## 2. Local vs Global Part 2

What will the following code log to the console and why? Don't run the code until after you have tried to answer.

```javascript
var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();
```

###### My Solution

Expected output:

```
This is local
```

The main difference with this program as opposed to the one in problem 1 is that we log the value of the local `myVar` variable from within the `someFunction` function. This bit of code gets executed when we invoke `someFunction` on the last line.

###### LS Solution

Output:

```
This is local
```

There is only one small difference between this exercise and the previous one: this time, the `console.log(myVar)` expression is located inside of the function.  

Recall that there is a `myVar` variable in both the global scope (line 1) and a local scope (line 4). Supposedly, variables in the global scope are accessible from anywhere in the program. In this case however, JavaScript gives priority to the `myVar` in the local scope, since that's the same scope from which `myVar` is being referenced by `console.log`. Because it has the same name, the global `myVar` cannot be accessed from within the local scope of the function. This type of behaviour is called variable **shadowing**.

---

## 3. Local vs Global Part 3

What will the following code log to the console and why? Don't run the code until after you have tried to answer.

```javascript
var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);
```

###### My Solution

Expected output:

```
This is local
```

This time, within the function body on line 4, we are not _declaring_ a local variable but _reassigning_ the global `myVar` with a new string value, `'This is local'`. Thus, when `someFunction()` is invoked on line 7, it causes the reassignment to occur. Then, on line 8, when we log the value of `myVar` to the console, we see that `This is local` is the output, as expected.

###### LS Solution

```
This is local
```

In contrast to the previous two exercises, this program only has one variable declaration, so there is only one `myVar` variable insted of two. Therefore, when `someFunction` is invoked, it reassigns a new string to the global `myVar`. This is possible because variables in the global scope can be accessed and modified from within an inner scope.  

---

## 4. Variable Lookup

What will the following code log to the console and why? Don't run the code until after you have tried to answer.

```javascript
var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();
```

###### My Solution

Expected output:

```
This is global
```

The invocation of `someFunction()` on the last line executes a call to log the value of `myVar` to the console. Since `myVar` is defined in the global scope and can be accessed from within the function body, the value that is logged is `This is global`.

###### LS Solution

Output:

```
This is global
```

When `console.log` tries to log the value of `myVar`, JavaScript first attempts to find a variable with that name in the current scope (i.e., the local scope of `someFunction`). Since `myVar` does not exist in this scope, JavaScript then starts looking for `myVar` in the next outer scope, which happens to be the global scope in this case. Here, JavaScript finds the global `myVar` and logs its value, `"This is global"`.  

When a variable is referenced, JavaScript will first look for a variable with the same name in the current scope, then keep moving up through subsequent outer scopes until the variable is found. If JavaScript reaches the outermost (global) scope without finding the variable, a `ReferenceError` will be raised in most situations, but this is not always the case, as you will see in the next exercise.  

---

## 5. Variable Scope

What will the following code log to the console and why? Don't run the code until after you have tried to answer.

```javascript
function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);
```

###### My Solution

Expected output:

```
undefined
```

In this case, we declare a function called `someFunction()` which assigns the string value `'This is global'` to a variable called `myVar`. It is important to note that `myVar` is not declared within the function body; rather, it is only assigned a value.  

Thus, after invoking `someFunction()`, `myVar` is assigned the value `'This is global'`, but it is only has this reference within the local scope of the function. When we try to log the value of `myVar` to the console, we won't get the value that was locally assigned to `myVar`. However, we also won't get an error because JavaScript will essentially treat the program as if `myVar` was declared in the local scope but without any assignment; or rather, an assignment to `undefined`.

###### LS Solution

Output:

```
This is global
```

Notice that on line 2 there is no variable declaration for `myVar` (i.e., there is no `var` keyword before `myVar`). As a result of this, JavaScript looks in the outer scope for the declaration. Since it doesn't exist, JavaScript binds `myVar` to be a "property" of the _global_ object. This is "almost" the same as if `myVar` was globally declared. We will discuss more about why this is "almost" – but not "exactly" – the same in a later course when we cover the global / `window` object.  

---

## 6. Arguments Part 1

What will the following code log to the console and why? Don't run the code until after you have tried to answer.

```javascript
let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);
```

###### My Solution

Expected output:

```
17
```

1. On line 1, we declare the variable `a` and assign it a value of `7`.
2. On line 3, we declare a function `myValue(b)` with a single parameter, `b`.
3. Within the body of the function (lines 3 - 5), on line 4, we increment the value assigned to the local variable `b` by `10`.
4. On line 7, we invoke the `myValue(a)` function, passing in the variable `a` as an argument. The value assigned to `a` gets assigned to the local variable `b`, but `b` is also acting as a reference to `a`. That means that when the value of `b` is incremented by `10`, the value of `a` is also incremented by `10`.
5. On line 8, we log the value referenced by `a` to the console. That value is now `17`.

###### LS Solution

Output:

```
7
```

The code logs `7` to the console. The value assigned to variable `a` is `7` and it is a primitive value. Primitive values in JavaScript are immutable. Therefore, passing the variable `a` that is assigned a primitive value as an argument to a function, and consequently using it on any operation in the body of the function does not have any effect on the value assigned to `a`.  

---

## 7. Arguments Part 2

What will the following code log to the console and why? Don't run the code until after you have tried to answer.

```javascript
let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);
```

###### My Solution

Expected output:

```
7
```

It may look as though the incrementing of `a` within the function body is affecting the global variable `a` that we declare on the first line, but it is not. The `a` within the function body is simply the function parameter `a`. Thus, similar to the last exercise, this has no impact on the globally scoped variable.

###### LS Solution

Output:

```
7
```

As with the previous exercise, Arguments Part 1, the code logs `7` to the console. The main difference is that this code demonstrates the concept of _variable shadowing_. In JavaScript, when an argument is passed to a function, a local variable with the same name as the corresponding parameter is created within the inner scope of the function. Therefore, there are two variables named `a` that exist in this program: one in the global scope and the other in the function's local scope. Therefore, the reassignment of the local variable `a` within the function has no effect on the global variable `a`.

---

## 8. Arguments Part 3

What will the following code log to the console and why? Don't run the code until after you have tried to answer.

```javascript
let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);
```

###### My Solution

The output from logging the value associated with variable `a` to the console is...

```
[1, 2, 10]
```

The reason is that the `myValue` function takes the third entry of the array object and increments it by `7`. Array objects are mutable, and thus we can reassign third entry.

###### LS Solution

```javascript
[1, 2, 10]
```

###### Discussion

The code logs `[1, 2, 10]` to the console. This is because arrays and objects, in JavaScript, are mutable. When the value assigned to `a`, an array, is passed to the function on line 7, a local variable `b` is initialized (on line 3) to the same array that `a` is assigned. Therefore, when the program executes the statement `b[2] += 7` on line 4, it is actually being executed on the array assigned to `a`. Consequently, when the value of `a` is logged on line 8, we can see the result of this mutation: `[1, 2, 10]`.

---

## 9. Variable Declarations

What will the following code log to the console and why? Don't run the code until after you have tried to answer.

```javascript
console.log(a);

var a = 1;
```

###### My Solution

Expected output:

```
1
```

It might appear that trying to log the value of `a` to the console before declaring it would raise an exception. However, the concept of "hoisting" demonstrates that this is not the case. The variable declaration gets hoisted above the attempt to log the value of the variable to the console, resulting in no error.

###### LS Solution

Output:

```
undefined
```

Behind the scenes, the JavaScript interpreter does many things, and one of them is **hoisting**. To begin to understand this concept, let's dissect what happens during a variable declaration.  

On line 3, the program initializes the variable `a` to a value of `1`. Dissecting this, there are actually two things happening here: (1) the variable `a` is declared and (2) `a` is assigned a value of `1`.  

Knowing this, we can now define hoisting. The JavaScript interpreter doesn't "immediately" execute all of a program's code line by line. Instead, it first goes over the code to find and associate variable declarations with their appropriate scope. Visually, this is as if JavaScript moves (or "hoists") each variable declaration to the top of its scope. The assignment operation, however, is not hoisted.  

Here is the code after hoisting:

```javascript
var a;
console.log(a);

a = 1;
```

Given this new code, it becomes apparent why the program logs `undefined` on line 2: the assignment of `1` to `a` has not yet occurred.

---

## 10. Function Declarations

What will the following code log to the console and why? Don't run the code until after you have tried to answer.

```javascript
logValue();

function logValue() {
  console.log('Hello, world!');
}
```

###### My Solution

Expected output:

```
Hello, world!
```

My guess is that in the case of functions, the whole function along with its definition body is hoisted. Thus, when the function is invoked on the first line, it will act as if the invocation occurred after the function declaration.

###### LS Solution

Output:

```
Hello, world!
```

Recall from the previous exercise that **hoisting** is the process of finding and associating variable declarations with their respective scope--prior to the execution of all other code. In addition to variable declarations, the JavaScript interpreter also hoists function declarations. However, in contrast to how only the name of a variable is hoisted, with function declarations everything is hoisted, including both the function name and body. This means that the program can execute a function even before declaring it.  

Here is the code after hoisting:  

```javascript
function logValue() {
  console.log('Hello, world!');
}

logValue();
```

###### Further Exploration

Let's refactor the code a bit. What does it log now? What is the hoisted equivalent of this code?

```javascript
var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue);
```

###### My Solution

Expected output:

```
string
```

After hoisting:

```javascript
function logValue() {
  console.log('Hello, world!');
}

var logValue;

logValue = 'foo';

console.log(typeof logValue);
```

