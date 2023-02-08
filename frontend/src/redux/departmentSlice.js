import { createSlice } from "@reduxjs/toolkit";

const departmentSlice = createSlice({
  name: "department",
  initialState: {
    department: null,
    listDepartment: [],
    loading: false,
    error: false,
  },
  reducers: {
    GetListDepartmentStart: (state) => {
      return { ...state, loading: true };
    },
    GetListDepartmentError: (state) => {
      return { ...state, error: true, loading: false };
    },
    GetListDepartmentSuccess: (state, action) => {
      return {
        ...state,
        error: false,
        loading: false,
        listDepartment: action.payload,
      };
    },
    GetDepartmentStart: (state) => {
      return { ...state, loading: true };
    },
    GetDepartmentError: (state) => {
      return { ...state, error: true, loading: false };
    },
    GetDepartmentSuccess: (state, action) => {
      return {
        ...state,
        error: false,
        loading: false,
        department: action.payload,
      };
    },
  },
});

export const {
  GetListDepartmentStart,
  GetListDepartmentSuccess,
  GetListDepartmentError,
  GetDepartmentStart,
  GetDepartmentSuccess,
  GetDepartmentError,
} = departmentSlice.actions;

export default departmentSlice.reducer;
