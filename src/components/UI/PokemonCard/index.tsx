import React, { FC } from 'react';
import cn from 'classnames';

import Heading from '../Heading';

import { IPokemonProps, TsArrayElem, TsObjectElem } from '../../../pages/Pokedex';

import './static/styles.scss';

const PokemonCard: FC<IPokemonProps> = ({ name, img, stats, types }: IPokemonProps) => {
  const getStats = (arr: TsObjectElem, keys: TsArrayElem[]) => {
    return (
      <>
        {keys.map((item) => {
          return (
            <div className="pokemon-card__stats__item">
              <div className="pokemon-card__stats__item__value">{arr[item]}</div>
              {item}
            </div>
          );
        })}
      </>
    );
  };

  const getTypes = (arr: TsArrayElem[]) => {
    return arr.map((type) => (
      <div className={cn('pokemon-card__types__item', { [`pokemon-card__types__item--${type}`]: type })}>{type}</div>
    ));
  };

  const getBackground = (arr: TsArrayElem[]) => {
    const colors = {
      grass: '#70a83b',
      poison: '#a974bc',
      fire: '#f76545',
      flying: '#76aadb',
      water: '#76aadb',
      ice: '#76aadb',
      bug: '#70a83b',
    };

    const colorFirst = colors[arr[0]];
    const colorSecond = arr[1] ? colors[arr[1]] : colorFirst;

    return {
      background: `linear-gradient(270deg, ${colorSecond} .15%, ${colorFirst} 100%)`,
    };
  };

  return (
    <div className="pokemon-card">
      <div className="pokemon-card__info">
        <Heading component="h5" className="pokemon-card__name">
          {name}
        </Heading>
        <div className="pokemon-card__stats">{getStats(stats, ['attack', 'defense'])}</div>
        <div className="pokemon-card__types">{getTypes(types)}</div>
      </div>

      <div className="pokemon-card__img" style={getBackground(types)}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
