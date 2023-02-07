import React from "react";

function Day({ day, rowIdx }) {
  //   console.log(
  //     new Date(day).getDay() === new Date().getDay(),
  //     new Date().getDay(),
  //     new Date(day).getDay()
  //   );
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
