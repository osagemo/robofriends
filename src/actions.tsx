import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from "./constants";

import { RoboActionTypes } from "./types";
import { Action } from "redux";

import { ThunkAction } from "redux-thunk";
import { RootState } from "./store";

// robots: Array<IRobot>;
// searchField: string

export const setSearchField = (text: string): RoboActionTypes => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const thunkFetchRobots = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async dispatch => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
  } catch (error) {
    return dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error });
  }
};
