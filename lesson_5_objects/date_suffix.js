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
