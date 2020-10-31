function oddLengths(array) {
  return array.reduce((accumulator, string) => {
    if (string.length % 2 === 1) {
      accumulator.push(string.length);
    }
    
    return accumulator;
  }, []);
}

let arr = ['a', 'abcd','abcde', 'abc', 'ab'];
console.log(oddLengths(arr));


function checkFor3(array) {
  let filteredArray = array.filter(value => value === 3);

  return filteredArray.length === 0 ? false : true;
}