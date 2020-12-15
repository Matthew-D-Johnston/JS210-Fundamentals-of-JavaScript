function uniqueElements(arr) {
  let newArray = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (newArray.indexOf(arr[index]) === -1) {
      newArray.push(arr[index]);
    }
  }

  return newArray;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));