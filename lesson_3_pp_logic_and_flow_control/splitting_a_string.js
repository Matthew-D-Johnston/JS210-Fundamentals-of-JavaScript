function splitString(string, delimiter) {
  if (delimiter === '') {
    let subStrings = [];

    for (let index = 0; index < string.length; index += 1) {
      subStrings.push(string[index]);
    }

    for (let index = 0; index < subStrings.length; index += 1) {
      console.log(subStrings[index]);
    }
  } else if (delimiter) {
    let subStrings = [];
    let subString = '';

    for (let index = 0; index < string.length; index += 1) {
      if (string[index] !== delimiter) {
        subString += string[index];

        if (index === string.length - 1) {
          subStrings.push(subString);
        }
      } else {
        subStrings.push(subString);
        subString = '';
      }
    }

    for (let index = 0; index < subStrings.length; index += 1) {
      console.log(subStrings[index]);
    }
  } else {
    console.log('ERROR: No delimiter');
  }
}

splitString('abc,123,hello world', ',');
console.log('-----')
splitString('hello');
console.log('-----')
splitString('hello', '');
console.log('-----')
splitString('hello', ';');
console.log('-----')
splitString(';hello;', ';');