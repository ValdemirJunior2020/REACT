import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement,  inputNumber, inputNumberChange } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter count={this.props.count} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} total_click={this.props.total_click}
        onInputNumber={this.props.onInputNumber} onInputNumberChange={this.props.onInputNumberChange} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onReset: () => dispatch(reset()),
    onInputNumber: () => dispatch(inputNumber()),
    onInputNumberChange: (number) => dispatch(inputNumberChange(number))
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      total_click: state.total_click,
      numberInputted: state.numberInputted
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);