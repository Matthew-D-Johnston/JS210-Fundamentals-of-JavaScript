##### JS210 - Small Problems > Debugging

---

## Weekday Classes

### Problem

There are a lot of exciting classes offered in our region. We wrote a small script that checks which ones are still upcoming and compatible with our calendar. We must be available to attend all sessions of a particular class in order to sign up for it. We can always arrange that on weekends, but for weekdays we have to check whether our calendar is free.  

Although the code below runs, something is wrong with it. Why is everything except for the *Back To The Future Movie Night* in the list of compatible classes?  

```javascript
const TODAY = toDate("2018-08-05");

function toDate(string) {
  return new Date(`${string}T00:00:00`);
}

function toString(date) {
  return `${date.getYear()}-${date.getMonth()}-${date.getDay()}`;
}

function isInThePast(date) {
  return date < TODAY;
}

function isWeekday(date) {
  return date.getDay() >= 1 &&
         date.getDay() <= 5;
}

const myCalendar = {
  "2018-08-13": ["JS debugging exercises"],
  "2018-08-14": ["Read 'Demystifying Rails'", "Settle health insurance"],
  "2018-08-15": ["Read 'Demystifying Rails'"],
  "2018-08-16": [],
  "2018-08-30": ["Drone video project plan"],
  "2018-09-10": ["Annual servicing of race bike"],
  "2018-09-12": ["Study"],
  "2018-11-02": ["Birthday Party"],
  "2018-11-03": ["Birthday Party"],
};

const offeredClasses = {
  "Back To The Future Movie Night": ["2018-07-30"],
  "Web Security Fundamentals": ["2018-09-10", "2018-09-11"],
  "Pranayama Yoga For Beginners": ["2018-08-30", "2018-08-31", "2018-09-01"],
  "Mike's Hikes": ["2018-08-16"],
  "Gordon Ramsay Master Class": ["2018-09-11", "2018-09-12"],
  "Powerboating 101": ["2018-09-15", "2018-09-16"],
  "Discover Parachuting": ["2018-11-02"],
};

function getCompatibleEvents(classes, calendar) {
  function isAvailable(date) {
    const dateStr = toString(date);
    return !calendar[dateStr] || calendar[dateStr].length === 0;
  };

  const compatibleClasses = [];

  Object.keys(classes).forEach(className => {
    const classDates = classes[className].map(toDate);

    if (classDates.some(isInThePast)) {
      return;
    }

    if (classDates.filter(isWeekday).every(isAvailable)) {
      compatibleClasses.push(className);
    }
  });

  return compatibleClasses;
}

console.log(getCompatibleEvents(offeredClasses, myCalendar));
// expected: ["Mike's Hikes", "Powerboating 101"]
```

---

### My Solution

The reason we are not getting the expected output has to do with the implementation of the `toString` function.  To fix it, we implement the following:

```javascript
function toString(date) {
  let year = date.getFullYear();
  let month = String(date.getMonth() + 1).padStart(2, '0');
  let day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
```

---

### LS Solution

###### Solution

In order to make the above code work, we have to fix the function that converts dates to strings:  

```javascript
function toString(date) {
  function pad(string, n) {
    while (string.length < n) {
      string = `0${string}`;
    }

    return string;
  }

  const year  = String(date.getFullYear());
  const month = pad(String(date.getMonth() + 1), 2);
  const day   = pad(String(date.getDate()), 2);

  return `${year}-${month}-${day}`;
}
```

###### Discussion

Our original `toString()` function had several problems, causing `isAvailable()` to return `true` for all class dates that were passed in as arguments. We addressed the following problems when we refactored our `toString()` function:

- [The `getYear()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getYear) is deprecated, as it returns a "number representing the year of the given date, according to local time, minus 1900", which is often not that useful. Instead, we want to use `getFullYear()`, which returns `2018` for our dates, as expected.
- `getMonth()` returns a zero-based value, with `0` representing the first month of the year. To format our date string correctly, we must add 1 to the return value of `getMonth()`.
- The `getDay()` method returns an integer from `0` to `6`, indicating the day of the week (with `0` being Sunday, `1` being Monday, and so on). We use it to this end in our `isWeekday` function. In order to get the day of the *month*, however, we have to use `getDate()`.
- In the date strings we use as keys in our calendar, months and days are padded with leading zeros. So when converting a date into our target string format, we have to make sure we get `2018-08-05` and not `2018-8-5`.

