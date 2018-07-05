import React, { Component } from 'react';
import './Card.css';
import { Link } from 'react-router-dom'
import data from '../data/cards';


class Welcome extends Component {
  render() {
    return (
      <div className="Card">
        <div className='CardBody'>
          <img src={data.welcomeData.image} alt=' '/>
          <h1>{data.welcomeData.title}</h1>
          <p></p>
        </div>
        <div className='cardNavbar'>
          <div className='spacer'></div>
          <div className='cardNavbarLinkBox'>
            <Link to="/card/1" className='link startLink'>Start</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
