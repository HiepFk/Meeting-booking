export function getMonth(month = new Date().getMonth()) {
  month = Math.floor(month);
  const year = new Date().getFullYear();
  const firstDayOfTheMonth = new Date(year, month, 1).getDay();
  let currentMonthCount = 0 - firstDayOfTheMonth + 1;

  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return new Date(year, month, currentMonthCount);
    });
  });
  return daysMatrix;
}
export function getWeek(day) {
  const week = new Array();
  day.setDate(day.getDate() - day.getDay() - 6);
  for (var i = 0; i < 7; i++) {
    week.push(new Date(day));
    day.setDate(day.getDate() + 1);
  }
  return week;
}
