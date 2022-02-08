<<<<<<< HEAD
import "./App.css";

function App() {
  return <div className="App"></div>;
=======
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
>>>>>>> c8a51e8 (Consumed the form templates)
}

export default App;
