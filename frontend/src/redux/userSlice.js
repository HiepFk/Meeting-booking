import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    listUser: [],
    loading: false,
    error: false,
  },
  reducers: {
    GetListUserStart: (state) => {
      return { ...state, loading: true };
    },
    GetListUserError: (state) => {
      return { ...state, error: true, loading: false };
    },
    GetListUserSuccess: (state, action) => {
      return {
        ...state,
        error: false,
        loading: false,
        listUser: action.payload,
      };
    },
    GetUserStart: (state) => {
      return { ...state, loading: true };
    },
    GetUserError: (state) => {
      return { ...state, error: true, loading: false };
    },
    GetUserSuccess: (state, action) => {
      return {
        ...state,
        error: false,
        loading: false,
        user: action.payload,
      };
    },
  },
});

export const {
  GetListUserStart,
  GetListUserSuccess,
  GetListUserError,
  GetUserStart,
  GetUserSuccess,
  GetUserError,
} = userSlice.actions;

export default userSlice.reducer;
