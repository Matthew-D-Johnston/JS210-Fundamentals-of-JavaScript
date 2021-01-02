##### JS210 - JavaScript Language Fundamentals > Objects

---

## 1. Literal

Identify the bug in the following code. Don't run the code until after you've tried to answer.  

```javascript
const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a];
myObject.a;
```

###### My Solution

The `myObject[a]` will fail because it is using bracket notation with a local variable `a` rather than the string `a`. Even though within the object definition it looks like `a` is not a string it is converted to a string when it is created.  

After running the code, my answer is confirmed. Running `myObject[a]` raises an `Uncaught ReferenceError`, which says `a is not defined`.  

###### LS Solution

The expression `myObject[a]` raises a `ReferenceError`.  

###### Discussion

To access the value of a property using bracket notation (e.g., `object[someKey]`), the operand inside the brackets that references the property name (key) must be a string value. If the operand is a number, JavaScript converts it to a string using the `Number.prototype.toString()` method. If the operand is a variable, JavaScript looks up the value (converting it to a string if necessary), then uses it as a key to get the corresponding property value. The expression `myObject[a]` raises a `ReferenceError` because JavaScript cannot find the value of the variable `a`, since it has not been declared.  

---

## 2. Literal Method

In the following code, a user creates a `person` object literal and defines two methods for returning the `person`'s first and last names. What is the result when the user tries out the code on the last line?  

```javascript
const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);
```

###### My Solution

My initial guess, before running the code, is that the following is logged to the console ...

```
Victor Reyes
```

What is actually logged is ...

```
firstName() {
return 'Victor';
} lastName() {
return 'Reyes';
}
```

In order to get the result that I originally expected, I need to ensure that the parentheses, `()`, are included at the end of the method calls (i.e. `firstName()` rather than just `firstName`).  

###### LS Solution

```
firstName() {
    return 'Victor';
  } lastName() {
    return 'Reyes';
  }
```

###### Discussion

Just like functions, object literal methods must be *called* by appending parentheses (e.g., `person.firstName()`) in order to be executed. Functions are first class objects, so referencing the function name without the parentheses would return the function itself, not the string representation:

```javascript
const hi = person.firstName;

hi;
// firstName() {
//   return 'Victor';
// }

// vs.

hi();
// "Victor"
```

---

## 3. Mutation

What will the following code log to the console and why? Don't run the code until after you have tried to answer.  

```javascript
const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);
```

###### My Solution

```
['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
```

The first `for` loop takes each element from `array1` and adds to `array2` so that when the loop finishes both arrays contain identical elements. In fact, both arrays are pointing to the same String objects.  

The second `for` loop transforms the elements that start with a capital `'C'`, making those strings upper case strings.  However, while both arrays point to the same String objects, `toUpperCase()` does not mutate the object on which it is performed. It will thus not affect the String objects in `array2`.

###### LS Solution

```
["Moe", "Larry", "Curly", "Shemp", "Harpo", "Chico", "Groucho", "Zeppo"]
```

###### Discussion

If you expected `array2` to remain unchanged, then you are correct. But why should this be the case if `array1` is an object? This is because even though `array1` is an object and thus mutable, its elements are string primitives and thus immutable.  

###### Further Exploration

- What would happen if an object literal was part of the `array1` elements pushed to `array2`? Would changes made to the object literal in `array1` be reflected in `array2`?
- How would you change the code so that any changes made to `array1` in the second `for` loop get reflected to `array2`?

###### My FE Solution

To the first question, the answer is 'yes'. Changes made to the object literal in `array1` would be reflected in `array2`.  

You would have to explicitly include `array2` in the second `for` loop and employ the same changes as employed to change `array1`.  Or, `array2` would have to be assigned the value referenced by `array1` so that both variables are referencing the same object.

---

## 4. Dynamic

What will the following code log to the console and why? Don't run the code until after you have tried to answer.  

```javascript
const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]);
console.log(myObject.prop2);
```

###### My Solution

```
678
456
```

The first `console.log` invocation takes `myObject[prop2]` as an argument. `prop2` evaluates to `'456'`, and since we created a `key` with this value in the `myObject` object on line 9, `myObject[prop2]` is equivalent to invoking `myObject['456']`, which will return the value of `'678'`.  

The second `console.log`invocation takes `myObject.prop2` as an argument. This is using dot notation to return the value associated with the key `prop2` in `myObject`, which originally was `'234'`.  However, online 8, this value was changed to `'456'`.

