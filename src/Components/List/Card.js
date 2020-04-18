import React from 'react';

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      {pokemon.name}
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  );
};

export default Card;
