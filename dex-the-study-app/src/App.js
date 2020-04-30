import React from 'react';
import dexv2 from './dexv2.svg';
import './App.css';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dexv2} className="App-logo" alt="logo" />
        <NavBar></NavBar>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
