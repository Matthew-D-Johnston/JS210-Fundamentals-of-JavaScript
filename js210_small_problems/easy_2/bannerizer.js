// function logInBox(string) {
//   let spacingSize = string.length + 2;
//   let dashes = '-'.repeat(spacingSize);
//   let spaces = ' '.repeat(spacingSize);

//   console.log(`+${dashes}+`);
//   console.log(`|${spaces}|`);
//   console.log(`| ${string} |`);
//   console.log(`|${spaces}|`);
//   console.log(`+${dashes}+`);
// }

// logInBox('To boldly go where no one has gone before.');
// logInBox('');


function logInBox(string, maxWidth) {
  let width = 0;

  if (string.length < maxWidth) {
    width = string.length + 2;
  } else {
    width = maxWidth - 2;
    string = string.slice(0, width - 2)
  }

  let dashes = '-'.repeat(width);
  let spaces = ' '.repeat(width);

  console.log(`+${dashes}+`);
  console.log(`|${spaces}|`);
  console.log(`| ${string} |`);
  console.log(`|${spaces}|`);
  console.log(`+${dashes}+`);
}

logInBox('To boldly go where no one has gone before.', 20);
logInBox('', 100);
