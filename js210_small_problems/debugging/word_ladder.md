##### JS210 - Small Problems > Debugging

---

## Word Ladder

### Problem

**Problem Description:**

Gemma and some friends are working on a complex program to generate [word ladders](https://en.wikipedia.org/wiki/Word_ladder), transforming one word into another word one character at a time. The smallest of her tasks is to print the resulting ladder to the screen.  

A "ladder" is simply an array of word strings; Gemma decides to transform this array into a single string where each word within the string is separated by a hyphen (`'-'`). For example, the array `['pig', 'pie', 'lie', 'lit', 'let']` should be printed as the string `'pig-pie-lie-lit-let'`.  

Upon first glance, Gemma's code below looks like it should work. But it throws a `TypeError`, saying: `Cannot read property 'forEach' of undefined`. Why is that?  

```javascript
let ladder = ''

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail
```

**My Solution:**

I noticed right away that a number of semicolons were missing. But I wasn't sure if that would be the reason for the error. So, I ran the code, first without the semicolons and then with them. I put semicolons on the first line, the fifth line, the eighth line, and the final line.  The code worked as expected.  But I wanted to see which semi-colon did the job. It was the first one. Simply by putting in a semicolon at the end of the first line solved the problem.  

**LS Solution:**

```javascript
let ladder = '';

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail
```

###### Discussion

This behavior is because JavaScript performs [*Automatic Semicolon Insertion*](https://github.com/airbnb/javascript#semicolons), which results in the first three lines being parsed as:  

```javascript
let ladder = ''['head', ... ].forEach()
```

Because the statement on line 1 is not explicitly terminated with a semicolon, the array on line 3 is not parsed as an array, but as an accessor on the empty string. Since the empty string does not contain such a property, the result is `undefined`, which causes `forEach` to raise an error.  

Bugs like these are the reason why in the [Code Style assignment](https://launchschool.com/lessons/18c27076/assignments/d22dcc62) we recommend to always use semicolons when appropriate:  

> Semicolons should always terminate a statement. With no semicolon to separate them, JavaScript sometimes sees the next statement as part of the former statement, which leads to undesired behavior.  

By the way: did you notice that we didn't use any other semicolons? Only the one on line 1 causes a problem. Automatic semicolon insertion works as intended on the remaining lines.

