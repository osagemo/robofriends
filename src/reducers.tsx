import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from "./constants";

import { SearchFieldState, RobotsState, RoboActionTypes } from "./types";

const initialStateSearch: SearchFieldState = {
  searchField: ""
};

const initialStateRobots: RobotsState = {
  isPending: false,
  robots: [],
  error: ""
};

export const searchRobots = (
  state = initialStateSearch,
  action: RoboActionTypes
): SearchFieldState => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export const requestRobots = (
  state = initialStateRobots,
  action: RoboActionTypes
): RobotsState => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {
        robots: action.payload,
        isPending: false
      });
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false
      });
    default:
      return state;
  }
};
