function sanitizeInput(number, stringLength) {
  let newNumber;

  if (number === undefined || number > stringLength) {
    newNumber = stringLength;
  } else if (number < 0 || String(Number(number)) === 'NaN') {
    newNumber = 0;
  } else {
    newNumber = number;
  }

  return newNumber;
}

function substring(string, start, end) {
  start = sanitizeInput(start, string.length);
  end = sanitizeInput(end, string.length);

  let subString = '';

  if (start < end) {
    for (let index = start; index < end; index += 1) {
      subString += string[index];
    }
  } else if (start > end) {
    for (let index = end; index < start; index += 1) {
      subString += string[index];
    }
  } else {
    return subString;
  }

  return subString;
}

let string = 'hello world';

console.log(substring(string, 2, 4) === 'll');
console.log(substring(string, 4, 2) === 'll');
console.log(substring(string, 0, -1) === '');
console.log(substring(string, 2) === 'llo world');
console.log(substring(string, 'a') === 'hello world');
console.log(substring(string, 8, 20) === 'rld');

