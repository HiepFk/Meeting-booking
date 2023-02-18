import { createContext, useMemo, useReducer } from "react";
import roomReducer from "../reducers/roomReducer";
import { roomAction } from "../utils/actions";

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

  const getListRoom = async (axios) => {
    dispatch({ type: roomAction.GET_LISTROOM_BEGIN });
    try {
      const res = await axios.get(`room`);
      dispatch({ type: roomAction.GET_LISTROOM_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: roomAction.GET_LISTROOM_ERROR });
    }
  };
  const updateRoom = async (axios, data) => {
    try {
      const res = await axios.patch(`room/${data._id}`, data);
      dispatch({
        type: roomAction.REFRESH,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteRoom = async (axios, item) => {
    try {
      await axios.delete(`room/${item?._id}`);
      dispatch({ type: roomAction.DELETE_ROOM, payload: item });
    } catch (error) {
      console.log(error);
    }
  };
  const addRoom = async (axios, data) => {
    try {
      const res = await axios.post(`room`, data);
      dispatch({ type: roomAction.ADD_ROOM, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  const globalContextValue = useMemo(
    () => ({
      dispatch,
      ...state,
      getListRoom,
      updateRoom,
      deleteRoom,
      addRoom,
      handeChangeReFresh,
    }),
    [dispatch, state]
  );

  return (
    <RoomContext.Provider
      value={globalContextValue}

      // value={{
      //   ...state,
      //   getListRoom,
      //   updateRoom,
      //   deleteRoom,
      //   addRoom,
      //   handeChangeReFresh,
      // }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
