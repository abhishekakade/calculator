import React, { Component } from "react";
import "./App.css";
import Calculator from "./Calculator";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
      output: 0
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Calculator</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
