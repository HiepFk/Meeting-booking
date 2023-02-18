export function getMonth(date = new Date()) {
  const month = Math.floor(date.getMonth());
  const year = date.getFullYear();
  const firstDayOfTheMonth = new Date(year, month, 1).getDay();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return new Date(year, month, currentMonthCount);
    });
  });
  //   const daysMatrix = new Array(7).fill([]).map(() => {
  //     currentMonthCount++;
  //     console.log(currentMonthCount, year, month);
  //     console.log(new Date(year, month, currentMonthCount));
  //     return new Date(year, month, currentMonthCount);
  //   });
  return daysMatrix;
}
