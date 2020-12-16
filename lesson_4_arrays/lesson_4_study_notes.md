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

1. Write a function named `push` that accepts two arguments: an Array and any other value. The function should append the second argument to the end of the Array, and return the new length of the Array.

   ```javascript
   let count = [0, 1, 2];
   push(count, 3);					// 4
   count;									// [ 0, 1, 2, 3 ]
   ```

   ###### My Solution

   ```javascript
   function push(arr, elem) {
     arr[arr.length] = elem;
     return arr.length;
   }
   ```

   ###### LS Solution

   ```javascript
   const push = (array, value) => {
     array[array.length] = value;
     return array.length;
   }
   ```

2. Write a function named `pop` that accepts one argument: an Array. The function should remove the last element from the array and return it.

   ```javascript
   let count = [1, 2, 3];
   pop(count); 						// 3
   count;									// [1, 2]
   ```

   ###### My Solution

   ```javascript
   function pop(arr) {
     let newLength = arr.length - 1;
     let value = arr[newLength];
     arr.length = newLength;
     return value;
   }
   ```

   ###### LS Solution

   ```javascript
   const pop = array => {
     if(array.length === 0) {
       return undefined;
     }
     
     let newLength = array.length - 1;
     let value = array[newLength];
     array.length = newLength;
     return value;
   }
   ```

3. Write a function named `unshift` that accepts two arguments: an Array and a value. The function should insert the value at the beginning of the Array, and return the new `length` of the array. You will need a `for` loop for this problem.

   ```javascript
   let count = [1, 2, 3];
   unshift(count, 0);      // 4
   count;                  // [ 0, 1, 2, 3 ]
   ```

   ###### My Solution

   ```javascript
   function unshift(arr, elem) {
     let newArray = [elem];
   
     for (let index = 0; index < arr.length; index += 1) {
       newArray[index + 1] = arr[index];
       arr[index] = newArray[index];
     }
   
     arr[arr.length] = newArray[arr.length];
     return arr.length;
   }
   ```

   ###### LS Solution

   ```javascript
   let unshift = function(array, value) {
     for (let index = array.length; index > 0; index -= 1) {
       array[index] = array[index - 1];
     }
     
     array[0] = value;
     return array.length;
   }
   ```

4. Write a function named `shift` that accepts one argument: an Array. The function should remove the first value from the beginning of the Array and return it.

   ```javascript
   let count = [1, 2, 3];
   shift(count);						// 1
   count;									// [ 2, 3 ]
   ```

   ###### My Solution

   ```javascript
   function shift(arr) {
     let value = arr[0];
   
     for (let index = 1; index < arr.length; index += 1) {
       arr[index - 1] = arr[index]; 
     }
   
     arr.length = arr.length - 1;
     return value;
   }
   ```

   ###### LS Solution

   ```javascript
   let shift = function(array) {
     let first = array[0];
     
     if (array.length === 0) {
       return undefined;
     }
     
     for (let index = 0; index < array.length - 1; index += 1) {
       array[index] = array[index + 1];
     }
     
     array.length = array.length - 1;
     return first;
   }
   ```

---

## 4. Array Operations: indexOf and lastIndexOf

1. Write a function `indexOf` that accepts two arguments: an array and a value. The function returns the first index at which the value can be found, or `-1` if the value is not present.

   ```javascript
   indexOf([1, 2, 3, 3], 3);         // 2
   indexOf([1, 2, 3], 4);            // -1
   ```

   ###### My Solution

   ```javascript
   function indexOf(arr, value) {
     for (let index = 0; index < arr.length; index += 1) {
       if (arr[index] === value) {
         return index;
       }
     }
   
     return -1;
   }
   ```

   ###### LS Solution

   ```javascript
   function indexOf(array, value) {
     for (let index = 0; index < array.length; index += 1) {
       if (array[index] === value) {
         return index;
       }
     }
     
     return - 1;
   }
   ```

