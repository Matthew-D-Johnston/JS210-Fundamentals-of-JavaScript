##### JS210 - Small Problems > Debugging

---

## Member Directory

### Problem

Caroline manages the member directory of her club and decided to implement a program she can use for doing that. Since the club is not very big, it's sufficient for her to keep the members' names and phone numbers in an object. Later she wants to add functionality that allows her to write this object to a file.  

One requirement Caroline takes very seriously is input validation. She intended for her code to strictly require that only alphabetic letters be included in the members' first and last names, separated by a space. But upon making a typo when entering the information of the newest member, she realizes that isn't the case.  

Figure out why not and fix the code so that it works as expected. You may also consider writing a few more test cases to insure that the input validation requirement is properly met.  

```javascript
const memberDirectory = {
  'Jane Doe': '323-8293',
  'Margaret Asbury': '989-1111',
  'Callum Beech': '533-9090',
  'Juanita Eastman': '424-1919',
};

function isValidName(name) {
  return (/^\w+ \w+$/).test(name);
}

function isValidPhone(phone) {
  return (/^\d{3}-\d{4}$/).test(phone);
}

function validMemberInfo(name, phone) {
  return isValidName(name) && isValidPhone(phone);
}

function addMember(name, phone) {
  if (validMemberInfo(name, phone)) {
    memberDirectory[name] = phone;
  } else {
    console.log('Invalid member information.');
  }
}

addMember('Laura Carlisle', '444-2223');
addMember('Rachel Garcia', '232-1191');
addMember('Earl 5mith', '331-9191');

console.log(memberDirectory);
```

---

### My Solution

The problem with the above code has to do with the implemenation of the `isValidName` function. It uses a regex that does not exclude numbers; that is, it tests for `\w`, which is for any word character including numbers. Instead, we need to use something like `[a-z]`. Thus, we reimplement the `isValidName` function as follows:

```javascript
function isValidName(name) {
  return (/^[a-z]+ [a-z]+$/i).test(name);
}
```

This time, when we run the code, it excludes the member whose name is `'Earl 5mith'` because his last name starts with a `'5'` rather than an `'S'`.  

---

### LS Solution

###### Solution

```javascript
// code omitted

function isValidName(name) {
  return (/^[a-z]+ [a-z]+$/i).test(name);
}

// code omitted
```

###### Discussion

Recall that when using regular expressions, the [`\w` character class shortcut](https://launchschool.com/books/regex/read/class_shortcuts#words) matches not only alphabetic characters (a-z, A-Z), but also digits (0-9) and the underscore (_). This isn't the behavior intended for our code.  

The solution instead uses a range of alphabetic characters in a character class and appends the `i` flag on to the end of the regular expression, so that matches are case-insensitive.  

###### Further Exploration

Check out [Scriptular](http://scriptular.com/) if you want to test or to experiment with JavaScript regular expressions.

###### 

