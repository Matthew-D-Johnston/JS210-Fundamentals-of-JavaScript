function trim(text) {

  let firstIndex;
  let lastIndex;

  let limit = text.length - 1;

  for (let index = 0; index <= limit; index += 1) {
    if (text[index] !== ' ') {
      firstIndex = index;
      break;
    }
  }

  for (let index = limit; index >= 0; index -= 1) {
    if (text[index] !== ' ') {
      lastIndex = index;
      break;
    }
  }

  let strippedText = '';

  for (let index = firstIndex; index <= lastIndex; index += 1) {
    strippedText += text[index];
  }

  return strippedText;
}

console.log(trim('  abc  ') === 'abc');
console.log(trim('abc   ') === 'abc');
console.log(trim(' ab c') === 'ab c');
console.log(trim(' a b  c') === 'a b  c');
console.log(trim('      ') === '');
console.log(trim('') === '');
