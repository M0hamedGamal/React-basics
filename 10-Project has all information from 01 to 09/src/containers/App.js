/* 
npm i react-scripts@3.4.1  Or Higher --> Allow us to use css files in separate instead using css into JS files [Hint: Change file mame.css to mame.module.css] Check link: https://create-react-app.dev/docs/adding-a-css-modules-stylesheet.
npm i --save styled-components --> Add css Styles into components an efficient way.
npm i --save radium            --> Radium lib allow us to use selectors & media queries.
npm i --save prop-types        --> Type of props.

 */
import React, { Component } from "react";
import classes from "./App.module.css";
// import Styled from "styled-components";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import AuthContext from "../context/auth-context";

class App extends Component {
  // Life cycle Hook Method.
  constructor(props) {
    super(props);
    console.log("[App.js] constructor work before every thing");
  }

  state = {
    persons: [
      { id: "G", name: "Gemy" },
      { id: "B", name: "Badr" },
      { id: "A", name: "Ali" },
    ],
    showForms: false,
    showCockpit: true,
    authenticated: false,
  };

  // Life cycle Hook Method.
  static getDerivedStateFromProps(props, state) {
    console.log(
      "[App.js] getDerivedStateFromProps work before rendering of any component"
    );

    return state;
  }

  // Life cycle Hook Method.
  componentDidMount() {
    console.log(
      "[App.js] componentDidMount work after rendering of Own component for first time only"
    );
  }

  // Appear & Disappear forms.
  toggleForms = () => {
    this.setState({
      showForms: !this.state.showForms,
    });
  };

  // Change Username from input.
  personInputHandler = (event, index) => {
    const persons = [...this.state.persons];

    persons[index].name = event.target.value;

    this.setState({
      persons: persons,
    });
  };

  // Delete form when click on username Text.
  deletePersonForm = (event, index) => {
    const persons = [...this.state.persons];

    persons.splice(index, 1);

    this.setState({
      persons: persons,
    });
  };

  loginHandler = () => {
    this.setState({
      authenticated: true,
    });
  };

  render() {
    console.log("[App.js]  render");
    let persons = null;

    // If showForms true, appear forms. Check it from toggleForms method.
    if (this.state.showForms) {
      persons = (
        <Persons
          persons={this.state.persons}
          changed={this.personInputHandler}
          delete={this.deletePersonForm}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <div className={classes.App}>
        <button
          onClick={() =>
            this.setState({
              showCockpit: false,
            })
          }
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            isAuth: this.state.authenticated,
            login: this.loginHandler,
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              toggle={this.toggleForms}
              show={this.state.showForms}
              lenPersonForms={this.state.persons.length}
            />
          ) : null}

          {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
