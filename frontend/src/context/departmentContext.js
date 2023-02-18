import { createContext, useMemo, useReducer } from "react";
import departmentReducer from "../reducers/departmentReducer";
import { departmentAction } from "../utils/actions";

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

  const getListDepartment = async (axios) => {
    dispatch({ type: departmentAction.GET_LISTDEPARTMENT_BEGIN });
    try {
      const res = await axios.get(`department`);
      dispatch({
        type: departmentAction.GET_LISTDEPARTMENT_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: departmentAction.GET_LISTDEPARTMENT_ERROR });
    }
  };
  const updateDepartment = async (axios, data) => {
    try {
      const res = await axios.patch(`department/${data._id}`, data);
      dispatch({
        type: departmentAction.REFRESH,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteDepartment = async (axios, item) => {
    try {
      axios.delete(`department/${item?._id}`);
      dispatch({
        type: departmentAction.DELETE_DEPARTMENT,
        payload: item,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const addDepartment = async (axios, data) => {
    try {
      const res = await axios.post(`department`, data);
      dispatch({
        type: departmentAction.ADD_DEPARTMENT,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const globalContextValue = useMemo(
    () => ({
      dispatch,
      ...state,
      getListDepartment,
      updateDepartment,
      deleteDepartment,
      addDepartment,
      handeChangeReFresh,
    }),
    [dispatch, state]
  );

  return (
    <DepartmentContext.Provider
      value={globalContextValue}
      // value={{
      //   ...state,
      //   getListDepartment,
      //   updateDepartment,
      //   deleteDepartment,
      //   addDepartment,
      //   handeChangeReFresh,
      // }}
    >
      {children}
    </DepartmentContext.Provider>
  );
};

export default DepartmentProvider;
