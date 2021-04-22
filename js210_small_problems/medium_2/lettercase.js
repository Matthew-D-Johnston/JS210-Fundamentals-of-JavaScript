"use strict";

function letterPercentages(text) {
  let charCount = text.length;
  let lowercaseCount = text.match(/[a-z]/g) ? text.match(/[a-z]/g).length : 0;
  let uppercaseCount = text.match(/[A-Z]/g) ? text.match(/[A-Z]/g).length : 0;
  let lowercasePercent = (lowercaseCount / charCount) * 100;
  let uppercasePercent = (uppercaseCount / charCount) * 100;
  let neitherPercent = 100 - (lowercasePercent + uppercasePercent);

  return { lowercase: lowercasePercent.toFixed(2),
           uppercase: uppercasePercent.toFixed(2),
           neither:   neitherPercent.toFixed(2),
         };
}

console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('AbCd +Ef'));
console.log(letterPercentages('123'));
console.log(letterPercentages('a'));
console.log(letterPercentages('A'));
