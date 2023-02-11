import { departmentAction } from "../utils/actions";
const departmentReducer = (state, action) => {
  switch (action.type) {
    case departmentAction.GET_DEPARTMENT_BEGIN: {
      return {
        ...state,
        loading: true,
        error: false,
        department: null,
      };
    }
    case departmentAction.GET_DEPARTMENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        department: action.payload,
      };
    }
    case departmentAction.GET_DEPARTMENT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case departmentAction.GET_LISTDEPARTMENT_BEGIN: {
      return {
        ...state,
        loading: true,
        error: false,
        listDepartment: [],
      };
    }
    case departmentAction.GET_LISTDEPARTMENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        listDepartment: action.payload,
      };
    }
    case departmentAction.GET_LISTDEPARTMENT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default:
      return state;
  }
};

export default departmentReducer;
