// ---------------------------- //
//   Set if user is signed in   //
// ---------------------------- //
// NOTE: this will connect with a secured route in our server.

const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return !state;
    default:
      return state;
  }
};

export default loggedReducer;
