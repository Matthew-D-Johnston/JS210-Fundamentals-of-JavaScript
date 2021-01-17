##### JS210 - Small Problems > Easy 4

---

### 1. Cute Angles

Write a function that takes a floating point number representing an angle between 0 and 360 degrees, and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (`˚`) to represent degrees, a single quote (`'`) to represent minutes, and a double quote (`"`) to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.  

Examples:  

```javascript
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
```

Note: your results may differ slightly depending on how you round values, but should generally be within a second or two of the results shown.  

###### My Solution

```javascript
function dms(angle) {
  let degrees = Math.floor(angle);
  angle -= degrees;
  angle *= 60;

  let minutes = Math.floor(angle);
  angle -= minutes;
  angle *= 60;

  let seconds = Math.floor(angle);

  minutes = padding(minutes);
  seconds = padding(seconds);

  return degrees + String.fromCharCode(176) + minutes + "'" + seconds + "\"";
}

function padding(number) {
  if (number < 10) {
    return '0' + String(number);
  } else {
    return String(number);
  }
}
```

###### LS Solution

```javascript
const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(degreesFloat) {
  const degreesInt = Math.floor(degreesFloat);
  const minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  const seconds = Math.floor(
    (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) * SECONDS_PER_DEGREE
  )
}

function padZeroes(number) {
  const numString = String(number);
  return numString.length < 2 ? (`0${numString}`) : numString;
}
```

###### Discussion

The tricky part with this exercise is the mathematical component. That said, there are websites that provide details on how to compute this.  

This solution computes the `degreesInt` component by flooring the input to remove the decimal component. It computes the `minutes` component by subtracting from the input the `degreesInt` component, and then multiplying the result by `MINUTES_PER_DEGREE`. Lastly, it computes the `seconds` component by subtracting from the input the `degreesInt` and `minutes` divided by `MINUTES_PER_DEGREE`, and then multiplying the result by `SECONDS_PER_DEGREE`. For both the `minutes` and `seconds` components, the solution subtracts from the input to get the value of the decimal components, which it multiplies with their respective conversion factors.  

The next part, which is more programmatic in nature, is the formatting of the string output. The solution uses a helper function to pad a zero to the left of any single-digit numbers. The return value of the `dms` function is a string that includes padded values and the `DEGREE` variable. The `DEGREE` variable holds the [hexadecimal escape sequence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting) representing the degree symbol.  

###### Further Exploration

The current solution implementation only works with positive numbers in the range of `0` to `360` (inclusive). Can you refactor it so that it works with any positive or negative number?  

Our solution returns the following results for inputs outside the range 0-360:

```javascript
dms(-1);   // -1°00'00"
dms(400);  // 400°00'00"
dms(-40);  // -40°00'00"
dms(-420); // 420°00'00"
```

Since degrees are normally restricted to the range 0-360, can you modify the code so it returns a value in the appropriate range when the input is less than 0 or greater than 360?  

```javascript
dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"
```

###### My FE Solution

```javascript
function dms(angle) {
  while (angle > 360) {
    angle -= 360;
  }

  while (angle < 0) {
    angle += 360;
  }

  let degrees = Math.floor(angle);
  angle -= degrees;
  angle *= 60;

  let minutes = Math.floor(angle);
  angle -= minutes;
  angle *= 60;

  let seconds = Math.floor(angle);

  minutes = zeroPads(minutes);
  seconds = zeroPads(seconds);

  return degrees + String.fromCharCode(176) + minutes + "'" + seconds + "\"";
}

function zeroPads(number) {
  if (number < 10) {
    return '0' + String(number);
  } else {
    return String(number);
  }
}
```

---

### 2. Combining Arrays

Write a function that takes two arrays as arguments, and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.  

Example:

```javascript
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
```

###### My Solution

Here is one solution, messing around with some new methods:

```javascript
function union(array1, array2) {
  let concatenated = array1.concat(array2);
  let uniqueSet = new Set();

  for (let i = 0; i < concatenated.length; i += 1) {
    uniqueSet.add(concatenated[i]);
  }

  return Array.from(uniqueSet);
}
```

Another solution, although not as fancy and a little more basic logic:

```javascript
function union(array1, array2) {
  return uniqueValues(array1.concat(array2));
}

function uniqueValues(array) {
  let valuesObject = {};

  for (let index = 0; index < array.length; index += 1) {
    valuesObject[array[index]] = 1;
  }

  let keyValues = Object.keys(valuesObject);
  let numericValues = [];

  for (let index = 0; index < keyValues.length; index += 1) {
    numericValues.push(Number(keyValues[index]));
  }

  return numericValues;
}
```

