import { departmentAction } from "../utils/actions";
const departmentReducer = (state, action) => {
  switch (action.type) {
    case departmentAction.REFRESH: {
      const { reFresh } = state;
      return {
        ...state,
        reFresh: !reFresh,
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
        listDepartment: action.payload?.data,
      };
    }
    case departmentAction.GET_LISTDEPARTMENT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case departmentAction.UPDATE_DEPARTMENT: {
      const { listDepartment } = state;
      let newListDepartment = listDepartment.filter((department) => {
        return department._id !== action.payload._id;
      });
      newListDepartment.push(action.payload);
      return {
        ...state,
        loading: false,
        error: true,
        listDepartment: [...newListDepartment],
      };
    }

    case departmentAction.ADD_DEPARTMENT: {
      const { listDepartment } = state;
      return {
        ...state,
        loading: false,
        error: true,
        listDepartment: [...listDepartment, action.payload?.data],
      };
    }
    case departmentAction.DELETE_DEPARTMENT: {
      const { listDepartment } = state;
      const departmentIndex = listDepartment.indexOf(action.payload);
      if (departmentIndex > -1) {
        listDepartment = listDepartment.splice(departmentIndex, 1);
      }
      return {
        ...state,
        loading: false,
        error: true,
        listDepartment: [...listDepartment],
      };
    }

    default:
      return state;
  }
};

export default departmentReducer;
