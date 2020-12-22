##### JS210 Fundamentals of JavaScript for Programmers > Objects

---

## 1. Introduction to Objects

JavaScript is an *object-oriented* language; the code in a JavaScript program uses objects to organize code and data. Typically, data values and the functions that operate on those values are part of the same object.

### Standard Built-in Objects

JavaScript provides built-in objects, including `String`, `Array`, `Object`, `Math`, `Date`, and more. You've already worked with objects in this course. For example, when you apply `toUpperCase` to a string, you're calling the method `toUpperCase` on a built-in `String` object:

```javascript
'hi'.toUpperCase();     // "HI"
```

One thing to notice is that some of the built-in objects share their names with some of the primitive data types (i.e., `String` and `Number`). While the names are the same, they differ from each other. As primitive values, we theoretically can't call methods on them (i.e., getting the length of a string) since it is only the object data type that you can call methods on. Luckily, JavaScript *temporarily* coerces primitives to their object counterpart when necessary, which means that we typically don't need to worry about whether we're working with a primitive or an object (`undefined` has no built-in object counterpart).  

To see what this means, let's explore what happens when JavaScript executes the below code:  

```javascript
let a = 'hi';                        // Create a primitive string with value "hi"
typeof a;                            // "string"; This is a primitive string value

let stringObject = new String('hi'); // Create a string object
typeof stringObject;                 // "object"; This is a String object

a.toUpperCase();                     // "HI"
stringObject.toUpperCase();          // "HI"

typeof a;                            // "string"; The coercion is only temporary
typeof stringObject;                 // "object"
```

The same is true for other primitive types (except `null` and `undefined`):

```javascript
42.5639.toFixed(2);                  // "42.56"
true.toString();                     // "true"
```

With this, we have the benefit of not having to explicitly create the object form of strings, numbers, and booleans to use methods on them.

### Creating Custom Objects

The standard built-in objects are all you need for most simple programs. Larger programs, however, often benefit from using custom objects that are specific to their needs.  

You can create your own objects using the object literal notation:

```javascript
let colors = {
  red: '#f00',
  orange: '#ff0',
}

typeof colors;			// "object"
colors.red; 				// "#f00"
colors.orange;			// "#ff0"
```

There are two more ways to create objects: with an object constructor function, like `new String('foo')`, or with the `Object.create` method. We'll discuss these later when we get to the Object Oriented JavaScript topics.

### Properties

Objects are containers for two things: data and behavior. The data consists of named items with values; the values represent the attributes of the object. In JavaScript, we call these associations between a name (or key) and a value, **properties**.  

To get the value of an object property, you can append a single dot followed by the property name, to the object's name:  

```javascript
let animal = 'turtle';
animal.length;          // 6

let colors = {
  red: '#f00',
  orange: '#ff0',
};

colors.red;             // "#f00"

'blue'.length;          // 4 - works with primitives too
```

You can set a new value for a property with assignment:

```javascript
let count = [0, 1, 2, 3, 4];
count.length = 2;

let colors = {
  red: '#f00',
  orange: '#ff0',
};

colors.blue = '#00f';
```

### Methods

Functions define the behavior of an object. When they are part of an object, we call them **methods**. To call a method on an object, you access the method as though it is a property (it is!), and call it by appending parentheses. You can pass arguments to the method by listing them between the parentheses, just like with a function call. In fact, JavaScript methods are just Functions with some special behavior that we'll explore later.  

Here are some method calls:  

```javascript
(5.234).toString();       // "5.234"
'pizza'.match(/z/);       // [ "z", index: 2, input: "pizza" ]
Math.ceil(8.675309);      // 9
Date.now();               // 1467918983610
```

#### Arrow Functions and Methods

It's possible to define methods as arrow functions. However, as you'll learn later, that is not a good idea. Arrow functions have a subtle behavior that, in most cases, makes them unsuitable for use as methods. For now, just remember not to use arrow functions as methods.  

Note that it is safe to use arrow functions in the body of a method; just don't use them to define the actual method.

### Capitalization

You may have noticed that we often use capitalized names like `String`, `Array`, `Object`, and even `Function` when discussing types, values, and objects in JavaScript, while at other times we will use lowercase names (string, array, object). The differences between these are ill-defined, so most people ignore them, and often use the capitalized and lowercased names interchangeably. Even we do it at times. Here are some guidelines to help you decide whether you should capitalize a name:

- If you are speaking about a primitive type, use the lowercase name: string, number, boolean. If you are speaking about the object form of a primitive type, use the capitalized name: String, Number, Boolean, Object. Don't stress over this; it's often hard to decide which you should use, and we won't force you to use the "right" one.
- Use object to refer to objects in general. Use Object when referring to methods and properties from the `Object` class (note that *class* is a bit of a misnomer - JavaScript doesn't have true classes). Likewise, use array to refer to array objects. Use Array when referring to methods and properties from the `Array` class. Again, don't stress over this; it's even harder at times to decide which form you should use, so don't worry about it.
- Later, in another course, we'll meet the object-oriented aspects of JavaScript. OO JS often uses functions and "prototype objects" with capitalized names. This is mostly a convention, but it's important that you use the same capitalization when referring to those functions and prototypes. Thus, if you want to create a Date object, you must use `new Date()` instead of `new date()`.

Once again, these are only guidelines. We bring this to your attention only because you will see both the capitalized and lowercase forms of these words, but you don't often need to worry much about the differences.

---

## 2. Object Properties

