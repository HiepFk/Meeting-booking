import { eventAction } from "../utils/actions";

const eventReducer = (state, action) => {
  switch (action.type) {
    case eventAction.GET_EVENT_BEGIN: {
      return {
        ...state,
        loading: true,
        error: false,
        event: null,
      };
    }
    case eventAction.GET_EVENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        event: action.payload,
      };
    }
    case eventAction.GET_EVENT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case eventAction.GET_LISTEVENT_BEGIN: {
      return {
        ...state,
        loading: true,
        error: false,
        listEvent: [],
      };
    }
    case eventAction.GET_EVENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        listEvent: action.payload,
      };
    }
    case eventAction.GET_LISTEVENT_ERROR: {
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

export default eventReducer;
