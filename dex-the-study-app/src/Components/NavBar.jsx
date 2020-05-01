import React, {Component} from 'react';
import dexv2 from './dexv2.svg';

class NavBar extends Component{
    render(){
        return (
            <React.Fragment>
              <nav className="navbar">
              <img src={dexv2} alt="Owl"></img>
              <ul>
                <li>Search
                </li>
                <li>Browse
                </li>
                <li>Create
                </li>
              </ul>
              </nav>
            </React.Fragment>
          );
    }

}

export default NavBar;