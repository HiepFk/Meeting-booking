import { eventAction } from "../utils/actions";

const eventReducer = (state, action) => {
  switch (action.type) {
    case eventAction.REFRESH: {
      const { reFresh } = state;
      return {
        ...state,
        reFresh: !reFresh,
      };
    }
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
    case eventAction.GET_LISTEVENT_SUCCESS: {
      let listEvent = action.payload?.data;
      const newlistEvent = listEvent?.map((event) => {
        event.start = new Date(event?.start);
        event.end = new Date(event?.end);
        return event;
      });
      return {
        ...state,
        loading: false,
        error: false,
        listEvent: [...newlistEvent],
      };
    }
    case eventAction.GET_LISTEVENT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case eventAction.UPDATE_EVENT: {
      const { listEvent } = state;
      let newListEvent = listEvent.filter((event) => {
        return event._id !== action.payload._id;
      });
      newListEvent.push(action.payload);
      return {
        ...state,
        loading: false,
        error: true,
        listEvent: [...newListEvent],
      };
    }
    case eventAction.ADD_EVENT: {
      const { listEvent } = state;
      return {
        ...state,
        loading: false,
        error: true,
        listEvent: [...listEvent, action.payload?.data],
      };
    }
    case eventAction.DELETE_EVENT: {
      const { listEvent } = state;
      const eventIndex = listEvent.indexOf(action.payload);
      if (eventIndex > -1) {
        listEvent = listEvent.splice(eventIndex, 1);
      }
      return {
        ...state,
        loading: false,
        error: true,
        listEvent: [...listEvent],
      };
    }

    default:
      return state;
  }
};

export default eventReducer;
