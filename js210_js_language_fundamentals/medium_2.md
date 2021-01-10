# JS210 - JavaScript Language Fundamentals

## Medium 2

### 1. Defaults

The `processOrder` function shown below accepts the following arguments: `price`, `quantity`, `discount`, `serviceCharge` and `tax`. Any arguments other than `price` may be omitted when calling the function, in which case, default values will be assigned.

```javascript
function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) {
    quantity = 1;
  }
  
  if (!discount) {
    discount = 0;
  }
  
  if (!serviceCharge) {
    serviceCharge = 0.1;
  }
  
  if (!tax) {
    tax = 0.15;
  }
  
  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

processOrder(100);			// 126.5
```

This function uses conditional statements to test whether arguments have been omitted. When an argument is omitted, JavaScript automatically initializes it to a value of `undefined`. The function takes advantage of this behavior by setting `undefined` arguments to a default value.  

The following variation of the `processOrder` function has the same behavior as the first:

```javascript
function processOrder(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;
  
  return (price * quantity) * (1 = discount) * (1 + serviceCharge) * (1 + tax);
}
```

However, both of these solutions have a limitation that can lead to an incorrect result for certain inputs. What is this limitation and how does it affect the result?

###### My Solution

One limitation that affects both of these solutions is if a value of `0` is passed in as an argument. Since `0` is falsy in JavaScript it will cause the conditional statements to assign the default values to the arguments rather than `0`. This is likely not what we want.  

###### LS Solution

The limitation of these solutions is that when one of the optional arguments has a value of `0`, the function incorrectly treats that argument as if it has been omitted. For example:  

```javascript
processOrder(100, 2, 0.1, 0, 0);      // 227.7 -- incorrect result!
```

This happens because `0` is a **falsy** value in JavaScript, so any arguments with a value of `0` get reassigned a default value. One way to prevent this from happening is to explicitly test whether the input arguments have a value of `undefined`, instead of relying on them being falsy — e.g., `(quantity === undefined)`. (Note that when the value passed for `discount` is `0`, the function works as expected because the default value of `discount` is also `0`.)

---

### 2. Equal

Read through the following code. Currently, it does not log the expected result. Explain why this happens, then refactor the code so that it works as expected.  

```javascript
const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson);		// false -- expected: true
```

###### My Solution

Even though both variables (i.e. `person` and `otherPerson`) are assigned to objects with the exact same property (i.e. name and value pair), they are still referencing separate objects in memory. The equality operator `===` is evaluating whether or not the operands are the same object, not whether they contain the same values. Thus, the result is `false`.  

In order to compare the objects based on the equality of the values of their respective properties, we must do something like this:

```javascript
console.log(person.name === otherPerson.name);		// true
```

Above, we use the same key for each object to access the value associated with that key. The boolean value of `true` should be logged to the console if the values are identical.  

###### LS Solution

This code can be fixed by making sure that the two variables reference the same object instead of two different objects with the same properties.  

```javascript
const person = { name: 'Victor' };
const otherPerson = person;

console.log(person === otherPerson); 			// true
```

In JavaScript, every object literal creates a new object. When this object is assigned to a variable, a **reference** to the object is stored in that variable. In the example above, the only way to ensure that the two variables compare equally is to have them reference the same object.

---

### 3. Amount Payable

What does the following code log? Why is this so?

```javascript
let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));
```

###### My Solution

This program logs:

```
40
45
```

The first logged value, `40`, is a result of logging the return value of the `totalPayable()` function when passed the variables `chicken` and `chickenQuantity` as arguments. However, the second logged value, `45`, results from the exact same operation: logging the return value of the `totalPayable()` function with `chicken` and `chickenQuantity` as arguments. The difference in the values comes from the fact that we have reassigned the `startingBalance` variable, which is called within the function, and thus resulting in different ultimate return values of the function despite passing the same values as arguments.

###### LS Solution

This code logs `40` and `45`.  

###### Discussion

