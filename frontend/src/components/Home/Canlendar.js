import React, { useContext, useEffect, useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

import ModalEvent from "./ModalEvent";
import { EventContext } from "../../context/eventContext";

const localizer = momentLocalizer(moment);
function Canlendar() {
  const { listEvent, getListEvent, reFresh } = useContext(EventContext);

  const [show, setShow] = useState(false);
  const [item, setItem] = useState(null);

  const handeEdit = (item) => {
    setItem(item);
    setShow(true);
  };

  useEffect(() => {
    getListEvent();
  }, [reFresh]);

  const events = [
    {
      title: "My Event",
      start: "2023-02-21T13:45:00-05:00",
      end: "2023-02-25T14:00:00-05:00",
      // elcolor:'red'
      colorEvento: "red",
    },
    {
      title: "Otro",
      start: "2023-02-15T13:45:00-05:00",
      end: "2023-02-23T14:00:00-05:00",
      colorEvento: "green",
      color: "white",
    },
  ];

  return (
    <>
      <ModalEvent show={show} setShow={setShow} event={item} />
      <Calendar
        localizer={localizer}
        events={listEvent || []}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={["week", "day", "month"]}
        eventPropGetter={(event) => {
          const backgroundColor = event.colorEvento
            ? event.colorEvento
            : "black";
          const color = event.color ? event.color : "white";
          return { style: { backgroundColor, color } };
        }}
        onSelectEvent={handeEdit}
      />
    </>
  );
}

export default Canlendar;
