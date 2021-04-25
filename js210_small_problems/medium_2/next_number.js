"use strict";

function featured(num) {
  const INCREMENTER = 7;
  const LIMIT = 9876543201;
  let featuredNum = num + (INCREMENTER - (num % INCREMENTER));

  while (featuredNum <= LIMIT) {
    if (isOdd(featuredNum) && uniqueDigits(featuredNum)) {
      return featuredNum;
    }

    featuredNum += INCREMENTER;
  }

  return 'There is no possible number that fulfills those requirements.';
}

function uniqueDigits(integer) {
  let stringInteger = String(integer);
  let testStringInt = '';

  for (let index = 0; index < stringInteger.length; index += 1) {
    if (testStringInt.includes(stringInteger[index])) {
      return false;
    } else {
      testStringInt += stringInteger[index];
    }
  }

  return true;
}

function isOdd(integer) {
  return (integer % 2) !== 0;
}

console.log(featured(12));
console.log(featured(20));
console.log(featured(21));
console.log(featured(997));
console.log(featured(1029));
console.log(featured(999999));
console.log(featured(999999987));
console.log(featured(9876543186));
console.log(featured(9876543200));
console.log(featured(9876543201));
