import React, { FC } from 'react';

// import { useData } from '../../hooks/useData';

import { IPokemonPageProps } from '../../interface';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Pokemon: FC<IPokemonPageProps> = ({ id }) => {
  // const { data, isLoading, isError } = useData<IPokemonsProps>('getPokemons', query, [JSON.stringify(query)]);

  return (
    <>
      <Header />
      <section className="page-content">
        {id}
      </section>
      <Footer />
    </>
  );
};

export default Pokemon;
