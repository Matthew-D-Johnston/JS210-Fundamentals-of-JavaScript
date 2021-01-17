function multiplyList(array1, array2) {
  let products = [];

  for (let i = 0; i < array1.length; i += 1) {
    products.push(array1[i] * array2[i]);
  }

  return products;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));
