import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Square({value, onSquareClick}){
 return <button className="square" onClick={onSquareClick}>{value}</button>
  
}
  
  

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

return (
  <>
  <div className="board-row">
    <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
    <Square value={squares[1]}  onSquareClick={() => handleClick(1)}/>
    <Square value={squares[2]}  onSquareClick={() => handleClick(2)}/>
    {/* <button className="square">1</button>
    <button className="square">2</button>
    <button className="square">3</button> */}
  </div>
  <div className="board-row">
  <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
  <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
  <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
    {/* <button className="square">4</button>
    <button className="square">5</button>
    <button className="square">6</button> */}
  </div>
  <div className="board-row">
  <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
  <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
  <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
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
