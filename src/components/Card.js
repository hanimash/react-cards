import React, { Component } from 'react';
import './Card.css';
import { Link, NavLink } from 'react-router-dom'
import data from '../data/cards';

// Components

import CardBody from './CardBody';

class Card extends Component {
  
  render() {
    const index=this.props.match.params.id*1;
    const nextPage= index===data.cardsData.length ? '/' : `/card/${index+1}`;
    const btnValue= nextPage==='/'? 'skip': 'next';
    const cardsData=data.cardsData || {};
    return (
      <div className="Card">
        <CardBody data={cardsData[index-1]} />
        <div className='cardNavbar'>
          <div className='cardNavbarPoints'>
            {cardsData.map((c,i)=>{
              return <NavLink key={i} to={'/card/'+(i+1)} className='point' activeClassName='orange'></NavLink>
            })}
          </div>
          <div className='cardNavbarLinkBox'>
            <Link to={nextPage} className='link'>{btnValue}</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;