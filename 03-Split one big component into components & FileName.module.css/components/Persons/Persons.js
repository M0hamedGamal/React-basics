import React from "react";
import Person from "../Persons/Person/Person";

const persons = (props) => {
  return props.persons.map((p, index) => {
    return (
      <Person
        key={p.id}
        username={p.name}
        userInputType={(event) => props.changed(event, index)}
        click={(event) => props.delete(event, index)}
      />
    );
  });
};

export default persons;
