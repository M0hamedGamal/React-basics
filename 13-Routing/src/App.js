/* 
npm i --save react-router react-router-dom  --> Create Routing between pages of project.
npm i --save react-scroll                   --> Scroll to Content.
npm i axios --save                          --> Ajax package API to work with server [Check axios-order.js file].


 */
import React, { Component } from "react";

// BrowserRouter Wrapper Object of all components of the app to add Router feature to them.
import { BrowserRouter } from "react-router-dom";

import Blog from "./containers/Blog/Blog";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
