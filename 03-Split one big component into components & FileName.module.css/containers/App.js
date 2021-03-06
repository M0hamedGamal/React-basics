/* 
npm i react-scripts@3.4.1  Or Higher --> Allow us to use css files in separate instead using css into JS files [Hint: Change file mame.css to mame.module.css] Check link: https://create-react-app.dev/docs/adding-a-css-modules-stylesheet.
npm i --save styled-components --> Add css Styles into components an efficient way.
npm i --save radium            --> Radium lib allow us to use selectors & media queries.
 */
import React, { Component } from "react";
import classes from "./App.module.css";
// import Styled from "styled-components";
import Persons from "../components/Persons/Persons";
import Coockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "G", name: "Gemy" },
      { id: "B", name: "Badr" },
      { id: "A", name: "Ali" },
    ],
    showForms: false,
  };

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

  render() {
    let personForm = null;

    // If showForms true, appear forms. Check it from toggleForms method.
    if (this.state.showForms) {
      personForm = (
        <Persons
          persons={this.state.persons}
          changed={this.personInputHandler}
          delete={this.deletePersonForm}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Coockpit
          toggle={this.toggleForms}
          show={this.state.showForms}
          lenPersonForms={this.state.persons.length}
        />
        {personForm}
      </div>
    );
  }
}

export default App;
