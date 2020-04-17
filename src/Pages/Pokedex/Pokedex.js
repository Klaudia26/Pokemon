import React, { Component } from 'react';
import * as fetcher from '../../fetcher';

class Pokedex extends Component {
  state = {
    pokedex: [],
  };

  async componentDidMount() {
    const resPokedex = await fetcher.fetchPokedex();

    this.setState({
      pokedex: resPokedex,
    });
  }

  render() {
    return <div>Pokedex</div>;
  }
}

export default Pokedex;
