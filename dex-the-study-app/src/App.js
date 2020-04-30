import React, {Component} from 'react';
import './App.css';
import NavBar from './Components/NavBar';

class App extends Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar></NavBar>
        </header>
        <div className="App-Body">
          <p>Pretend there is something here.</p>
        </div>
      </div>
    )
  }
}

export default App;