"use strict";

function letterCaseCount(text) {
  return {
    lowercase: countMatches(text, /[a-z]/g),
    uppercase: countMatches(text, /[A-Z]/g),
    neither:   countMatches(text, /[^a-zA-Z]/g),
  };
}

function countMatches(text, regex) {
  if (text.match(regex)) {
    return text.match(regex).length;
  } else {
    return 0;
  }
}

console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));
console.log(letterCaseCount('123'));
console.log(letterCaseCount(''));
