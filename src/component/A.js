import React from 'react';

function A(props) {
  return (
    <div>
      <p>A: {props.stateA}</p>
      <p>B: {props.stateB}</p>
      <button onClick={props.increaseA}>Increase A</button>
      <button onClick={props.increaseB}>Increase B</button>
    </div>
  );
}

export default A;
