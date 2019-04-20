import React, { Component } from "react";

export default class Calculator extends Component {
  state = {
    displayScreen: 0
  };

  clearFunction = () => {
    this.setState({
      displayScreen: 0
    });
  };

  render() {
    return (
      <div>
        <section>
          {/* <h2>Some Heading</h2> */}
          <div id="container">
            <span id="display">{this.state.displayScreen}</span>
            <button id="clear" onClick={this.clearFunction}>
              AC
            </button>
            <button className="operator" id="divide">
              /
            </button>
            <button className="operator" id="multiply">
              x
            </button>
            <button className="num" id="seven">
              7
            </button>
            <button className="num" id="eight">
              8
            </button>
            <button className="num" id="nine">
              9
            </button>
            <button className="operator" id="subtract">
              -
            </button>
            <button className="num" id="four">
              4
            </button>
            <button className="num" id="five">
              5
            </button>
            <button className="num" id="six">
              6
            </button>
            <button className="operator" id="add">
              +
            </button>
            <button className="num" id="one">
              1
            </button>
            <button className="num" id="two">
              2
            </button>
            <button className="num" id="three">
              3
            </button>
            <button className="operator" id="equals">
              =
            </button>
            <button className="num" id="zero">
              0
            </button>
            <button className="operator" id="decimal">
              .
            </button>
          </div>
        </section>
      </div>
    );
  }
}
