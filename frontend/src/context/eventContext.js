import { createContext, useReducer } from "react";
import eventReducer from "../reducers/eventReducer";
import { eventAction } from "../utils/actions";
import { axiosToken, axiosNormal } from "../apis/createInstance";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const initialState = {
    event: null,
    listEvent: [],
    loading: false,
    error: false,
    reFresh: false,
  };

  const [state, dispatch] = useReducer(eventReducer, initialState);

  const handeChangeReFresh = () => {
    dispatch({
      type: eventAction.REFRESH,
    });
  };

  const getEvent = async (id) => {
    dispatch({ type: eventAction.GET_EVENT_BEGIN });
    try {
      const res = await axiosNormal.get(`event/${id}`);
      dispatch({ type: eventAction.GET_EVENT_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: eventAction.GET_EVENT_ERROR });
    }
  };
  const getListEvent = async () => {
    dispatch({ type: eventAction.GET_LISTEVENT_BEGIN });
    try {
      const res = await axiosNormal.get(`event`);
      dispatch({ type: eventAction.GET_LISTEVENT_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: eventAction.GET_LISTEVENT_ERROR });
    }
  };
  const updateEvent = async (data) => {
    // dispatch({ type: eventAction.GET_EVENT_BEGIN });
    try {
      const res = await axiosNormal.patch(`event/${data._id}`, data);
      // dispatch({ type: eventAction.GET_EVENT_SUCCESS, payload: res.data });
      dispatch({
        type: eventAction.REFRESH,
      });
    } catch (error) {
      console.log(error);
      // dispatch({ type: eventAction.GET_EVENT_ERROR });
    }
  };
  const deleteEvent = async (item) => {
    // dispatch({ type: eventAction.GET_LISTEVENT_BEGIN });
    try {
      const res = await axiosNormal.delete(`event/${item?._id}`);
      // dispatch({ type: eventAction.GET_LISTEVENT_SUCCESS, payload: res.data });
      // dispatch({ type: eventAction.DELETE_EVENT, payload: item });
      dispatch({
        type: eventAction.REFRESH,
      });
    } catch (error) {
      console.log(error);
      // dispatch({ type: eventAction.GET_LISTEVENT_ERROR });
    }
  };
  const addEvent = async (data) => {
    dispatch({ type: eventAction.GET_LISTEVENT_BEGIN });
    try {
      const res = await axiosNormal.post(`event`, data);
      // dispatch({ type: eventAction.GET_LISTEVENT_SUCCESS, payload: res.data });
      // dispatch({ type: eventAction.ADD_EVENT, payload: res.data });
      dispatch({
        type: eventAction.REFRESH,
      });
    } catch (error) {
      console.log(error);
      // dispatch({ type: eventAction.GET_LISTEVENT_ERROR });
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
        handeChangeReFresh,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
