import React from 'react';

const Counter = ({ count, onDecrement, onIncrement, total_click, onInputNumberChange, numberInputted, onInputNumber }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <span>Times the increment/decrement was clicked:{total_click}</span>
          <br />
          <input type='text' onChange={event => onInputNumberChange(event.target.value)} value={numberInputted} />
          <button onClick={onInputNumber}>Change Count</button>
        </div>
      </div>
    );
}


export default Counter;