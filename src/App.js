import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Square(){
 return <button className="square">{value}</button>
  
}
  
  

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
return (
  <>
  <div className="board-row">
    <Square value={squares[0]}/>
    <Square value={squares[1]}/>
    <Square value={squares[2]}/>
    {/* <button className="square">1</button>
    <button className="square">2</button>
    <button className="square">3</button> */}
  </div>
  <div className="board-row">
  <Square value={squares[3]}/>
  <Square value={squares[4]}/>
  <Square value={squares[5]}/>
    {/* <button className="square">4</button>
    <button className="square">5</button>
    <button className="square">6</button> */}
  </div>
  <div className="board-row">
  <Square value={squares[6]}/>
  <Square />
  <Square />
    {/* <button className="square">7</button>
    <button className="square">8</button>
    <button className="square">9</button> */}
  </div>
    
  
  </>
  );
   
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Tic Tac Toe Time!!!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
