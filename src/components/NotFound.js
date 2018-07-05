import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class NotFound extends Component {
  render() {
    return (
      <div>
        page not found !!!! 
        <Link to="/">Start</Link>
      </div>
    );
  }
}

export default NotFound;