2. Write a function `lastIndexOf` that accepts two arguments: an array and a value. The function returns the last index at which the value can be found in the array, or `-1` if the value is not present.

   ```javascript
   lastIndexOf([1, 2, 3, 3], 3);     // 3
   lastIndexOf([1, 2, 3], 4);        // -1
   ```

   ###### My Solution

   ```javascript
   function lastIndexOf(array, value) {
     for (let index = array.length - 1; index >= 0; index -= 1) {
       if (array[index] === value) {
         return index;
       }
     }
   
     return -1;
   }
   ```

   ###### LS Solution

   ```javascript
   function lastIndexOf(array, value) {
     for (let index = array.length - 1; index >= 0; index -= 1) {
       if (array[index] === value) {
         return index;
       }
     }
     
     return -1;
   }
   ```

---

## 5. Array Operations: slice, splice, concat, and join

1. Write a function named `slice` that accepts three arguments: an Array, a start index, and an end index. The function should return a new Array that contains values from the original Array starting with the value at the starting index, and including all values up to but not including the end index. Do not modify the original Array.

   *You may use functions that were answers to previous practice problems to complete this problem, but do not use any built-in Array methods.*

   ```javascript
   slice([1, 2, 3, 4, 5], 0, 2);                      // [ 1, 2 ]
   slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3);  // [ 'b', 'c' ]
   ```

   ###### My Solution

   ```javascript
   function slice(array, startIndex, endIndex) {
     let newArray = [];
     let newArrIndex = 0;
   
     for (let index = startIndex; index < endIndex; index += 1) {
       newArray[newArrIndex] = array[index];
       newArrIndex += 1;
     }
   
     return newArray;
   }
   ```

   ###### LS Solution

   ```javascript
   function slice(array, begin, end) {
     let newArray = [];
     for (let index = begin; index < end; index += 1) {
       push(newArray, array[index]);
     }
     
     return newArray;
   }
   ```

2. Write a function named `splice` that accepts three arguments: an Array, a start index, and the number of values to remove. The function should remove values from the original Array, starting with the first index and removing the specified number of values. The function should return the removed values in a new Array.

   *You may use functions that were answers to previous practice problems to complete this problem, but do not use any built-in Array methods.*

   ```javascript
   let count = [1, 2, 3, 4, 5, 6, 7, 8];
   splice(count, 2, 5);                   // [ 3, 4, 5, 6, 7 ]
   count;                                 // [ 1, 2, 8 ]
   ```

   ###### My Solution

   ```javascript
   function push(arr, elem) {
     arr[arr.length] = elem;
     return arr.length;
   }
   
   function splice(array, startIndex, numberOfValues) {
     let endIndex = startIndex + numberOfValues;
     let splicedArray = [];
     let excludedElements = [];
   
     for (let index = 0; index < array.length; index += 1) {
       if (index >= startIndex && index < startIndex + numberOfValues) {
         push(splicedArray, array[index]);
       } else {
         push(excludedElements, array[index]);
       }
     }
   
     array.length = array.length - numberOfValues;
   
     for (let index = 0; index < excludedElements.length; index += 1) {
       array[index] = excludedElements[index];
     }
   
     return splicedArray;
   }
   ```

   ###### LS Solution

   ```javascript
   function splice(array, begin, number) {
     let removedValues = [];
     for (let index = begin; index < array.length; index += 1) {
       if (index < begin + number) {
         push(removedValues, array[index]);
       }
       
       array[index] = array[index + number];
     }
     
     array.length = array.length - removedValues.length;
     return removedValues;
   }
   ```

3. Write a function named `concat` that accepts two Array arguments. The function should return a new Array that contains the values from each of the original Arrays.

   *You may use functions that were answers to previous practice problems to complete this problem, but do not use any built-in Array methods.*

   ```javascript
   concat([1, 2, 3], [4, 5, 6]);			// [ 1, 2, 3, 4, 5, 6 ]
   ```

   ###### My Solution

   ```javascript
   function push(arr, elem) {
     arr[arr.length] = elem;
     return arr.length;
   }
   
   function concat(array1, array2) {
     let newArray = [];
   
     for (let index = 0; index < array1.length; index += 1) {
       push(newArray, array1[index]);
     }
   
     for (let index = 0; index < array2.length; index += 1) {
       push(newArray, array2[index]);
     }
   
     return newArray;
   }
   ```

   ###### LS Solution

   ```javascript
   function concat(firstArray, secondArray) {
     let newArray = [];
     for (let index = 0; index < firstArray.length; index += 1) {
       push(newArray, firstArray[index]);
     }
     
     for (let index = 0; index < secondArray.length; index += 1) {
       push(newArray, secondArray[index]);
     }
     
     return newArray;
   }
   ```

