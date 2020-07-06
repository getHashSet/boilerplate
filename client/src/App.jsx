import React from "react";
import { Route, Switch } from "react-router-dom";

// --------- //
//   PAGES   //
// --------- //
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";

// ----------- //
//   <App />   //
// ----------- //
export default function App() {
  return (
    <React.Fragment>
      <Switch>
        {/* ============= */}
        {/*   Home Page   */}
        {/* ============= */}
        <Route exact path="/" render={() => <Home />} />

        {/* ============= */}
        {/*   News Page   */}
        {/* ============= */}
        <Route exact path="/about" render={() => <About />} />

        {/* ============ */}
        {/*   404 Page   */}
        {/* ============ */}
        <Route render={() => <Error />} />
      </Switch>
    </React.Fragment>
  );
}
