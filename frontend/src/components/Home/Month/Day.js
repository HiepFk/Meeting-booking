import React, { useEffect, useState } from "react";
import { eventOfDay } from "../../../utils/event";
import moment from "moment";

function Day({ day, rowIdx }) {
  const [data, setData] = useState(eventOfDay(day));

  useEffect(() => {
    setData(eventOfDay(day));
  }, [day]);
  return (
    <div className="day">
      <div
        className={
          new Date(day).getMonth() === new Date().getMonth()
            ? "header header_active"
            : "header "
        }
      >
        <p
          className={
            new Date(day).getDay() === new Date().getDay() &&
            new Date(day).getMonth() === new Date().getMonth() &&
            new Date(day).getDate() === new Date().getDate()
              ? "item active"
              : "item "
          }
        >
          {new Date(day).getDate()}
        </p>
      </div>
      {data?.length > 0 && (
        <div className="event_list">
          {data?.map((item) => {
            return (
              <div className="event">
                <p className="dot" style={{ backgroundColor: "red" }}></p>
                <p className="time">
                  {(item?.start).getHours()}:{(item?.start).getMinutes()}
                </p>
                <p className="title">{item?.title}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Day;
