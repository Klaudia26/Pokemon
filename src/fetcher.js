import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2/';

export const fetchPokedex = async () => {
  const pokemons = [];

  const url = `${baseUrl}pokemon`;
  const response = await axios.get(url);
  console.log('eee', response.data.results);

  response.data.results.forEach(async (pokemon) => {
    const singlePokemon = await axios.get(pokemon.url);
    pokemons.push(singlePokemon);
  });
  console.log('pokemon', pokemons);
  return pokemons;
};
