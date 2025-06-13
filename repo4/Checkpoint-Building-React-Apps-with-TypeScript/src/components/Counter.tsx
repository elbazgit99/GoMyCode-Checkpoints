import React, { Component } from 'react';

// Step 1: Define an interface for the component's props.
interface CounterProps {}

// Step 2: Define an interface for the component's state.
interface CounterState {
  count: number;
}

// Step 3: Implement the class component, applying the defined interfaces.
class Counter extends Component<CounterProps, CounterState> {
  // Step 4: Initialize the state with the specified type.
  state: CounterState = {
    count: 0
  };

  // Step 5: Type the 'increment' method if it has parameters (optional here, but good practice).
  increment = (): void => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;


