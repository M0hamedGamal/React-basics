import React from "react";
import classes from "./Coockpit.module.css";

const coockpit = (props) => {
  let btnClasses = "";
  let H1Classes = "";

  if (props.show) {
    btnClasses = classes.Red;

    if (props.lenPersonForms < 2) {
      H1Classes = classes.red;
    }
  }

  return (
    <div className={classes.Cockpit}>
      <h1 className={H1Classes}>Click on name to remove forms & Check me!</h1>
      <button className={btnClasses} onClick={props.toggle}>
        Toggle Person
      </button>
    </div>
  );
};

export default coockpit;
