import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pokedex from './Pages/Pokedex/Pokedex';
import Home from './Pages/Home/Home';
import PokemonPage from './Pages/PokemonPage/PokemonPage';
import Abilities from './Pages/Abilities/Abilities';
import Items from './Pages/Items/Items';
import Locations from './Pages/Locations/Locations';
import Moves from './Pages/Moves/Moves';
import Charts from './Pages/Charts/Charts';
import './GlobalStyles.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokedex" component={Pokedex} />
        <Route path="/pokedex/:pokemonName" component={PokemonPage} />
        <Route path="/abilities" component={Abilities} />
        <Route path="/items" component={Items} />
        <Route path="/locations" component={Locations} />
        <Route path="/moves" component={Moves} />
        <Route path="/charts" component={Charts} />
      </Router>
    );
  }
}

export default App;
