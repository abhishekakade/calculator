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

  handleClickOnNumbers = event => {
    event.preventDefault();
    console.log("id - ", event.target.id);
    switch (event.target.id) {
      case "one":
        console.log("one clicked!");
        return "one clicked";
      case "two":
        console.log("two clicked!");
        return "two clicked!";
      case "three":
        console.log("three clicked!");
        return "three clicked!";
      case "four":
        console.log("four clicked!");
        return "four clicked!";
      case "five":
        console.log("five clicked!");
        return "five clicked!";
      case "six":
        console.log("six clicked!");
        return "six clicked!";
      case "seven":
        console.log("seven clicked!");
        return "seven clicked!";
      case "eight":
        console.log("eight clicked!");
        return "eight clicked!";
      case "nine":
        console.log("nine clicked!");
        return "nine clicked!";
      case "zero":
        console.log("zero clicked!");
        return "zero clicked!";
      default:
        return null;
    }
  };

  render() {
    return (
      <div>
        <section>
          {/* <h2>Some Heading</h2> */}
          <div id='container'>
            <span id='display'>{this.state.displayScreen}</span>
            <button id='clear' onClick={this.clearFunction}>
              AC
            </button>
            <button
              className='operator'
              id='divide'
              onClick={this.divideFunction}
            >
              /
            </button>
            <button
              className='operator'
              id='multiply'
              onClick={this.multiplyFunction}
            >
              x
            </button>
            <button
              className='num'
              id='seven'
              onClick={this.handleClickOnNumbers}
            >
              7
            </button>
            <button
              className='num'
              id='eight'
              onClick={this.handleClickOnNumbers}
            >
              8
            </button>
            <button
              className='num'
              id='nine'
              onClick={this.handleClickOnNumbers}
            >
              9
            </button>
            <button
              className='operator'
              id='subtract'
              onClick={this.subtractFunction}
            >
              -
            </button>
            <button
              className='num'
              id='four'
              onClick={this.handleClickOnNumbers}
            >
              4
            </button>
            <button
              className='num'
              id='five'
              onClick={this.handleClickOnNumbers}
            >
              5
            </button>
            <button
              className='num'
              id='six'
              onClick={this.handleClickOnNumbers}
            >
              6
            </button>
            <button className='operator' id='add' onClick={this.addFunction}>
              +
            </button>
            <button
              className='num'
              id='one'
              onClick={this.handleClickOnNumbers}
            >
              1
            </button>
            <button
              className='num'
              id='two'
              onClick={this.handleClickOnNumbers}
            >
              2
            </button>
            <button
              className='num'
              id='three'
              onClick={this.handleClickOnNumbers}
            >
              3
            </button>
            <button
              className='operator'
              id='equals'
              onClick={this.equalsFunction}
            >
              =
            </button>
            <button
              className='num'
              id='zero'
              onClick={this.handleClickOnNumbers}
            >
              0
            </button>
            <button
              className='operator'
              id='decimal'
              onClick={this.decimalFunction}
            >
              .
            </button>
          </div>
        </section>
      </div>
    );
  }
}
