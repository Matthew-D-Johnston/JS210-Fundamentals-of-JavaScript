// function toLowerCase(string) {
//   let newString = '';

//   for (let index = 0; index < string.length; index += 1) {
//     let asciiNumeric = string[index].charCodeAt(0);
//     if (asciiNumeric >= 65 && asciiNumeric <= 90) {
//       asciiNumeric += 32;
//     }

//     newString += String.fromCharCode(asciiNumeric);
//   }

//   return newString;
// }

// console.log(toLowerCase('ALPHABET'));
// console.log(toLowerCase('123'));
// console.log(toLowerCase('abcDEF'));


// or

function toLowerCase(string) {
  let newString = '';

  for (let index = 0; index < string.length; index += 1) {
    let asciiNumeric = string[index].charCodeAt(0);
    if (asciiNumeric >= 65 && asciiNumeric <= 90) {
      asciiNumeric += 32;
      newString += String.fromCharCode(asciiNumeric);
    } else {
      newString += string[index];
    }
  }

  return newString;
}

console.log(toLowerCase('ALPHABET'));
console.log(toLowerCase('123'));
console.log(toLowerCase('abcDEF'));
