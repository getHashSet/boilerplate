import counterReducer from './counter';
import loggedReducer from './isLoggedIn';
import headerReducer from './header';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLoggedIn: loggedReducer,
    h1Tag: headerReducer
});

export default allReducers;