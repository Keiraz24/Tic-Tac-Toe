import logo from './logo.svg';
import './App.css';

function Square({value}){
  function handleClick() {
    console.log('clicked!');
  }
    return (
      <button
        className="square"
        onClick={handleClick}
      >
        {value}
      </button>
    );

}
  
  

export default function Square() {
return (
  <>
  <div className="board-row">
    <Square value ="1"/>
    <Square value ="2"/>
    <Square value ="3"/>
    {/* <button className="square">1</button>
    <button className="square">2</button>
    <button className="square">3</button> */}
  </div>
  <div className="board-row">
  <Square value ="4"/>
  <Square value ="5"/>
  <Square value ="6"/>
    {/* <button className="square">4</button>
    <button className="square">5</button>
    <button className="square">6</button> */}
  </div>
  <div className="board-row">
  <Square value ="7"/>
  <Square value ="8"/>
  <Square value ="9"/>
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
