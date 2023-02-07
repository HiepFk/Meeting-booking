import React, { useState } from "react";
import Day from "./Day";
import { getMonth } from "../utils/getDayInMonth";

function Date() {
  const [month, setMonth] = useState(getMonth());

  return (
    <>
      {month?.map((week, i) => (
        <tr className="week" key={i}>
          {week?.map((day, idx) => {
            return <Day day={day} key={idx} rowIdx={i} />;
          })}
        </tr>
      ))}
    </>
  );
}

export default Date;
