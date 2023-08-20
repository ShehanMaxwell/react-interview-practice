import React from 'react';

class VirtualDOMEXplanation extends React.Component {
  constructor() {
    super();
    // Initialize state

    this.state = {
      count: 0,
    };
  }
  // Event handler to update the state
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Virtual DOM Example</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default VirtualDOMEXplanation;
