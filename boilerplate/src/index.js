import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import allReducers from './reducers'; // this will import all reduceres that are imported into the index.js file in the reducers folder
import { Provider } from 'react-redux'; // this will grant access to anything within the <Provider></Provider> Elements. Place around <App /> Component to grant access to your whole app.

// create store and add chrome extension tools for debuging via chrome. source: https://github.com/zalmoxisus/redux-devtools-extension
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// This will render <App /> from ./App.js;
ReactDOM.render( 
  <Provider store={store}> {/* This takes one attribute. store={theNameOfYourStore} */}
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
