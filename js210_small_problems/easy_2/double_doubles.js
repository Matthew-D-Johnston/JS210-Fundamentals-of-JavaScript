function twice(number) {
  let stringNumber = String(number);
  let size = stringNumber.length;

  if (size % 2 === 0) {
    let firstHalf = stringNumber.slice(0, size / 2);
    let secondHalf = stringNumber.slice(size / 2, size);

    if (firstHalf === secondHalf) {
      return number;
    }
  }

  return number * 2;
}

console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));
