function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return sum;
}

let arr1 = [2, 3, 5];
let arr2 = [3, 4, 1];

console.log(productOfSums(arr1, arr2));