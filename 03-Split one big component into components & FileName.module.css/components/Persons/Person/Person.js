import React from "react";
import classes from "./Person.module.css";

const person = (props) => {
  return (
    <div className={classes.Div}>
      <input
        type="text"
        onChange={props.userInputType}
        value={props.username}
      />
      <p onClick={props.click}>Username: {props.username}</p>
    </div>
  );
};

export default person;
