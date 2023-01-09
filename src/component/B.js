import React from 'react';

function B(props) {
  return (
    <div> 
      <p>A: {props.stateA}</p>
      <p>B: {props.stateB}</p>
      <button onClick={props.decreaseA}>Decrease A</button>
      <button onClick={props.decreaseB}>Decrease B</button>
    </div>
  );
}

export default B;
