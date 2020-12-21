##### JS210 - JavaScript Language Fundamentals > Arrays

---

## 1. Array Copy Part 1

Read through the code shown below. What does it log to the console at lines 6 and 10?

```javascript
let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myArray);
console.log(myOtherArray);

myArray = [1, 2];
console.log(myArray);
console.log(myOtherArray);
```

###### My Solution

**Line 6**

```
[1, 2, 3]
```

**Line 10**

```
[1, 2, 3]
```

###### LS Solution

```
Logged at line 5:  [1, 2, 3]
Logged at line 6:  [1, 2, 3]

Logged at line 9:  [1, 2]
Logged at line 10: [1, 2, 3]
```

###### Discussion

The value logged for `myOtherArray` at line 6 is identical to the value logged on line 5 for `myArray`. This is because both `myArray` and `myOtherArray` reference the same array in memory. If you mutate the array with `myArray`, you'll see the effects of that mutation with either `myArray` and `myOtherArray`. Therefore, when we pop a value from `myArray` on line 4, we see the effect of the change in both `myArray` and `myOtherArray`.

On line 8, however, we reassign a `myArray` to a new array, `[1, 2]`. Reassignments of variables never mutate the value or object that was originally referenced by that variable. Instead, reassignment creates a completely new value or object, and changes the variable so it references that new item. The reassignment, however, **does not change** any other variable that may be referencing the original item - the other variables still reference the old item. Thus, on lines 9, we see that the array referenced by `myArray` is now `[1, 2]`, but the array referenced by `myOtherArray` on line 10 still refers to `[1, 2, 3]`.

---

## 2. Array Copy Part 2

In the previous exercise, the value of the reference gets copied. For this exercise, only the values of the array should be copied, but not the reference. Implement two alternative ways of doing this.  

Here is the code from the previous exercise:

```javascript
let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);
```

###### My Solution

**First Alternative**

```javascript
let myArray = [1, 2, 3, 4];
const myOtherArray = myArray.slice();
```

**Second Alternative**

```javascript
let myArray = [1, 2, 3, 4];
const myOtherArray = [];

for (let index = 0; index < myArray.length; index += 1) {
  myOtherArray.push(myArray[index]);
}
```

###### LS Solution

```javascript
// Alternative 1
const myArray = [1, 2, 3, 4];
const myOtherArray = [];

for (let i = 0; i < myArray.length; i += 1) {
  myOtherArray.push(myArray[i]);
}

myArray.pop();
console.log(myArray);							// [1, 2, 3]
console.log(myOtherArray);				// [1, 2, 3, 4]


// Alternative 2
const myArray = [1, 2, 3, 4];
const myOtherArray = myArray.slice();

myArray.pop();
console.log(myArray);								// [1, 2, 3]
console.log(myOtherArray);					// [1, 2, 3, 4]
```

###### Discussion

The first alternative makes use of a loop to iterate over `myArray` to get the *values* at the respective indices, and *pushes* each value to `myOtherArray`. The second, more concise alternative is to leverage the `Array.prototype.slice` method to return a new array object, and consequently, a new reference value.

---

## 3. Array Concat Part 1

In this exercise, you will learn more about Arrays by implementing your own version of the `Array.prototype.concat` method. Write a function that returns a new array composed of all values from the first array argument and the second array or value argument. Take note of the following specifications when writing your `concat` function.

- The first argument will always be an array.
- The second argument can be either an array or another value.
- The function should return a new array.
- The elements in the new array should be in the same order as they appear in the arguments.
- The function should copy any object references from the arguments into the new array — i.e., if you make a change to a reference object from one of the arguments after calling `concat`, those changes should show up in the output array as well.
- The function should copy the values of primitives (e.g., strings, numbers, and booleans).

Examples:

