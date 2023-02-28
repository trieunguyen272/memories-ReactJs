import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers/index.js";
import App from "./App";
import "./index.css";
const store = createStore(reducers, compose(applyMiddleware(thunk)));

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
