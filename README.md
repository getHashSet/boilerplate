# boilerplate
*by Matthew Carpenter*

## About
Custom React Boilerplate.
* MERN
    * MongoDB (no SQL database)
    * Express
    * React.js
    * Node.js
* Redux
* TypeScript
* AWS (Amazon Web Services)

---

## Index

---

## dependencies 

* express
* axios
* redux
* react-redux
* aws-sdknpm
* Google Chrome extension Redux DevTools *https://github.com/zalmoxisus/redux-devtools-extension*

## Get Started

```
npx create-react-app
npm init -y
npm install redux react-redux
npm install react-router-dom
npm install aws-sdk
npm install axios
```

## .gitignore & .env

Be sure to use the .env file in the root directory.

## Setup a new item in the store

store is set up in the index.js file within boilerplate>src>index.js

Step 1: Go to reducers folder and create a new reducer folder and index file. `boilerplate>src>reducers>`;

Step 2: `create new folder` `add index.js to that folder` *(example: isLoggedIn.js)*

Step 3: Using the following code as a template you must set the default state of the new object.

```javascript
const loggedReducer = (state = false, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return !state;
        default:
            return state;
    };
};

export default loggedReducer;
```

Be sure to add a default value.

Step 4: Navigate to the reducers index file. `boilerplate>src>reducers>index.js`

Step 5: import your new state file.
```javascript
// this file can have any name you would like. I have chosen loggedReducer as an example.
import loggedReducer from './isLoggedIn';
```

Step 6: Add this variable to the default store object.
```javascript
// option 1
// the value within the state is now 'counter: 0, isLoggedIn: false'
const allReducers = combineReducers({
    counter: counterReducer,
    isLoggedIn: loggedReducer
});
```

```javascript
// option 2 
// using ES6 you can create a default value within the combineReducers function.
// the value within the state is now 'counterReducer: 0, loggedReducer: false'
const allReducers = combineReducers({
    counterReducer,
    loggedReducer
});
```

Step 7: Verify default state in Google Chrome.