import React, { Component } from 'react';
import * as fetcher from '../../fetcher';
import Card from '../Card/Card';
import Stats from '../Stats/Stats';

class ListElement extends Component {
  state = {
    pokemon: null,
  };
  async componentDidMount() {
    const resPokemon = await fetcher.fetchPokemon(this.props.pokemon.url);

    this.setState({
      pokemon: resPokemon,
    });
  }
  render() {
    if (!this.state.pokemon) {
      return <h1>loading...</h1>;
    }
    return (
      <li className="list-element">
        <div className="list-element--left">
          <Card pokemon={this.state.pokemon} />
        </div>
        <div className="list-element--right">
          <Stats pokemon={this.state.pokemon} />
        </div>
      </li>
    );
  }
}

export default ListElement;
