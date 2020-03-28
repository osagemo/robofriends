import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from "./constants.js";

import configureStore from "redux-mock-store";
import fetchMock from "fetch-mock";
import thunkMiddleware from "redux-thunk";
import * as actions from "./actions";
const mockStore = configureStore([thunkMiddleware]);

describe("setSearchField", () => {
  it("returns an action containing the text", () => {
    expect(actions.setSearchField("hej")).toEqual({
      type: CHANGE_SEARCH_FIELD,
      payload: "hej"
    });
  });
});

describe("fetchRobots", () => {
  it("requesting the user api", () => {
    const user = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    };
    fetchMock.mock("https://jsonplaceholder.typicode.com/users", {
      body: user,
      headers: { "content-type": "application/json" }
    });
    const expectedActions = [
      { type: REQUEST_ROBOTS_PENDING },
      { type: REQUEST_ROBOTS_SUCCESS, payload: user }
    ];
    const store = mockStore();
    return store.dispatch(actions.fetchRobots()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("caches error from api", () => {
    fetchMock.restore();
    fetchMock.mock("https://jsonplaceholder.typicode.com/users", 500);
    const store = mockStore();

    return store.dispatch(actions.fetchRobots()).then(() => {
      expect(store.getActions()[0]).toEqual({ type: REQUEST_ROBOTS_PENDING });
      expect(store.getActions()[1].payload).toBeInstanceOf(Error);
      expect(store.getActions()[1].type).toEqual(REQUEST_ROBOTS_FAILED);
    });
  });
});