###### LS Solution

```
line 11: "678"
line 12: "456"
```

###### Discussion

Was the result what you expected? The tricky parts here are the names of the properties, the variable name, and, of course, the fact that you can use an expression to create and access properties. The difference between lines 11 and 12, although they may look the same, is that on line 11, the value of `prop2` (the string `'456'`) is used as the key. This line does not log `undefined` because a property with the name of `'456'` and a value of `'678'` was added to `myObject` on line 9 using the `prop2` variable. On line 12, when the `'prop2'` (string literal) property of `myObject` is accessed, the value logged (`'456'`) is different from the value assigned on line 3 (`'234'`) because this property was reassigned on line 8.  

###### Further Exploration

Here is another example. What do you think will be logged to the console this time, and why?  

```javascript
const myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj);
myObj[myFunc()] = 'world!';
console.log(myObj);
```

###### My FE Solution

```
line 8: { funcProp: 'hello, ' }
line 10: { funcProp: 'world!' }
```

On the second line, we are assigning a new property to `myObj`. The name will be the return value of the call to `myFunc()`, which is `funcProp`, and the value is `'hello, '`. Thus, line 8 will return the object which includes this new property. On line 9, we reassign `funcProp` to the value `'world!'`.

---

## 5. Array Object Part 1

What will the following code log to the console and why? Don't run the code until after you have tried to answer.

```javascript
const myArray = ['a', 'b', 'c'];

console.log(myArray[0]);
console.log(myArray[-1]);

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]);
console.log(myArray['e']);
console.log(myArray);
```

###### My Solution

```javascript
const myArray = ['a', 'b', 'c'];

console.log(myArray[0]);			// a
console.log(myArray[-1]);			// undefined

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]);			// d
console.log(myArray['e']);		// 5
console.log(myArray);					// ['a', 'b', 'c', 'f', '-1': 'd', 'e': 5]
```

After running the code, I see that I was mostly correct except for a slight tweak to the last line:

```javascript
console.log(myArray);					// ['a', 'b', 'c', 'f', '-1': 'd', e: 5]
```

The `e` does not have quotation marks.

###### LS Solution

```
line 3: "a"
line 4: undefined
line 10: "d"
line 11: 5
line 12: ["a", "b", "c", "f", "-1": "d", e: 5]
```

###### Discussion

