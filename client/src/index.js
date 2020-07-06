import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import * as theme from "./theme";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./redux/reducers";
import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";

// --------- //
//   STORE   //
// --------- //
// NOTE: This will let you use Chrome dev tools. Without it you cannot see the store in the browser.
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// -------- //
//   ROOT   //
// -------- //
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// ------------------ //
//   SERVICE WORKER   //
// ------------------ //
serviceWorker.unregister();
