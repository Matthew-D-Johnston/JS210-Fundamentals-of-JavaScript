const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(num) {
  let digits = [];

  if (num === 0) {
    digits.push(0);
  }

  while (num !== 0) {
    let remainder = num % 10;
    digits.unshift(remainder);

    num -= remainder;
    num /= 10;
  }


  let stringInteger = '';
  for (let index = 0; index < digits.length; index += 1) {
    stringInteger += DIGITS[digits[index]];
  }

  return stringInteger;
}

function signedIntegerToString(num) {
  if (num > 0) {
    return '+' + integerToString(num);
  } else if (num < 0) {
    return '-' + integerToString(Math.abs(num));
  } else {
    return '0';
  }
}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));
