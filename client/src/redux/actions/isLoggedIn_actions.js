// ---------------------- //
//   isLoggedIn Actions   //
// ---------------------- //

// ----------- //
//   SIGN IN   //
// ----------- //
export const changeLogin = (bool) => {
  return {
    type: "SIGN_IN",
    payload: bool,
  };
};
