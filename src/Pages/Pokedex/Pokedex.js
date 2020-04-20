import React, { Component } from 'react';
import * as fetcher from '../../fetcher';
import List from '../../Components/List/List';
import './Pokedex.scss';

class Pokedex extends Component {
  state = {
    pokemons: [],
    abilities: [],
  };

  async componentDidMount() {
    const resPokemons = await fetcher.fetchPokemons();
    const resAbility = await fetcher.fetchAbility();

    this.setState({
      pokemons: resPokemons,
      abilities: resAbility,
    });
  }

  render() {
    return (
      <div className="pokedex page">
        <div className="pokedex__sidebar">
          <ul className="pokedex__list">
            {this.state.abilities.map((ability) => {
              return (
                <li key={ability.name} className="list__item">
                  {ability.name}
                </li>
              );
            })}
          </ul>
        </div>

        <List pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default Pokedex;
