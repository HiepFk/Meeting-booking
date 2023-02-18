import { createContext, useMemo, useReducer } from "react";
import authReducer from "../reducers/authReducer";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import { authAction } from "../utils/actions";
import { axiosNormal } from "../apis/createInstance";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialState = {
    auth: localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : null,
    loading: false,
    error: false,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const refreshUser = (data) => {
    dispatch({ type: authAction.LOGIN_SUCCESS, payload: data });
  };

  const login = async (navigate) => {
    dispatch({ type: authAction.LOGIN_BEGIN });
    signInWithPopup(auth, provider)
      .then((result) => {
        axiosNormal
          .post(`user/login`, {
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
          })
          .then((res) => {
            dispatch({ type: authAction.LOGIN_SUCCESS, payload: res.data });
            localStorage.setItem("auth", JSON.stringify(res.data));
            navigate("/");
          });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: authAction.LOGIN_ERROR });
      });
  };

  const logout = async (navigate) => {
    dispatch({ type: authAction.LOGOUT_BEGIN });
    try {
      await axiosNormal.get(`user/logout`);
      dispatch({ type: authAction.LOGOUT_SUCCESS });
      localStorage.removeItem("auth");
      navigate("/login");
    } catch (error) {
      console.log(error);
      dispatch({ type: authAction.LOGOUT_ERROR });
    }
  };

  const globalContextValue = useMemo(
    () => ({
      dispatch,
      ...state,
      login,
      logout,
      refreshUser,
    }),
    [dispatch, state]
  );

  return (
    <AuthContext.Provider value={globalContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
