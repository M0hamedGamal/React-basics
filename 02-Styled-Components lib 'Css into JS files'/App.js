/* 
npm i react-scripts@3.4.1      --> Allow us to use css files in separate instead using css into JS files Check link: https://create-react-app.dev/docs/adding-a-css-modules-stylesheet.
npm i --save styled-components --> Add css Styles into components an efficient way ...  AMAZING :O.
npm i --save radium            --> Radium lib allow us to use selectors & media queries.
 */
import React, { Component } from "react";
import "./App.css";
import Styled from "styled-components";

import Person from "./Person/Person";

// Style for H1.
let StyledH1 = Styled.h1`
font-family: cursive;
color: ${(props) => (props.ln >= 2 ? "red" : "rgb(172, 47, 255)")};
`;

// Style for button.
let StyledBtn = Styled.button`
   color: white;
   background: ${(props) => (props.alt ? "red" : "green")};
   font: inherit;
   border: 1px solid blue;
   border-radius: 3px;
   padding: 8px;
   cursor: pointer;
   &:hover {
     background: ${(props) => (props.alt ? "salmon" : "lightgreen")};`;

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
  deleteUserForm = (event, index) => {
    const persons = [...this.state.persons];

    persons.splice(index, 1);

    this.setState({
      persons: persons,
    });
  };

  render() {
    let classesH1 = [];
    let formPerson = null;

    // If showForms true, appear forms. Check it from toggleForms method.
    if (this.state.showForms) {
      formPerson = this.state.persons.map((p, index) => {
        return (
          <div key={p.id}>
            <Person
              userInputType={(event) => this.personInputHandler(event, index)}
              username={p.name}
              click={(event) => this.deleteUserForm(event, index)}
            />
          </div>
        );
      });
    }
    return (
      <div className="App">
        <StyledH1 ln={this.state.persons.length}>
          Click on name to remove forms & Check me!
        </StyledH1>
        <StyledBtn alt={this.state.showForms} onClick={this.toggleForms}>
          Toggle Person
        </StyledBtn>
        <br />
        <br />
        {formPerson}
      </div>
    );
  }
}

export default App;
