import React, { Component } from 'react';
import Buttons from './Buttons';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState({ counter: this.state.counter + 1 })
  }
  decrement() {
    this.setState({ counter: this.state.counter - 1 })
  }
  render() {
    return (
      <div>
        <h1>🎂  Add Item-{this.state.counter}</h1>
        {this.state.counter ?
          <Buttons increment={this.increment} decrement={this.decrement} /> :
          "Empty Cart now"}
      </div>
    )
  }
}

