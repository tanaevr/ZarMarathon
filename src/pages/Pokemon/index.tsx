import React, { FC } from 'react';

import { useData } from '../../hooks/useData';

import { IPokemonPageProps, IPokemonProps } from '../../interface';

import toCapitalizeFirstLetter from '../../utils/toCapitalizeFirstLetter';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Pokemon: FC<IPokemonPageProps> = ({ id }) => {
  const { data, isLoading } = useData<IPokemonProps>('getPokemon', { id });

  return (
    <>
      <Header />
      <section className="page-content">
        {isLoading ? (
          <div>isLoading</div>
        ) : (
          <>
            <div>{data?.name}</div>
            <div>{toCapitalizeFirstLetter(data?.name)}</div>
          </>
        )}
        
      </section>
      <Footer />
    </>
  );
};

export default Pokemon;
