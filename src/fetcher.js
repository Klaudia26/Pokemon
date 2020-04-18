import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2';

export const fetchPokemon = async (url) => {
  const response = await axios.get(url);

  return response.data;
};

export const fetchPokemons = async () => {
  const url = `${baseUrl}/pokemon`;
  const response = await axios.get(url);

  return response.data.results;
};

export const fetchAbility = async () => {
  const url = `${baseUrl}/ability`;
  const response = await axios.get(url);

  return response.data.results;
};