4. Write a function named `join` that accepts two arguments: an Array and a String. The function should coerce each value in the Array to a String, and then join those values together using the second argument as a separator. You may assume that a separator will always be passed.

   You can call the `String` function on any JavaScript value to get its String representation.

   ```javascript
   join(['bri', 'tru', 'wha'], 'ck ');       // 'brick truck wha'
   join([1, 2, 3], ' and ');                 // '1 and 2 and 3'
   ```

   ###### My Solution

   ```javascript
   function join(array, string) {
     let joinedString = '';
   
     for (let index = 0; index < array.length; index += 1) {
       joinedString += String(array[index]);
   
       if (array.length - index !== 1) {
         joinedString += string;
       }
     }
   
     return joinedString;
   }
   ```

   ###### LS Solution

   ```javascript
   function join(array, separator) {
     let result = '';
     
     for (let index = 0; index < array.length; index += 1) {
       result += String(array[index]);
       
       if (index < array.length - 1) {
         result += separator;
       }
     }
     
     return result;
   }
   ```

---

## 7. Arrays and Operators

Operators form much of the syntax a programmer uses when writing programs. JavaScript is no exception. Here are some JavaScript operators:

```
+`, `-`, `*`, `/`, `%`, `+=`, `-=`, `==`, `!=`, `===`, `!==`, `>`, `>=`, `<`, `<=
```

These should seem familiar; you used them when working with Number and String objects. There, they are extremely useful. Unfortunately, they are almost useless with Array objects.

---

## 8. Practice Problem: Comparing Arrays

n the last assignment, we saw that JavaScript's equality operators don't examine the values in the arrays—instead, they check that the arrays are the same object. It's more likely that you'll want to know whether two arrays contain the same values. To do this, you need to write your own function.  

Write a function named `arraysEqual` that takes two arrays as arguments. The function should return `true` if the arrays contain the same values, or `false` if they do not.  

Test the function with arrays that contain number, string, and boolean values. Don't worry about handling arrays that contain other Arrays or Objects.  

```javascript
arraysEqual([1], [1]);                               // true
arraysEqual([1], [2]);                               // false
arraysEqual([1, 2], [1, 2, 3]);                      // false
arraysEqual([1, 'hi', true], [1, 'hi', true]);       // true
arraysEqual([1, 'hi', true], [1, 'hi', false]);      // false
arraysEqual([1, 'hi', true], [1, 'hello', true]);    // false
arraysEqual([1, 'hi', true], [2, 'hi', true]);       // false
```

###### My Solution

```javascript
function arraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let index = 0; index < array1.length; index += 1) {
      if (array1[index] !== array2[index]) {
        return false;
      }
    }
  }

  return true;
}
```

###### LS Solution

```javascript
function arraysEqual(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  
  for (let index = 0; index < left.length; index += 1) {
    if (left[index] !== right[index]) {
      return false;
    }
  }
  
  return true;
}
```

---

## 9. Practice Problems: Basic Array Uses

In the problems below, we ask you to write functions that work with Arrays. You may use Array's index access (`[]`), the `length` property, and any [Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) you need.

1. Write a function that returns the first element of an array passed in as an argument.

   ```javascript
   function firstElementOf(arr) {
     // …
   }
   
   firstElementOf(['U', 'S', 'A']);  // returns "U"
   ```

   ###### My Solution

   ```javascript
   function firstElementOf(arr) {
     return arr[0];
   }
   ```

   ###### LS Solution

   ```javascript
   function firstElementOf(arr) {
     return arr[0];
   }
   
   firstElementOf(['U', 'S', 'A']); 	// returns "U"
   ```

