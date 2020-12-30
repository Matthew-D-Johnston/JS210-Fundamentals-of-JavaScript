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

### Property Names and Values

A property name for an object can be any valid string, and a property value can be any valid expression:

```javascript
let object = {
  a: 1,														// a is a string with quotes omitted
  'foo': 2 + 1,										// property name with quotes
  'two words': 'this works too',	// a two word string
  true: true,											// property name is implicitly converted to string "true"
  b: {														// object as property value
  	name: 'Jane',
  	gender: 'female',
	},
  c: function () {								// function expression as property value
    return 2;
  },
  d() {
    return 4;											// compact method syntax
  }
};
```

### Accessing Property Values

You can access property values using "dot notation" or "bracket notation":

```javascript
let object = {
  a: 'hello',
  b: 'world',
};

object.a;									// "hello", dot notation
object['b']								// "world", bracket notation
object.c									// undefined when property is not defined

let foo = {
  a: 1,
  good: true,
  'a name': 'hello',
  person: {
    name: 'Jane',
    gender: 'female',
  },
  c: function () {				// function expression as property value	
    return 2;
  },
  d() {										// compact method syntax
    return 4;
  }
};

foo['a name'];	// "hello", use bracket notation when property name is an invalid identifier
foo['goo' + 'd']; 			// true, bracket ntation can take expressions
let a = 'a';
foo[a];					// 1, bracket notation works with variables since they are expressions
foo.person.name;			// "Jane", dot notation can be chained to "dig into" nested objects
foo.c();							// 2, Call the method 'c'
foo.d();							// 4, Call the method 'd'
```

JavaScript style guides usually recommend using dot notation when possible.  

### Adding and Updating Properties

To add a new property to an object, use "dot notation" or "bracket notation" and assign a value to the result:  

```javascript
let object = {} 						// empty object

object.a = 'foo';
object.a; 									// "foo"

object['a name'] = 'hello';
object['a name'];						// "hello"

object;											// { a: "foo", "a name": "hello" }
```

If the named property exists, the assignment updates the property's value:  

```javascript
let object = {};

object.a = 'foo';
object.a;									// "foo"

object.a = 'hello';
object.a;									// "hello"

object['a'] = 'world';
object.a;									// "world"
```

You can use the reserved keyword `delete` to delete properties from objects:  

```javascript
let foo = {
  a: 'hello',
  b: 'world',
};

delete foo.a;
foo;									// { b: "world" }
```

---

## 3. Stepping Through Object Properties

Objects are a collection type. This means a single Object can store multiple values. A common task is to perform some action for each element in a collection. You can do this with a `for…in` loop:

```javascript
let nicknames = {
  joseph: 'Joey',
  margaret: 'Maggie',
};

for (let nick in nicknames) {
  console.log(nick);
  console.log(nicknames[nick]);
}

// logs on the console:
joseph
Joey
margaret
Maggie
```

You can also retrieve the names of all properties in an object with `Object.keys`:

```javascript
let nicknames = {
  joseph: 'Joey',
  margaret: 'Maggie',
};

Object.keys(nicknames);  // [ 'joseph', 'margaret' ]
```

---

## 4. Practice Problems: Working with Object Properties

1. Write a function named `objectHasProperty` that takes two arguments: an Object and a String. The function should return true if the Object contains a property with the name given by the String, false otherwise.

   ```javascript
   let pets = {
     cat: 'Simon',
     dog: 'Dwarf',
     mice: null,
   };
   
   objectHasProperty(pets, 'dog');				// true
   objectHasProperty(pets, 'lizard');		// false
   objectHasProperty(pets, 'mice');			// true
   ```

   ###### My Solution

   ```javascript
   function objectHasProperty(object, name) {
     for (let n in object) {
       if (n === name) {
         return true;
       }
     }
   
     return false;
   }
   ```

   ###### LS Solution

   ```javascript
   function objectHasProperty(object, propertyName) {
     let keys = Object.keys(object);
     return keys.indexOf(propertyName) !== -1;
   }
   ```

2. Write a function named `incrementProperty` that takes two arguments: an Object and a String. If the Object contains a property with the specified name, the function should increment the value of that property. If the property does not exist, the function should add a new property with a value of `1`. The function should return the new value of the property.

   ###### My Solution

   ```javascript
   function incrementProperty(object, string) {
     if (object[string] === undefined) {
       object[string] = 1;
     } else {
       object[string] += 1;
     }
   
     return object[string];
   }
   ```

   ###### LS Solution

   ```javascript
   function incrementProperty(object, propertyName) {
     if (object[propertyName]) {
       object[propertyName] += 1;
     } else {
       object[propertyName] = 1;
     }
     
     return object[propertyName];
   }
   ```

   If you try to access a property that doesn't exist in an object, JavaScript returns `undefined`:

   ```javascript
   wins.kai; 		//undefined
   ```

   Since `undefined` is falsy and any non-zero Number is truthy, we can use this in the `if` statement's condition to learn whether the property exists.  

   This works well provided falsy (i.e. `null` and `undefined`) values aren't present in the object. Otherwise, we need to check `Object.keys` to see whether the property exists.

3. Write a function named `copyProperties` that takes two Objects as arguments. The function should copy all properties from the first object to the second. The function should return the number of properties copied.

   ```javascript
   let hal = {
     model: 9000,
     enabled: true,
   };
   
   let sal = {};
   copyProperties(hal, sal);		// 2
   sal;												// { model: 9000, enabled: true }
   ```

   ###### My Solution

   ```javascript
   function copyProperties(object1, object2) {
     let numberOfPropertiesCopied = 0;
   
     for (let name in object1) {
       object2[name] = object1[name];
       numberOfPropertiesCopied += 1;
     }
   
     return numberOfPropertiesCopied;
   }
   ```

   ###### LS Solution

   ```javascript
   function copyProperties(source, destination) {
     let count = 0;
     for (let property in source) {
       destination[property] = source[property];
       count += 1;
     }
     
     return count;
   }
   ```

4. Write a function named `wordCount` that takes a single String as an argument. The function should return an Object that contains the counts of each word that appears in the provided String. In the returned Object, you should use the words as keys, and the counts as values.

   ###### My Solution

   ```javascript
   function wordCount(string) {
     let names = string.split(' ');
     let object = {};
   
     for (let index = 0; index < names.length; index += 1) {
       if (object[names[index]]) {
         object[names[index]] += 1;
       } else {
         object[names[index]] = 1;
       }
     }
   
     return object;
   }
   ```

   ###### LS Solution

   ```javascript
   function wordCount(text) {
     let count = {};
     let words = text.split(' ');
     
     for (let index = 0; index < words.length; index += 1) {
       let word = words[index];
       if (!count[word]) {
         count[word] = 0;
       }
       
       count[word] += 1;
     }
     
     return count;
   }
   ```

---

## 5. Arrays and Objects

