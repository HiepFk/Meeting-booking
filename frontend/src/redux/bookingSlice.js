import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    booking: null,
    listBooking: [],
    loading: false,
    error: false,
  },
  reducers: {
    GetListBookingStart: (state) => {
      return { ...state, loading: true };
    },
    GetListBookingError: (state) => {
      return { ...state, error: true, loading: false };
    },
    GetListBookingSuccess: (state, action) => {
      return {
        ...state,
        error: false,
        loading: false,
        listBooking: action.payload,
      };
    },
    GetBookingStart: (state) => {
      return { ...state, loading: true };
    },
    GetBookingError: (state) => {
      return { ...state, error: true, loading: false };
    },
    GetBookingSuccess: (state, action) => {
      return {
        ...state,
        error: false,
        loading: false,
        booking: action.payload,
      };
    },
  },
});

export const {
  GetListBookingStart,
  GetListBookingSuccess,
  GetListBookingError,
  GetBookingStart,
  GetBookingSuccess,
  GetBookingError,
} = bookingSlice.actions;

export default bookingSlice.reducer;
