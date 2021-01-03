# JS210 - JavaScript Language Fundamentals

## Medium 1

### 1. Logical Operation

What will each line of the following code return? Don't run the code until after you have tried to answer.  

```javascript
(false && undefined);
(false || undefined);
((false && undefined) || (false || undefined));
((false || undefined) || (false && undefined));
((false && undefined) && (false || undefined));
((false || undefined) && (false && undefined));
('a' || (false && undefined) || '');
((false && undefined) || 'a' || '');
('a' && (false || undefined) && '');
((false || undefined) && 'a' && '');
```

###### My Solution

```javascript
(false && undefined);																// false (correct)
(false || undefined);																// false (incorrect: undefined)
((false && undefined) || (false || undefined));			// false (incorrect: undefined)
((false || undefined) || (false && undefined));			// false (correct)
((false && undefined) && (false || undefined));			// false (correct)
((false || undefined) && (false && undefined));			// false (incorrect: undefined)
('a' || (false && undefined) || '');								// 'a' (correct)
((false && undefined) || 'a' || '');								// 'a' (correct)
('a' && (false || undefined) && '');								// undefined (correct)
((false || undefined) && 'a' && '');								// undefined (correct)
```

After running the code and making the corrections, that gives...

```javascript
false
undefined
undefined
false
false
undefined
'a'
'a'
undefined
undefined
```

###### LS Solution

```javascript
false
undefined
undefined
false
false
undefined
"a"
"a"
undefined
undefined
```

###### Discussion

The logical AND (`&&`) and logical OR (`||`) operators do not always return a boolean value. They return the value of one of their operands (i.e., the expressions being compared), which may be a non-boolean value such as shown above. You can learn more about the [logical operator rules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators) on MDN.  

The return value of a logical expression can be determined by iteratively evaluating the expression from left to right until it results in a single value. For example:  

```javascript
((false && undefined) || 'a' || '');
(false || 'a' || '');
('a' || '');
('a');

------

('a' && (false || undefined) && '');
('a' && undefined && '');
(undefined && '');
(undefined);

------

((false || undefined) || (false && undefined));
(undefined || false);
(false);
```

---

### 2. Conditional Loop

The following program is expected to log each number between `0` and `9` (inclusive) that is a multiple of `3`. Read through the code shown below. Will it produce the expected result? Why or why not?  

```javascript
let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}
```

###### My Solution

No, the program will not log the expected result.  Instead, the program will engage in an infinite loop where it only logs `0`  until we cause the program to stop running by brute force.  

The problem is that we only increment `i` if the first `if` conditional statement is not true. But since we initialized `i` with the value of `0` and the `if` conditional statement `i % 3 === 0` evaluates to true when `i = 0`, the program will log the return value of `i` and then return to the `while` conditional statement without incrementing `i`.  

###### LS Solution

No, the result is not as expected. This code results in an infinite loop that logs `0` to the console on each iteration.  

###### Discussion

This code results in an infinite loop because the variable `i` is never incremented. The conditional expression `(i % 3 === 0)` always evaluates to `true`, so the `else` clause containing the incrementer expression is never executed. When using a `while` loop, it is important to carefully manage the variable(s) involved with the iteration and the stopping condition. For this exercise, the code can be fixed by incrementing `i` on each iteration.  

```javascript
// solution 1
let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  }
  
  i += 1;
}


// solution 2
for (let i = 0; i < 10; i += 1) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
```

---

### 3. Multiplication Table

The following program is expected to log a multiplication table for the numbers from `1` to `10` to the console. Read through the code shown below. Will it produce the expected result? Why or why not?  

```javascript
function padLeft(number) {
  const stringNumber = String(number);
  switch (stringNumber.length) {
    case 1: return `  ${stringNumber}`;
    case 2: return ` ${stringNumber}`;
    default: return stringNumber;
  }
}

for (let i = 1; i < 10; i += 1) {
  let row = '';
  for (let j = 1; j <= 10; j += 1) {
    row += `${padLeft(i * j)} `;
  }
  
  console.log(row);
}
```

###### My Solution

First row...

```
  1   2   3   4   5   6   7   8   9  10 
```

Second row...

```
  2   4   6   8  10  12  14  16  18  20 
```

...

Ninth row...

```
  9  18  27  36  45  54  63  72  81  90
```

Tenth row???

The program will perform fine up until the 10th and final row, which will not be logged since the outer `for` loop is specified to stop after completing the 9th interation, as specified by `i < 10`. If the code is changed to `i <= 10`, then the program will run as expected.  

###### LS Solution

No, the result is not as expected; the code generates the multiplication table for only the numbers from `1` to `9`.  

###### Discussion

This is an example of an off-by-one bug. The value of `i`, which is responsible for the rows of the table, only goes up to `9`. Therefore, the entire row for the values of `10 x 1`, `10 x 2`, `...`, `10 x 10` is not logged. To fix this bug, the `for` loop should be written as shown below.  

```javascript
for (let i = 1; i <= 10; i += 1) {
  let row = '';
  for (let j = 1; j <= 10; j += 1) {
    row += `${padLeft(i * j)} `;
  }
  
  console.log(row);
}
```

---

### 4. Selected Columns

The `getSelectedColumns` function selects and extracts specific columns to a new array. Currently, the function is not producing the expected result. Go over the function and the sample runs shown below. What do you think the problem is?  

