import React, { Component } from 'react';
import * as fetcher from '../../fetcher';
import Card from './Card';
import Stats from './Stats';

class ListElement extends Component {
  state = {
    pokemon: null,
  };
  async componentDidMount() {
    console.log('props', this.props);

    const resPokemon = await fetcher.fetchPokemon(this.props.pokemon.url);
    console.log('object', resPokemon);

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
        <Card pokemon={this.state.pokemon} />
        {/* <Stats /> */}
      </li>
    );
  }
}

export default ListElement;
