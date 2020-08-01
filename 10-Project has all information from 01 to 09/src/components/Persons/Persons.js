import React, { Component } from "react";
import Person from "../Persons/Person/Person";

class Persons extends Component {
  // Life cycle Hook Method.
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "[Persons.js] shouldComponentUpdate work if found deffirence between 'nextProps, nextState' & 'CurrentProps, CurrentState'"
    );

    if (
      nextProps.persons !== this.props.persons ||
      nextProps.delete !== this.props.delete ||
      nextProps.changed !== this.props.changed
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Life cycle Hook Method.
  getSnapshotBeforeUpdate(pervProps, pervState) {
    console.log(
      "[Persons.js] getSnapshotBeforeUpdate take snapshot for pervProps, pervState before updating component"
    );
    return { message: "Snapshot!" };
  }

  // Life cycle Hook Method.
  componentDidUpdate(pervProps, pervState, snapshot) {
    console.log(
      "[Persons.js] componentDidUpdate work after getSnapshotBeforeUpdate by taking its return & work with it"
    );
    console.log(snapshot);
  }

  // Life cycle Hook Method.
  componentWillUnmount() {
    console.log(
      "[Persons.js] componentWillUnmount work when this is last time for work with own component [Cleanup]."
    );
  }

  render() {
    console.log("[Persons.js]  rendering...");
    return this.props.persons.map((p, index) => {
      return (
        <Person
          key={p.id}
          username={p.name}
          userInputType={(event) => this.props.changed(event, index)}
          click={(event) => this.props.delete(event, index)}
        />
      );
    });
  }
}

export default Persons;