JavaScript uses arrays and objects as data structures to represent compound data. But when should you use one over the other?

### Array

You should use an array if your data is more like a list that contains many items (usually of the same type, but can be different types too):

```javascript
[1, 2, 3];
['Monday', 'Tuesday', 'Wednesday'];
['Jan', 31, [2015, 2016]];
```

### Object

You should use an object if your data is more like an entity with many parts:

```javascript
{
  firstName: 'Joe',
  lastName: 'Smith',
  gender: 'Male',
  age: 30,
  married: false,
}
```

### Arrays are Objects

In JavaScript, arrays are actually objects! Let's demonstrate this:

```javascript
let a = ['hello', 'world'];

console.log(typeof a);        // "object"
console.log(a['1']);          // "world", object's bracket notation to access value
console.log(Object.keys(a));  // ["0", "1"], the keys of the object!

// line 1 is equivalent of:

let a = {
  '0': 'hello',
  '1': 'world',
};

console.log(typeof a);        // "object"
console.log(a['1']);          // "world", object's bracket notation to access value
console.log(Object.keys(a));  // ["0", "1"], the keys of the object!
```

The two are equivalent in the above code snippet in so far as the logged statements are concerned. However, you'll soon see, as you read to the remainder of the assignment, that there are slight nuances between two.  

Since you now understand that arrays are objects, you should understand why you can use the `length` property on arrays. It's just an object property that JavaScript maintains to track the array's size.  

### Arrays and the Length Property

JavaScript's built-in Array methods (`join`, `forEach`, `push`, `splice`, etc.) take the value of the `length` property into consideration while performing their operations. Some methods just use the value, others set it, and some even do both. Let's take a closer look at how JavaScript manages the `length` property.  

Referring to the [ECMAScript documentation](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4), here are some key points about `Array.length`:

- Its value is always a non-negative integer less than 232 (roughly 4.2 billion).
- The value of the `length` property is numerically one greater than the largest **array index** in the Array. If you take all of the property names from the Array that represent non-negative integer values, then the property name with the largest numeric value is the largest array index.
- You can set the value of the `length` property explicitly.

Let's examine the first two points with this code:  

```javascript
let myArray = [];
myArray.length;                  // returns 0

myArray = ['foo', 'bar', 'baz'];
myArray.indexOf('baz');          // returns 2 (this is the largest index)
myArray.length;                  // returns 3
```

This code demonstrates that the `length` property is initially set to `0`, a non-negative integer. It also demonstrates that `length` is one greater than the largest index (when the largest index is `2`, the `length` is `3`).  

What's more interesting and not obvious concerns which keys of the array object are array indexes and which are not. Take this example:

```javascript
let myArray = [];
myArray['foo'] = 'bar';
myArray[0] = 'baz';
myArray[1] = 'qux';

console.log(myArray);         // logs ['baz', 'qux', foo: 'bar']
myArray.length;               // returns 2 since foo: 'bar' is not an element
myArray.indexOf('bar');       // returns -1 since 'bar' isn't in an element

myArray[-1] = 'hello';
myArray[-2] = 'world';
myArray.length;               // returns 2
myArray.indexOf('hello');     // returns -1 since 'hello' is not in an element
                              // the fact that myArray[-1] is 'hello' is
                              // coincidental
myArray.indexOf('world');     // returns -1 since 'world' is not in an element

console.log(myArray);         // logs ['baz', 'qux', foo: 'bar', '-1': 'hello', '-2': 'world']
Object.keys(myArray).length;  // returns 5 (there are 5 keys at this point)
myArray.length;               // returns 2 (but only 2 keys are indexes)
```

The important points here are:

* A property name is an array index when it is a non-negative integer. Values that have been assigned to index properties are called **elements** of the array. All other property names and their associated values are _not_ considered to be elements of the array.
* `Array.prototype.indexOf` returns `-1` if the value it is passed is not an element of the array, even if the value is associated with a non-index property.
* The value of `length` is entirely dependent on the largest array index. In the code, the largest valid index is `1` (see line 4). Therefore, `length` returns `2` (`1 + 1`).
* Logging an array logs all the indexed values and every `key: value` pair that the object contains. It logs only the value (e.g., `'baz'`, `'qux'`) if it's an element. Otherwise, it logs the `key: value` pair (e.g., `foo: 'bar'`) if it isn't an element (see line 18).
* To count all of the properties in an Array object, use `Object.keys(array).length` (see line 19). Don't use `array.length`.

Finally, let's examine the implications of explicitly setting an array's `length` property:  

```javascript
let myArray = [1, 2, 3];
myArray.length;         // returns 3

// setting to a larger value than the current largest array index
myArray.length = 5;
console.log(myArray);   // logs (5) [1, 2, 3, empty × 2] on Chrome Console
                        // logs [1, 2, 3, <2 empty slots>] on Firefox console
                        // logs [1, 2, 3, ,] on node REPL
myArray.length;         // returns 5

myArray[6] = 'foo';
myArray.length;         // returns 7
console.log(myArray);   // logs (7) [1, 2, 3, empty × 3, "foo"] on Chrome Console
                        // logs [1, 2, 3, <3 empty slots>, "foo"] on Firefox console
                        // logs [1, 2, 3, , , , 'foo'] on node REPL

// setting to a smaller value than the current largest array index with value
myArray.length = 2;
console.log(myArray);   // logs [1, 2]

myArray.length = 5;
console.log(myArray);   // logs (5) [1, 2, empty × 3] on Chrome Console
                        // logs [1, 2, <3 empty slots>] on Firefox console
                        // logs [1, 2, , ,] on node REPL
myArray.length;         // returns 5
```

Note that the array loses data when you set the `length` property to a value equal to or smaller than the current largest array index. For example, on line 18, the array loses two elements: `3` and `'foo'`. It also loses three "empty slots", but these do not count as elements because they have never been assigned a value—they're only displayed to indicate that there are gaps between the actual elements.

Also note that, just like with objects, you can directly set the value of an array element with bracket notation (see line 11). If the property name you use is a valid array index that's greater than the current largest array index, JavaScript sets the `length` value to `1` greater than the array index you provided. Note that the `length` property does *not* only count elements (the array indexes that have been assigned values)—the number of "empty slots" is also included in the count. In other words, the value of `length` is not necessarily the same as the number of elements in an array. For example, on line 13, there are only four actual elements, even though `length` value is `7` (as seen on line 12).  

### Using Object Operations with Arrays

Since arrays are objects, you can use object operations such as `in` and `delete` on arrays. However, just because you can doesn't mean you should: using `in` and `delete` on an array introduces confusion and—particularly with `in`—may yield surprising results. You should usually use more idiomatic ways to accomplish the same tasks.  

You can use the `in` operator to see whether an Object contains a specific key. It works fine with Arrays:

```javascript
0 in [];			// false
0 in [1]; 		// true
```

However, you should instead make the intent of the code clear. If you want to check whether an array has a certain index, compare it directly to the array's `length`:

