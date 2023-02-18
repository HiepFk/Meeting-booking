import React, { useContext, useEffect, useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

import ModalEvent from "./ModalEvent";
import { EventContext } from "../../context/eventContext";
import { AuthContext } from "../../context/authContext";
import { axiosToken } from "../../apis/createInstance";
const localizer = momentLocalizer(moment);
function Canlendar() {
  const { listEvent, getListEvent, reFresh } = useContext(EventContext);
  const { refreshUser, auth } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const [item, setItem] = useState(null);
  const axiosJwt = axiosToken(auth, refreshUser);
  const handeEdit = (item) => {
    setItem(item);
    setShow(true);
  };

  useEffect(() => {
    getListEvent(axiosJwt);
  }, [reFresh]);

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
        step={60}
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
