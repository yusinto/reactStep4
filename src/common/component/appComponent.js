import React, {Component} from 'react';
import {Link} from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React Router Demo</h1>
        <span>
          {
            /* Activate or deactivate link depending on current route */
            this.props.location.pathname === '/' || this.props.location.pathname === '/home' ?
              <span>Home</span>: <Link to="/">Home</Link>
          }
        </span> | &nbsp;
        <span>
          {
            this.props.location.pathname === '/contact' ?
              <span>Contact Us</span> : <Link to="/contact">Contact Us</Link>
          }
        </span>
        <div>{this.props.children}</div>
      </div>
    );
  }
}