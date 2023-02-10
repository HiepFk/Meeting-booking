import { authAction } from "../utils/actions";

const authReducer = (state, action) => {
  switch (action.type) {
    case authAction.LOGIN_BEGIN: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case authAction.LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        user: action.payload,
      };
    }
    case authAction.LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case authAction.LOGOUT_BEGIN: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case authAction.LOGOUT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        user: null,
      };
    }
    case authAction.LOGOUT_ERROR: {
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

export default authReducer;
