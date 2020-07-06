import React, { useEffect } from "react";
import styled from "styled-components";

// ----------------- //
//   DEFAULT PROPS   //
// ----------------- //
// NOTE: to reduce errors try and use default props. This way if a prop is not passed then it will not crash the app.
Error.defaultProps = {
  title: "404 Error",
};

// ------------- //
//   COMPONENT   //
// ------------- //
export default function Error(props) {
  // --------------------- //
  //   ON-LOAD / REMOUNT   //
  // --------------------- //
  useEffect(() => {
    console.log("Error Page mounted.");
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
