function subString(string, subStringLength) {
  let subStrings = [];
  let numberOfSubStrings = string.length - subStringLength;

  for (let index = 0; index <= numberOfSubStrings; index += 1) {
    let subString = '';

    for (let index2 = index; index2 <= ((subStringLength + index) - 1); index2 += 1) {
      subString += string[index2];
    }

    subStrings.push(subString);
  }

  return subStrings;
}


function indexOf(firstString, secondString) {
  let resultIndex = -1;
  let subStrings = subString(firstString, secondString.length);

  for (let index = 0; index <= (subStrings.length - 1); index += 1) {
    if (subStrings[index] === secondString) {
      resultIndex = index;
      break;
    }
  }

  return resultIndex;
}

function lastIndexOf(firstString, secondString) {
  let resultIndex = -1;
  let subStrings = subString(firstString, secondString.length);

  for (let index = 0; index <= (subStrings.length - 1); index += 1) {
    if (subStrings[index] === secondString) {
      resultIndex = index;
    }
  }

  return resultIndex;
}

console.log(indexOf('Some strings', 's'));
console.log(indexOf('Blue Whale', 'Whale'));
console.log(indexOf('Blue Whale', 'Blute'));
console.log(indexOf('Blue Whale', 'leB'));

console.log(lastIndexOf('Some strings', 's'));
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));
