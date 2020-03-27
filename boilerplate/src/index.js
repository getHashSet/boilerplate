import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import allReducers from './reducers'; // this will import all reduceres that are imported into the index.js file in the reducers folder

// create store and add chrome extension tools for debuging via chrome. source: https://github.com/zalmoxisus/redux-devtools-extension
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


////////////////////////////////////////////////////////////////////////////
// example without breaking up components
////////////////////////////////////////////////////////////////////////////
// // STORE -> GLOBALIZED STATE
//
// // ACTION -> A function that returns an object.
//
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   };
// };
//
// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   };
// };
//
// // REDUCER -> CHECKS TO UPDATE STORE
// const counter = (state = 0, action) => {
//   switch(action.type){
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//   };
// };
//
// let store = createStore(counter);
//
// // Display it in the console.
// store.subscribe(() => console.log(store.getState()));
//
// // DISPATCH -> SENDS ACTIONS TO THE REDUCER
// store.dispatch(increment());
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// This will render <App /> from ./App.js;
ReactDOM.render( <App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
