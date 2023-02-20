import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getMonth } from "../../../utils/getDayInMonth";
import Day from "./Day";

function Month({ currentMonth }) {
  console.log(currentMonth);
  const nameDay = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
  const [month, setMonth] = useState(getMonth(currentMonth));

  useEffect(() => {
    setMonth(getMonth(currentMonth));
  }, [currentMonth]);

  return (
    <Wrapper>
      {nameDay.map((day) => {
        return <div className="day name_day">{day}</div>;
      })}
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  .day {
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .name_day {
    font-weight: bold;
    font-size: 1rem;
  }
  .header {
    cursor: pointer;
    :hover .item {
      background-color: #ccc;
    }
    font-size: 0.85rem;
    font-weight: normal;
  }
  .header_active {
    font-weight: 600;
  }
  .item {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
    margin-bottom: 4rem;
    background-color: transparent;
    border-radius: 2rem;
    width: 1.75rem;
    height: 1.75rem;
    transition: all 0.25s linear;
  }
  .active {
    background-color: #1a73e8;
    color: white;
  }
  .event_list {
    transform: translateY(-3rem);
    display: flex;
    flex-direction: column;
    /* gap: 0.25rem; */
  }
  .event {
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    :hover {
      background-color: #fff;
    }
  }
  .time {
    font-weight: normal;
    margin-right: 0.25rem;
    margin-left: 0.25rem;
  }
  .dot {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 1rem;
  }
`;
export default Month;