```javascript
function concat(array1, secondArgument) {
  // ...
}

concat([1, 2, 3], [4, 5, 6]);          // [1, 2, 3, 4, 5, 6]
concat([1, 2], 3);                     // [1, 2, 3]
concat([2, 3], ['two', 'three']);      // [2, 3, "two", "three"]
concat([2, 3], 'four');                // [2, 3, "four"]


const obj = { a: 2, b: 3 };
const newArray = concat([2, 3], obj);
newArray;                              // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
newArray;                              // [2, 3, { a: "two", b: 3 }]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, obj];
const arr3 = concat(arr1, arr2);
arr3;                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
arr3;                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
obj;                                   // { a: "two", b: 3 }
```

###### My Solution

```javascript
function concat(array1, secondArgument) {
  let concatenated = array1.slice();

  if (Array.isArray(secondArgument)) {
    for (let index = 0; index < secondArgument.length; index += 1) {
      concatenated.push(secondArgument[index]);
    }
  } else {
    concatenated.push(secondArgument);
  }

  return concatenated;
}
```

###### LS Solution

```javascript
function concat(array1, secondArgument) {
  let newArray = [];
  
  for (let i = 0; i < array1.length; i += 1) {
    newArray[i] = array1[i];
  }
  
  if (Array.isArray(secondArgument)) {
    for (let i = 0; i < secondArgument.length; i += 1) {
      newArray[newArray.length] = secondArgument[i];
    }
  } else {
    newArray[newArray.length] = secondArgument;
  }
  
  return newArray;
}
```

###### Discussion

The solution makes use of a `for` loop to start building the `newArray` from `array1`. The next step is to determine if the `secondArgument` is an Array, which can be a little tricky. To check for this, the solution uses the `Array.isArray()` function. If the `secondArgument` is an Array, the solution iterates through the array, appending each element to the `newArray`; if the `secondArgument` is not an Array, the solution appends the value of the `secondArgument` directly to the `newArray`.  

In the second `for` loop, the solution uses the current `length` of the `newArray` as the index value for designating the position where each element of the `secondArgument` should be added. Using the `length` as the index ensures that each element will always be appended to the end of the base array. This behavior is similar to that of the `Array.prototype.push` method.  

###### The Built-in Method

In this exercise, the solution implements a simple version of JavaScript's built-in [Array.prototype.concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) method. The built-in method is more robust: it can concatenate more than just two arrays/arguments, and can be called directly on any JavaScript array.  

```javascript
const myArray = [1, 2, 3];
const myOtherArray = ['a', 'b', 'c'];
const myObject = { obj: 'myObject' };

const newArray = myArray.concat(myOtherArray, myObject, 42);
console.log(newArray);        // [1, 2, 3, "a", "b", "c", { obj: "myObject" }, 42]
myObject.obj = 'yourObject';
console.log(newArray);        // [1, 2, 3, "a", "b", "c", { obj: "yourObject" }, 42]
```

---

## 4. Array Concat Part 2

The `concat` function from the previous exercise could only concatenate a maximum of two arrays. For this exercise, you are going to extend that functionality. Refactor the `concat` function to allow for the concatenation of two or more arrays or values.  

Examples:

```javascript
concat([1, 2, 3], [4, 5, 6], [7, 8, 9]);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
concat([1, 2], 'a', ['one', 'two']);        // [1, 2, "a", "one", "two"]
concat([1, 2], ['three'], 4);               // [1, 2, "three", 4]
```

###### My Solution

**Algorithm**

* I will want to take the first argument and use it to form a new array.
* Then, I will need to use the `arguments` key word to determine how many arguments there are.
* Using this number, I will then iterate from `1` to that ...

**Code**

```javascript
function concat() {
  let concatenated = arguments[0].slice();

  let numOfArguments = arguments.length;

  for (let index = 1; index < numOfArguments; index += 1) {
    if (Array.isArray(arguments[index])) {
      let arrayArg = arguments[index];
      for (let subIndex = 0; subIndex < arrayArg.length; subIndex += 1) {
        concatenated.push(arrayArg[subIndex]);
      }
    } else {
      concatenated.push(arguments[index]);
    }
  }

  return concatenated;
}
```

###### LS Solution

