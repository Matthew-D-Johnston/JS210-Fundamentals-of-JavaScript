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



