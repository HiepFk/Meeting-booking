import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import {
  LoginStart,
  LoginFailed,
  LoginSuccess,
  LogOutStart,
  LogOutSuccess,
  LogOutFailed,
  GetMeStart,
  GetMeError,
  GetMeSuccess,
} from "../redux/authSlice";

axios.defaults.withCredentials = true;
const link = process.env.REACT_APP_API_LINK;

export const signInWithGoogle = async (dispatch, navigate) => {
  dispatch(LoginStart());
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user);
      axios
        .post(`${link}/v1/user/sign-google`, {
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        })
        .then((res) => {
          dispatch(LoginSuccess(res.data));
          console.log(res.data);
          navigate("/");
        });
    })
    .catch((error) => {
      dispatch(LoginFailed());
    });
};

export const logOutUser = async (dispatch) => {
  dispatch(LogOutStart());
  try {
    const res = await axios.get(`${link}/v1/user/logout`);
    dispatch(LogOutSuccess());
  } catch (error) {
    dispatch(LogOutFailed());
  }
};

export const GetMe = async (dispatch, axiosJWT, accessToken) => {
  dispatch(GetMeStart());
  try {
    await axiosJWT.get(`${link}/v1/user/me`, {
      headers: { token: `Bearer ${accessToken}` },
    });
  } catch (error) {
    dispatch(GetMeError());
  }
};

export const UpdateMe = async (dispatch, data, type, axiosJWT, accessToken) => {
  dispatch(GetMeStart());
  try {
    const url =
      type === "password"
        ? `${link}/v1/user/updateMyPassword`
        : `${link}/v1/user/updateInfo`;

    const res = await axiosJWT({
      method: "PATCH",
      url,
      data,
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(GetMeSuccess(res.data));
  } catch (error) {
    dispatch(GetMeError());
  }
};