[Arrays are JavaScript Objects](https://launchschool.com/lessons/0539330a/assignments/8630526d)! If you think about it from that perspective, it makes sense that using `-1` as an "index" (or key), on line 4, does not return the last value of the array but instead returns `undefined`, which is the expected result when trying to access an object's property that is not defined or does not exist. If you take a look at the array logged on line 12, you can see that for any of its values that have a key (property name) of anything besides a non-negative integer, the key is also displayed when the array is logged.

---

## 6. Array Object Part 2

A user wrote a function that takes an array as an argument and returns its average. Given the code below, the user expects the `average` function to return `5`. Is the user's expectation correct? Why or why not?

```javascript
const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;
  
  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }
  
  return sum / array.length;
}

average(myArray);
```

###### My Solution

No, the user's expectation is not correct. Following the `for` loop, the `sum` variable will be referencing a value of `20`. However, the length of the `array` is only `2` since the two elements with negative indexes are not counted in the total length. Thus, in the final line, the return value of `sum / array.length` will be `10` rather than `5`.

###### LS Solution

```
10
```

###### Discussion

An array property with a key of anything other than a non-negative integer is not counted as part of the array's `length`. Therefore in the code above, the `length` of the `array` is `2`, instead of `4` like the user expected. So the expression in the `return` statement evaluates to `20 / 2` and the function returns `10`.

###### Further Exploration

Refactor the `average` function so that it returns the result that the user expected, `5`.

###### My FE Solution

```javascript
const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;
  let divisor = 0;
  
  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
    divisor += 1;
  }
  
  return sum / divisor;
}

average(myArray);
```

---

## 7. What's my Bonus

The `calculateBonus` function calculates the bonus for a given salary. It makes use of two arguments for determining the bonus: a salary amount and a boolean switch. If the boolean is `true`, the bonus should be half of the salary; otherwise the bonus should be `0`. Fill in the blanks in the function so that it will work, then explain why it works.  

Examples:

```javascript
function calculateBonus() {
  return ___________[1] ? __________[0] / 2 : 0;
}

calculateBonus(2800, true);										// 1400
calculateBonus(1000, false);									// 0
calculateBonus(50000, true);									// 25000
```

###### My Solution

```javascript
function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}
```

This function has been defined without any explicit parameters. Whatever arguments are passed to it will be stored in an array object under the variable `arguments`. The first argument will have an index of `0`, the second argument an index of `1`, and so on and so on.  

Within the function, we use the ternary operator to check to see whether the boolean switch value is `true` or `false`. We access the boolean switch value by using an index of `1` with the `arguments` array. If the return value is `true`, then the expression `arguments[0] / 2` is evaluated and returns the value of given salary argument divided by `2`; if `false`, the value of `0` is returned.  

###### LS Solution

```javascript
function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}
```

###### Discussion

Notice that while no "parameters" are explicitly defined for the `calculateBonus` function, there are still "arguments" that are available locally within the function. This is because all functions have an arguments object that is available locally. The `arguments` object contains an entry for every argument passed to the function.

---

## 8. The End is Near But Not Here

The `penultimate` function takes a string as an argument and returns the next-to-last word in the string. The function assumes that "words" are any sequence of non-whitespace characters. The function also assumes that the input string will always contain at least two words. The `penultimate` function in the example below does not return the expected result. Run the code below, check the current result, identify the problem, explain what the problem is, and provide a working solution.  

Examples:

```javascript
function penultimate(string) {
  return string.split(' ')[-2];
}

penultimate('last word');											// expected: "last"
penultimate('Launch School is great!');				// expected: "is"
```

###### My Solution

The return values from running the code are:

```javascript
penultimate('last word')											// undefined
penultimate('Launch School is great!');				// undefined
```

The problem is that after splitting the string into separate words and storing them in an Array object, we are trying to access the second-to-last word using bracket notation and an index of `-2`. However, JavaScript does not read `-2` as the second-to-last index but as a literal key value. Since there is no defined `-2` key, the return value is `undefined`.  

In order to solve the problem, we need to employ a different tactic for accessing the second-to-last element of the Array object. One way to do this is by taking the length of the array and subtracting two from it. The refactored function would look like this:

```javascript
function penultimate(string) {
  let words = string.split(' ');
  return words[words.length - 2];
}
```

###### LS Solution

```javascript
function penultimate(string) {
  return string.split(' ').slice(-2, -1)[0];
}
```

###### Discussion

In JavaScript, unlike some other programming languages, using a negative index to access an array does not extract elements from the end, nor does it raise an error. Instead, performing such an action usually returns `undefined`, such as in the broken `penultimate` function above. This behavior is caused by the fact that in JavaScript, Arrays are Objects. By using `-1` with bracket notation (e.g., `myArray[-1]`), we are actually telling JavaScript to access the property that has a key of `'-1'` and return that property's value.  

To get the expected result, the solution uses the `Array.prototype.slice` method, which, unlike bracket notation, can be passed a negative index as an argument to extract elements from the end of an array. The main difference with `slice` is that we must provide an `endingIndex` as a second argument; otherwise the `slice` method assumes that we want to get all elements from the provided `startingIndex` up to the end of the array. For example, given the expression `[1, 2, 3, 4, 5].slice(-2)`, the last two elements (`[4, 5]`) are returned. The solution passes `-1` as the `endingIndex`, causing `slice` to stop at index `-2` (the second-to-last element). This is because the `slice` method extracts the elements up to but not including the `endingIndex`. Following this, the solution uses bracket notation to extract the word from the single-element array returned by `slice`, and thus `penultimate` returns a string.  

---

## 9. After Midnight Part 1

We can use the number of minutes before or after midnight to represent the time of day. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.  

The `timeOfDay` function shown below takes a time argument using this minute-based format, and returns the time of day in 24-hour format (`"hh:mm"`). Reimplement the function using JavaScript's `Date` object.  

Examples:  

```javascript
timeOfDay(0);          // "00:00"
timeOfDay(-3);         // "23:57"
timeOfDay(35);         // "00:35"
timeOfDay(-1437);      // "00:03"
timeOfDay(3000);       // "02:00"
timeOfDay(800);        // "13:20"
timeOfDay(-4231);      // "01:29"
```

Note: Disregard Daylight Saving Time, Standard Time, and other complications.

```javascript
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function timeOfDay(deltaMinutes) {
  deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  if (deltaMinutes < 0) {
    deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
  }
  
  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;
  
  return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`;
}

