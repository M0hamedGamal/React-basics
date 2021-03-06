/* 
npm i --save redux --> install redux lib.
npm i --save react-redux --> connect redux to react.
npm i --save redux-thunk --> add middleware between action & reducer to redux.


*/
import React, { Component } from "react";

import Counter from "./containers/Counter/Counter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
