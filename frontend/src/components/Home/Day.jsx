import React from "react";

function Day({ day, rowIdx }) {
  return (
    <td className="day">
      <p
        className={
          new Date(day).getDay() === new Date().getDay() &&
          new Date(day).getDate() === new Date().getDate()
            ? "active"
            : ""
        }
      >
        {new Date(day).getDate()}
      </p>
    </td>
  );
}

export default Day;
