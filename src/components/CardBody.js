import React, { Component } from 'react';
import './CardBody.css';

class CardBody extends Component {
  render() {
    const card=this.props.data;
    return (
      <div className="CardBody">
        <img src={card.image} alt=' '/>
        <h1>{card.title}</h1>
        <p>{card.desc}</p>
      </div>
    );
  }
}

export default CardBody;
