import React, { useState, useEffect } from "react";
import styled from "styled-components";

// ----------------- //
//   DEFAULT PROPS   //
// ----------------- //
// NOTE: to reduce errors try and use default props. This way if a prop is not passed then it will not crash the app.
Home.defaultProps = {
  title: "Our Story",
};

// ------------- //
//   COMPONENT   //
// ------------- //
export default function Home(props) {
  // --------------------- //
  //   ON-LOAD / REMOUNT   //
  // --------------------- //
  useEffect(() => {
    console.log("Home Page mounted.");
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
