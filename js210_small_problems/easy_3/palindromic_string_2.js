function isPalindrome(text) {
  let textArray = text.split('');
  let reversedText = textArray.reverse().join('');

  return text === reversedText;
}

function isRealPalindrome(text) {
  let lowerCaseText = text.toLowerCase();
  let regex = /[a-z0-9]/;

  let alphaNumericText = '';

  for (i = 0; i < lowerCaseText.length; i += 1) {
    if (lowerCaseText[i].match(regex)) {
      alphaNumericText += lowerCaseText[i];
    }
  }

  return isPalindrome(alphaNumericText);
}

console.log(isRealPalindrome('madam'));
console.log(isRealPalindrome('Madam'));
console.log(isRealPalindrome("Madam, I'm Adam"));
console.log(isRealPalindrome('356653'));
console.log(isRealPalindrome('356a653'));
console.log(isRealPalindrome('123ab321'));
