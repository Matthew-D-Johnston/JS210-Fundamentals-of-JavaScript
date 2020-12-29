function formatTime(date) {
  let hours = formatPadding(date.getHours());
  let minutes = formatPadding(date.getMinutes());

  return hours + ':' + minutes;
}

function formatPadding(number) {
  if (number < 10) {
    number = '0' + String(number);
  } else {
    number = String(number);
  }

  return number;
}

let today = new Date();

console.log(formatTime(today));
