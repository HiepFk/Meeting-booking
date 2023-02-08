import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": enUS,
};

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2023, 2, 0),
    end: new Date(2023, 2, 0),
  },
  {
    title: "Vacation",
    start: new Date(2023, 2, 7),
    end: new Date(2023, 2, 10),
  },
  {
    title: "Conference",
    start: new Date(2023, 2, 20),
    end: new Date(2023, 2, 23),
  },
];

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function Canlendar() {
  const date = new Date(2015, 3, 17, 19, 30, 0);
  console.log(date);
  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500, margin: 50 }}
      // onSelectEvent={openEventClick}
    />
  );
}

export default Canlendar;
