function asciiValue(string) {
  let asciiSum = 0;

  for (let index = 0; index < string.length; index += 1) {
    asciiSum += string.charCodeAt(index);
  }

  return asciiSum;
}

console.log(asciiValue('Four score'));
console.log(asciiValue('Launch School'));
console.log(asciiValue('a'));
console.log(asciiValue(''));
