import { createContext, useReducer } from "react";
import roomReducer from "../reducers/roomReducer";
import { roomAction } from "../utils/actions";
import { axiosToken } from "../apis/createInstance";

export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const initialState = {
    room: null,
    listRoom: [],
    loading: false,
    error: false,
  };

  const [state, dispatch] = useReducer(roomReducer, initialState);

  const getRoom = async (id) => {
    dispatch({ type: roomAction.GET_ROOM_BEGIN });
    try {
      const res = await axiosToken.get(`room/${id}`);
      dispatch({ type: roomAction.GET_ROOM_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: roomAction.GET_ROOM_ERROR });
    }
  };
  const getListRoom = async () => {
    dispatch({ type: roomAction.GET_LISTROOM_BEGIN });
    try {
      const res = await axiosToken.get(`room`);
      dispatch({ type: roomAction.GET_LISTROOM_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: roomAction.GET_LISTROOM_ERROR });
    }
  };
  const updateRoom = async (id, data) => {
    dispatch({ type: roomAction.GET_ROOM_BEGIN });
    try {
      const res = await axiosToken.patch(`room/${id}`, data);
      dispatch({ type: roomAction.GET_ROOM_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: roomAction.GET_ROOM_ERROR });
    }
  };
  const deleteRoom = async (id) => {
    dispatch({ type: roomAction.GET_LISTROOM_BEGIN });
    try {
      const res = await axiosToken.delete(`room/${id}`);
      dispatch({ type: roomAction.GET_LISTROOM_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: roomAction.GET_LISTROOM_ERROR });
    }
  };
  const addRoom = async (data) => {
    dispatch({ type: roomAction.GET_LISTROOM_BEGIN });
    try {
      const res = await axiosToken.post(`room`, data);
      dispatch({ type: roomAction.GET_LISTROOM_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: roomAction.GET_LISTROOM_ERROR });
    }
  };

  return (
    <RoomContext.Provider
      value={{
        ...state,
        getRoom,
        getListRoom,
        updateRoom,
        deleteRoom,
        addRoom,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
