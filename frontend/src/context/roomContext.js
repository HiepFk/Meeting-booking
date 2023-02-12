import { createContext, useReducer } from "react";
import roomReducer from "../reducers/roomReducer";
import { roomAction } from "../utils/actions";
import { axiosToken, axiosNormal } from "../apis/createInstance";

export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const initialState = {
    listRoom: [],
    loading: false,
    error: false,
    reFresh: false,
  };

  const [state, dispatch] = useReducer(roomReducer, initialState);

  const handeChangeReFresh = () => {
    dispatch({
      type: roomAction.REFRESH,
    });
  };

  const getListRoom = async () => {
    dispatch({ type: roomAction.GET_LISTROOM_BEGIN });
    try {
      const res = await axiosNormal.get(`room`);
      dispatch({ type: roomAction.GET_LISTROOM_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: roomAction.GET_LISTROOM_ERROR });
    }
  };
  const updateRoom = async (data) => {
    try {
      const res = await axiosNormal.patch(`room/${data._id}`, data);
      // dispatch({ type: roomAction.UPDATE_ROOM, payload: data });
      dispatch({
        type: roomAction.REFRESH,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteRoom = async (item) => {
    try {
      await axiosNormal.delete(`room/${item?._id}`);
      dispatch({ type: roomAction.DELETE_ROOM, payload: item });
    } catch (error) {
      console.log(error);
    }
  };
  const addRoom = async (data) => {
    try {
      const res = await axiosNormal.post(`room`, data);
      dispatch({ type: roomAction.ADD_ROOM, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RoomContext.Provider
      value={{
        ...state,
        getListRoom,
        updateRoom,
        deleteRoom,
        addRoom,
        handeChangeReFresh,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
