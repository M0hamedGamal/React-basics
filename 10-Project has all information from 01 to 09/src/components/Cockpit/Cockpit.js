import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

const Cockpit = (props) => {
  // useContext --> Create context to own functional Component.
  const authContext = useContext(AuthContext);

  console.log("authContext ", authContext);
  // Get ref of button.
  const toggleBtnRef = useRef();
  // React Hook Method.
  useEffect(() => {
    console.log(
      "[Cockpit.js] 1st useEffect work as componentDidMount method & componentDidUpdate method & work after every render of Own functional component"
    );
  });

  // React Hook Method.
  useEffect(() => {
    console.log(
      "[Cockpit.js] 2nd useEffect work When lenPersonForms is updated only [Removing form]."
    );
  }, [props.lenPersonForms]); // Second arg of useEffect works with props.lenPersonForms into array [We can have multiple args].

  // React Hook Method.
  useEffect(() => {
    console.log("[Cockpit.js] 3rd useEffect work for Once.");

    // Auto click on button when rendering component.
    toggleBtnRef.current.click();

    return () => {
      console.log(
        "[Cockpit.js] 3rd useEffect work when this is last time for work with own component [Cleanup]."
      );
    };
  }, []); // Second arg of useEffect is empty array meanning work for Once only.

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
      <button ref={toggleBtnRef} className={btnClasses} onClick={props.toggle}>
        Toggle Person
      </button>
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

// React.memo() --> Store snapshot from props & state & don't re-render when there's no changes.
// React.memo() --> work like shouldComponentUpdate method.
export default React.memo(Cockpit);
