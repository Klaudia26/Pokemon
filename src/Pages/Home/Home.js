import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

class Home extends Component {
  renderCards = () => {
    const cards = [
      { id: 0, title: 'pokedex', color: 'red' },
      { id: 1, title: 'abilities', color: 'yellow' },
      { id: 2, title: 'moves', color: 'olive' },
      { id: 3, title: 'items', color: 'green' },
      { id: 4, title: 'locations', color: 'purple' },
      { id: 5, title: 'type Charts', color: 'brown' },
    ];

    const cardsList = cards.map((card) => {
      return (
        <li key={card.id}>
          <Link to={`/${card.title}`}>{card.title}</Link>
        </li>
      );
    });
    return cardsList;
  };
  render() {
    return (
      <div className="home">
        <h1 className="heading-primary">Welcome in Pokedex</h1>
        <ul className="home__list">{this.renderCards()}</ul>
      </div>
    );
  }
}

export default Home;
