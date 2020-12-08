function cleanUp(text) {
  let newText = text;
  
  while (!!newText.match(/[^a-z]+/i)) {
    newText = newText.replace(/[^a-z]+/i, ' ');
    console.log(newText);
  }

  return newText;
}

console.log(cleanUp("---what's my +*& line?"));
