import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Axios from "axios";

// Base url for all other components.
Axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

// Global request handler.
Axios.interceptors.request.use(
  (request) => {
    console.log("Request: ", request);

    // Edit/Config  Request before use it into components.
    return request;
  },
  (error) => {
    console.log("Request Error: ", error);
    Promise.reject(error);
  }
);

// Global response handler.
Axios.interceptors.response.use(
  (response) => {
    console.log("Response: ", response);

    // Edit/Config Response before use it into components.
    return response;
  },
  (error) => {
    console.log("Response Error: ", error);
    Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
