import { createContext, useReducer } from "react";
import userReducer from "../reducers/userReducer";
import { userAction } from "../utils/actions";
import { axiosToken, axiosNormal } from "../apis/createInstance";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const initialState = {
    user: null,
    listUser: [],
    loading: false,
    error: false,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const getUser = async (id) => {
    dispatch({ type: userAction.GET_USER_BEGIN });
    try {
      const res = await axiosNormal.get(`user/${id}`);
      dispatch({ type: userAction.GET_USER_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: userAction.GET_USER_ERROR });
    }
  };
  const getListUser = async () => {
    dispatch({ type: userAction.GET_LISTUSER_BEGIN });
    try {
      const res = await axiosNormal.get(`user`);
      dispatch({ type: userAction.GET_LISTUSER_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: userAction.GET_LISTUSER_ERROR });
    }
  };
  const updateUser = async (data) => {
    // dispatch({ type: userAction.GET_USER_BEGIN });
    try {
      const res = await axiosNormal.patch(`user/${data._id}`, data);
      // dispatch({ type: userAction.GET_USER_SUCCESS, payload: res.data });
      // dispatch({ type: userAction.UPDATE_USER, payload: data });
    } catch (error) {
      console.log(error);
      // dispatch({ type: userAction.GET_USER_ERROR });
    }
  };
  const deleteUser = async (item) => {
    // dispatch({ type: userAction.GET_LISTUSER_BEGIN });
    try {
      const res = await axiosNormal.delete(`user/${item?._id}`);
      // dispatch({ type: userAction.GET_LISTUSER_SUCCESS, payload: res.data });
      dispatch({ type: userAction.DELETE_USER, payload: item });
    } catch (error) {
      console.log(error);
      // dispatch({ type: userAction.GET_LISTUSER_ERROR });
    }
  };
  const addUser = async (data) => {
    // dispatch({ type: userAction.GET_LISTUSER_BEGIN });
    try {
      const res = await axiosNormal.post(`user`, data);
      // dispatch({ type: userAction.GET_LISTUSER_SUCCESS, payload: res.data });
      dispatch({ type: userAction.ADD_USER, payload: res.data });
    } catch (error) {
      // dispatch({ type: userAction.GET_LISTUSER_ERROR });
    }
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        getUser,
        getListUser,
        updateUser,
        deleteUser,
        addUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
