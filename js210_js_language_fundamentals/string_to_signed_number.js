function stringToSignedInteger(numberStr) {
  let sign = '';
  let digits = numberStr.split('');
  
  if (digits[0] === '+' || digits[0] === '-') {
    sign = digits.shift();
  }

  let numberOfDigits = digits.length;
  let multiplier = 1;

  for (let index = 1; index < numberOfDigits; index += 1) {
    multiplier *= 10;
  }

  let integer = 0;

  for (let index = 0; index < numberOfDigits; index += 1) {
    integer += digits[index] * multiplier;
    multiplier /= 10;
  }

  if (sign === '-') {
    integer *= -1;
  }

  return integer;
}

console.log(stringToSignedInteger('4321'));
console.log(stringToSignedInteger('-570'));
console.log(stringToSignedInteger('+100'));
