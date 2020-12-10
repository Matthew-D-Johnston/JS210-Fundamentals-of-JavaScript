##### JS210 Fundamentals of JavaScript for Programmers > Arrays

---

## 1. Arrays

Arrays are the basic collection type used in JavaScript. They hold a list of values that are indexed by a non-negative integer value. While ordered based on the index, the sequence of elements may or may not be important. You can create Arrays using a simple Array literal syntax:

```javascript
[]         // an empty Array

[0, 1, 2]  // an Array holding three values

[42, 'hello', false, [3, 5], [true, 'hello']]  // Arrays can contain any other object
```

You can also create arrays with the `Array` constructor. You won't see this often; most developers think this form is too verbose.

```javascript
let count = new Array(1, 2, 3);

// Usually written as:
let count = [1, 2, 3];
```

The main interactions with Arrays are:

* Iterating through the array and performing an action on each value.
* Accessing and manipulating specific elements of the Array.

### Iterating Through an Array

One can iterate over the elements of an Array using a `for` loop. It is the most basic iteration technique used with Arrays.

```javascript
let count = [1, 2, 3, 4];
for (let index = 0; index < count.length; index += 1) {
  console.log(index);
}
```

### Accessing, Modifying, and Detecting Values

JavaScript Arrays are indexed collections that use zero-based indexes, which means the first element in an Array has index 0. You can use the bracket notation to access the value of the element at a given index position:

```javascript
let fibonacci = [0, 1, 1, 2, 3, 5, 8, 13];

fibonacci[0];     // 0
fibonacci[3];     // 2
fibonacci[100];   // undefined
```

You can add values to an Array using a similar notation:

```javascript
let count = [1, 2, 3];
count[3] = 4;
count;            // [ 1, 2, 3, 4 ]
count.length;     // 4
```

JavaScript lets you assign a value to any location within an Array.

```javascript
// continue from the previous code snippet
count[5] = 5;
count[9] = 9;
count[9];         // returns 9
count.length;     // 10
```

Note that the `length` property returns a value that is one greater than the highest index.  

For the indexes that we didn't explicitly assign a value, JavaScript designates it as empty. Empty items have no value at all, and if you try to access the values at those indexes you'll get `undefined`.

```javascript
// continue from the previous code snippet
count;            // [ 1, 2, 3, 4, empty x 1, 5, empty x 3, 9 ]
count[4];         // undefined
```

You can also change the Array's length by assigning a new value to the `length` property:

```javascript
let count = [1, 2, 3];

count.length = 10;
count;            // [ 1, 2, 3, empty x 7 ]
count.length = 2;
count;            // [ 1, 2 ]; excess elements are lost
```

### Arrays are Objects

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

## 2. Practice Problems: Arrays

1. With arrays, you can access the first element's value with `[0]`, but how do you access the last value? Write a function named `lastInArray` that returns the value of the last element in the array provided by the function's argument. You may use the `length` property and the `[]` operator, but do not use any other methods or properties.

   ###### My Solution

   ```javascript
   function lastInArray(array) {
     return array[array.length - 1];
   }
   ```

   ###### LS Solution

   ```javascript
   let lastInArray = arr => arr[arr.length - 1];
   
   console.log(lastInArray([1, 2, 3, 4]));
   ```

2. Create a function named `rollCall` that takes an array of first names as an argument and logs all the names to the console, one name per line. You should log the names in the same sequence that they appear in the array. Use a `for` loop to process the array.

   ###### My Solution

   ```javascript
   function rollCall(names) {
     for (let index = 0; index < names.length; index += 1) {
       console.log(names[index]);
     }
   }
   ```

   ###### LS Solution

   ```javascript
   const NAMES = ['Steve', 'Martha', 'Pat'];
   
   function rollCall(arr) {
     for (let index = 0; index < arr.length; index += 1) {
       console.log(arr[index]);
     }
   }
   
   rollCall(NAMES);
   ```

3. Create a function that returns the contents of the array it receives as an argument, but with the values in reversed order. Your function should use a `for` loop that iterates over the elements in the array from the end of the array to the beginning, and pushes each element's value to a new result array. Be sure to start your loop with the element whose index is one less than the input array's length.

   ###### My Solution

   ```javascript
   function reverseArray(array) {
     let reversed = [];
   
     for (let index = array.length - 1; index >= 0; index -= 1) {
       reversed.push(array[index]);
     }
   
     return reversed;
   }
   ```

   ###### LS Solution

   ```javascript
   const NUMBERS = [1, 2, 3, 4, 5];
   
   function reverseArray(arr) {
     let reversedArray = [];
     for (let index = arr.length - 1; index >= 0; index -= 1) {
       reversedArray.push(arr[index]);
     }
     
     return reversedArray;
   }
   
   console.log(reverseArray(NUMBERS));
   ```

4. Write a function that returns a string of all the values in an array with no intervening content. For example, your function should return `'1a4'` if the argument is `[1, 'a', 4]`. Use a `for` loop to process the array elements in sequence, and coerce each value in the array to a String before concatenating it to the result string.

   ###### My Solution

   ```javascript
   function arrayToString(arr) {
     let transformed = '';
   
     for (let index = 0; index < arr.length; index += 1) {
       transformed += String(arr[index]);
     }
   
     return transformed;
   }
   ```

   ###### LS Solution

   ```javascript
   function arrayToString(arr) {
     let str = '';
     for (let index = 0; index < arr.length; index += 1) {
       str += String(arr[index]);
     }
     
     return str;
   }
   
   console.log(arrayToString([1, 2, 3]));
   ```

---

## 3. Array Operations: push, pop, shift, and unshift

