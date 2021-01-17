function halvsies(array) {
  let midpoint = Math.ceil(array.length / 2);
  let array1 = array.slice(0, midpoint);
  let array2 = array.slice(midpoint, array.length);

  return [array1, array2];
}

console.log(halvsies([1, 2, 3, 4]));
console.log(halvsies([1, 5, 2, 4, 3]));
console.log(halvsies([5]));
console.log(halvsies([]));
