import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cards from "./Components/Cards";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <div className="App">
          <Cards />
        </div>
        ;
      </React.Fragment>
    );
  }
}

export default App;
