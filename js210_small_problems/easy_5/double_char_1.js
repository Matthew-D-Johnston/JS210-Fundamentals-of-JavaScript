function repeater(text) {
  let doubled = '';

  for (let index = 0; index < text.length; index += 1) {
    doubled += text[index].repeat(2);
  }

  return doubled;
}

console.log(repeater('Hello'));
console.log(repeater('Good job!'));
console.log(repeater(''));
