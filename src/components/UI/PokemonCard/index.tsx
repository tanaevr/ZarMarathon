import React, { FC } from 'react';
import cn from 'classnames';

import Heading from '../Heading';

import './static/styles.scss';

type TsArrayElem = string;

type TsObjectElem = {
  [n: string]: number;
};

interface IProps {
  // name_clean: string;
  // abilities: TsArrayElem[];
  stats: TsObjectElem;
  types: TsArrayElem[];
  img: string;
  name: string;
  // base_experience: number;
  // height: number;
  // id: number;
  // is_default: boolean;
  // order: number;
  // weight: number;
}

const PokemonCard: FC<IProps> = ({ name, img, stats, types }: IProps) => {
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
