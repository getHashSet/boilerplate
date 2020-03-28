//////////////////////////////////////
// This gets injected into index.html
//////////////////////////////////////

import React, { Component } from 'react'; // To use components from React library.
import { Route, Switch, Redirect } from 'react-router-dom'; // To use react friendly navigation.
import Home from './pages/Home'; // stage home page.
import Error from './pages/Error'; // stage 404 page.


export default class App extends Component {
  constructor(props) {
    super(props)
    //////////////////////////////
    // state exclusive to App.jsx
    //////////////////////////////
    this.state = {
      nonStoreState: true
    };
    /////////
    // bind
    /////////
    // example this._functionName = this._functionName.bind(this);
    ////////////////////////////////////////////////////////////////
  };

  componentDidMount() {
    console.log('by Matthew Carpenter')
  };

  render() {

    ////////////////////////////////////////////
    // return a single element <div> is default
    ////////////////////////////////////////////
    return (
      <div className="app_root">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home />}
          />

          {/* DO NOT ADD CODE BELOW THIS LINE */}
          <Route
						render={() =>
							<Error user={this.state.user} />} />
        </Switch>
      </div>
    )
  };
};
