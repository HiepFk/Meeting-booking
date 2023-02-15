import { createContext, useReducer } from "react";
import authReducer from "../reducers/authReducer";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import { authAction } from "../utils/actions";
import { axiosNormal } from "../apis/createInstance";
import { useSession } from "@supabase/auth-helpers-react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const session = useSession();
  const initialState = {
    user: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
    loading: false,
    error: false,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (navigate) => {
    dispatch({ type: authAction.LOGIN_BEGIN });

    signInWithPopup(auth, provider)
      .then((result) => {
        axiosNormal
          .post(`user/sign-google`, {
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
          })
          .then((res) => {
            dispatch({ type: authAction.LOGIN_SUCCESS, payload: res.data });
            localStorage.setItem("userInfo", JSON.stringify(res.data));

            navigate("/");
          });
      })
      .catch((error) => {
        dispatch({ type: authAction.LOGIN_ERROR });
      });
  };
  // const login = async (navigate) => {
  //   console.log(session);
  //   dispatch({ type: authAction.LOGIN_BEGIN });

  //   try {
  //     const user = {
  //       name: session?.user?.user_metadata?.name,
  //       email: session?.user?.user_metadata?.email,
  //       photo: session?.user?.user_metadata?.picture,
  //     };
  //     const res = axiosNormal.post(`user/sign-google`, {
  //       user,
  //     });
  //     dispatch({ type: authAction.LOGIN_SUCCESS, payload: res.data });
  //     console.log(res.data);
  //     localStorage.setItem("userInfo", JSON.stringify(res.data));
  //     navigate("/");
  //   } catch (error) {
  //     dispatch({ type: authAction.LOGIN_ERROR });
  //   }
  // };

  const logout = async (navigate) => {
    dispatch({ type: authAction.LOGOUT_BEGIN });
    try {
      await axiosNormal.get(`user/logout`);
      dispatch({ type: authAction.LOGOUT_SUCCESS });
      // await a.auth.signOut();
      navigate("/login");
      localStorage.removeItem("userInfo");
    } catch (error) {
      dispatch({ type: authAction.LOGOUT_ERROR });
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