2. Write a function that returns the last element of an array passed in as an argument.

   ```javascript
   function lastElementOf(arr) {
     // …
   }
   
   lastElementOf(['U', 'S', 'A']);  // returns "A"
   ```

   ###### My Solution

   ```javascript
   function lastElementOf(arr) {
     return arr[arr.length - 1];
   }
   ```

   ###### LS Solution

   ```javascript
   function lastElementOf(arr) {
     return arr[arr.length - 1];
   }
   
   last ElementOf(['U', 'S', 'A']);	// returns "A"
   ```

3. Write a function that accepts two arguments, an array and an integer index position, and returns the element at the given index. What happens if the index is greater than the length of the array? What happens if it is a negative integer?

   ```javascript
   function nthElementOf(arr, index) {
     // …
   }
   
   let digits = [4, 8, 15, 16, 23, 42];
   
   nthElementOf(digits, 3);   // returns 16
   nthElementOf(digits, 8);   // what does this return?
   nthElementOf(digits, -1);  // what does this return?
   ```

   ###### My Solution

   ```javascript
   function nthElementOf(arr, index) {
     if (index >= arr.length) {
       return arr[arr.length - 1];
     } else if (index < 0) {
       if ((index * -1) >= arr.length) {
         return arr[0];
       }
       return arr[arr.length + index];
     } else {
       return arr[index];
     }
   }
   
   let digits = [4, 8, 15, 16, 23, 42];
   
   nthElementOf(digits, 3);   // returns 16
   nthElementOf(digits, 8);   // returns 42
   nthElementOf(digits, -1);  // returns 42
   ```

   ###### LS Solution

   ```javascript
   function nthElementOf(arr, index) {
     return arr[index];
   }
   
   let digits = [4, 8, 15, 16, 23, 42];
   
   nthElementOf(digits, 3);   // returns 16
   nthElementOf(digits, 8);   // returns undefined
   nthElementOf(digits, -1);  // returns undefined
   ```

4. Can we insert data into an array at a negative index? If so, why is this possible?

   ###### My Solution

   Yes, we can.

   ```javascript
   let digits = [4, 8, 15, 16, 23, 42];
   
   digits[-1] = 92;
   
   digits; 		// returns [ 4, 8, 15, 16, 23, 42, '-1': 92 ]
   ```

   I'm not exactly sure why this is possible.

   ###### LS Solution

   Yes, we can do this since all arrays are objects in JavaScript. You will learn more about this in the next lesson, but for now, try these statements on the digits array you used above and examine the return values.

   ```javascript
   digits[-1] = -42;
   nthElementOf(digits, -1);
   digits[-1];
   digits['-1'];
   ```

   There is a slight nuance here: the added element becomes part of the "array object," but it isn't properly one of the array elements. The `digits.length` property, for instance, remains unchanged.

5. Write a function that accepts an array as the first argument and an integer value, `count`, as the second. It should return a new array that contains the first `count` elements of the array.

   ```javascript
   function firstNOf(arr, count) {
     // …
   }
   
   let digits = [4, 8, 15, 16, 23, 42];
   firstNOf(digits, 3);    // returns [4, 8, 15]
   ```

   ###### My Solution

   ```javascript
   function firstNOf(arr, count) {
     let newArray = [];
     for (let index = 0; index < count; index += 1) {
       newArray.push(arr[index]);
     }
     
     return newArray;
   }
   ```

   ###### LS Solution

   ```javascript
   function firstNOf(arr, count) {
     return arr.slice(0, count);
   }
   
   let digits = [4, 8, 15, 16, 23, 42];
   firstNOf(digits, 3); 		// returns [4, 8, 15]
   ```

