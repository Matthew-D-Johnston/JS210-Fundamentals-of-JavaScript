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