function padWithZeroes(number, length) {
  let numberString = String(number);

  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }

  return numberString;
}
```

###### My Solution;

```javascript
function timeOfDay(deltaMinutes) {
  let date = new Date();
  date.setTime(0);
  date.setMinutes(deltaMinutes);
  
  let hours = date.getUTCHours();
  let minutes = date.getUTCMinutes();
  
  return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`;
}

function padWithZeroes(number, length) {
  let numberString = String(number);
  
  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }
  
  return numberString;
}
```

###### LS Solution

```javascript
const MILLISECONDS_PER_MINUTE = 60000;

function timeOfDay(deltaMinutes) {
  const midnight = new Date('1/1/2000 00:00');
  const afterMidnight = new Date(midnight.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE);
  const hours = padWithZeroes(afterMidnight.getHours(), 2);
  const minutes = padWithZeroes(afterMidnight.getMinutes(), 2);

  return `${hours}:${minutes}`;
}

function padWithZeroes(number, length) {
  let numberString = String(number);

  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }

  return numberString;
}
```

###### Discussion

Going over the first `timeOfDay` function, notice that the function is aiming to get two parts of the time of day: (1) the hours component and (2) the minutes component. Without using the `Date` object's methods, the function has to handle the sign of the input (negative or positive) and the wrapping-around of the 24-hour clock.  

For this exercise, the solution leverages the `Date.prototype.getTime` method. This method returns the value of the `Date` object in milliseconds format. The solution starts off by creating a `Date` object set to midnight of an arbitrary day and stores it in the `midnight` variable. The solution then multiplies the `deltaMinutes` argument by `MILLISECONDS_PER_MINUTE` to convert it to milliseconds, then adds it to the milliseconds value returned by calling `getTime()` on `midnight`. The solution then creates another `Date` object set to the sum of these two milliseconds values and assigns it to the `afterMidnight` variable. Finally, the solution gets the hours and minutes values from the `afterMidnight` variable, then uses the `padWithZeroes` function to convert them to strings and pad them with the correct number of leading zeroes.

----

## 10. After Midnight Part 2

As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.  

The two functions below do the reverse of the previous exercise. They take a 24-hour time argument and return the number of minutes before or after midnight, respectively. Both functions should return a value between `0` and `1439` (inclusive). Refactor the functions using the `Date` object.  

Examples:

```javascript
afterMidnight('00:00');       // 0
beforeMidnight('00:00');      // 0
afterMidnight('12:34');       // 754
beforeMidnight('12:34');      // 686
```

Note: Disregard Daylight Saving Time, Standard Time, and other irregularities.

```javascript
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  const timeComponents = timeStr.split(':');
  const hours = parseInt(timeComponents[0], 10);
  const minutes = parseInt(timeComponents[1], 10);
  
  returns hours * MINUTES_PER_HOUR + minutes;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }
  
  return deltaMinutes;
}
```

###### My Solution

```javascript
const MINUTES_PER_MILLISECOND = 1 / 60000;

function afterMidnight(timeStr) {
  let baseDate = new Date('January 1, 2000 00:00:00');
  let date = new Date(`January 1, 2000 ${timeStr}:00`);

  let minutes = (date.getTime() - baseDate.getTime()) * MINUTES_PER_MILLISECOND;

  if (minutes === 1440) {
    return 0;
  } else {
    return minutes;
  }
}

function beforeMidnight(timeStr) {
  let minutes = 1440 - afterMidnight(timeStr);
  if (minutes === 1440) {
    return 0;
  } else {
    return minutes;
  }
}
```

###### LS Solution

```javascript
const MILLISECONDS_PER_MINUTE = 60000;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
const DATE_PART = '1/1/2000';

function afterMidnight(timeStr) {
  const midnight = new Date(`${DATE_PART} 00:00`);
  const currentDateTime = new Date(`${DATE_PART} ${timeStr}`);
  
  return (currentDateTime.getTime() - midnight.getTime()) / MILLISECONDS_PER_MINUTE;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }
  
  return deltaMinutes;
}
```

###### Discussion

Since the `beforeMidnight` function relies on the `afterMidnight` function to provide most of its behavior, the solution only makes changes to `afterMidnight`. In `afterMidnight`, the solution starts off by creating two `Date` objects to represent `midnight` and the `currentDateTime` derived from the `timeStr` argument. Next, it calls `Date.prototype.getTime` to convert the two `Date` objects to milliseconds, then subtracts the `midnight` milliseconds from the `currentDateTime` milliseconds. Finally, the solution divides the result by `MILLISECONDS_PER_MINUTE` to convert it to minutes, then returns it.

