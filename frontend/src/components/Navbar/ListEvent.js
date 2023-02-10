import React from "react";
import styled from "styled-components";
function ListEvent() {
  const arr = [
    { id: 1, name: "Sự kiện 1", booker: "Phuong Dao Minh" },
    { id: 2, name: "Sự kiện 2", booker: "Phuong Dao Minh" },
    { id: 3, name: "Sự kiện 3", booker: "Phuong Dao Minh" },
  ];

  return (
    <Wrapper>
      <div className="event_title">New Events</div>
      <div className="event_basic">
        {arr.map((item) => {
          return (
            <div className="event_item">
              <div className="icon">👉</div>
              <div className="event_content">
                <div className="event_name">{item?.name}</div>
                <div className="event_booker">Booker: {item?.booker}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 0 1rem;
  .event_title {
    font-weight: 600;
    opacity: 0.7;
    margin-bottom: 0.5rem;
  }
  .event_basic {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-left: 0.5rem;
  }

  .event_item {
    display: flex;
    gap: 0.5rem;
    font-size: 12px;
  }
  .event_name {
    font-weight: 600;
  }
  .event_booker {
    font-weight: 400;
  }
`;
export default ListEvent;