```javascript
function concat(...args) {
  const newArray = [];
  
  for (let argIndex = 0; argIndex < args.length; argIndex += 1) {
    let currentArg = args[argIndex];
    if (Array.isArray(currentArg)) {
      let arraySize = currentArg.length;
      for (let arrayIndex = 0; arrayIndex < arraySize; arrayIndex += 1) {
        newArray[newArray.length] = currentArg[arrayIndex];
      }
    } else {
      newArray[newArray.length] = currentArg;
    }
  }
  
  return newArray;
}
```

The main differences in this solution are the addition of another loop and the removal of the initial iteration; given that there is a variable number of arguments, the solution just delegates the initial iteration to the outer loop. The outer loop iterates over the arguments passed using the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) syntax. Using this syntax you can prepend the last parameter of a function with `...`, which will cause all remaining arguments passed to the function to be represented as an array.

---

## 5. Array Pop and Push

In this exercise, you will implement your own version of two Array methods: `Array.prototype.pop` and `Array.prototype.push`. The `pop` method removes the last element from an array and returns that element. If `pop` is called on an empty array, it returns `undefined`. The `push` method, on the other hand, adds one or more elements to the end of an array and returns the new `length` of the array.  

Examples:  

```javascript
// pop
const array1 = [1, 2, 3];
pop(array1);                        // 3
console.log(array1);                // [1, 2]
pop([]);                           // undefined
pop([1, 2, ['a', 'b', 'c']]);      // ["a", "b", "c"]

// push
const array2 = [1, 2, 3];
push(array2, 4, 5, 6);              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
push([1, 2], ['a', 'b']);          // 3
push([], 1);                       // 1
push([]);                          // 0
```

###### My Solution

**pop**

```javascript
function pop(arr) {
  let value = arr[arr.length - 1];
  
  if (arr.length > 0) {
    arr.length = arr.length -1;
  }

  return value;
}
```

**push**

```javascript
function push(...args) {
  let newArray = args[0];
  let startIndex = args[0].length;
  let endIndex = startIndex + args.length - 2;
  let argsIndex = 1;

  for (let index = startIndex; index <= endIndex; index += 1) {
    newArray[index] = args[argsIndex];
    argsIndex += 1;
  }

  return newArray.length;
}
```

###### LS Solution (buggy code)

This is a buggy version of the solution implemented for this exercise. You may try looking for the bug(s) first as an extra challenge.

```javascript
function pop(array) {
  const poppedElement = array[array.length];
  array.splice[array.length];

  return poppedElement;
}

function push(array, ...args) {
  const length = args.length;

  for (let i = 1; i < length; i += 1) {
    array[i] = args[i];
  }

  return array.length;
}
```

###### My Refactoring of the Buggy Code

**pop**

```javascript
function pop(array) {
  if (array[0] === undefined) {
    return undefined;
  }
  
  return array.splice(array.length - 1)[0];
}
```

**push**

```javascript
function push(array, ...args) {
  const argsLength = args.length;
  const arrayLength = array.length;
  
  for (let i = 0; i < argsLength; i += 1) {
    array[arrayLength + i] = args[i];
  }
  
  return array.length;
}

```

###### LS Solution (refactored)

```javascript
function pop(array) {
  const poppedElement = array[array.length - 1];
  array.splice(array.length - 1);

  return poppedElement;
}

function push(array, ...args) {
  const length = args.length;

  for (let i = 0; i < length; i += 1) {
    array[array.length] = args[i];
  }

  return array.length;
}
```

---

## 6. Array and String Reverse

In this exercise, you will implement your own version of the `Array.prototype.reverse` method. Your implementation should differ from the built-in method in the following two ways:

* It should accept either a string or an array as an argument.
* It should return a new string or array.

Examples:  

```javascript
function reverse(inputForReversal) {
  // ...
}

reverse('Hello');           // "olleH"
reverse('a');               // "a"
reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
reverse([]);                // []

const array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
array;                      // [1, 2, 3]
```

###### My Solution

```javascript
function reverse(arg) {
  let startIndex = arg.length - 1;

  if (Array.isArray(arg)) {
    let arr = [];
    for (let index = startIndex; index >= 0; index -= 1) {
      arr.push(arg[index]);
    }

    return arr;
  } else {
    let str = '';
    for (let index = startIndex; index >= 0; index -= 1) {
      str += arg[index];
    }

    return str;
  }
}
```

