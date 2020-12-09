// function cleanUp(text) {
//   let newText = '';

//   for (let index = 0; index < text.length; index += 1) {
//     if (!!text[index].match(/[a-z]/i)) {
//       newText += text[index];
//     } else {
//       if (newText[newText.length - 1] === ' ') {
//         continue;
//       } else {
//         newText += ' ';
//       }
//     }
//   }

//   return newText;
// }

// Refactored:


function cleanUp(text) {
  let newText = '';

  for (let index = 0; index < text.length; index += 1) {
    if (!!text[index].match(/[a-z]/i)) {
      newText += text[index];
    } else if (newText[newText.length - 1] !== ' ') {
      newText += ' ';
    }
  }

  return newText;
}

console.log(cleanUp("---what's my +*& line?") === " what s my line ");
