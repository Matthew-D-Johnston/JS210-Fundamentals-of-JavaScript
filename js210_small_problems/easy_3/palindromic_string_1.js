function isPalindrome(text) {
  let textArray = text.split('');
  let reversedText = textArray.reverse().join('');

  return text === reversedText;
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome('356653'));