###### LS Solution

This is a buggy version of the solution implemented for this exercise. You may try looking for the bug(s) first as an extra challenge.

```javascript
function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) {
    return reverseArray(inputForReversal);
  } else {
    return reverseString(inputForReversal);
  }
}

function reverseArray(inputForReversal) {
  const reversed = [];
  const length = inputForReversal.length;

  for (let i = 0; i < length; i += 1) {
    reversed[length - i] = inputForReversal[i];
  }

  return reversed;
}

function reverseString(inputForReversal) {
  const stringArray = inputForReversal.split(' ');
  return reverseArray(stringArray).join(' ');
}
```

###### My Refactoring of the Buggy Solution

```javascript
function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) {
    return reverseArray(inputForReversal);
  } else {
    return reverseString(inputForReversal);
  }
}

function reverseArray(inputForReversal) {
  const reversed = [];
  const indexReference = inputForReversal.length - 1;

  for (let i = 0; i <= indexReference; i += 1) {
    reversed[indexReference - i] = inputForReversal[i];
  }

  return reversed;
}

function reverseString(inputForReversal) {
  const stringArray = inputForReversal.split('');
  return reverseArray(stringArray).join('');
}
```

###### LS Refactoring

```javascript
function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) {
    return reverseArray(inputForReversal);
  } else {
    return reverseString(inputForReversal);
  }
}

function reverseArray(inputForReversal) {
  const reversed = [];
  const length = inputForReversal.length;

  for (let i = 0; i < length; i += 1) {
    reversed[length - 1 - i] = inputForReversal[i];
  }

  return reversed;
}

function reverseString(inputForReversal) {
  const stringArray = inputForReversal.split('');
  return reverseArray(stringArray).join('');
}
```

---

## 7. Array Shift and Unshift

In this exercise, you will implement your own versions of the `Array.prototype.shift` and `Array.prototype.unshift` methods. These methods manipulate the contents of an array starting from the first index.  

The `shift` method removes the *first* element from an array and returns that element; if the array is empty, `shift` returns `undefined`. The `unshift` method *adds one or more* elements to the start of an array and returns the new `length` of the array. Both methods mutate the original array.  

Examples:

```javascript
shift([1, 2, 3]);                // 1
shift([]);                       // undefined
shift([[1, 2, 3], 4, 5]);        // [1, 2, 3]

unshift([1, 2, 3], 5, 6);        // 5
unshift([1, 2, 3]);              // 3
unshift([4, 5], [1, 2, 3]);      // 3

const testArray = [1, 2, 3];
shift(testArray);                // 1
testArray;                       // [2, 3]
unshift(testArray, 5);           // 3
testArray;                       // [5, 2, 3]
```

###### My Solution

**shift**

```javascript
function shift (arr) {
  return arr.splice(0, 1)[0];
}
```

**unshift**

```javascript
function unshift(arr, ...args) {
  for (let index = args.length - 1; index >= 0; index -= 1) {
    arr.splice(0, 0, args[index]);
  }

  return arr.length;
}
```

###### LS Solution

```javascript
function shift(array) {
  let result;
  
  if (array.length !== 0) {
    result = array.splice(0, 1).pop();
  }
  
  return result;
}

function unshift(array, ...args) {
  for (let i = 0; i < args.length; i += 1) {
    array.splice(i, 0, args[i]);
  }
  
  return array.length;
}
```

###### Further Exploration

If you haven't yet done so, reimplement the `shift` and `unshift` methods without using the `splice` method.

###### My FE Solution

**shift**

```javascript
function shift(arr) {
  let shiftedElement = arr.reverse().pop();
  arr.reverse();
  return shiftedElement;
}
```

**unshift**

```javascript
function unshift(arr, ...args) {
  arr.reverse();
  args.reverse();
  
  for (let index = 0; index < args.length; index += 1) {
    arr.push(args[index]);
  }

  arr.reverse();

  return arr.length;
}
```

