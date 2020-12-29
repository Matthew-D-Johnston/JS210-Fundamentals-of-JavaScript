function dateSuffix(dayOfMonth) {
  let remainder = dayOfMonth % 10;
  let day = String(dayOfMonth);

  if (dayOfMonth >= 11 && dayOfMonth <= 13) {
    return day + 'th';
  } else if (remainder >= 1 && remainder <= 3) {
    switch (remainder) {
      case 1:
        return day + 'st';
      case 2:
        return day + 'nd';
      case 3:
        return day + 'rd';
    }
  } else {
    return day + 'th';
  }
}

function formattedDay(day) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[day];
}

function formattedMonth(month) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[month];
}

function formattedDate(date) {
  let day = formattedDay(date.getDay());
  let month = formattedMonth(date.getMonth());
  let dayOfMonth = dateSuffix(date.getDate());

  return day + ', ' + month + ' ' + dayOfMonth;
}

let today = new Date();

console.log(formattedDate(today));

let tomorrow = today;
tomorrow.setDate(30);

console.log(formattedDate(tomorrow));