import { createContext, useMemo, useReducer } from "react";
import eventReducer from "../reducers/eventReducer";
import { eventAction } from "../utils/actions";

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

  const getEvent = async (axios, id) => {
    dispatch({ type: eventAction.GET_EVENT_BEGIN });
    try {
      const res = await axios.get(`event/${id}`);
      dispatch({ type: eventAction.GET_EVENT_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: eventAction.GET_EVENT_ERROR });
    }
  };
  const getListEvent = async (axios) => {
    dispatch({ type: eventAction.GET_LISTEVENT_BEGIN });
    try {
      const res = await axios.get(`event`);
      dispatch({ type: eventAction.GET_LISTEVENT_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: eventAction.GET_LISTEVENT_ERROR });
    }
  };
  const updateEvent = async (axios, data) => {
    try {
      const res = await axios.patch(`event/${data._id}`, data);
      dispatch({
        type: eventAction.REFRESH,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteEvent = async (axios, item) => {
    try {
      const res = await axios.delete(`event/${item?._id}`);
      dispatch({
        type: eventAction.REFRESH,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const addEvent = async (axios, data) => {
    dispatch({ type: eventAction.GET_LISTEVENT_BEGIN });
    try {
      const res = await axios.post(`event`, data);

      dispatch({
        type: eventAction.REFRESH,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const globalContextValue = useMemo(
    () => ({
      dispatch,
      ...state,
      getEvent,
      getListEvent,
      updateEvent,
      deleteEvent,
      addEvent,
      handeChangeReFresh,
    }),
    [dispatch, state]
  );

  return (
    <EventContext.Provider
      // value={{
      //   ...state,
      //   getEvent,
      //   getListEvent,
      //   updateEvent,
      //   deleteEvent,
      //   addEvent,
      //   handeChangeReFresh,
      // }}
      value={globalContextValue}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
