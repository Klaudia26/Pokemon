import React from 'react';
import './Card.scss';

const Card = ({ pokemon }) => {
  console.log('pokemon', pokemon);
  return (
    <div className="card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p>
        {pokemon.types.map((type) => {
          return <span key={type.id}>{type.type.name}</span>;
        })}
      </p>
      <span> weight: {pokemon.weight} kg</span>
      <span> height: {pokemon.height} m</span>
      <div className="id-number">#{pokemon.id}</div>
    </div>
  );
};

export default Card;
