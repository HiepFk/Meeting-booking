import { createContext, useReducer } from "react";
import eventReducer from "../reducers/eventReducer";
import { eventAction } from "../utils/actions";
import { axiosToken } from "../apis/createInstance";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const initialState = {
    event: null,
    listEvent: [],
    loading: false,
    error: false,
  };

  const [state, dispatch] = useReducer(eventReducer, initialState);

  const getEvent = async (id) => {
    dispatch({ type: eventAction.GET_EVENT_BEGIN });
    try {
      await axiosToken.get(`event/${id}`);
      dispatch({ type: eventAction.GET_EVENT_SUCCESS });
    } catch (error) {
      dispatch({ type: eventAction.GET_EVENT_ERROR });
    }
  };
  const getListEvent = async () => {
    dispatch({ type: eventAction.GET_LISTEVENT_BEGIN });
    try {
      await axiosToken.get(`event`);
      dispatch({ type: eventAction.GET_LISTEVENT_SUCCESS });
    } catch (error) {
      dispatch({ type: eventAction.GET_LISTEVENT_ERROR });
    }
  };
  const updateEvent = async (id, data) => {
    dispatch({ type: eventAction.GET_EVENT_BEGIN });
    try {
      await axiosToken.patch(`event/${id}`, data);
      dispatch({ type: eventAction.GET_EVENT_SUCCESS });
    } catch (error) {
      dispatch({ type: eventAction.GET_EVENT_ERROR });
    }
  };
  const deleteEvent = async (id) => {
    dispatch({ type: eventAction.GET_LISTEVENT_BEGIN });
    try {
      await axiosToken.delete(`event/${id}`);
      dispatch({ type: eventAction.GET_LISTEVENT_SUCCESS });
    } catch (error) {
      dispatch({ type: eventAction.GET_LISTEVENT_ERROR });
    }
  };
  const addEvent = async (data) => {
    dispatch({ type: eventAction.GET_LISTEVENT_BEGIN });
    try {
      await axiosToken.post(`event`, data);
      dispatch({ type: eventAction.GET_LISTEVENT_SUCCESS });
    } catch (error) {
      dispatch({ type: eventAction.GET_LISTEVENT_ERROR });
    }
  };

  return (
    <EventContext.Provider
      value={{
        ...state,
        getEvent,
        getListEvent,
        updateEvent,
        deleteEvent,
        addEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
