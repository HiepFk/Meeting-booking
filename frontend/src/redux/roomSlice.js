import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
  name: "room",
  initialState: {
    room: null,
    listRoom: [],
    loading: false,
    error: false,
  },
  reducers: {
    GetListRoomStart: (state) => {
      return { ...state, loading: true };
    },
    GetListRoomError: (state) => {
      return { ...state, error: true, loading: false };
    },
    GetListRoomSuccess: (state, action) => {
      return {
        ...state,
        error: false,
        loading: false,
        listRoom: action.payload,
      };
    },
    GetRoomStart: (state) => {
      return { ...state, loading: true };
    },
    GetRoomError: (state) => {
      return { ...state, error: true, loading: false };
    },
    GetRoomSuccess: (state, action) => {
      return {
        ...state,
        error: false,
        loading: false,
        room: action.payload,
      };
    },
  },
});

export const {
  GetListRoomStart,
  GetListRoomSuccess,
  GetListRoomError,
  GetRoomStart,
  GetRoomSuccess,
  GetRoomError,
} = roomSlice.actions;

export default roomSlice.reducer;
