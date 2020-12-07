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

// Further Exploration 1

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

// logInBox('To boldly go where no one has gone before.', 20);
// logInBox('', 100);

// Further Exploration 2

function logInBox(string, maxWidth) {
  let width = 0;
  let stringLength = string.length;
  let stringSegments = [];

  if (stringLength < maxWidth) {
    width = stringLength + 2;
  } else {
    width = maxWidth - 4;
    let segments;

    if (stringLength % width === 0) {
      segments = parseInt(stringLength / width, 10);
    } else {
      segments = parseInt(stringLength / width, 10) + 1;
    }

    let startIndex = 0;
    let endIndex = width;
    let stringSegment;
    for (let segNumber = 1; segNumber <= segments; segNumber += 1) {
      stringSegment = string.slice(startIndex, endIndex);

      if (stringSegment.length === width) {
        stringSegments.push(stringSegment);
      } else {
        let difference = width - stringSegment.length;
        stringSegment += ' '.repeat(difference);
        stringSegments.push(stringSegment);
      }

      startIndex = endIndex;
      endIndex += width;
    }
  }

  let dashes = '-'.repeat(width);
  let spaces = ' '.repeat(width);

  if (stringLength < maxWidth) {
    console.log(`+${dashes}+`);
    console.log(`|${spaces}|`);
    console.log(`| ${string} |`);
    console.log(`|${spaces}|`);
    console.log(`+${dashes}+`);
  } else {
    console.log(`+ ${dashes} +`);
    console.log(`| ${spaces} |`);
    for (let index = 0; index < stringSegments.length; index += 1) {
      console.log(`| ${stringSegments[index]} |`);
    }
    console.log(`| ${spaces} |`);
    console.log(`+ ${dashes} +`);
  }
}

logInBox('To boldly go where no one has gone before.', 35);
logInBox('', 100);
