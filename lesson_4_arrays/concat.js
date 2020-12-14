function push(arr, elem) {
  arr[arr.length] = elem;
  return arr.length;
}

function concat(array1, array2) {
  let newArray = [];

  for (let index = 0; index < array1.length; index += 1) {
    push(newArray, array1[index]);
  }

  for (let index = 0; index < array2.length; index += 1) {
    push(newArray, array2[index]);
  }

  return newArray;
}

console.log(concat([1, 2, 3], [4, 5, 6]));