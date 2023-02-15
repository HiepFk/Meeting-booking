import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaGooglePlusG } from "react-icons/fa";
import logo from "../assets/image/logo_red.jpg";
import wrapper from "../assets/image/login.jpg";
import styled from "styled-components";
import { AuthContext } from "../context/authContext";
import Button from "react-bootstrap/Button";
// import { gapi } from "gapi-script";
// import { GoogleLogin } from "react-google-login";
import {
  useSession,
  useSupabaseClient,
  useSessionContext,
} from "@supabase/auth-helpers-react";
function Login() {
  const navigate = useNavigate();
  const { user, login } = useContext(AuthContext);

  const session = useSession(); // tokens, when session exists we have a user
  const supabase = useSupabaseClient(); // talk to supabase!
  const { isLoading } = useSessionContext();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const googleSignIn = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes: "https://www.googleapis.com/auth/calendar",
      },
    });
    if (error) {
      alert("Error logging in to Google provider with Supabase");
      console.log(error);
    } else {
      await login(navigate);
      // if (session?.user) {
      //   await login(navigate, session?.user);
      // }
      // console.log(session?.user);
    }
  };

  return (
    <Wrapper
      style={{
        background: `url(${wrapper}) no-repeat center/cover`,
      }}
      className="vh-100 vw-100 d-flex align-items-center justify-content-center"
    >
      <div className="login_wrapper ">
        <div className="login_content">
          <img className="logo_img" src={logo} alt="" />
          <h1 className="text-opacity-80 text-danger">Welcome</h1>
        </div>

        <Button variant="danger" className="login_btn" onClick={login}>
          <FaGooglePlusG />
        </Button>
      </div>
      {/* <GoogleLogin
        clientId="409917240301-3klqt6qln1b6qmbim837adg0hpnal9fb.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseError}
        cookiePolicy={"single_host_origin"}
        responseType="code"
        accessType="offline"
        scope="openid email profile https://www.googleapis.com/auth/calendar"
      /> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
  .logo_img {
    width: 10rem;
    height: 10rem;
    border-radius: 10rem;
  }
  .login_btn {
    margin-top: 1rem;
    padding: 0rem 1.25rem 0.5rem;
    font-size: 2.5rem;
    box-shadow: 0 10px 10px 0px rgba(255, 0, 0, 0.5);
    transition: all 0.5s linear;
    :hover {
      transform: translateX(0.5rem);
    }
  }
`;

export default Login;
