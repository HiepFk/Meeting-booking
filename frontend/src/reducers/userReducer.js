import { userAction } from "../utils/actions";

const userReducer = (state, action) => {
  switch (action.type) {
    case userAction.GET_USER_BEGIN: {
      return {
        ...state,
        loading: true,
        error: false,
        user: null,
      };
    }
    case userAction.GET_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        user: action.payload,
      };
    }
    case userAction.GET_USER_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case userAction.GET_LISTUSER_BEGIN: {
      return {
        ...state,
        loading: true,
        error: false,
        listUser: [],
      };
    }
    case userAction.GET_LISTUSER_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        listUser: action.payload,
      };
    }
    case userAction.GET_LISTUSER_ERROR: {
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

export default userReducer;
