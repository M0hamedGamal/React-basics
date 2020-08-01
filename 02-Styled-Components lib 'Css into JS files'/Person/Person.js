import React from "react";
import Styled from "styled-components";

const StyledDiv = Styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  "@media (min-width: 500px)": {
    width: "auto",
`;

const person = (props) => {
  return (
    <StyledDiv>
      <input
        type="text"
        onChange={props.userInputType}
        value={props.username}
      />
      <p onClick={props.click}>Username: {props.username}</p>
    </StyledDiv>
  );
};

export default person;
