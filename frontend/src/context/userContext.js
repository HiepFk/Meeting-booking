import { createContext, useReducer } from "react";
import userReducer from "../reducers/userReducer";
import { userAction } from "../utils/actions";
import { axiosToken } from "../apis/createInstance";

export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
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
      const res = await axiosToken.get(`user/${id}`);
      dispatch({ type: userAction.GET_USER_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: userAction.GET_USER_ERROR });
    }
  };
  const getListUser = async () => {
    dispatch({ type: userAction.GET_LISTUSER_BEGIN });
    try {
      const res = await axiosToken.get(`user`);
      dispatch({ type: userAction.GET_LISTUSER_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: userAction.GET_LISTUSER_ERROR });
    }
  };
  const updateUser = async (id, data) => {
    dispatch({ type: userAction.GET_USER_BEGIN });
    try {
      const res = await axiosToken.patch(`user/${id}`, data);
      dispatch({ type: userAction.GET_USER_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: userAction.GET_USER_ERROR });
    }
  };
  const deleteUser = async (id) => {
    dispatch({ type: userAction.GET_LISTUSER_BEGIN });
    try {
      const res = await axiosToken.delete(`user/${id}`);
      dispatch({ type: userAction.GET_LISTUSER_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: userAction.GET_LISTUSER_ERROR });
    }
  };
  const addUser = async (data) => {
    dispatch({ type: userAction.GET_LISTUSER_BEGIN });
    try {
      const res = await axiosToken.post(`user`, data);
      dispatch({ type: userAction.GET_LISTUSER_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: userAction.GET_LISTUSER_ERROR });
    }
  };

  return (
    <RoomContext.Provider
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
    </RoomContext.Provider>
  );
};

export default RoomProvider;
