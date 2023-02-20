import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Month from "../components/Home/Month/Month";
import Day from "../components/Home/Day/Day";
import Week from "../components/Home/Week/Week";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Home/Header";
function Home() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentWeek, setCurrentWeek] = useState(new Date());

  return (
    <Wrapper>
      <Header currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
      <Routes>
        <Route
          exact
          path="month"
          element={
            <Month
              currentMonth={currentMonth}
              setCurrentMonth={setCurrentMonth}
            />
          }
        />
        <Route exact path="week" element={<Week currentWeek={currentWeek} />} />
        <Route exact path="day" element={<Day />} />
      </Routes>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 5rem 0rem 2rem;
  z-index: 2;
`;
export default Home;
