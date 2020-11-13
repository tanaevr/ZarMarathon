import { useState, useEffect } from 'react';

import { URL_API } from '../constants/api';

interface IResult {
  total: number;
  count: number;
  offset: number;
  pokemons: any[];
}

interface IQuery {
  limit?: number;
  count?: number;
  offset?: number;
}

export const usePokemons = (query: IQuery) => {
  const [data, setData] = useState<IResult>({
    total: 0,
    count: 0,
    offset: 0,
    pokemons: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);

  const getPokemons = async () => {
    setIsLoading(true);
    try {
      const urlSearchParams = Object.keys(query).map((key) => {
        return `${key}=${query[key]}`;
      });

      const response = await fetch(`${URL_API}pokemons${!!urlSearchParams && `?${urlSearchParams}`}`);
      const result = await response.json();

      setData(result);
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};
