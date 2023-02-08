import React from "react";
import styled from "styled-components";
import logo from "../../assets/image/logo.png";
function Top({ name, photo }) {
  return (
    <TopStyle>
      <img src={logo} alt="" className="logo_img" />
      <div className="user">
        <img src={photo} alt="" className="user_img" />
        <div className="content">
          <h3>Welcome</h3>
          <p className="user_name">{name}</p>
        </div>
      </div>
    </TopStyle>
  );
}
const TopStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Top;
