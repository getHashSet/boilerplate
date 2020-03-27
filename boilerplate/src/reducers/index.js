import counterReducer from './counter';
import loggedReducer from './isLoggedIn';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLoggedIn: loggedReducer
});

export default allReducers;