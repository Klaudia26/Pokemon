import React, { Component } from 'react';
import ListElement from './ListElement';
import './List.scss';

class List extends Component {
  render() {
    return (
      <ul className="list">
        {this.props.pokemons.map((pokemon) => {
          return <ListElement pokemon={pokemon} key={pokemon.name} />;
        })}
      </ul>
    );
  }
}

export default List;
