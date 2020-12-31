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