6. Write a function like the previous one, except this time return the last `count` elements as a new array.

   ```javascript
   function lastNOf(arr, count) {
     // …
   }
   
   let digits = [4, 8, 15, 16, 23, 42];
   lastNOf(digits, 3);    // returns [16, 23, 42]
   ```

   ###### My Solution

   ```javascript
   function lastNOf(arr, count) {
   	let startIndex = arr.length - count;
     let endIndex = startIndex + count;
     return arr.slice(startIndex, endIndex);
   }
   ```

   ###### LS Solution

   ```javascript
   function lastNOf(arr, count) {
     return arr.slice(arr.length - count);
   }
   
   let digits = [4, 8, 15, 16, 23, 42];
   lastNOf(digits, 3);			// returns [16, 23, 42]
   ```

7. Using the function from the previous problem, what happens if you pass a `count` greater than the length of the array? How can you fix the function so it returns a new instance of the entire array when `count` is greater than the array length?

   ###### My Solution

   Passing a `count` greater than the length of the array produces some odd results.  

   Here is a refactored function to return the entire array if the `count` is greater than the length of the array.

   ```javascript
   function lastNOf(arr, count) {
     if (count > arr.length) {
       count = arr.length;
     }
     
   	let startIndex = arr.length - count;
     let endIndex = startIndex + count;
     return arr.slice(startIndex, endIndex);
   }
   ```

   ###### LS Solution

   When you pass a `count` greater than the array length, the arithmetic in the function becomes a negative value. `slice` interprets a negative value as a position relative to the end of the array. Thus, if we pass a count of 9 with our `digits` array, `lastNOf` calls `slice` with an argument of `-3`. `slice` thus returns the final three elements of `digits`.  

   To change this behaviour, we can calculate the starting position, then adjust it to 0 if it is negative. We can pass the resulting value to `slice`, which returns a new copy of the array when the value is 0.

8. Write a function that accepts two arrays as arguments and returns an array with the first element from the first array and the last element from the second array.

   ```javascript
   function endsOf(beginningArr, endingArr) {
     // ...
   }
   
   endsOf([4, 8, 15], [16, 23, 42]);		// returns [4, 42]
   ```

   ###### My Solution

   ```javascript
   function endsOf(beginningArr, endingArr) {
     let firstElement = beginningArr[0];
     let lastElement = endingArr[endingArr.length - 1];
     
     return [firstElement, lastElement];
   }
   ```

   ###### LS Solution

   ```javascript
   function endsOf(beginningArr, endingArr) {
     return [beginningArr[0], endingArr[endingArr.length - 1]];
   }
   
   endsOf([4, 8, 15], [16, 23, 42]);		// returns [4, 42]
   ```

---

## 10. Practice Problems: Intermediate Array Uses

1. Write a function that creates and returns a new array from its array argument. The new array should contain all values from the argument array whose positions have an odd index.

   ```javascript
   function oddElementsOf(arr) {
     // …
   }
   
   let digits = [4, 8, 15, 16, 23, 42];
   
   oddElementsOf(digits);    // returns [8, 16, 42]
   ```

   ###### My Solution

   ```javascript
   function oddElementsOf(arr) {
     let newArray = [];
   
     for (let index = 1; index < arr.length; index += 2) {
       newArray.push(arr[index]);
     }
   
     return newArray;
   }
   ```

   ###### LS Solution

   ```javascript
   function oddElementsOf(arr) {
     let oddElements = [];
     let length = arr.length;
     
     for (let index = 1; index < length; index += 2) {
       oddElements.push(arr[index]);
     }
     
     return oddElements;
   }
   
   let digits = [4, 8, 15, 16, 23, 42];
   
   oddElementsOf(digits);		// returns [8, 16, 42]
   ```

2. Write a function that takes an array argument and returns a new array that contains all the argument's elements in their original order followed by all the argument's elements in reverse order.

   ###### My Solution

   ```javascript
   function originalAndReversed(arr) {
     let newArray = arr.slice();
     let length = arr.length;
   
     for (let index = length - 1; index >= 0; index -= 1) {
       newArray.push(arr[index]);
     }
   
     return newArray;
   }
   ```

   ###### LS Solution

   ```javascript
   function mirroredArray(arr) {
     return arr.concat(arr.slice().reverse());
   }
   
   let digits = [4, 8, 15, 16, 23, 42];
   mirroredArray(digits);	// returns [4, 8, 15, 16, 23, 42, 42, 23, 16, 15, 8, 4]
   ```

