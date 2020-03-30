export const CHANGE_SEARCH_FIELD = "CHANGE_SEARCH_FIELD";
export const REQUEST_ROBOTS_PENDING = "REQUEST_ROBOTS_PENDING";
export const REQUEST_ROBOTS_SUCCESS = "REQUEST_ROBOTS_SUCCESS";
export const REQUEST_ROBOTS_FAILED = "REQUEST_ROBOTS_FAILED";

export interface IRobot {
  name: string;
  id: number;
  email: string;
}

export interface SearchFieldState {
  searchField: string;
}

export interface RobotsState {
  robots: Array<IRobot>;
  isPending?: boolean;
  error?: string;
}

interface SetSearchFieldAction {
  type: typeof CHANGE_SEARCH_FIELD;
  payload: string;
}

interface FetchRobotsAction {}

export type RoboActionTypes = SetSearchFieldAction;
