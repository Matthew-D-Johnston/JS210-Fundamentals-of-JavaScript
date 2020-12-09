function century(year) {
  let result;

  if (year % 100 === 0) {
    result = String(parseInt(year / 100, 10));
  } else {
    result = String(parseInt(year / 100, 10) + 1);
  }

  let lastDigit = result[result.length - 1];
  let last2Digits = result.substring(result.length - 2);

  if (last2Digits === '11' || last2Digits === '12' || last2Digits === '13') {
    result += 'th';
  } else if (lastDigit === '1') {
    result += 'st';
  } else if (lastDigit === '2') {
    result += 'nd';
  } else if (lastDigit === '3') {
    result += 'rd';
  } else {
    result += 'th';
  }
  
  return result;
}

console.log(century(2000) === "20th");
console.log(century(2001) === "21st");
console.log(century(1965) === "20th");
console.log(century(256) === "3rd");
console.log(century(5) === "1st");
console.log(century(10103) === "102nd");
console.log(century(1052) === "11th");
console.log(century(1127) === "12th");
console.log(century(11201) === "113th");
