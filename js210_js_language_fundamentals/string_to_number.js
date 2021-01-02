function stringToInteger(numberStr) {
  let digits = numberStr.split('');
  let stringLength = numberStr.length;
  let multiplier = 1;

  for (let index = 1; index < stringLength; index += 1) {
    multiplier *= 10;
  }

  let integer = 0;

  for (let index = 0; index < stringLength; index += 1) {
    integer += digits[index] * multiplier;
    multiplier /= 10;
  }

  return integer;
}

console.log(stringToInteger('4321'));
console.log(stringToInteger('570'));