```javascript
let numbers = [4, 8, 1, 3];
2 < numbers.length;          // true
```

You can also use `delete` on Arrays but it isn't usually a good idea. If you need to remove a value from an Array, use [Array.prototype.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) instead of `delete`.  

Just like with arrays, the arithmetic and comparison operators are not very useful with objects and often lead to surprising results. When one operand is an object and the other is not an object, JavaScript typically coerces the object to the string `'[object Object]'`:  

```javascript
[] + {};                  // "[object Object]" -- becomes "" + "[object Object]"
[] - {};                  // NaN -- becomes "" - "[object Object]", then 0 - NaN
'[object Object]' == {};  // true
'' == {};                 // false
false == {};              // false
0 == {};                  // false
```

However, if an object literal is used in certain contexts—such as at the beginning of a line—JavaScript interprets it as a block of code instead of as an object:  

```javascript
{} + [];                  // 0 -- becomes +[]
{}[0];                    // [0] -- the object is ignored, so the array [0] is returned
{ foo: 'bar' }['foo'];    // ["foo"]
{} == '[object Object]';  // SyntaxError: Unexpected token ==
```

Like with arrays, two objects are considered equal by the `==` and `===` operators only if they are the same object:

```javascript
let a = {};
let b = a;
a == a;                   // true
a == b;                   // true
a === b;                  // true
a == {};                  // false
a === {};                 // false
```

---

## 6. Arrays: What is an Element?

In the previous assignment, we mentioned that arrays are also objects. Thus, all of the indexes of an array are properties of the object, after translation to a string value. This fact has surprising consequences: some, but not all, properties are elements of the array. That leads to ambiguities, such as "What do we mean by an empty array?"  

### Array Keys

Consider, for instance, the following code:

```javascript
let arr = [];
console.log(arr);              // []
console.log(arr.length);       // 0
console.log(Object.keys(arr))  // []
```

It's easy to see here that `arr` should be treated as an empty array. The array has no elements, as shown on line #2, and it has a length of `0` as shown on line #3. Furthermore, `Object.keys` returns no property keys for the array. (Note, however, that arrays have a `length` property; `Object.keys` does not include this property in the return value. Don't worry about why that is.)  

Let's see what happens when the array contains elements:

```javascript
let arr = [2, 4, 6];
console.log(arr);              // [2, 4, 6]
console.log(arr.length);       // 3
console.log(Object.keys(arr))  // ['0', '1', '2']
```

Lines 2 and 3 display the values you likely expect: we see that the array has 3 elements with values `2`, `4`, and `6`, and the total length is `3`. Line 4 shows that the property keys are `'0'`, `'1'`, and `'2'`; these string values correspond to the indexes of the array.  

We can add properties to the object `arr` that are not elements of the array. All we have to do is use a key that is not an unsigned integer; it doesn't even have to be a number:  

```javascript
let arr = [2, 4, 6]
arr[-3] = 5;
arr['foo'] = 'a';
console.log(arr);              // [ 2, 4, 6, '-3': 5, foo: 'a' ]
console.log(arr.length);       // 3
console.log(Object.keys(arr))  // [ '0', '1', '2', '-3', 'foo' ]
arr.map(x => x + 1);           // [ 3, 5, 7 ]
```

Notice how it looks like we're adding two elements to the array, one with an "index" of `-3` and one with an index of `'foo'`. Both of these "elements" show up when we log `arr`, though the output looks a little strange. However, the length of the array is still `3`: the count does not include the new "elements" since neither key is an unsigned integer. If we use `Object.keys`, we see all 5 property keys, both the real element indexes, plus the two non-element keys.  

In the last line above, we can see that `map` ignores the non-element values. All built-in Array methods ignore properties that are not elements, so `map` does nothing with `arr[-3]` and `arr['foo']`.  

This weird behavior leads to some ambiguity:  

```javascript
let arr = [];
arr[-3] = 5;
arr['foo'] = 'a';

// Is arr empty?
console.log(arr.length);       // 0                Yes
console.log(Object.keys(arr))  // [ '-3', 'foo' ]  No
```

To determine whether `arr` is empty on lines 6 and 7, we first need to define what we mean by an empty array. If we're only interested in elements, then we can use `length` to determine whether the array is empty. However, if we need to include non-elements, then we need to look at the object keys to learn whether the array is empty. **There is no one right answer here.** That's a decision you have to make when writing the code.  

### Sparse Arrays

Another consideration with arrays is that they are "sparse". The number of elements in an array isn't necessarily the same as its length: there can be gaps in the array. One way to create these gaps is by increasing the size of the `length` property without adding any values to the array:  

```javascript
let arr = [2, 4, 6];
arr.length = 5;
console.log(arr);              // [2, 4, 6, <2 empty items> ]
console.log(arr.length);       // 5
console.log(Object.keys(arr))  // ['0', '1', '2']
```

Notice that the array now contains 5 elements, as shown on lines #3 and #4. Curiously, though, two of the elements are shown as **empty items**. The empty items, `arr[3]` and `arr[4]`, have no value at all. In fact, those elements don't exist; you can see that on line #5 where `Object.keys` makes no mention of keys `'3'` and `'4'`.  

If you try to access either value, JavaScript will tell you that it is `undefined`.

```javascript
console.log(arr[3]);           // undefined
```

However, that does not mean its value is `undefined`. The value is not set at all. Let's see what happens when we change one of these elements to an explicit `undefined` value:  

```javascript
let arr = [2, 4, 6];
arr.length = 5;
arr[4] = undefined
console.log(arr);              // [2, 4, 6, <1 empty item>, undefined ]
console.log(arr.length);       // 5
console.log(Object.keys(arr))  // ['0', '1', '2', '4']
```

Do you see the difference? `arr[3]` is still an empty item, but `arr[4]` is `undefined`. `arr[4]` has a value; `arr[3]` does not. Note, also, that `Object.keys` includes the key of the explicitly `undefined` element (`'4'`) in the return value. Still, it does not include the key for the gap at `arr[3]`.  

This behaviour again leads to ambiguity about what arrays are empty and which are not:  

```javascript
let arr = [];
arr.length = 3;

// Is arr empty?
console.log(arr.length);				// 3			NO
console.log(Object.keys(arr))		// []			Yess
```

To determine whether `arr` is empty on lines 5 and 6, we again need to determine what we mean by an empty array. If we want to include the gaps, then we can use `length` to determine whether the array is empty. However, if we need to ignore the gaps, then we must look at the object keys to learn whether the array is empty, keeping in mind that some of the object keys may not be unsigned integers. **Again, there is no one right answer here.** You have to decide what empty means.

---

## 7. Mutability of Values and Objects

Some values in JavaScript programs are *primitive* types: numbers, string, booleans, `null` and `undefined`. The distinction between primitive values and Objects that interests us right now is *mutability*.  