###### LS Solution

##### Solution 1

```javascript
function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    							if (!resultArray.includes(value)) {
                    resultArray.push(value);
                  }
  							});
}

function union(array1, array2) {
  const newArray = [];
  copyNonDupsTo(newArray, array1);
  copyNonDupsTo(newArray, array2);
  return newArray;
}
```

##### Solution 2

```javascript
function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    							if (!resultArray.includes(value)) {
                    resultArray.push(value);
                  }
  							});
}

function union(...args) {
  const newArray = [];
  
  args.forEach(value => copyNonDupsTo(newArray, value));
  
  return newArray;
}
```

###### Dicussion

Both of these solutions use the `copyNonDupsTo` function to copy elements from an array to a result array, without duplication. The two versions are identical. The function loops through the array it is copying, and appends each element to the result array, but only if that element is not already there.  

Solution 1 adheres strictly to the exercise description, and constructs a new array from the two argument arrays. We simply call `copyNonDupsTo` for each of the two arrays.  

Solution 2 provides a more general solution to the problem: it works properly with two array arguments, but also works with only one array, or with three or more arrays. To accomplish this, it makes use of the `args` rest parameter. The function simply iterates over the `args` array, and calls `copyNonDupsTo` for each element.

---

### 3. Halvsies

Write a function that takes an array as an argument, and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.  

Examples: 

```javascript
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
```

###### My Solution

```javascript
function halvsies(array) {
  let midpoint = Math.ceil(array.length / 2);
  let array1 = array.slice(0, midpoint);
  let array2 = array.slice(midpoint, array.length);

  return [array1, array2];
}
```

###### LS Solution

```javascript
function halvsies(array) {
  const half = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, half);
  const secondHalf = array.slice(half);
  
  return [firstHalf, secondHalf)];
}
```

###### Discussion

The basic task is to split the `array` argument into two pieces: a first and a second half. The solution gets the size of the first half by dividing the `array` argument's `length` by `2`. If the `length` is odd, the `Math.ceil` method will account for it, making the first half larger than the second by `1`. It creates the second half based on the size of the first half. It uses the `Array.prototype.slice` method to create both halves. Finally, it returns the `halvsies` arrays composed of the `firstHalf` and `secondHalf` as elements.

---

### 4. Find the Duplicate

Given an unordered array and the information that exactly one value in the array occurs twice (every other value occurs exactly once), determine which value occurs twice. Write a function that will find and return the duplicate value that is in the array.  

Examples:

```javascript
findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73
```

###### My Solution

```javascript
function findDup(array) {
  let nonDuplicates = [];

  for (let index = 0; index < array.length; index += 1) {
    if (nonDuplicates.includes(array[index])) {
      return array[index];
    } else {
      nonDuplicates.push(array[index]);
    }
  }
}
```

###### LS Solution

```javascript
function findDup(array) {
  const seen = {};
  
  for (let i = 0; i < array.length; i += 1) {
    if (seen[array[i]]) {
      return array[i];
    } else {
      seen[array[i]] = true;
    }
  }
}
```

###### Discussion

The solution uses a `seen` object to keep track of the values iterated over. In the `for` loop, any time that the `seen` object evaluates to `true`, stop looping and return the value at the current iteration.  

---

### 5. Combine Two Lists

Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.  

You may assume that both input arrays are non-empty, and that they have the same number of elements.  

Example:

```javascript
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
```

###### My Solution

```javascript
function interleave(array1, array2) {
  let length = array1.length;
  let combinedList = [];

  for (let index = 0; index < length; index += 1) {
    combinedList.push(array1[index]);
    combinedList.push(array2[index]);
  }

  return combinedList;
}
```

###### LS Solution

```javascript
function interleave(array1, array2) {
  const newArray = [];
  
  for (let i = 0; i < array1.length; i += 1) {
    newArray.push(array1[i], array2[i]);
  }
  
  return newArray;
}
```

###### Discussion

The solution iterates `n` number of times; where `n` is the value of the `length` of either `array1` or `array2`. At every iteration it pushes the values of `array1` and `array2` to the `newArray` variable sequentially. It only uses one `Array.prototype.push` call per iteration, since `push` can take one or more arguments.

---

### 6. Multiplicative Average

Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.  

Examples:  

```javascript
showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
```

###### My Solution

