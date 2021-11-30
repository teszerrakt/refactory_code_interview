const leapYear = (start, end) => {
  const leapYears = [];

  for (let i = start + 1; i <= end; i++) {
    if (isLeapYear(i)) {
      leapYears.push(i);
    }
  }

  return leapYears;
};

const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = leapYear;
