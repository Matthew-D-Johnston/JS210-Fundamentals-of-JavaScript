"use strict";

function logInBox(text) {
  let width = text.length + 2;
  let border = '+' + borderMaker('-', width) + '+';
  let margin = '|' + borderMaker(' ', width) + '|';
  let textLine = '| ' + text + ' |';

  console.log(border);
  console.log(margin);
  console.log(textLine);
  console.log(margin);
  console.log(border);
}


function borderMaker(char, length) {
  let result = '';

  while (result.length < length) {
    result += char;
  }

  return result;
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