```javascript
function showMultiplicativeAverage(numbers) {
  let total = 1;

  for (let index = 0; index < numbers.length; index += 1) {
    total *= numbers[index];
  }

  let average = total / numbers.length;
  return average.toFixed(3);
}
```

###### LS Solution

```javascript
function showMultiplicativeAverage(numbers) {
  let product = 1;
  
  for (let i = 0; i < numbers.length; i += 1) {
    product *= numbers[i];
  }
  
  return (product / numbers.length).toFixed(3);
}
```

###### Discussion

The solution iterates over all the elements in the array. With each iteration, it multiplies the `product` variable's value by the value at the current index. After looping, it divides the `product` by the `length` of the `numbers` argument. It then calls the `Number.prototype.toFixed` method on the result, which rounds the number to `3` decimal places and converts it to a string.  

---

### 7. Multiply Lists

Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.  

Example:

```javascript
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
```

###### My Solution

```javascript
function multiplyList(array1, array2) {
  let products = [];

  for (let i = 0; i < array1.length; i += 1) {
    products.push(array1[i] * array2[i]);
  }

  return products;
}
```

###### LS Solution

```javascript
function multiplyList(numbers1, numbers2) {
  const result = [];
  
  for (let i = 0; i < numbers1.length; i += 1) {
    result.push(numbers1[i] * numbers2[i]);
  }
  
  return result;
}
```

###### Discussion

Given that both arguments will be of the same `length`, the solution uses a `for` loop to iterate over the values at their respective indices. During each iteration, it computes the product of multiplying the values at the current index of each array, and pushes that product to a `result` array. After the loop has finished, it returns the `result` array.  

---

### 8. Digits List

Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.  

Examples: 

```javascript
digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]
```

###### My Solution

```javascript
function digitList(number) {
  let strNumber = String(number);
  let digits = [];

  for (let i = 0; i < strNumber.length; i += 1) {
    digits.push(parseInt(strNumber[i], 10));
  }

  return digits;
}
```

###### LS Solution

```javascript
function digitList(number) {
  const numberStringArray = String(number).split('');
  const numberArray = [];

  for (let i = 0; i < numberStringArray.length; i += 1) {
    numberArray.push(parseInt(numberStringArray[i], 10));
  }

  return numberArray;
}
```

###### Discussion

The solution converts the `number` argument to a string, then uses the `String.prototype.split` method to split the string into an array of single-digit strings. It then iterates over the array, converting each digit string to a number and pushing it to the `numberArray`. Finally, the solution returns the `numberArray`.  

###### Further Exploration

A more concise approach would be to use the `Array.prototype.map` method. Refactor the current solution to make use of this method, if you haven't already.

###### My FE Solution

```javascript
function digitList(number) {
  let strDigits = String(number).split('');

  return strDigits.map(digit => parseInt(digit, 10));
}
```

---

### 9. How Many

Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences.  

Example: 

```javascript
const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
```

###### My Solution

```javascript
function countOccurrences(array) {
  let counts = {};

  for (let i = 0; i < array.length; i += 1) {
    if (counts[array[i]]) {
      counts[array[i]] += 1;
    } else {
      counts[array[i]] = 1;
    }
  }

  let elements = Object.keys(counts);

  elements.forEach(element => console.log(element + ' => ' + counts[element]));
}
```

###### LS Solution

```javascript
function countOccurrences(elements) {
  const occurrences = {};
  
  for (let i = 0; i < elements.length; i += 1) {
    occurrences[elements[i]] = occurrences[elements[i]] || 0;
    occurrences[elements[i]] += 1;
  }
  
  logOccurrences(occurrences);
}

function logOccurrences(occurrences) {
  for (let item in occurrences) {
    console.log(`${item} => ${String(occurrences[item])}`);
  }
}
```

###### Discussion

The solution uses two functions. The second function, `logOccurrences`, is more for readability purposes. Its sole use is to log each `key: value` pair in the format specified by the exercise description.  

The function of interest is `countOccurrences`. It starts off by initializing an `occurrences` object. This object holds the results of the counting. The function uses a loop to iterate over each element of the `elements` array argument. During each iteration, it checks to see if a property, with a key equal to the name of the current vehicle, exists in `occurrences`. If it does not exist, the function initializes the property to `0`. The function then increments the current value of the property by `1`. Finally, the function calls `logOccurrences` to output the desired result.

---

### 10. Array Average

Write a function that takes one argument, an array containing integers, and returns the average of all the integers in the array, rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.  

Examples:

```javascript
average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40
```

###### My Solution

```javascript

```

