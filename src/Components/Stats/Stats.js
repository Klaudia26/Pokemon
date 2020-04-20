import React from 'react';
import './Stats.scss';

const Stats = ({ pokemon }) => {
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
                  style={{
                    backgroundColor:
                      stat.base_stat <= 50
                        ? '#E25A5A'
                        : '#d68b00' || stat.base_stat >= 90
                        ? '#6AA64C'
                        : '#E15454',
                    width: stat.base_stat,
                  }}
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
