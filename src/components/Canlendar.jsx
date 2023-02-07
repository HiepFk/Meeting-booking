import React from "react";

function Canlendar() {
  const nameDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return (
    <Wrapper className="app">
      <table>
        <tr className="week">
          {nameDay?.map((day, i) => {
            return (
              <th className="day name_day" key={i}>
                {day}
              </th>
            );
          })}
        </tr>
        <Date />
      </table>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 5rem 0rem;
  display: flex;
  justify-content: center;
  .day {
    padding: 0rem 5rem 4rem;
    text-align: center;
  }
  .name_day {
    padding: 0.5rem 5rem;
    border-top: 2px solid #ccc;
  }
  table {
    border-collapse: collapse;
    table-layout: fixed;
  }
  th,
  td {
    border: 1.5px solid #ccc;
    text-align: center;
  }
  td {
    font-weight: 500;
  }
  .active {
    background-color: #1967d2;
    color: white;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  }
  /* .display{
      dis
    } */
`;
export default Canlendar;
