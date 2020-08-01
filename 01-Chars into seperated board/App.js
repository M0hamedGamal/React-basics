import React, { Component } from "react";
import "./App.css";

import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    userInput: "",
  };

  inputChangedHandler = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  deleteChar = (index) => {
    const splitedChar = this.state.userInput.split("");
    splitedChar.splice(index, 1);
    const joinedChar = splitedChar.join("");
    this.setState({
      userInput: joinedChar,
    });
  };

  render() {
    const charList = this.state.userInput.split("").map((char, index) => {
      return (
        <Char
          character={char}
          click={() => this.deleteChar(index)}
          key={index}
        />
      );
    });
    return (
      <div className="App">
        <label>Password: </label>
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation length={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
