import React from "react";
import { render } from "react-dom";

//components
import App from "./App";
// css
import "../node_modules/bulma/css/bulma.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import { ThemeProvider } from "styled-components"
// redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// reducers
import rootReducer from "./reducers/index";


// initiate store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const theme = {
  main: "mediumseagreen",
};

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
