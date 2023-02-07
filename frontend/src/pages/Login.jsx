import React, { useState, useEffect } from "react";
import { signInWithGoogle } from "../apis/auth";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { FaGooglePlusG } from "react-icons/fa";
import logo from "../assets/image/logo_red.jpg";
import wrapper from "../assets/image/login.jpg";
import styled from "styled-components";

function Login() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const user = useSelector((state) => state.auth.user);
  // useEffect(() => {
  //   if (user && user?.isAdmin) {
  //     navigate("/");
  //   }
  // }, [user, navigate]);

  return (
    <Wrapper
      style={{
        background: `url(${wrapper}) no-repeat center/cover`,
      }}
    >
      <div className="login_wrapper">
        <div className="login_content">
          <img className="logo_img" src={logo} alt="" />
          <h1 className="login_title">Welcome</h1>
        </div>

        <button
          className="login_btn"
          type="button"
          onClick={() => signInWithGoogle(dispatch)}
        >
          <FaGooglePlusG />
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_wrapper {
    padding: 4rem 5rem;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .login_content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .login_title {
    /* color: rgba(0, 0, 0, 0.9); */
    color: rgba(255, 0, 0, 0.8);
  }
  .logo_img {
    width: 10rem;
    height: 10rem;
    border-radius: 10rem;
  }
  .login_btn {
    margin-top: 1rem;
    padding: 0.75rem 1.25rem;
    border: none;
    border-radius: 1rem;
    background-color: rgba(255, 0, 0, 0.7);
    color: white;
    font-size: 2.5rem;
    cursor: pointer;
    box-shadow: 0 10px 10px 0px rgba(255, 0, 0, 0.5);
    transition: all 0.5s linear;
    :hover {
      transform: translateX(0.5rem);
    }
  }
`;

export default Login;
