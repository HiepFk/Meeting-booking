import { createContext, useReducer } from "react";
import departmentReducer from "../reducers/departmentReducer";
import { departmentAction } from "../utils/actions";
import { axiosToken, axiosNormal } from "../apis/createInstance";

export const DepartmentContext = createContext();

export const DepartmentProvider = ({ children }) => {
  const initialState = {
    listDepartment: [],
    loading: false,
    error: false,
    reFresh: false,
  };

  const [state, dispatch] = useReducer(departmentReducer, initialState);

  const handeChangeReFresh = () => {
    dispatch({
      type: departmentAction.REFRESH,
    });
  };

  const getListDepartment = async () => {
    dispatch({ type: departmentAction.GET_LISTDEPARTMENT_BEGIN });
    try {
      const res = await axiosNormal.get(`department`);
      dispatch({
        type: departmentAction.GET_LISTDEPARTMENT_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: departmentAction.GET_LISTDEPARTMENT_ERROR });
    }
  };
  const updateDepartment = async (data) => {
    try {
      const res = await axiosNormal.patch(`department/${data._id}`, data);
      dispatch({
        type: departmentAction.REFRESH,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteDepartment = async (item) => {
    try {
      axiosNormal.delete(`department/${item?._id}`);
      dispatch({
        type: departmentAction.DELETE_DEPARTMENT,
        payload: item,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const addDepartment = async (data) => {
    try {
      const res = await axiosNormal.post(`department`, data);
      dispatch({
        type: departmentAction.ADD_DEPARTMENT,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DepartmentContext.Provider
      value={{
        ...state,
        getListDepartment,
        updateDepartment,
        deleteDepartment,
        addDepartment,
        handeChangeReFresh,
      }}
    >
      {children}
    </DepartmentContext.Provider>
  );
};

export default DepartmentProvider;
