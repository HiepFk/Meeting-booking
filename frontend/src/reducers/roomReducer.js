import { roomAction } from "../utils/actions";

const roomReducer = (state, action) => {
  switch (action.type) {
    case roomAction.REFRESH: {
      const { reFresh } = state;
      return {
        ...state,
        reFresh: !reFresh,
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
        listRoom: action.payload?.data,
      };
    }
    case roomAction.GET_LISTROOM_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case roomAction.UPDATE_ROOM: {
      const { listRoom } = state;
      let newListRoom = listRoom.filter((room) => {
        return room._id !== action.payload._id;
      });
      newListRoom.push(action.payload);
      return {
        ...state,
        loading: false,
        error: true,
        listRoom: [...newListRoom],
      };
    }
    case roomAction.ADD_ROOM: {
      const { listRoom } = state;
      return {
        ...state,
        loading: false,
        error: true,
        listRoom: [...listRoom, action.payload?.data],
      };
    }
    case roomAction.DELETE_ROOM: {
      const { listRoom } = state;
      const roomIndex = listRoom.indexOf(action.payload);
      if (roomIndex > -1) {
        listRoom = listRoom.splice(roomIndex, 1);
      }
      return {
        ...state,
        loading: false,
        error: true,
        listRoom: [...listRoom],
      };
    }

    default:
      return state;
  }
};

export default roomReducer;
