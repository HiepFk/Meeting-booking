import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getWeek } from "../../../utils/getDayInMonth";
function Week({ currentWeek }) {
  const nameDay = ["TH2", "TH3", "TH4", "TH5", "TH6", "TH7", "CN"];
  const [week, setWeek] = useState(getWeek(currentWeek));

  useEffect(() => {
    setWeek(getWeek(currentWeek));
  }, [currentWeek]);

  function getActive(item, className) {
    return new Date(item).getDay() === new Date().getDay() &&
      new Date(item).getMonth() === new Date().getMonth() &&
      new Date(item).getDate() === new Date().getDate()
      ? `${className} ${className}-active`
      : `${className}`;
  }

  return (
    <Wrapper>
      <div className="title">Ngày</div>
      {week.map((item, i) => {
        return (
          <div className="week" key={i}>
            <div className={getActive(item, "name_day")}>{nameDay[i]}</div>
            <div className={getActive(item, "day")}>
              {new Date(item).getDate()}
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  .title {
    border: 1px solid #ddd;
    text-align: center;
  }
  .week {
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .name_day {
    font-size: 1rem;
    font-weight: 600;
    opacity: 0.6;
  }
  .name_day-active {
    color: #1a73e8;
    opacity: 1;
  }
  .day {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    background-color: transparent;
    border-radius: 2rem;
    width: 1.75rem;
    height: 1.75rem;
    transition: all 0.25s linear;
  }
  .day-active {
    background-color: #1a73e8;
    color: white;
  }
`;

export default Week;
