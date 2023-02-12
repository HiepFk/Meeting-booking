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
    reFresh: false,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const handeChangeReFresh = () => {
    dispatch({
      type: userAction.REFRESH,
    });
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
    try {
      const res = await axiosNormal.patch(`user/${data._id}`, data);
      dispatch({
        type: userAction.REFRESH,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteUser = async (item) => {
    try {
      const res = await axiosNormal.delete(`user/${item?._id}`);
      dispatch({ type: userAction.DELETE_USER, payload: item });
    } catch (error) {
      console.log(error);
    }
  };
  const addUser = async (data) => {
    try {
      const res = await axiosNormal.post(`user`, data);
      dispatch({ type: userAction.ADD_USER, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        getListUser,
        updateUser,
        deleteUser,
        addUser,
        handeChangeReFresh,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
