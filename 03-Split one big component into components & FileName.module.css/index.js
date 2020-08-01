import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App"; // Change path of App from containers folder
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
