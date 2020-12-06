function rot13(string) {
  let newString = '';

  const Rot13Key = 13;
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz \
                    ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let index = 0; index < string.length; index += 1) {
    let currentChar = string[index];
    let alphabetIndex = ALPHABET.indexOf(currentChar);

    if (alphabetIndex >= 0) {
      newString += ALPHABET[alphabetIndex + Rot13Key];
    } else {
      newString += currentChar;
    }
  }

  return newString;
}


console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