You may want to review the concept of [closures](https://launchschool.com/lessons/511a561c/assignments/a480ef58). Closures have functions *"retain access"* to variables defined in an *"enclosing scope"*. In the code above, the *enclosing scope* is the global (window) scope containing the variables `startingBalance`, `chicken`, and `chickenQuantity`. *Retaining access* means that a variable's value is not fixed at the time when the function is defined or first executed. Instead, the variable's value is dynamically looked up each time the function is called. Therefore, the value of `startingBalance` on line 6 is not `1`; instead, the value is a reference to the value stored in the `startingBalance` variable in the global scope.  

As a result of how closures work, the first time the `totalPayable` function is called, the value of `startingBalance` is `5`; the second time the function is called, the value of `startingBalance` is `10`.

---

### 4. Caller

The `doubler` function in the code below takes two arguments: a `number` to double and return, and a string containing the name of the function's `caller`.

```javascript
function doubler(number, caller) {
  console.log(`This function was called by ${caller}.`);
  return number + number;
}

doubler(5, 'Victor');										// returns 10
// logs:
// This function was called by Victor.
```

Write a `makeDoubler` function that takes a `caller` name as an argument, and returns a function that has the same behavior as `doubler`, but with a preset `caller`.  

Example:

```javascript
const doubler = makeDoubler('Victor');
doubler(5);															// returns 10
// logs:
// This function was called by Victor.
```

###### My Solution

```javascript
function makeDoubler(caller) {
  const doubling = function(number) {
    console.log(`This function was called by ${caller}.`);
    return number + number;
  };

  return doubling;
}
```

###### LS Solution

This solution leverages that functions in JavaScript are first-class. It satisfies the requirement that `makeDoubler` must take a `caller` name and it returns a variation of the `doubler` function.  

```javascript
function makeDoubler(caller) {
  return number => {
    console.log(`This function was called by ${caller}.`);
    return number + number;
  };
}

const doubler = makeDoubler('Victor');
doubler(5);																// returns 10
// logs:
// This function was called by Victor.
```

Notice that the returned anonymous function expression assigned to the `doubler` variable still retains access to the `caller` variable in its closure, even after the `makeDoubler` function returns.  

---

### 5. What's My Value?

What will the following program log to the console? Can you explain why?

```javascript
const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length);
console.log(Object.keys(array).length);

array[-2] = 'Watermelon';
console.log(array.length);
console.log(Object.keys(array).length);
```

###### My Solution

This program logs:

```
3
4

3
5
```

The first result, `3`, corresponds to the number of elements that have a non-negative integer as an index. The second result, `4`, corresponds to the number of keys pertaining to `array`, regardless of whether those keys are non-negative integers or not. The third result, `3`, again correpsonds to the number of elements that have a non-negative integer as an index. The last result, `5`, once again corresponds to the number of keys pertaining to `array`, regardless of whether those keys are non-negative integers or not. Both of the additions of new elements to the array do not change the length of the array because each of those elements use indexes that are not non-negative integers, in the first case we have a decimaled index, `3.4`, and in the second case we have a negative integer, `-2`. These additions, however, do increase the number of keys.

###### LS Solution

```
3
4
3
5
```

Recall that [Arrays are implemented with Objects](https://launchschool.com/lessons/0539330a/assignments/8630526d) internally in JavaScript. One thing that differentiates the two is that arrays have a `length` property, while objects do not. Arrays can be thought of as special objects that have only non-negative integer values (from 0 up to 2 32 - 1) as keys, and have an extra `length` property that keeps track of how many such key-value pairs exist in the object.

```javascript
const array = ['Apples', 'Peaches', 'Grapes'];
array[3.4] = 'Oranges';
array[-2] = 'Watermelon';

console.log(array);  // ["Apples", "Peaches", "Grapes", 3.4: "Oranges", -2: "Watermelon"]

console.log(Object.keys(array));      // ["0", "1", "2", "3.4", "-2"]

// "0", "1", "2" are the indices/keys/property names for "Apples", "Peaches", "Grapes"
console.log(array[0]);                // Apples
console.log(array[1]);                // Peaches
console.log(array[2]);                // Grapes
console.log(array['2']);              // Grapes

// "3.4" and "-2" are keys/property names that exist in the 'Array Object'
console.log(array[3.4]);              // Oranges
console.log(array[-2]);               // Watermelon
console.log(array['-2']);             // Watermelon
```

---

### 6. Length

Read through the code below. What values will be logged to the console? Can you explain these results?  

```javascript
const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages);
console.log(languages.length);

languages.length = 4;
console.log(languages);
console.log(languages.length);

languages.length = 1;
console.log(languages);
console.log(languages.length);

languages.length = 3;
console.log(languages);
console.log(languages.length);

languages.length = 1;
languages[2] = 'Python';
console.log(languages);
console.log(languages[1]);
console.log(languages.length);
```

###### My Solution

```
['JavaScript', 'Ruby', 'Python']
3

['JavaScript', 'Ruby', 'Python', <1 empty item>]
4

['JavaScript']
1

['JavaScript', <2 empty items>]
3

['JavaScript', <1 empty item>, 'Python']
undefined
3
```

The first two lines that are logged to the console result from having assigned the constant variable `languages` to the array `['JavaScript', 'Ruby', 'Python']`. The first one simply logs the array, which is the value referenced by `languages`, and the second one logs the length of that array, which is `3`.  

For the next two lines we must take into account the fact that we have reassigned the length property of the array to `4`. This adds another entry to the array, which will show up as `<1 empty item>` when we log the return value of calling the `languages` variable to the console. Since we have changed the length property to `4`, that is the value that is logged when we retrieve the length of the `languages` variable.  

In the third grouping of code, we begin by setting the length property to `1`. This will chop our array so that it has only one element, the first one. Thus, logging the array to the console produces the output `['JavaScript']`. Again, since we have changed the length property to `1`, that is the output we get when logging the result of retreiving the length property.  

In the fourth grouping, we set the length property to `3`. We should now have 2 empty items augmented to the end of our array object. However, rather than two `<1 empty item>` entries, we get one `<2 empty items>` entry. And again, logging the length property to the console gives us `3`, which is the value we just set.  

The last grouping begins by setting the length property to `1` and then assigns the string `'Python'` to the element with the index of 2, which is the third element in the array. Logging the value associated with the `languages` variable should return an array with three entries, the first of which is `'JavaScript'`, the second `<1 empty item>`, and the third `'Python'`. Logging the return value of the second element of the array, the one with an index of 1, results in the output of `undefined`, since it is referencing the empty item entry. And now when we log the length to the console, we should get an output return of `3` since there are now three entries.

###### LS Solution

Using Node REPL (v8.8.1):

```javascript
['JavaScript', 'Ruby', 'Python']
3
['JavaScript', 'Ruby', 'Python', <1 empty item>]
4
['JavaScript']
1
['JavaScript', <2 empty items>]
3
['JavaScript', <1 empty item>, 'Python']
undefined
3
```

Using Chrome Console (v62):

```javascript
["JavaScript", "Ruby", "Python"]
3
["JavaScript", "Ruby", "Python", empty]
4
["JavaScript"]
1
["JavaScript", empty × 2]
3
["JavaScript", empty, "Python"]
undefined
3
```

###### Discussion

The key takeaway for this exercise is that the `length` property can be explicitly set (recall that arrays are zero-indexed). Setting the `length` to a value that is less than the current `length` truncates the array; re-setting the `length` to a higher value does not bring back the truncated elements. Setting the `length` to a value greater than the current `length` creates 'empty slots' in the array, but the number of actual elements does not increase. Furthermore, since the value of the `length` is always equal to the last index plus `1`, adding an element to index 2 of a one-element array changes the array's `length` to `3`, even though the array only has two actual elements (at indices 0 and 2).  

Arrays with 'empty slots' are sometimes referred to as 'sparse arrays'. You may see them represented in a variety of different ways. For example:  

```javascript
const sparseArray = [, , 'a', , 'b'];
console.log(sparseArray);

// logs
[<2 empty items>, 'a', <1 empty item>, 'b']		// Node REPL v8.8.1
[ , , 'a', , 'b']															// older version of Node
[empty x 2, "a", empty, "b"]									// Chrome Console v62
[undefined x 2, "a", undefined x 1, "b"]			// older version of Chrome
[<2 empty slots>, "a", <1 empty slot>, "b"]		// Firefox 57.0
```

---

### 7. The Red Pill

 Read through the code below and determine what will be logged. You may refer to the [ASCII Table](http://www.ascii-code.com/) to look up character code values.  

```javascript
function one() {
  function log(result) {
    console.log(result);
  }
  
  function anotherOne(...args) {
    let result = '';
    for (let i = 0; i < args.length; i += 1) {
      result += String.fromCharCode(args[i]);
    }
    
    log(result);
  }
  
  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101));
    anotherOne(116, 111);
  }
  
  anotherAnotherOne();
  anotherOne(116, 104, 101);
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33);
```

###### My Solution

```javascript
Welcome
to
the
Matrix!
```

###### LS Solution

```
Welcome
to
the
Matrix!
```

###### Discussion

The trick to solving this problem is to follow the sequence of function calls. The call to the `one` function may look confusing, but it is actually just two successive function calls (because the `one` function returns the `anotherOne` function). Notice that when the `anotherOne` function is returned, it still has access to the `log` function that is declared in its enclosing scope (closure) inside the `one` function.  

This code has a total of eight function calls:

```javascript
1: one();
2: anotherAnotherOne();																// Welcome
3: anotherOne(116, 111);
4: log(result);																				// to
5: anotherOne(116, 104, 101);
6: log(result);																				// the
7: anotherOne(77, 97, 116, 114, 105, 120, 33);
8: log(result);																				// Matrix!
```

