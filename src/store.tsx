import { searchRobots, requestRobots } from "./reducers";
import { createStore, applyMiddleware, combineReducers } from "redux";
// import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

// const logger = createLogger();
const rootReducer = combineReducers({
  searchRobots: searchRobots,
  requestRobots: requestRobots
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware) //, logger)
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
