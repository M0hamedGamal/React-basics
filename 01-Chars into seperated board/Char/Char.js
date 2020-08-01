import React from "react";

import "./Char.css";

const char = (props) => {
  return (
    <div className="charStyle" onClick={props.click}>
      <p>{props.character}</p>
    </div>
  );
};

export default char;
