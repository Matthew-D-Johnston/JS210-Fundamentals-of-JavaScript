##### JS211 Assessment: Fundamentals of JavaScript for Programmers

---

## Study Guide

### Assignments and Comparison



---

### Variable Scope (especially how variables interact with function definitions and blocks)



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





---

### Object Properties and Mutation



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



---

### console.log vs return



---

### Truthiness: `false` and `true` vs. falsy and truthy



---

### Function Definition and Function Invocation



---

### Function Declarations, Function Expressions, and Arrow Functions



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



