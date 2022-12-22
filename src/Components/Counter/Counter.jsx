import React, { Component } from "react";
import "../Counter/Counter.css";
import PropTypes from "prop-types";
import "../../Bootstrap.css";

class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterAll: 0,
    };
    this.incrementMethod = this.incrementMethod.bind(this);
  }

  incrementMethod(value) {
    // console.log(value)
    this.setState({
      counterAll: this.state.counterAll + value,
    });
  }

  render() {
    return (
      <div className="CounterComponent">
        
          <h2>Counter</h2>
          <Counter value={1} incrementMethod={this.incrementMethod} />
          <Counter value={5} incrementMethod={this.incrementMethod} />
          <Counter value={10} incrementMethod={this.incrementMethod} />
          <span className="count">{this.state.counterAll}</span>
          <br></br>
          <button style={{ backgroundColor: "red" }} className="btn btn-danger reset">Reset</button>
          
        </div>
     
     
    );
  }
}

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
  }

  render() {
    return (
      <div>
        <button className="btn btn-success counter" onClick={this.increment}>+{this.props.value}</button>
        <button className="btn btn-success counter" onClick={this.increment}>-{this.props.value}</button>
        {/*<span className="count">{this.state.counter}</span>*/}
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + this.props.value,
    });
    this.props.incrementMethod(this.props.value);
  }
}

Counter.defaultProps = {
  value: 1,
};

Counter.propTypes = {
  value: PropTypes.number,
};

export default CounterComponent;
