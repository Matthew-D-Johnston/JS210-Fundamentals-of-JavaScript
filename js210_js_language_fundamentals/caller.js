function makeDoubler(caller) {
  const doubling = function(number) {
    console.log(`This function was called by ${caller}.`);
    return number + number;
  };

  return doubling;
}