import React, { Component } from "react";

export default class Calculator extends Component {
  render() {
    return (
      <div>
        <section>
          {/* <h2>Some Heading</h2> */}
          <h3 id="display">Display</h3>
          <div id="container">
            <button id="clear">AC</button>
            <button className="operator" id="divide">
              /
            </button>
            <button className="operator" id="multiply">
              x
            </button>
            <button className="num">7</button>
            <button className="num">8</button>
            <button className="num">9</button>
            <button className="operator" id="subtract">
              -
            </button>
            <button className="num">4</button>
            <button className="num">5</button>
            <button className="num">6</button>
            <button className="operator" id="add">
              +
            </button>
            <button className="num">1</button>
            <button className="num">2</button>
            <button className="num">3</button>
            <button className="operator" id="equals">
              =
            </button>
            <button className="num" id="wide-zero">
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
