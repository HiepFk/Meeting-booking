import { createContext, useReducer } from "react";
import departmentReducer from "../reducers/departmentReducer";
import { departmentAction } from "../utils/actions";
import { axiosToken } from "../apis/createInstance";

export const DepartmentContext = createContext();

export const DepartmentProvider = ({ children }) => {
  const initialState = {
    department: null,
    listDepartment: [],
    loading: false,
    error: false,
  };

  const [state, dispatch] = useReducer(departmentReducer, initialState);

  const getDepartment = async (id) => {
    dispatch({ type: departmentAction.GET_DEPARTMENT_BEGIN });
    try {
      const res = await axiosToken.get(`department/${id}`);
      dispatch({
        type: departmentAction.GET_DEPARTMENT_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: departmentAction.GET_DEPARTMENT_ERROR });
    }
  };
  const getListDepartment = async () => {
    dispatch({ type: departmentAction.GET_LISTDEPARTMENT_BEGIN });
    try {
      const res = await axiosToken.get(`department`);
      dispatch({
        type: departmentAction.GET_LISTDEPARTMENT_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: departmentAction.GET_LISTDEPARTMENT_ERROR });
    }
  };
  const updateDepartment = async (id, data) => {
    dispatch({ type: departmentAction.GET_DEPARTMENT_BEGIN });
    try {
      const res = await axiosToken.patch(`department/${id}`, data);
      dispatch({
        type: departmentAction.GET_DEPARTMENT_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: departmentAction.GET_DEPARTMENT_ERROR });
    }
  };
  const deleteDepartment = async (id) => {
    dispatch({ type: departmentAction.GET_LISTDEPARTMENT_BEGIN });
    try {
      const res = await axiosToken.delete(`department/${id}`);
      dispatch({
        type: departmentAction.GET_LISTDEPARTMENT_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: departmentAction.GET_LISTDEPARTMENT_ERROR });
    }
  };
  const addDepartment = async (data) => {
    dispatch({ type: departmentAction.GET_LISTDEPARTMENT_BEGIN });
    try {
      const res = await axiosToken.post(`department`, data);
      dispatch({
        type: departmentAction.GET_LISTDEPARTMENT_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: departmentAction.GET_LISTDEPARTMENT_ERROR });
    }
  };

  return (
    <DepartmentContext.Provider
      value={{
        ...state,
        getDepartment,
        getListDepartment,
        updateDepartment,
        deleteDepartment,
        addDepartment,
      }}
    >
      {children}
    </DepartmentContext.Provider>
  );
};

export default DepartmentProvider;
