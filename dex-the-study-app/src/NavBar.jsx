import React, {Component} from 'react';

class NavBar extends Component{
    render(){
        return (
            <React.Fragment>
              <nav className="navbar">
                <a className="navbar-icon" href="#">
                  <h1>Total Items <span className="badge">{this.props.totalItems}</span></h1>
                </a>
              </nav>
            </React.Fragment>
          );
    }

}

export default NavBar;