##### JS210 - Small Problems > Medium Problems 2

---

## Unlucky Days

### Problem

**Problem Description:**

Write a function that takes a year as an argument and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than `1752` (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future.  

**Definitions and Rules:**

* Year must be greater than 1752.

**Mental Model:**

Given a particular year, we need to then check every month to see if the 13th day of that month is a Friday. If it is, then we need to increment some count variable.

---

### Examples / Test Cases

```javascript
fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2
```

---

### Data Structures

**Input:**

* A number value representing a year after 1752.

**Output:**

* A number value representing the number of Friday the 13ths in the given year.

**Intermediate Data Structures:**

* We'll have to take advantage of JavaScript's `Date` class.
* I think we can use string representation of dates, such as `"July 13, 1983"` in the following way, `new Date("July 13, 1983").getDay()` to return a numeric value betwee 0 - 6, which represents the days of the week, where 0 = Sunday and 6 = Saturday. Thus, Friday = 5.
* We will need to create some `month` and `day` arrays.

---

### Algorithm

* Declare a `Months` constant variable and initialize it with an array value whose elements are the months of the year in order from January to December.
* Create a function called `isFriday(day, month, year)` that will return a boolean based on the following comparison: `new Date('${month} ${day}, ${year}').getDay() === 5`
* Iterate over the `Months` constant using the `filter()` method 

---

### Code

```javascript
const Months = [ 'January',
                 'February',
                 'March',
                 'April',
                 'May',
                 'June',
                 'July',
                 'August',
                 'September',
                 'October',
                 'November',
                 'December'
                ];

function fridayThe13ths(year) {
  return Months.filter(month => isFriday(13, month, year)).length;
}


function isFriday(day, month, year) {
  return new Date(`${month} ${day}, ${year}`).getDay() === 5;
}

// Refactored (after seeing solution)

function fridayThe13ths(year) {
  let count = 0;
  for (let month = 0; month < 12; month += 1) {
    isFriday(year, month, 13) ? count += 1 : count;
  }
  return count;
}


function isFriday(year, month, day) {
  return new Date(year, month, day).getDay() === 5;
}
```

### LS Solution

##### Hing: Algorithm

Here is one possible algorithm for solving the problem:

1. Iterate over all the months of the given year.
2. For each month, get the day that falls on the 13th.
3. Count the 13ths that fall on a Friday.
4. Return the count.

###### Solution

```javascript
function fridayThe13ths(year) {
  const thirteenths = [];

  for (let i = 0; i < 12; i += 1) {
    thirteenths.push(new Date(year, i, 13));
  }

  return thirteenths.reduce((count, day) => day.getDay() === 5 ? (count + 1) : count, 0);
}
```

###### Discussion

The solution leverages the `Date` constructor and a `for` loop to build an array of `Date` objects that fall on the 13th of every month. It then uses `Array.prototype.reduce` to get the count of the 13ths that fall on a Friday.  

Note that the `Date.prototype.getDay` method returns an integer between `0` (Sunday) and `6` (Saturday). Also note that when passing a month to the `Date` constructor, the value should be an integer between `0` (January) and `11` (December); the range of the day argument, however, starts at `1` (first day of the month) instead of `0` (last day of the previous month).

###### Further Exploration

Given the solution provided, do you think using the `Array.prototype.reduce` method was a good choice? Why or why not?

##### My Solution

I think the `filter()` method might work better, as I did for my solution. It might be a little more straightforward to read.

