import React from "react";
import { Calendar, dateFnsLocalizer, onNavigate } from "react-big-calendar";
// import BigCalendar from 'react-big-calendar';
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { ButtonGroup, Button } from "react-bootstrap";

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
// export let navigate = {
//   PREVIOUS: "PREV",
//   NEXT: "NEXT",
//   TODAY: "TODAY",
//   DATE: "DATE",
// };
// function CustomToolbar() {
//   return (
//     <div className="toolbar-container">
//       <div className="back-next-buttons">
//         <button
//           className="btn btn-back"
//           // onClick={navigate.bind(null, navigate.TODAY)}
//           onClick={(e) => e.onNavigate("PREV")}
//         >
//           {/* <BackIcon /> */}
//           👈
//         </button>
//         <label className="label-date">Aug-Sept 2016</label>
//       </div>

//       <div className="filter-container">
//         <ButtonGroup>
//           <Button className="bg-filter-off">
//             <span className="label-filter-off">Day</span>
//           </Button>
//           <Button className="bg-filter-off">
//             <span className="label-filter-off">Week</span>
//           </Button>
//           <Button className="bg-filter-off">
//             <span className="label-filter-off">Month</span>
//           </Button>
//           <Button className="bg-filter-off">
//             <span className="label-filter-off">Year</span>
//           </Button>
//         </ButtonGroup>
//       </div>
//     </div>
//   );
// }

function Canlendar() {
  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      // onSelectEvent={openEventClick}
      components={
        {
          // event: Event,
          // toolbar: CustomToolbar,
        }
      }
      views={["week", "day", "month"]}
    />
  );
}

export default Canlendar;
