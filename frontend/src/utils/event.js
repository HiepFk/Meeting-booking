const eventArray = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2023, 2, 19, 9, 30, 0),
    end: new Date(2023, 2, 19),
  },
  {
    title: "Vacation",
    start: new Date(2023, 1, 7),
    end: new Date(2023, 1, 7),
  },
  {
    title: "Conference",
    start: new Date(2023, 1, 19, 9, 30, 0),
    end: new Date(2023, 1, 19),
  },
  {
    title: "Test 01",
    start: new Date(2023, 1, 19, 9, 30, 0),
    end: new Date(2023, 1, 19, 9, 30, 0),
  },
  {
    title: "Test 02",
    start: new Date(2023, 1, 20, 9, 30, 0),
    end: new Date(2023, 1, 20),
  },
];

export const eventOfDay = (day) => {
  const events = eventArray.filter((item) => {
    return (
      item.start.getFullYear() === new Date(day).getFullYear() &&
      item.start.getMonth() === new Date(day).getMonth() &&
      item.start.getDate() === new Date(day).getDate()
    );
  });
  return events;
};
