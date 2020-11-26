import { useState, useEffect } from 'react';
import req from '../utils/request';

interface UseDataState<T> {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
}

export function useData<T>(endpoint: string, query: object, deps: any[] = []): UseDataState<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);

  const getData = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const result = await req<T>(endpoint, query);

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
}
