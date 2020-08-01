import React, { Component, Fragment } from "react";
// npm i --save prop-types in terminal
import PropTypes from "prop-types";

import classes from "./Person.module.css";
import Auxiliary from "../../../hoc/Auxiliary";
import WithClass from "../../../hoc/WithClass";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  // contextType --> reserved variable to create context to own Component.
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js]  rendering...");
    return (
      // Fragment --> <Fragment></Fragment>  Built-in Wrapper Component.
      // Auxiliary --> Own Wrapper Component or Higher Order Component [HOC] Without Css style.
      // Auxiliary allow us to wrap an adjacent elements without adding more wrapper tags like div.
      // WithClass --> Own Wrapper Component or Higher Order Component [HOC] With Css style.
      // WithClass allow us to wrap an adjacent elements without adding more wrapper tags like div.
      <WithClass classes={classes.Div}>
        {this.context.isAuth ? <p>Authenticated</p> : <p>Please Log in!</p>}
        {console.log("isAuth: ", this.props.isAuth)}
        <input
          type="text"
          onChange={this.props.userInputType}
          ref={this.inputElementRef} // Ref of input element
          value={this.props.username}
        />
        <p onClick={this.props.click}>Username: {this.props.username}</p>
      </WithClass>
    );
  }
}

// PropTypes takes object of prop's name: value of what is expected to be.
Person.propTypes = {
  userInputType: PropTypes.func,
  username: PropTypes.string,
  click: PropTypes.func,
};

export default Person;
