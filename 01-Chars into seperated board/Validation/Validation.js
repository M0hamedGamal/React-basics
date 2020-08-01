import React from "react";

const validation = (props) => {
  let validationLength = "Too Long!";

  if (props.length <= 5) {
    validationLength = "Too Short!";
  }

  return (
    <div>
      <p>{validationLength}</p>
    </div>
  );
};

export default validation;
