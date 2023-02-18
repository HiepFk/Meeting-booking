import { createContext, useMemo, useReducer } from "react";
import userReducer from "../reducers/userReducer";
import { userAction } from "../utils/actions";

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
  const getListUser = async (axios) => {
    dispatch({ type: userAction.GET_LISTUSER_BEGIN });
    try {
      const res = await axios.get(`user`);
      dispatch({ type: userAction.GET_LISTUSER_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: userAction.GET_LISTUSER_ERROR });
    }
  };
  const updateUser = async (axios, data) => {
    try {
      const res = await axios.patch(`user/${data._id}`, data);
      dispatch({
        type: userAction.REFRESH,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteUser = async (axios, item) => {
    try {
      const res = await axios.delete(`user/${item?._id}`);
      dispatch({ type: userAction.DELETE_USER, payload: item });
    } catch (error) {
      console.log(error);
    }
  };
  const addUser = async (axios, data) => {
    try {
      const res = await axios.post(`user`, data);
      dispatch({ type: userAction.ADD_USER, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  const globalContextValue = useMemo(
    () => ({
      dispatch,
      ...state,
      getListUser,
      updateUser,
      deleteUser,
      addUser,
      handeChangeReFresh,
    }),
    [dispatch, state]
  );

  return (
    <UserContext.Provider
      value={globalContextValue}

      // value={{
      //   ...state,
      //   getListUser,
      //   updateUser,
      //   deleteUser,
      //   addUser,
      //   handeChangeReFresh,
      // }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
