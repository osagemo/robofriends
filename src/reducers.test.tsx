import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from "./constants";

import * as reducers from "./reducers";

describe("searchRobots", () => {
  const initialStateSearch = {
    searchField: ""
  };
  it("should return the initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
  });

  it("should handle the CHANGE_SEARCH_FIELD action", () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: "hej"
      })
    ).toEqual({ searchField: "hej" });
  });
});

describe("requestRobots", () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ""
  };

  it("should return the initialState", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it("should handle the REQUEST_ROBOTS_PENDING action", () => {
    expect(
      reducers.requestRobots(undefined, { type: REQUEST_ROBOTS_PENDING })
        .isPending
    ).toEqual(true);
  });

  it("should handle the REQUEST_ROBOTS_SUCCESS action", () => {
    const robots = [1, 2, 3];
    expect(
      reducers.requestRobots(undefined, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: robots
      }).robots
    ).toEqual(robots);
  });

  it("should handle the REQUEST_ROBOTS_FAILED action", () => {
    const error = new Error("Error while testing");
    expect(
      reducers.requestRobots(undefined, {
        type: REQUEST_ROBOTS_FAILED,
        payload: error
      }).error
    ).toEqual(error);
  });
});
