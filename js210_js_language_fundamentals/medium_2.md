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

