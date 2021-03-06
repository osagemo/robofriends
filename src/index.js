import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "tachyons";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
if (process.env.NODE_ENV === "development") {
  // Special import because using ES6 Classes
  const whyDidYouRender = require("@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js");
  whyDidYouRender(React, {
    trackAllPureComponents: true
  });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
