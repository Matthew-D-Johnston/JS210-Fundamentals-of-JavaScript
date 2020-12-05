function shortLongShort(word1, word2) {
  let length1 = word1.length;
  let length2 = word2.length;

  if (length1 < length2) {
    return word1 + word2 + word1;
  } else {
    return word2 + word1 + word2;
  }
}

console.log(shortLongShort('abc', 'defgh') === "abcdefghabc");
console.log(shortLongShort('abcde', 'fgh') === "fghabcdefgh");
console.log(shortLongShort('', 'xyz') === "xyz");
