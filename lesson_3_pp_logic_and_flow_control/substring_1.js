function substr(string, start, length) {
  let subString = '';
  
  if (start < 0) {
    let startIndex = string.length + start;

    if (startIndex + length <= string.length) {
      limit = startIndex + length;
    } else {
      limit = string.length;
    }

    for (let index = startIndex; index < limit; index += 1) {
      subString += string[index];
    }
  } else {
    let limit;

    if (start + length <= string.length) {
      limit = start + length;
    } else {
      limit = string.length;
    }

    for (let index = start; index < limit; index += 1) {
      subString += string[index];
    }
  }
  
  return subString;
}

let string = 'hello world';

console.log(substr(string, 2, 4) === 'llo ');
console.log(substr(string, -3, 2) === 'rl');
console.log(substr(string, 8, 20) === 'rld');
console.log(substr(string, 0, -20) === '');
console.log(substr(string, 0, 0) === '');