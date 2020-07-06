import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

// ----------------- //
//   DEFAULT PROPS   //
// ----------------- //
// NOTE: to reduce errors try and use default props. This way if a prop is not passed then it will not crash the app.
Home.defaultProps = {
  title: "Home",
};

// ------------- //
//   COMPONENT   //
// ------------- //
export default function Home(props) {
  // ------------------- //
  //   HOOK INTO STATE   //
  // ------------------- //
  const [loggedIn, setLoggedIn] = useState(
    useSelector((state) => state.isLoggedIn)
  ); //Assign State from Redux to a Hook

  // --------------------- //
  //   ON-LOAD / REMOUNT   //
  // --------------------- //
  useEffect(() => {
    console.log("Home Page mounted.");
    loggedIn
      ? console.log("User is logged in.")
      : console.log("User is not logged in.");
  });

  // ---------- //
  //   RETURN   //
  // ---------- //
  return (
    <StyledRoot>
      <h1>{props.title}</h1>
    </StyledRoot>
  );
}

// ---------- //
//   STYLES   //
// ---------- //
const StyledRoot = styled.main`
  h1: {
    font-size: 3em;
  }
`;
