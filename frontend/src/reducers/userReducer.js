import { userAction } from "../utils/actions";

const userReducer = (state, action) => {
  switch (action.type) {
    case userAction.REFRESH: {
      const { reFresh } = state;
      return {
        ...state,
        reFresh: !reFresh,
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
        listUser: action.payload?.data,
      };
    }
    case userAction.GET_LISTUSER_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case userAction.UPDATE_USER: {
      const { listUser } = state;
      let newListUser = listUser.filter((user) => {
        return user._id !== action.payload._id;
      });
      newListUser.push(action.payload);
      return {
        ...state,
        loading: false,
        error: true,
        listUser: [...newListUser],
      };
    }
    case userAction.ADD_USER: {
      const { listUser } = state;
      return {
        ...state,
        loading: false,
        error: true,
        listUser: [...listUser, action.payload?.data],
      };
    }
    case userAction.DELETE_USER: {
      const { listUser } = state;
      const userIndex = listUser.indexOf(action.payload);
      if (userIndex > -1) {
        listUser = listUser.splice(userIndex, 1);
      }
      return {
        ...state,
        loading: false,
        error: true,
        listUser: [...listUser],
      };
    }

    default:
      return state;
  }
};

export default userReducer;
