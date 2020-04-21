import React from 'react';
import './Stats.scss';

const Stats = ({ pokemon }) => {
  function generateColor(value) {
    const light = '#E25A5A';
    const medium = '#d68b00';
    const high = '#6AA64C';

    let background = '';

    if (value <= 50) {
      background = light;
    } else if (value > 50 && value <= 80) {
      background = medium;
    } else {
      background = high;
    }

    return { background: background, width: value };
  }

  return (
    <div className="stats">
      <ul className="list">
        {pokemon.stats.map((stat) => {
          return (
            <li key={stat.id} className="list__item">
              <span className="stats-name">{stat.stat.name}</span>
              <span className="stats-base">{stat.base_stat}</span>
              <div className="wrapper-chart">
                <div
                  className="stats-chart"
                  style={generateColor(stat.base_stat)}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Stats;