3. Use the [array sort method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) to create a function that takes an array of numbers and returns a new array of the numbers sorted in descending order. Do not alter the original array.

   ```javascript
   function sortDescending(arr) {
     // …
   }
   
   let array = [23, 4, 16, 42, 8, 15];
   let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
   console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
   console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]
   ```

   ###### My Solution

   ```javascript
   function sortDescending(arr) {
     let newArray = arr.slice();
     return newArray.sort((a, b) => b - a);
   }
   ```

   ###### LS Solution

   ```javascript
   function sortDescending(arr) {
     let arrCopy = arr.slice();
     return arrCopy.sort((a, b) => b - a);
   }
   
   let array = [23, 4, 16, 42, 8, 15];
   let result = sortDescending(array);		// returns [42, 23, 16, 15, 8, 4]
   console.log(result);									// logs		 [42, 23, 16, 15, 8, 4]
   console.log(array);										// logs 	 [23, 4, 16, 42, 8, 15]
   ```

4. Write a function that takes an array of arrays as an argument, and returns a new array that contains the sums of each of the sub-arrays.

   ```javascript
   function matrixSums(arr) {
     // …
   }
   
   matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]
   ```

   ###### My Solution

   ```javascript
   function matrixSums(arr) {
     const reducer = (accumulator, currentValue) => accumulator + currentValue;
     let sumsArray = [];
   
     arr.forEach(function(element) {
       sumsArray.push(element.reduce(reducer));
     });
   
     return sumsArray;
   }
   ```

   ###### LS Solution

   ```javascript
   function matrixSums(arr) {
     let sums = [];
     let outerLen = arr.length;
     
     for (let mainIndex = 0; mainIndex < outerLen; mainIndex += 1) {
       let currentSum = 0;
       let innerLen = arr[mainIndex].length;
       for (let subIndex = 0; subIndex < innerLen; subIndex += 1) {
         currentSum += arr[mainIndex][subIndex];
       }
       
       sums.push(currentSum);
     }
     
     return sums;
   }
   
   matrixSums([[2, 8, 5], [12, 48, 0], [12]]);	// returns [15, 60, 12]
   ```

5. Write a function that takes an array, and returns a new array with duplicate elements removed.

   ```javascript
   function uniqueElements(arr) {
     // …
   }
   
   uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);  // returns [1, 2, 4, 3, 5]
   ```

   ###### My Solution

   ```javascript
   function uniqueElements(arr) {
     let newArray = [];
   
     for (let index = 0; index < arr.length; index += 1) {
       if (newArray.indexOf(arr[index]) === -1) {
         newArray.push(arr[index]);
       }
     }
   
     return newArray;
   }
   ```

   ###### LS Solution

   ```javascript
   function uniqueElements(arr) {
     let uniques = [];
     let len = arr.length;
     
     for (let index = 0; index < len; index += 1) {
       if (uniques.indexOf(arr[index]) === -1) {
         uniques.push(arr[index]);
       }
     }
     
     return uniques;
   }
   
   uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]); // returns [1, 2, 4, 3, 5]
   ```

---

## 11. Practice Problems: Find Missing Numbers

Write a function that takes a sorted array of integers as an argument, and returns an array that includes all the missing integers (in order) between the first and last elements of the argument.  

Examples:

```javascript
missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []
```

###### My Solution

```javascript
function missing(arr) {
  let missingNumbers = [];
  let currentNumber = arr[0];
  let length = arr[arr.length - 1] - arr[0] + 1;

  for (let index = 0; index < length; index += 1) {
    if (arr.indexOf(currentNumber) === -1) {
      missingNumbers.push(currentNumber);
    }

    currentNumber += 1;
  }

  return missingNumbers;
}
```

###### LS Solution

```javascript
function missing(array) {
  let result = [];
  let start = array[0] + 1;
  let end = array[array.length - 1];
  
  for (let integer = start; integer < end; integer += 1) {
    if (array.indexOf(integer) === -1) {
      result.push(integer);
    }
  }
  
  return result;
}
```

---

