import React from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import moment from "moment";
function Header({ currentMonth, setCurrentMonth }) {
  const listRoom = [
    "All",
    "Room 1",
    "Room 2",
    "Room 3",
    "Room 4",
    "Room 5",
    "Room 6",
  ];
  const listChoise = ["Month", "Week", "Day"];

  function handlePrevMonth() {
    setCurrentMonth(currentMonth - 1);
  }
  function handleNextMonth() {
    setCurrentMonth(currentMonth + 1);
  }
  return (
    <Wrapper>
      <div className="left">
        <div className="icon icon_prev" onClick={() => handlePrevMonth()}>
          <AiOutlineArrowLeft />
        </div>
        <div className="icon icon_next" onClick={() => handleNextMonth()}>
          <AiOutlineArrowRight />
        </div>
        <button
          className="date_current"
          onClick={() => setCurrentMonth(new Date().getMonth())}
        >
          Today
        </button>
      </div>
      <div className="date_now">
        {moment(new Date(moment().year(), currentMonth)).format("MMMM YYYY")}
      </div>
      <div className="right">
        <select className="list_room">
          {listRoom.map((room) => {
            return <option value={room}>{room}</option>;
          })}
        </select>
        <select className="list_choise">
          {listChoise.map((choise) => {
            return <option value={choise}>{choise}</option>;
          })}
        </select>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left,
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .date_current {
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    transition: all 0.25s linear;
    background-color: #ccc;
    font-weight: 600;
    :hover {
      background-color: #1a73e8;
      color: white;
    }
  }
  .date_now {
    font-weight: 600;
    font-size: 1.5rem;
  }
  select {
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    border: 2px solid #ccc;
    transition: all 0.25s linear;
    border-radius: 0.5rem;
  }
`;
export default Header;
