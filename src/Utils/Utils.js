export const daysInMonth = function (monthIndex, year) {
    return new Date(year, monthIndex + 1, 0).getDate();
  };
  
  // date should be in MM-DD-YYYY format
  export const getStartingDayOfTheMonth = function (date) {
    return new Date(date).getDay();
  };
  
  export const getDays = function (monthIndex, year) {
    // starting date of the month in MM-DD-YYYY  05-01-2023
    const startingDate = `${monthIndex + 1}-01-${year}`;
    const startDay = getStartingDayOfTheMonth(startingDate);
    const numberOfDaysInMonth = daysInMonth(monthIndex, year);
  
    let arr = [];
    for (let i = 0; i < startDay; i++) {
      arr.push("");
    }
    for (let i = 1; i <= numberOfDaysInMonth; i++) {
      arr.push(i);
    }
    return arr;
  };
  
  export const isCurrentDate = function (date, month, year) {
    return (
      new Date().getDate() === date &&
      new Date().getMonth() === month &&
      new Date().getFullYear() === year
    );
  };
  
  export const MONTH_LIST = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  const HOLIDAY_LIST = [
    {
      month: 0,
      day: 26,
    },
    {
      month: 7,
      day: 15,
    },
    {
      month: 11,
      day: 26,
    },
    {
      month: 9,
      day: 2,
    },
    {
      month: 10,
      day: 14,
    },
    {
      month: 1,
      day: 14,
    },
  ];
  
  export const isHoliday = function (day, month) {
    return HOLIDAY_LIST.find(
      (holiday) => holiday.day === day && holiday.month === month
    );
  };
  