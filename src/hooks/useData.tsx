import { useState, useEffect } from 'react';
import req from '../utils/request';

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
  name?: string;
}

const useData = (endpoint: string, query: IQuery, deps: any[] = []) => {
  const [data, setData] = useState<IResult>({
    total: 0,
    count: 0,
    offset: 0,
    pokemons: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const result = await req(endpoint, query);

      setData(result);
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, deps);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