---

## 8. Array Slice and Splice

In this exercise, you will implement your own versions of the `Array.prototype.slice` and `Array.prototype.splice` methods according to the following specifications.

The `slice` function takes three arguments: an `array`, and two integers representing a `begin` and an `end` index. The function returns a new array containing the extracted elements starting from `begin` up to but not including `end`. `slice` does not mutate the original array.

The `splice` function changes the contents of an array by deleting existing elements and/or adding new elements. The function takes the following arguments: an `array`, a `start` index, a `deleteCount`, and zero or more `element`s to be added. The function removes `deleteCount` number of elements from the array, beginning at the `start` index. If any optional `element` arguments are provided, `splice` inserts them into the array beginning at the `start` index. The function returns a new array containing the deleted elements, or an empty array (`[]`) if no elements are deleted. `splice` mutates the original array.

Additional specifications:

`slice`:

- The values of `begin` and `end` will always be integers greater than or equal to `0`.
- If the value of `begin` or `end` is greater than the length of the array, set it to equal the length.

`splice`:

- The values of `start` and `deleteCount` will always be integers greater than or equal to `0`.
- If the value of `start` is greater than the length of the array, set it to equal the length.
- If the value of `deleteCount` is greater than the number of elements from `start` up to the end of the array, set `deleteCount` to the difference between the array's length and `start`.
- Takes optional arguments for elements to add to the array; denoted by the parameters `element1` up to `elementN`. If no elements to add are provided, `splice` only removes elements from the array.

Examples:

```javascript
function slice(array, begin, end) {
  // ...
}

slice([1, 2, 3], 1, 2);               // [2]
slice([1, 2, 3], 2, 0);               // []
slice([1, 2, 3], 5, 1);               // []
slice([1, 2, 3], 0, 5);               // [1, 2, 3]

const arr1 = [1, 2, 3];
slice(arr1, 1, 3);                     // [2, 3]
arr1;                                  // [1, 2, 3]

function splice(array, start, deleteCount, element1, elementN) {
  // ...
}

splice([1, 2, 3], 1, 2);              // [2, 3]
splice([1, 2, 3], 1, 3);              // [2, 3]
splice([1, 2, 3], 1, 0);              // []
splice([1, 2, 3], 0, 1);              // [1]
splice([1, 2, 3], 1, 0, 'a');         // []

const arr2 = [1, 2, 3];
splice(arr2, 1, 1, 'two');             // [2]
arr2;                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
splice(arr3, 1, 2, 'two', 'three');    // [2, 3]
arr3;                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
splice(arr4, 1, 0);                    // []
splice(arr4, 1, 0, 'a');               // []
arr4;                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
splice(arr5, 0, 0, 'a');               // []
arr5;                                  // ["a", 1, 2, 3]
```

###### My Solution

**slice**

```javascript
function slice(array, begin, end) {
  let length = array.length;
  let slicedArray = [];

  if (begin > length) {
    begin = length;
  }

  if (end > length) {
    end = length;
  }

  for (let index = begin; index < end; index += 1) {
    slicedArray.push(array[index]);
  }

  return slicedArray;
}
```

**splice**

```javascript
function splice(array, start, deleteCount, ...elems) {
  start = start > array.length ? array.length : start;
  deleteCount = deleteCount > (array.length - start) ? array.length - start : deleteCount;
  
  let deleted = [];
  let undeleted = []

  let end = start + deleteCount - 1;

  for (let index = 0; index < array.length; index += 1) {
    if (index >= start && index <= end) {
      deleted.push(array[index]);
    } else {
      undeleted.push(array[index]);
    }
  }

  while (array.length > 0) {
    array.pop();
  }

  for (let index = 0; index < undeleted.length; index += 1) {
    if (index === start) {
      while (elems.length > 0) {
        array.push(elems.shift());
      }
    }

    array.push(undeleted[index]);
  }

  while (elems.length > 0) {
    array.push(elems.shift());
  }

  return deleted;
}
```

###### LS Solution

