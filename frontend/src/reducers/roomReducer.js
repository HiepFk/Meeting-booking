import { roomAction } from "../utils/actions";

const roomReducer = (state, action) => {
  switch (action.type) {
    case roomAction.GET_ROOM_BEGIN: {
      return {
        ...state,
        loading: true,
        error: false,
        room: null,
      };
    }
    case roomAction.GET_ROOM_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        room: action.payload,
      };
    }
    case roomAction.GET_ROOM_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case roomAction.GET_LISTROOM_BEGIN: {
      return {
        ...state,
        loading: true,
        error: false,
        listRoom: [],
      };
    }
    case roomAction.GET_LISTROOM_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        listRoom: action.payload,
      };
    }
    case roomAction.GET_LISTROOM_ERROR: {
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

export default roomReducer;
