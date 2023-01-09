import React, { useState } from 'react';
import A from './component/A';
import B from './component/B';

function App() {
  const [stateA, setStateA] = useState(0);
  const [stateB, setStateB] = useState(0);

  function increaseA() {
    setStateA(stateA + 1);
  }

  function decreaseA() {
    setStateA(stateA - 1);
  }

  function increaseB() {
    setStateB(stateB + 1);
  }

  function decreaseB() {
    setStateB(stateB - 1);
  }

  return (
    <div>
      <A stateA={stateA} stateB={stateB} increaseA={increaseA} increaseB={increaseB} />
      <B stateA={stateA} stateB={stateB} decreaseA={decreaseA} decreaseB={decreaseB} />
    </div>
  );
}

export default App;


















// // import Navbar from './component/navbar';
// // import logo from './logo.svg';
// import './App.css';
// import Contant from './component/contant';
// import Alert from './component/alert';

// function App() {
//   return (
//     <div>
//       <Navbar/>
//       <Contant/>
//       <Alert/>
//     </div>

//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

// export default App;