- Primitive values are *immutable*: you cannot modify them. Operations on these values return a new value of the same type.
- Objects are *mutable*: you can modify them without changing their identity. Objects contain data inside themselves; it's this inner data that you can change.  

Let's compare similar operations on both a String and an Array. We first declare a variable named `alpha` and set its value to the String `'abcde'`:  

```javascript
let alpha = 'abcde';
```

![img](https://dbdwvr6p7sskw.cloudfront.net/210/images/mutable_objects0.png)

```javascript
alpha[0] = 'z';				// "z"
alpha;								// "abcde"
```

`alpha[0] = 'z'` doesn't do anything except return the string `"z"`. The problem here is that `alpha` contains a String, which is a primitive type, and hence immutable.  

Now, consider an analogous operation on an Array instead of a String. Here's the Array:  

```javascript
alpha = ['a', 'b', 'c', 'd', 'e'];
```

The variable `alpha` holds a reference to an Array, which in turn holds five string values (one for each letter):

![img](https://dbdwvr6p7sskw.cloudfront.net/210/images/mutable_objects1_rev.png)

Now, let's try to change an element in the Array:  

```javascript
alpha[0] = 'z';       // "z"
alpha;                // [ "z", "b", "c", "d", "e" ]
```

Here, we see something different happen. Since Arrays are Objects and not primitive values, we can change the components (the elements) of the Array; this modifies the Array, but does not change the identity of the array. Here, element 0 (the `0` property of `alpha`) now points to a new String; the old value no longer belongs to `alpha`:  

![img](https://dbdwvr6p7sskw.cloudfront.net/210/images/mutable_objects2.png)

This ability to modify values within an Array can cause complications, especially when passing the Array to a Function.  

Now, consider the following code:  

```javascript
function lessExcitable(text) {
  return text.replace(/!+/g, '.');  // replaces ! with .
}

let message = 'Hello!';
lessExcitable(message);             // "Hello."
message;                            // "Hello!"
```

Since calling `replace` on a String returns a new String with a different value, this code doesn't modify the local variable `message`.  

Some of the functions we've written so far illustrate how Arrays exhibit different behavior. Consider our implementation of `push` from an earlier assignment:  

```javascript
function push(array, value) {
  array[array.length] = value;
  return array.length;
}

let numbers = [1, 6, 27, 34];
push(numbers, 92);                  // 5
numbers;                            // [ 1, 6, 27, 34, 92 ]
```

This function uses the mutability of Arrays. Instead of creating a new Array that includes all the old elements as well as the new value, it simply modifies the Array directly. This also modifies the original Array, `numbers`. If Arrays weren't mutable, you would not be able to do this, and would have to return a completely new Array.  

Here is what things look like before we call `push`:

![img](https://dbdwvr6p7sskw.cloudfront.net/210/images/mutable_objects3.png)

When we return from `push`, we have:  

![img](https://dbdwvr6p7sskw.cloudfront.net/210/images/mutable_objects4.png)

We'll talk more about this topic when we talk about Functions in depth. For now, be sure you understand that primitive types are immutable, and that Arrays (and other Objects) are not.

---

## 8. Pure Functions and Side Effects

### Side Effects

A function call that performs any of the following actions is said to have side effects:  

1. It reassigns any non-local variable.
2. It mutates the value of an object referenced by a non-local variable.
3. It reads from or writes to any data entity (files, network connections, etc.) that is non-local to your program.  
4. It raises an exception.

#### Side Effects Through Reassignment

These are the easiest side effects to spot when looking at a function. If the function reassigns any variable that is not declared inside the function, the function has a side effect. For instance:

```javascript
let number = 42;
function incrementNumber() {
  number += 1; // side effect: number is defined in outer scope
}
```

In this example, `incrementNumber` changes the value of the `number` variable. Since `number` is declared in the outer scope, it isn't local to the function. Thus, the reassignment is a side effect.  

#### Side Effects Through Mutation

Mutation side effects are similar to reassignment side effects in that they require a variable that is declared outside the function. It's almost as easy to spot as reassignment, but not always. Suppose such a variable exists and references an object or an array. If the function mutates that object or array, then the function has a side effect. For example:

```javascript
let letters = ['a', 'b', 'c'];
function removeLast() {
  letters.pop(); // side effect: alters the array referenced by letters
}
```

In this example, we mutate the array referenced by `letters`, a variable that is not local to the `removeLast` function. Thus, we have a side effect. As with reassignment of a variable in the outer scope, it's relatively easy to spot this kind of side effect.  

However, a more subtle situation occurs when an array or object is passed as an argument:  

```javascript
let letters = ['a', 'b', 'c'];
function removeLast(array) {
  array.pop();	// side effect: alters the array referenced by letters
}

removeLast(letters);
```

In this code, it's not apparent that we're mutating something referenced by a variable in the outer scope. Both `letters` and `array` point to the same array in memory. Thus, if you mutate the value using `array`, you'll see the changes in `letters`.  

#### Side Effects Through Input/Output

A more subtle side effect occurs when you do any kind of input or output (I/O) operation from within a function. Some everyday actions in this category include:  

* Reading from a file on the system's disk
* Writing to a file on the system's disk
* Reading input from the keyboard
* Writing to the console
* Accessing a database
* Updating the display on a web page
* Reading data from a form on a web page
* Sending data to a remote web site
* Receiving data from a remote web site
* Accessing system hardware such as:
  * The mouse, trackpad, or other pointing devices
  * The clock
  * The random number generator
  * The audio speakers
  * The camera

The list goes on. Using any of these things are considered side effects.  

Perhaps the most surprising entries on that list are reading from the keyboard and writing to the console:  

```javascript
let readLine = require("readline-sync");

function getName() {
  let name = readLine.question("Enter your name: ") // side effect: output and input
  console.log(`Hello, ${name}!`); // side effect: output to console
}
```

Accessing the system date or time and generating random numbers are also side effects:

```javascript
let date = new Date(); // side effect: accesses the system clock
let rand = Math.random(); // side effect: accessed random number generator
```

Anything that causes JavaScript to look outside the program for data for a place to read or send data is a side effect.  

#### Side Effects Through Exceptions

If a function can raise an exception and doesn't catch and handle it, it has a side effect:  

```javascript
function divideBy(numerator, denominator) {
  if (numerator === 0) {
    throw new Error("Divide by zero!"); // side effect: raises an exception
  }

  return numerator / denominator;
}
```

#### Side Effects Through Other Functions

Suppose a function invokes another function, and that invoked function has a side effect that is visible outside of the calling function. In that case, the calling function also has a side effect. We've actually seen several situations where a function calls another function that has side effects:  

* `console.log` has a side effect.
* `readline.question` has multiple side effects.
* `new Date()` has a side effect (it accesses the system clock).
* `Math.random()` has a side effect (it accesses the random number generator).  

In each case, each of these functions propagates their side effects to the function that called it.  

One thing to note is that this type of side effect is only important when the invoked function has side effects that aren't local to the calling function. If the side effects can only be seen inside the calling function, then that side effect has no effect on whether the calling function has side effects. Consider this code:  

```javascript
function insertNumberInOrder(arrayOfNumbers) {
  arrayOfNumbers = arrayOfNumbers.slice(); // creates a copy of an array
  arrayOfNumbers.push(arrayOfNumbers); // not a side effect since copy of array
  arrayOfNumbers.sort((a, b) => a - b); // sort has side effects within function
  return arrayOfNumbers; // function has no side effect
}
```

though the `sort` method has a side effect (it mutates the calling array), that side effect is confined to `insertNumberInOrder`. The side effect has no effect at all outside of the function, so the function itself has no side effects.  

### Mixing Side Effects and Return Values

We've discussed this before, but it bears repeating: most functions should return a useful value or they should have a side effect, but not both. If you write functions that do both, you may have trouble remembering one of those -- either you'll forget about the side effect, or you'll forget that there's a return value that you need to examine.  

By "useful value," we mean that the function returns a value that has meaning to the calling code. For instance, a `sum` function should probably return a number that contains the result of adding some numbers together. A function that returns an arbitrary value or that always returns the same value is not returning a useful value.  

There are exceptions to the rule about mixing side effects and return values. There are times when you have to have a side effect and return a useful value. For instance, if you read something from a database, you almost certainly have to return a value. If you read some input from the user's keyboard, you probably have to return a value. Yet, both operations -- accessing a database and reading user input -- are side effects. In the user input example, you may also need to write some output to the console, which is another side effect.  

### Pure Functions

**Pure functions** are functions that:

1. Have no side effects.
2. Always return a value that is dependent on the arguments it is passed.
3. Given the same set of arguments, the function always returns the same value during the function's lifetime.  

For instance, consider this function:

```javascript
const squared = value => value * value;
```

This function computes the square of a number, e.g., the number multiplied by itself.  

* It has no side effects.

* The return value is dependent on the argument `value`.

* If we execute `square(42)` one billion times, it will return the same value each time: `1764`. The same consistent result occurs no matter what value we pass to it:  

  * `square(25)` always returns `625`
  * `square(10)` always returns `100`

  The return value will not vary for any given argument.

The consistent return value is possibly the most important feature of pure functions. The fact that the same arguments always produce the same return value implies that **nothing else in the program can influence the function during the function's lifetime**. This is a lot more nuanced than it sounds, but we won't get into those details.  

A function's **lifetime** begins when the function is created. It ends when the function is destroyed. That may sound a little strange, but it isn't. Nested functions, for instance, have a lifetime that spans a single execution of the outer function. Furthermore, nested functions are created every time the outer function is invoked. Each instantiation of the nested function is separate. Even if the function looks identical, it can produce different results for each instantiation -- that does not change its status as a pure function.  

A big benefit of pure functions is that the consistent return value and lack of side effects make them easy to test. Since they are effectively isolated from the rest of the program, you don't have to worry about what happens elsewhere. Nothing outside of the function can have any effect on it. Nothing in the function can have any impact on the rest of the program. This is very convenient and helpful when testing.  

As with side effects, it's common to speak of functions as being pure or impure. However, it's more correct to talk about whether a specific function **call** is pure or impure. A function that is pure with one set of arguments could be impure with another. It all depends on whether the function call has side effects and whether using those arguments produces consistent return values.  

Nevertheless, we will usually talk about pure functions as a general kind of function. If the function is always pure when used as intended, then we say the function itself is pure. In practice, functions that are pure are always pure regardless of what arguments are passed in.  

Pure functions are essential in functional programming, a programming paradigm that relies heavily on pure functions, declarative code, and no mutations. Many JavaScript libraries, such as the ubiquitous ReactJS, require the use of pure functions.  

### Practice Problems

1. What side effects are present in the `foo` function in the following code?  

   ```javascript
   const bar = 42;
   let qux = [1, 2, 3];
   let baz = 3;
   
   function foo(arr) {
     let value = arr.pop();
     console.log(`popped ${value} from the array`);
     return value + bar + baz;
   }
   
   foo(qux);
   ```

   ###### My Solution

   **side effects**

   * The function mutates the array referenced by the variable `qux` via the `pop()` method call.
   * The function outputs a message to the console via the `console.log` invocation.

   

2. Which of the following functions are pure functions?

   ```javascript
   function sum(a, b) {
     console.log(a + b);
     return a + b;
   }
   ```

   ```javascript
   function sum(a, b) {
     a + b;
   }
   ```

   ```javascript
   function sum(a, b) {
     return a + b;
   }
   ```

   ```javascript
   function sum(a, b) {
     return a + b + Math.random();
   }
   ```

   ```javascript
   function sum(a, b) {
     return 3.1415;
   }
   ```

   ###### My Solution

   * The 1st function is **not** a pure function because it has the side effect of writing something to the console.
   * The 2nd function is **not** a pure function because it does not return a value that is dependent on the arguments; it returns `undefined`.
   * The 3rd function **is a pure function** because it has no side effects, returns a value that is dependent on the arguments given, and always returns the same value given the same arguments over its lifetime.
   * The 4th function is **not** a pure function because it has the side effect of accessing the system's random number generator.
   * The 5th function is **not** a pure function because its return value is not dependent on the arguments given.

---

## 9. Working with Math Objects

 Let's familiarize ourselves with the `Math` object and its methods. You can refer to the [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) as you go through these practice problems.  

1. The `Math` methods that deal with angle measurements all expect and return values in radians instead of degrees. Mathematically, radians are easier to work with, so nearly all languages use radians for circle and arc calculations. To read more about radians, [check out this article](http://www.mathsisfun.com/geometry/radians.html). Use the `Math.PI` property to create a function that converts radians to degrees.

   ###### My Solution

   ```javascript
   function radianToDegrees(angle) {
     return (angle * 180) / Math.PI;
   }
   ```

   ###### LS Solution

   ```javascript
   let radiansToDegrees = radians => radians / (Math.PI / 180);
   ```

   or

   ```javascript
   let radiansToDegrees = radians => (radians * 180) / Math.PI;
   ```

2. To convert a positive integer to a negative integer, you can just place a minus sign in front of the variable that contains the integer. However, if you don't know whether the original value is negative you may inadvertently convert your variable to the wrong value. You can use the `Math.abs` method to simplify matters by forcing a value positive. For this problem, create a variable with a value of `-180`, then use `Math.abs` to log the positive value of the variable.

   ###### My Solution

   ```javascript
   let value = -180;
   
   Math.abs(value);  // returns 180
   ```

   ###### LS Solution

   ```javascript
   let degrees = -180;
   console.log(Math.abs(degrees));
   ```

3. You can calculate the square of a number by multiplying the number by itself. Calculating the square root takes more work. Fortunately, the `Math.sqrt` method makes this easier than it would otherwise be. Use this method to find the square root of `16777216`.

   ###### My Solution

   ```javascript
   Math.sqrt(16777216);		// returns 4096
   ```

   ###### LS Solution

   ```javascript
   console.log(Math.sqrt(16777216));	// 4096
   ```

4. Suppose, instead, that we want to calculate the 6th power of a number. We could multiply a number by itself six times with a function. However, it is easier to just use `Math.pow`. `Math.pow` takes two arguments, the base and the exponent, and returns the result. Use `Math.pow` to compute and log the value of `16` to the 6th power.

   ###### My Solution

   ```javascript
   console.log(Math.pow(16, 6)); // returns 16777216
   ```

   ###### LS Solution

   ```javascript
   console.log(Math.pow(16, 6)); // 16777216
   ```

5. Rounding numbers up or down in JavaScript is easy, but there are three methods that perform different types of rounding. `Math.round` takes any decimal value and rounds it to the nearest integer. If the fractional part of the number is less than `0.5`, `Math.round` rounds the value downwards; otherwise, it rounds the value upwards. Note: if the fractional part is exactly `0.5`, `Math.round` rounds upwards. `Math.floor` rounds any number downward to the next lower integer. `Math.ceil` rounds any number upward to the next higher integer.  

   Use the appropriate method on each of these variables to return a value of 50. Make sure you use each method once.

   ```javascript
   let a = 50.72;
   let b = 49.2;
   let c = 49.86;
   ```

   ###### My Solution

   ```javascript
   Math.floor(a);	// 50
   Math.ceil(b);	  // 50
   Math.round(c);	// 50
   ```

   ###### LS Solution

   ```javascript
   console.log(Math.floor(a));
   console.log(Math.ceil(b));
   console.log(Math.round(c));
   ```

6. `Math.random` returns a random floating-point number between `0` and `1`, excluding the exact value of `1`. This isn't helpful on its own, since you usually want a random integer between two other integer values. Create a function that takes two arguments, a minimum and a maximum value, and returns a random integer between those numbers (including both of the numbers). Your solution should handle the scenario that the user inadvertently swaps the positions of the `min` and `max` values or the scenario that the `min` and `max` values are equal. You may assume that the user always provides the `min` and `max` values.  

   ###### My Solution

   ```javascript
   function randomNumber(limit1, limit2) {
     let min;
     let max;
     
     if (limit1 <= limit2) {
       min = limit1;
       max = limit2;
     } else {
       min = limit2;
       max = limit1;
     }
     
     return Math.floor(Math.random() * (max - min + 1) + min);
   }
   ```

   ###### LS Solution

   ```javascript
   const randomInt = function(min, max) {
     if (min === max) {
       return min;
     } else if (min > max) {
       let swap = min;
       min = max;
       max = swap;
     }
     
     let difference = max - min + 1;
     return Math.floor(Math.random() * difference) + min;
   };
   
   console.log(randomInt(1, 5));
   ```

   As you learned in an earlier lesson, you can also use destructuring assignment to swap the `min` and `max` values on lines 5-7:

   ```javascript
   const randomInt = function(min, max) {
     if (min === max) {
       return min;
     } else if (min > max) {
       [min, max] = [max, min];
     }
     
     let difference = max - min + 1;
     return Math.floor(Math.random() * difference) + min;
   }
   
   console.log(randomInt(1, 5));
   ```

---

## 10. Working With Dates

Let's do some practice problems with the `Date` object and its methods. You can refer to the [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) as you go through these.

1. Create a variable named `today` with the current date and time as its value.

   ###### My Solution

   ```javascript
   let today = Date();
   ```

   ###### LS Solution

   ```javascript
   let today = new Date();
   ```

2. Log a string, "Today's day is 5", that tells the current day of the week as a number between 0 and 6 (Sunday is 0, Saturday is 6). Use the `getDay` method to obtain the number of the day of week.

   ###### My Solution

   ```javascript
   let today = new Date();
   console.log(`Today's day is ${today.getDay()}`);
   ```

   ###### LS Solution

   ```javascript
   console.log("Today's day is " + String(today.getDay()));
   ```

3. The `getDay` method, like many of the get methods on the date object, returns a zero-based index of the current day of week instead of the day name. This enables support for multiple locales and formats. Modify the output message of the previous problem to show the 3-letter day name abbreviation. You may use the following array:

   ```javascript
   let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   ```

   ###### My Solution

   ```javascript
   let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   
   console.log(`Today's day is ${daysOfWeek[today.getDay()]}`); // Today's day is Mon
   ```

   ###### LS Solution

   ```javascript
   let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   
   console.log("Today's day is " + daysOfWeek[today.getDay()]);
   ```

4. Let's add the calendar date (the day of month) to our log message: "Today's date is Mon, the 6th". Use the `getDate` method to obtain the current day of month. Don't worry about using different suffixes for numbers that end with `1`, `2`, or `3` just yet; we'll deal with that in the next problem.

   ###### My Solution

   ```javascript
   let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   
   console.log(`Today's date is ${daysofWeek[today.getDay()]}, the ${today.getDate()}th`);
   ```

   ###### LS Solution

   ```javascript
   console.log("Today's date is " + daysOfWeek[today.getDay()] + ', the ' + String(today.getDate()) + 'th');
   ```

5. Ideally, the suffix on the day number needs to adjust to the proper suffix for days like the `1st`, `22nd`, and `3rd`. Write a function named `dateSuffix` that takes the day of month as a numeric value and returns the formatted day of month and suffix. Make sure you use the correct suffixes.

   ###### My Solution

   ```javascript
   function dateSuffix(dayOfMonth) {
     let remainder = dayOfMonth % 10;
     let day = String(dayOfMonth);
   
     if (dayOfMonth >= 11 && dayOfMonth <= 13) {
       return day + 'th';
     } else if (remainder >= 1 && remainder <= 3) {
       switch (remainder) {
         case 1:
           return day + 'st';
         case 2:
           return day + 'nd';
         case 3:
           return day + 'rd';
       }
     } else {
       return day + 'th';
     }
   }
   
   let today = new Date();
   
   let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   
   console.log(`Today's date is ${daysOfWeek[today.getDay()]}, the ${dateSuffix(today.getDate())}`);
   ```

   ###### LS Solution

   ```javascript
   function dateSuffix(date) {
     let dateString = String(date);
     
     let digit;
     if (dateString.length === 1) {
       digit = dateString[0];
     } else if (dateString[0] !== '1') {
       digit = dateString[1];
     }
     
     let suffix = 'th';
     if (digit === '1') {
       suffix = 'st';
     } else if (digit === '2') {
       suffix = 'nd';
     } else if (digit === '3') {
       suffix = 'rd';
     }
     
     return String(date) + suffix;
   }
   
   console.log("Today's date is " + daysOfWeek[today.getDay()] + ', the ' + dateSuffix(today.getDate()));
   ```

   Note that our solution examines the last digit of the date to determine the proper suffix. However, it also has to handle the 11th, 12th, and 13th, which all use `th` as the suffix.

6. Change your output to include the value from the `getMonth` method. Thus, the logged string will read "Today's date is Mon, 11 6th", where `11` is the month number returned by `getMonth`.

   ###### My Solution

   ```javascript
   console.log(`Today's date is ${daysOfWeek[today.getDay()]}, ${today.getMonth()} ${dateSuffix(today.getDate())}`);
   ```

   ###### LS Solution

   ```javascript
   console.log("Today's date is " + daysOfWeek[today.getDay()] + ', ' +
              											 String(today.getMonth()) + ' ' +
              											 dateSuffix(today.getDate()));
   ```

   Note that `getMonth` returns a 0-based month number: January is month 0, while December is month 11.

7. Let's make the month readable. Using the same technique we used in problem 3, convert the month number in the output string to a 3-letter month name abbreviation. You may use the following array:

   ```javascript
   let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   ```

   ###### My Solution

   ```javascript
   console.log(`Today's date is ${daysOfWeek[today.getDay()]}, ${months[today.getMonth()]} ${dateSuffix(today.getDate())}`);
   ```

   ###### LS Solution

   ```javascript
   let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   
   console.log("Today's date is " + daysOfWeek[today.getDay()] + ', ' +
              											 months[today.getMonth()] + ' ' +
              											 dateSuffix(today.getDate()));
   ```

8. Our call to `console.log` is getting cluttered. Let's clean things up a bit and refactor the code into a few formatting functions that we can call from anywhere in our code. Create `formattedMonth` and `formattedDay` functions to format the month and day, then write a `formattedDate` function that pulls everything together and logs the fully formatted date.  

   ###### My Solution

   ```javascript
   function dateSuffix(dayOfMonth) {
     let remainder = dayOfMonth % 10;
     let day = String(dayOfMonth);
   
     if (dayOfMonth >= 11 && dayOfMonth <= 13) {
       return day + 'th';
     } else if (remainder >= 1 && remainder <= 3) {
       switch (remainder) {
         case 1:
           return day + 'st';
         case 2:
           return day + 'nd';
         case 3:
           return day + 'rd';
       }
     } else {
       return day + 'th';
     }
   }
   
   function formattedDay(day) {
     const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   
     return daysOfWeek[day];
   }
   
   function formattedMonth(month) {
     const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   
     return months[month];
   }
   
   function formattedDate(date) {
     let day = formattedDay(date.getDay());
     let month = formattedMonth(date.getMonth());
     let dayOfMonth = dateSuffix(date.getDate());
   
     return day + ', ' + month + ' ' + dayOfMonth;
   }
   
   let today = new Date();
   
   console.log(formattedDate(today));
   ```

   ###### LS Solution

   ```javascript
   function formattedDate(date) {
     let day = formattedDay(date);
     let month = formattedMonth(date);
     
     console.log("Today's date is " + day + ', ' + month + ' ' + dateSuffix(date.getDate()));
   }
   
   function formattedMonth(date) {
     let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
     
     return months[date.getMonth()];
   }
   
   function formattedDay(date) {
   	let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   
     return daysOfWeek[date.getDay()];
   }
   
   formattedDate(today);
   ```

9. Log the values returned from the `getFullYear` and `getYear` methods. Note how these values differ. Note especially that `getYear` is deprecated: you should avoid using deprecated methods as they may one day disappear.

   ###### My Solution

   ```javascript
   today.getFullYear(); 		// 2020
   today.getYear();				// 120
   ```

   ###### LS Solution

   ```javascript
   console.log(today.getFullYear());
   console.log(today.getYear());
   ```

10. Use the `getTime` method and log the current date and time in total milliseconds since Jan. 1st 1970.

    ###### My Solution

    ```javascript
    console.log(today.getTime());			// 1609248984153
    ```

    ###### LS Solution

    ```javascript
    console.log(today.getTime());
    ```

11. Create a new date object variable named `tomorrow` that contains a Date object. Initialize the variable by setting it to the value of `today`. You can get the value of `today` using the `getTime` method. Next, change the date on the `tomorrow` object to the day after today: you should use `setDate` to change the date. Finally, log the `tomorrow` object with your `formattedDate` function.

    ###### My Solution

    ```javascript
    let tomorrow = today;
    tomorrow.setDate(30);
    
    console.log(formattedDate(tomorrow));
    ```

    ###### LS Solution

    ```javascript
    let tomorrow = new Date(today.getTime());
    
    tomorrow.setDate(today.getDate() + 1);
    formattedDate(tomorrow);
    ```

    JavaScript has four (4) ways to create a date object:

    1. `new Date();`
    2. `new Date(value);`
    3. `new Date(dateString);`
    4. `new Date(year, month[, date[, hours[, minutes[, seconds[, milliseconds]]]]]);`

    Passing in the date object directly also works (e.g. `new Date(today)`). However, this employs implicit coercion which we don't recommend. Using the `Date.prototype.getTime` method makes it clear what is going on.

12. Create a new variable named `nextWeek` that is a new Date copied from the `today` object. Compare `nextWeek` and `today`, and log the results. Are they equal? Why or why not?  

    ###### My Solution

    ```javascript
    let nextWeek = new Date(today.getTime());
    
    console.log(today === nextWeek);
    ```

    No, they are not equal. `nextWeek` references a completely new Date object than that of `today` so despite the fact that they refer to the exact same time and date, they are two separate objects.

    ###### LS Solution

    ```javascript
    let nextWeek = new Date(today.getTime());
    
    console.log(today === nextWeek);
    ```

13. The `===` operator only returns `true` with Date objects if the objects are the same object. Since we have two different objects (with the same values), we must instead compare the values represented by those objects. Compare the values returned by `toDateString` to determine whether the two objects are equal. Finally, add 7 days to the `nextWeek` date and compare the two objects again.

    ###### My Solution

    ```javascript
    console.log(today.toDateString() === nextWeek.toDateString());  // true
    
    nextWeek.setDate(today.getDate() + 7);
    
    console.log(today.toDateString() === nextWeek.toDateString());  // false
    ```

    ###### LS Solution

    ```javascript
    console.log(today.toDateString() === nextWeek.toDateString());
    
    nextWeek.setDate(today.getDate() + 7);
    
    console.log(today.toDateString() === nextWeek.toDateString());
    ```

14. Finally, write a function named `formatTime` that takes a date object as an argument and returns a string formatted with the hours and minutes as "15:30". Make sure you handle the case where the hours or minutes has only one digit: you need to pad the value with a leading zero in such cases, e.g., "03:04". You can use the `getHours` and `getMinutes` methods to obtain the hours and minutes.

    ###### My Solution

    ```javascript
    function formatTime(date) {
      let hours = formatPadding(date.getHours());
      let minutes = formatPadding(date.getMinutes());
    
      return hours + ':' + minutes;
    }
    
    function formatPadding(number) {
      if (number < 10) {
        number = '0' + String(number);
      } else {
        number = String(number);
      }
    
      return number;
    }
    
    let today = new Date();
    
    console.log(formatTime(today));
    ```

    ###### LS Solution

    ```javascript
    function formatTime(date) {
      return addZero(date.getHours()) + ':' + addZero(date.getMinutes());
    }
    
    function addZero(value) {
      let timeComponent = String(value);
      return timeComponent.length < 2 ? '0' + timeComponent : timeComponent;
    }
    
    // Date value passed: 2013-03-01T01:10:00
    console.log(formatTime(new Date(2013, 2, 1, 1, 10)));
    ```

---

## 11. Working with Function Arguments

### The Traditional Approach

The `arguments` object is an *Array-like* (more on this in a bit) local variable that is available inside all Functions. It contains all the arguments passed to the Function, no matter how many arguments you provided, and no matter how many arguments the Function's definition includes:

```javascript
function logArgs(a) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments.length);
}

logArgs(1, 'a');

// logs:
1
a
2
```

Remember when we said that `arguments` was "Array-like," but not a real Array? Notice that we can access argument values using the same bracket notation that we use with Arrays, and that `arguments` also has a `length` property. Unfortunately, this is where the similarities between `arguments` and Arrays end:

```javascript
function logArgs() {
  console.log(typeof arguments);
  console.log(Array.isArray(arguments));
  arguments.pop();
}

logArgs(1, 2);

// logs:
object				// arguments is an "object"
false					// but it is not an Array
TypeError: Object #<Object> has no method 'pop' // and it doesn't have the usual Array methods
```

You can create an Array from the `arguments` object with this code:

```javascript
let args = Array.prototype.slice.call(arguments);
```

We'll discuss object prototypes in a future topic, but, for now, think of this as "borrowing" the `slice` method from the `Array` global object. When we apply `slice` to the `arguments` object, it creates an Array that contains the same values as those present in `arguments`. This gives us an Array that we can use just like any other Array.

```javascript
function logArgs() {
  let args = Array.prototype.slice.call(arguments);
  console.log(typeof args);
  console.log(Array.isArray(args));
  args.pop();
}

logArgs(1, 2);

// logs:
object
true					// args is a proper Array now
```

#### Functions that Accept Any Number of Arguments

Let's say we have a Function that adds two numbers together:

```javascript
function sum(a, b) {
  return a + b;
}

sum(40, 2);				// 42
```

If we want to add three numbers together instead, we need a separate Function:

```javascript
function sum3(a, b, c) {
  return a + b + c;
}
```

What if we need to add four numbers? Now, we need yet another Function. Ideally, we would like to pass in any number of arguments, and have the Function add them all up. Here's a version of `sum` that does just that:

```javascript
function sum() {
  let result = 0;
  for (let index = 0; index < arguments.length; index += 1) {
    result += arguments[index];
  }
  
  return result;
}
```

```javascript
sum();									// 0
sum(1, 2, 3);						// 6
sum(1, 2, 3, 4, 5);			// 15
```

Notice that the definition of `sum` doesn't list any arguments at all, though you can call the Function with any number of arguments. That makes this function slightly difficult to read and understand. This is an inherent weakness of using the `arguments` object that you should be aware of; we recommend only using it when you really need to deal with an arbitrary number of arguments. Note that ES6 addresses this problem with its rest parameter syntax: `(...args)`.  

### The Modern Approach

The `arguments` object is the traditional way to access an arbitrary number of argumnets. ES6 introduced a new way to do that: **rest parameters**. This feature looks like this:

```javascript
function logArgs(...args) { // 3 periods followed by an array name
	console.log(args[0]);
  console.log(args[1]);
  console.log(args.length);
}

logArgs(1, 'a');

// logs:
1
a
2
```

Essentially, `...args` tells JavaScript to expect an arbitrary number of arguments (0 or more), and to stick them in the array specified by `args`. For instance, in the above example, `1` gets put in `args[0]`, while `'a'` gets stored in `args[1]`.  

Unlike the `arguments` object, the array used in rest parameters is a genuine array -- it is not Array-like. Furthermore, the name isn't fixed -- you can use any valid name except for `arguments` (which refers to the object, not an array).  

You can mix rest parameters with other named parameters. For instance:  

```javascript
function logArgs(foo, bar, ...args) {
  console.log(foo);
  console.log(bar);
  console.log(args[0]);
  console.log(args[1]);
  console.log(args.length);
}

logArgs('oof', 'rab', 1, 'a');

// logs:
oof
rab
1
a
2
```

In general, you should use rest parameters in preference to the `arguments` object, provided you're not limited by project requirements.

---

## 12. Practice Problem: Welcome Stranger

Write a function that takes two arguments, an array and an object. The array will contain two or more elements that, when combined with spaces, produce a person's full name. The object will contain two keys, `title` and `occupation`, and suitable values for both items. Your function should log a greeting to the console that uses the person's full name, and mentions the person's title and occupation.  

Example:

```javascript
greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
Hello, John Q Doe! Nice to have a Master Plumber around.
```

###### My Solution

```javascript
function greetings(names, specs) {
  let name = names.join(' ');
  let title = `${specs.title} ${specs.occupation}`;
  let text = `Hello, ${name}! Nice to have a ${title} around.`;

  console.log(text);
}
```

###### LS Solution

```javascript
function greetings(name, status) {
  let nameGreet = 'Hello, ' + name.join(' ') + '!';
  let statusGreet = 'Nice to have a ' status.title + ' ' + status.occupation + ' around.';
  
  console.log(nameGreet + ' ' + statusGreet);
}
```

---

## 13. Practice Problem: Repeated Characters

Implement a function that takes a `String` as an argument and returns an object that contains a count of the **repeated** characters.  

```javascript
repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }
```

Note that `repeatedCharacters` does a bit more than simply count the frequency of each character: it determines the counts, but only returns counts for characters that have a count of 2 or more. It also ignores the case.

###### My Solution

```javascript
function repeatedCharacters(string) {
  let result = {};

  for (let index = 0; index < string.length; index += 1) {
    let regex = RegExp(string[index], 'gi');
    let total = string.match(regex).length;

    if (total > 1) {
      result[string[index].toLowerCase()] = total;
    }
  }

  return result;
}
```

###### LS Solution

```javascript
function repeatedCharacters(string) {
  let result = {};
  let lowerCaseString = string.toLowerCase();
  
  for (let index = 0; index < lowerCaseString.length; index += 1) {
    if (result[lowerCaseString[index]] !== undefined) {
      result[lowerCaseString[index]] += 1;
    } else {
      result[lowerCaseString[index]] = 1;
    }
  }
  
  for (let key in result) {
    if (result[key] === 1) {
      delete result[key];
    }
  }
  
  return result;
}
```

---

