import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { menu_user, menu_admin } from "../../utils/menu";
function Menu({ role }) {
  const [menu] = useState(role ? menu_admin : menu_user);
  const [active, setActive] = useState(1);
  return (
    <MenyStyle>
      {menu?.map((item) => {
        return (
          <Link
            to={item.link}
            className={item.id === active ? "menu active" : "menu"}
            key={item.id}
            onClick={() => setActive(item.id)}
          >
            <div className="menu_icon">{item.icon}</div>
            <div className="menu_text">{item.title}</div>
          </Link>
        );
      })}
    </MenyStyle>
  );
}
const MenyStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  margin-bottom: 1rem;
  .menu {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    color: black;
    opacity: 0.6;
    cursor: pointer;
    transition: all 0.25s linear;
    :hover {
      color: #004ffe;
      opacity: 0.8;
      .menu_text {
        color: black;
      }
    }
  }
  .menu_icon {
    width: 2.5rem;
    font-size: 1.5rem;
  }
  .menu_text {
    font-weight: 600;
    transform: translateY(0.25rem);
  }
  .active {
    color: #004ffe;
    opacity: 1;
    .menu_text {
      color: black;
    }
  }
`;
export default Menu;
