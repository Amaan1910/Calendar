import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import Calendar from "./Calendar";
import store from "./store";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Calendar />
  </Provider>
);
