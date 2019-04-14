import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

// Not needed, history.js specifies the use of Hash.
import { HashRouter as Router } from "react-router-dom";
// Redux imports
import store from "./store";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// Styles
import "./index.css";

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