```javascript
function slice(array, begin, end) {
  const result = [];
  
  begin = begin > array.length ? array.length : begin;
  end = end > array.length ? array.length : end;
  
  for (let i = begin; i < end; i += 1) {
    result.push(array[i]);
  }
  
  return result;
}

function splice(array, start, deleteCount, ...args) {
  start = start > array.length ? array.length : start;
  deleteCount = deleteCount > (array.length - start) ? array.length - start : deleteCount;
  
  const arrayCopy = slice(array, 0, array.length);
  const elementCount = args.length;
  const newLength = array.length + elementCount - deleteCount;
  array.length = newLength;
  
  for (let i = 0; i < elementCount; i += 1) {
    array[start + 1] = args[i];
  }
  
  let copyBackCount = arrayCopy.length - (start + deleteCount);
  for (let i = 0; i < copyBackCount; i += 1) {
    array[start + elementCount + i] = arrayCopy[start + deleteCount + i];
  }
  
  return slice(arrayCopy, start, start + deleteCount);
}
```

---

## 9. Oddities

The `oddities` function takes an array as an argument and returns a new array containing every other element from the input array. The values in the returned array are the first (index `0`), third, fifth, and so on, elements of the input array. The program below uses the array returned by `oddities` as part of a comparison. Can you explain the results of these comparisons?  

Examples:

```javascript
function oddities(array) {
  const oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

oddities([2, 3, 4, 5, 6]) === [2, 4, 6];      // false
oddities(['abc', 'def']) === ['abc'];         // false
```

###### My Solution

The reason the comparison's return `false` is that we are comparing two different objects. Thus, although each object is an Array and contains the same elements, the fact that they are still two distinct objects pointing to two separate spaces in memory results in their comparison of equality returning `false`.  

###### LS Solution

Both of these comparisons return `false` because the arrays being compared are two different objects, even though they contain the same values. Recall that Arrays are Objects, so the only way for the equality operator to return `true` for array comparison is if they are the same object or if the comparison is done on the contents of the arrays and not on the arrays themselves.  

---

## 10. Array Comparison

The array comparison function that we implemented in the [Arrays lesson](https://launchschool.com/lessons/e15c92bb/assignments/a52dfe90) (Alternate [link](https://launchschool.com/lessons/e2c71a47/assignments/91e2c5cf) if the previous link doesn't work) implicitly assumed that when comparing two arrays, any matching values must also have matching index positions. The objective of this exercise is to reimplement the function so that two arrays containing the same values—but in a different order—are considered equal. For example, `[1, 2, 3] === [3, 2, 1]` should return `true`.  

Examples:

```javascript
function areArraysEqual(array1, array2) {
  // ...
}

areArraysEqual([1, 2, 3], [1, 2, 3]);                  // true
areArraysEqual([1, 2, 3], [3, 2, 1]);                  // true
areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']);      // true
areArraysEqual(['1', 2, 3], [1, 2, 3]);                // false
areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]);            // true
areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]);            // false
areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]);            // false
areArraysEqual([1, 1, 2], [1, 2, 2]);                  // false
areArraysEqual([1, 1, 1], [1, 1]);                     // false
areArraysEqual([1, 1], [1, 1]);                        // true
```

###### My Solution

**Algorithm**

* The function will need to employ a nested loop. The first loop will iterate over each of the elements of the first array, while the second loop will iterate over each of the elements of the second array and compare each of those elements to each element of the first array.
* We need to keep track of whether or not 

**Code:**

```javascript
function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  let length = array1.length;

  let newArray1 = array1.slice().sort();
  let newArray2 = array2.slice().sort();

  for (let index = 0; index < length; index += 1) {
    if (newArray1[index] !== newArray2[index]) {
      return false;
    }
  }

  return true;
}
```

###### LS Solution

```javascript
function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  let array2Copy = array2.slice();
  for (let i = 0; i < array1.length; i += 1) {
    let index = array2Copy.indexOf(array1[i]);
    if (index >= 0) {
      array2Copy.splice(index, 1);
    } else {
      return false;
    }
  }
  
  return true;
}
```

